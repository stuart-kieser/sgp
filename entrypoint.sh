#!/bin/sh

echo "Waiting for Postgres to be ready..."

# Wait for Postgres to be available
until nc -z postgres 5432; do
  echo "Postgres is unavailable - sleeping"
  sleep 2
done

echo "Postgres is up - building the app"
sleep 2
echo "Starting production server"
npm run start
