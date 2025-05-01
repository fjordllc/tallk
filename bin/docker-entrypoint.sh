#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails
rm -f /rails/tmp/pids/server.pid

# Ensure storage directory exists and has correct permissions
mkdir -p /rails/storage
mkdir -p /rails/tmp/pids

# If running the rails server, wait for the database to be ready
if [ "${1}" == "./bin/rails" ] && [ "${2}" == "server" ]; then
  # Wait for database to be ready
  echo "Waiting for database to be ready..."
  bin/rails db:prepare
fi

# Execute the given or default command
exec "$@"
