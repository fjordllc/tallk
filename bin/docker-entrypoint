#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails
rm -f /rails/tmp/pids/server.pid

# Ensure storage directory exists and has correct permissions
mkdir -p /rails/storage
mkdir -p /rails/tmp/pids
mkdir -p /rails/db

# Make sure the db directory is writable
chmod -R 777 /rails/db

# If running the rails server, wait for the database to be ready
if [ "${1}" == "./bin/rails" ] && [ "${2}" == "server" ]; then
  # Wait for database to be ready
  echo "Waiting for database to be ready..."
  # Try to create database files if they don't exist
  if [ ! -f /rails/storage/production.sqlite3 ]; then
    echo "Creating empty database files..."
    touch /rails/db/production.sqlite3
    touch /rails/db/production_cache.sqlite3
    touch /rails/db/production_queue.sqlite3
    touch /rails/db/production_cable.sqlite3
    chmod 666 /rails/db/*.sqlite3
  fi
  bin/rails db:prepare
fi

# Execute the given or default command
exec "$@"
