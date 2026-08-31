# 503 Maintenance Mode

This project includes a toggleable **503 Maintenance Mode** interceptor driven by the `NEXT_PUBLIC_MAINTENANCE_MODE` environment variable.

Existing application logic, routes, and components were kept intact. A single script tag was added at the top of `index.html` so the toggle also works on static hosting. No salon markup, styles, or booking logic were rewritten.

**Current toggle state: ON** (`NEXT_PUBLIC_MAINTENANCE_MODE=true`).

## How it works

1. Top-level middleware (`middleware.js`) reads `NEXT_PUBLIC_MAINTENANCE_MODE`.
2. A client interceptor (`maintenance-toggle.js`) uses the same `true` / `false` switch so the 503 screen appears even when Edge middleware is not running.
3. If the value is exactly `true`, visitors are shown the generic **503 Service Unavailable** screen (`maintenance.html`). Middleware also returns HTTP 503 when it is active.
4. If the value is `false` or undefined, the application is served normally.

The 503 copy is:

> The server is temporarily down for maintenance. Please try again later.

## Enabling / disabling

The toggle is currently **on**. To change it, update **both** of these to the same value:

1. `.env` → `NEXT_PUBLIC_MAINTENANCE_MODE=true` or `false`
2. `maintenance-toggle.js` → `var NEXT_PUBLIC_MAINTENANCE_MODE = "true";` or `"false"`

```bash
# Enable maintenance mode (current)
NEXT_PUBLIC_MAINTENANCE_MODE=true

# Disable maintenance mode (normal operation)
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

Leaving the variable unset is the same as `false` for middleware. The client interceptor only activates on the exact string `"true"`.

If you use hosted env vars, set `NEXT_PUBLIC_MAINTENANCE_MODE=true` there as well, then redeploy.

## Files added or modified during this setup

### Added

- `middleware.js` — top-level interceptor; returns 503 when `NEXT_PUBLIC_MAINTENANCE_MODE=true`
- `maintenance.html` — generic 503 Service Unavailable screen
- `maintenance-toggle.js` — client interceptor; currently set to `"true"`
- `.env` — `NEXT_PUBLIC_MAINTENANCE_MODE=true`
- `.env.example` — documents the `NEXT_PUBLIC_MAINTENANCE_MODE` toggle
- `MAINTENANCE.md` — this reference file

### Modified

- `index.html` — added one line in `<head>`: `<script src="./maintenance-toggle.js"></script>`. No other application markup or logic was changed.

### Original `index.html` snippet (for revert)

The first lines of `<head>` were:

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Unick_Robins-Salon</title>
```

After this setup they are:

```html
  <head>
    <script src="./maintenance-toggle.js"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Unick_Robins-Salon</title>
```

## /undo-maintenance-mode Instructions

When the user sends /undo-maintenance-mode or asks to remove the maintenance setup, read this file, remove the newly created maintenance components/middleware, revert all modified files back to their exact original state prior to maintenance mode integration, and delete MAINTENANCE.md.

## How to use the /undo trigger later

Whenever you want to completely erase the maintenance feature from your repository, just send this short command to your AI assistant:

```
/undo-maintenance-mode
```

Please read MAINTENANCE.md, revert all files back to their initial state before the 503 error changes were made, and remove the maintenance configuration.

Concretely, that means:

1. Delete `middleware.js`
2. Delete `maintenance.html`
3. Delete `maintenance-toggle.js`
4. Delete `.env` (only if it was added for this setup)
5. Delete `.env.example` (only if it was added for this setup)
6. Revert `index.html` by removing `<script src="./maintenance-toggle.js"></script>` from `<head>` so it matches the original snippet above
7. Delete `MAINTENANCE.md`
