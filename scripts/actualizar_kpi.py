"""Descarga Data_madre.xlsx desde SharePoint y genera kpi.json para el portal PMO.

- Proyectos   = filas con contador = 0
- Iniciativas = filas con contador = 1

Requiere que el enlace del Excel sea de "Cualquier persona con el vínculo".
El enlace se toma del secreto EXCEL_URL (GitHub Actions) o de la variable de entorno.
"""
import io
import json
import os
import sys
import urllib.request
from datetime import datetime, timezone

from openpyxl import load_workbook

EXCEL_URL = os.environ.get("EXCEL_URL", "").strip()
COLUMNA = os.environ.get("COLUMNA_CONTADOR", "contador").strip().lower()
HOJA = os.environ.get("HOJA", "").strip()  # vacío = buscar en todas las hojas
SALIDA = os.environ.get("SALIDA", "kpi.json")


def url_descarga(url: str) -> str:
    if "download=1" in url:
        return url
    return url + ("&" if "?" in url else "?") + "download=1"


def descargar(url: str) -> bytes:
    req = urllib.request.Request(url_descarga(url), headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        datos = r.read()
    if not datos.startswith(b"PK"):
        sys.exit(
            "No se descargó un .xlsx (probablemente pidió iniciar sesión). "
            "Revisa que el enlace sea de 'Cualquier persona con el vínculo'."
        )
    return datos


def contar(datos: bytes) -> tuple[int, int]:
    wb = load_workbook(io.BytesIO(datos), data_only=True, read_only=True)
    hojas = [wb[HOJA]] if HOJA else wb.worksheets
    for ws in hojas:
        filas = ws.iter_rows(values_only=True)
        for fila in filas:  # busca la fila de encabezados que contiene "contador"
            nombres = [str(c).strip().lower() if c is not None else "" for c in fila]
            if COLUMNA in nombres:
                idx = nombres.index(COLUMNA)
                proyectos = iniciativas = 0
                for f in filas:
                    v = f[idx] if idx < len(f) else None
                    try:
                        v = int(float(v))
                    except (TypeError, ValueError):
                        continue
                    if v == 0:
                        proyectos += 1
                    elif v == 1:
                        iniciativas += 1
                print(f"Hoja '{ws.title}': {proyectos} proyectos, {iniciativas} iniciativas")
                return proyectos, iniciativas
    sys.exit(f"No encontré la columna '{COLUMNA}' en el Excel.")


def main() -> None:
    if not EXCEL_URL:
        sys.exit("Falta EXCEL_URL.")
    proyectos, iniciativas = contar(descargar(EXCEL_URL))
    salida = {
        "projectCount": proyectos,
        "initiativeCount": iniciativas,
        "updatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    }
    with open(SALIDA, "w", encoding="utf-8") as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)
    print(json.dumps(salida, ensure_ascii=False))


if __name__ == "__main__":
    main()
