#!/bin/sh

pnpm payload migrate:status || echo "No pending migrations found."
pnpm payload migrate:create || echo "Creating migrations to apply."

-y 