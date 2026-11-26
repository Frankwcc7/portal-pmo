/* Portal PMO · Acceso temporal para la etapa de revisión.
   Para retirar el login: borrar este archivo, css/acceso.css y sus dos líneas en el <head> de index.html.
   Las credenciales no están en el código: solo se guarda una huella (PBKDF2-SHA256) que no se puede revertir. */
(function () {
  'use strict';
  var CLAVE_SESION = 'pmo-acceso-revision';
  var SAL = 'p1GqEchKbv2VZIWDq7w1Dw==';
  var HUELLA = '0eeafb24df055412a6137cfdeef609c1912772bd332039c9345b13fc0f8b7ef7';
  var ITERACIONES = 210000;
  var raiz = document.documentElement;

  try { if (sessionStorage.getItem(CLAVE_SESION) === HUELLA) return; } catch (e) { /* sin almacenamiento: se pide login */ }
  raiz.classList.add('pmo-bloqueado');

  var aBytes = function (b64) { return Uint8Array.from(atob(b64), function (c) { return c.charCodeAt(0); }); };
  var aHex = function (buf) { return Array.from(new Uint8Array(buf), function (b) { return b.toString(16).padStart(2, '0'); }).join(''); };

  function huellaDe(usuario, clave) {
    var datos = new TextEncoder().encode(usuario + ':' + clave);
    return crypto.subtle.importKey('raw', datos, 'PBKDF2', false, ['deriveBits'])
      .then(function (llave) {
        return crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: aBytes(SAL), iterations: ITERACIONES }, llave, 256);
      })
      .then(aHex);
  }

  var PLANTILLA =
    '<div class="login-tarjeta">' +
      '<div class="login-visual" aria-hidden="true">' +
        '<div class="login-visual-texto">' +
          '<span class="login-chip">Oficina de Gestión de Proyectos</span>' +
          '<strong>Portal PMO</strong>' +
          '<span class="login-linea"></span>' +
          '<em>Conectamos estrategia, generando valor</em>' +
        '</div>' +
      '</div>' +
      '<form class="login-form" novalidate>' +
        '<div class="login-logos">' +
          '<img src="assets/img/logo-electroperu.jpg" width="278" height="151" alt="ELECTROPERU">' +
          '<span class="login-separador" aria-hidden="true"></span>' +
          '<img src="assets/img/logo-pmo.jpg" width="232" height="151" alt="PMO ELECTROPERU">' +
        '</div>' +
        '<h1 id="loginTitulo">Bienvenido</h1>' +
        '<p class="login-sub">Ingresa tus credenciales para revisar el Portal PMO.</p>' +
        '<label for="loginUsuario">Usuario</label>' +
        '<div class="login-campo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-8 9a8 8 0 0 1 16 0"/></svg>' +
          '<input id="loginUsuario" name="usuario" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="Tu usuario"></div>' +
        '<label for="loginClave">Contraseña</label>' +
        '<div class="login-campo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10.5h12v10H6zM8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"/></svg>' +
          '<input id="loginClave" name="clave" type="password" autocomplete="current-password" required placeholder="Tu contraseña">' +
          '<button type="button" class="login-ojo" aria-label="Mostrar contraseña" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/></svg></button></div>' +
        '<p class="login-error" role="alert" hidden></p>' +
        '<button type="submit" class="login-boton"><span>Ingresar</span></button>' +
        '<p class="login-nota">Acceso temporal para revisión · ELECTROPERU</p>' +
      '</form>' +
    '</div>';

  function montar() {
    var capa = document.createElement('div');
    capa.id = 'pmoLogin';
    capa.className = 'login';
    capa.setAttribute('role', 'dialog');
    capa.setAttribute('aria-modal', 'true');
    capa.setAttribute('aria-labelledby', 'loginTitulo');
    capa.innerHTML = PLANTILLA;
    document.body.prepend(capa);

    var form = capa.querySelector('form');
    var usuario = capa.querySelector('#loginUsuario');
    var clave = capa.querySelector('#loginClave');
    var error = capa.querySelector('.login-error');
    var boton = capa.querySelector('.login-boton');
    var ojo = capa.querySelector('.login-ojo');
    var fallos = 0;
    var esperaHasta = 0;

    ojo.addEventListener('click', function () {
      var ver = clave.type === 'password';
      clave.type = ver ? 'text' : 'password';
      ojo.setAttribute('aria-pressed', String(ver));
      ojo.setAttribute('aria-label', ver ? 'Ocultar contraseña' : 'Mostrar contraseña');
      clave.focus();
    });

    var mostrarError = function (texto) {
      error.textContent = texto;
      error.hidden = false;
      form.classList.remove('login-sacudir');
      void form.offsetWidth;
      form.classList.add('login-sacudir');
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      error.hidden = true;
      if (Date.now() < esperaHasta) {
        mostrarError('Demasiados intentos. Espera unos segundos e inténtalo de nuevo.');
        return;
      }
      if (!usuario.value || !clave.value) {
        mostrarError('Ingresa tu usuario y contraseña.');
        return;
      }
      if (!window.crypto || !crypto.subtle) {
        mostrarError('Este navegador no permite validar el acceso. Abre la página con https en Chrome o Edge.');
        return;
      }
      boton.disabled = true;
      boton.classList.add('is-cargando');
      huellaDe(usuario.value.trim(), clave.value).then(function (huella) {
        if (huella === HUELLA) {
          try { sessionStorage.setItem(CLAVE_SESION, HUELLA); } catch (err) { /* continúa igual */ }
          capa.classList.add('login-saliendo');
          raiz.classList.remove('pmo-bloqueado');
          window.dispatchEvent(new Event('resize'));
          setTimeout(function () { capa.remove(); window.dispatchEvent(new Event('resize')); }, 450);
          return;
        }
        fallos += 1;
        if (fallos >= 5) { esperaHasta = Date.now() + 30000; fallos = 0; }
        clave.value = '';
        clave.focus();
        mostrarError('Usuario o contraseña incorrectos.');
      }).catch(function () {
        mostrarError('No se pudo validar el acceso. Recarga la página e inténtalo otra vez.');
      }).then(function () {
        boton.disabled = false;
        boton.classList.remove('is-cargando');
      });
    });

    usuario.focus();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
