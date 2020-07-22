#!/bin/bash
cd -- "$(dirname -- "$0")"
../bin/node server.js 2>&1
exit 0
