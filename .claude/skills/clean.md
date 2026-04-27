# /clean - Clean Build Artifacts

Remove build artifacts, caches, and temporary files.

## Usage
```
/clean [--all]
```

## Python
```bash
# Remove cache directories
find . -type d -name "__pycache__" -exec rm -rf {} +
find . -type d -name ".pytest_cache" -exec rm -rf {} +
find . -type d -name ".ruff_cache" -exec rm -rf {} +
find . -type d -name ".mypy_cache" -exec rm -rf {} +
find . -type d -name "*.egg-info" -exec rm -rf {} +

# Remove compiled files
find . -type f -name "*.pyc" -delete
find . -type f -name "*.pyo" -delete

# Remove coverage
rm -rf .coverage htmlcov/
```

## Node
```bash
# Remove build outputs
rm -rf dist/ build/ .next/ .nuxt/

# Remove cache
rm -rf node_modules/.cache/
rm -rf .eslintcache
rm -rf .parcel-cache/

# Remove dependencies (careful!)
# rm -rf node_modules/
```

## General
```bash
# Remove logs
rm -rf logs/ *.log

# Remove temp files
rm -rf tmp/ temp/ .tmp/

# Remove IDE files
rm -rf .idea/ .vscode/
```

## Disk Space Recovered
Shows total space freed after cleanup.
