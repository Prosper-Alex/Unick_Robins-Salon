/**
 * Client-side 503 Maintenance Mode interceptor.
 * Mirrors NEXT_PUBLIC_MAINTENANCE_MODE so the 503 screen shows on
 * static hosting (and local file opens) where Edge middleware may not run.
 *
 * Set to "true" to show the maintenance screen.
 * Set to "false" to serve the application normally.
 */
(function () {
  var NEXT_PUBLIC_MAINTENANCE_MODE = "true";

  if (NEXT_PUBLIC_MAINTENANCE_MODE !== "true") {
    return;
  }

  var path = (window.location.pathname || "").replace(/\\/g, "/");
  if (path.indexOf("maintenance.html") !== -1) {
    return;
  }

  window.location.replace(new URL("maintenance.html", window.location.href).href);
})();
