#!/bin/bash

# path
app_path="Dockerfile"

# app
sed -i "s|{{ VITE_API_BASE_URL }}|$VITE_API_BASE_URL|g" $app_path
sed -i "s|{{ VITE_API_ACCESS_KEY }}|$VITE_API_ACCESS_KEY|g" $app_path