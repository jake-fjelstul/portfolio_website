#!/bin/bash

# Script to run the Django portfolio website with one command

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Function to check if venv Python executable works
check_venv_python() {
    local venv_path=$1
    if [ -f "$venv_path/bin/python" ] && "$venv_path/bin/python" -c "import sys" 2>/dev/null; then
        # Also check that pip works (it might point to wrong Python path)
        if [ -f "$venv_path/bin/pip" ] && "$venv_path/bin/pip" --version >/dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Check if virtual environment exists and is valid
if [ -d "venv" ]; then
    echo "Checking virtual environment..."
    if check_venv_python "venv"; then
        source venv/bin/activate
        echo "Virtual environment activated."
    else
        echo "Virtual environment is broken. Recreating..."
        rm -rf venv
        python3 -m venv venv
        source venv/bin/activate
    fi
elif [ -d ".venv" ]; then
    if check_venv_python ".venv"; then
        source .venv/bin/activate
        echo "Virtual environment activated."
    else
        echo "Virtual environment is broken. Recreating..."
        rm -rf .venv
        python3 -m venv .venv
        source .venv/bin/activate
    fi
else
    echo "No virtual environment found. Creating one..."
    python3 -m venv venv
    source venv/bin/activate
fi

# Set commands (should work after activation, but fallback to system if needed)
PYTHON_CMD=python
PIP_CMD=pip
if ! command -v $PYTHON_CMD >/dev/null 2>&1; then
    echo "Warning: Using system Python as fallback."
    PYTHON_CMD=python3
    PIP_CMD=pip3
fi

# Install/upgrade dependencies
echo "Ensuring dependencies are installed..."
if [ -f "requirements.txt" ]; then
    $PIP_CMD install -r requirements.txt
else
    echo "No requirements.txt found. Installing basic dependencies..."
    $PIP_CMD install django whitenoise pillow
fi

# Run migrations
echo "Running database migrations..."
$PYTHON_CMD manage.py migrate --noinput

# Collect static files (optional, but ensures everything is ready)
echo "Collecting static files..."
$PYTHON_CMD manage.py collectstatic --noinput

# Start the development server
echo "Starting Django development server..."
echo "Visit http://127.0.0.1:8000/ in your browser"
echo "Press Ctrl+C to stop the server"
$PYTHON_CMD manage.py runserver

