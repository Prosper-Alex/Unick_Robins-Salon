/**
 * Top-level 503 Maintenance Mode interceptor.
 *
 * Driven by NEXT_PUBLIC_MAINTENANCE_MODE:
 *   - "true"      → every request receives a 503 Service Unavailable page
 *   - "false"/unset → the application is served normally
 *
 * Existing routes, markup, and scripts are not modified.
 */

const MAINTENANCE_ENABLED =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export const config = {
  matcher: ["/((?!maintenance\\.html$).*)"],
};

export default async function middleware(request) {
  if (!MAINTENANCE_ENABLED) {
    return;
  }

  const maintenanceUrl = new URL("/maintenance.html", request.url);
  let html;

  try {
    const res = await fetch(maintenanceUrl);
    html = await res.text();
  } catch {
    html = fallbackMaintenanceHtml();
  }

  return new Response(html, {
    status: 503,
    statusText: "Service Unavailable",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Retry-After": "3600",
    },
  });
}

function fallbackMaintenanceHtml() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>503 Service Unavailable</title>
  </head>
  <body>
    <h1>503 Service Unavailable</h1>
    <p>The server is temporarily down for maintenance. Please try again later.</p>
  </body>
</html>`;
}
