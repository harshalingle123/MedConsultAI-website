# /lint - Run Linters and Formatters

Run linters and formatters on project files.

## Usage
```
/lint [path] [--fix]
```

## Behavior
1. Detect project type (Python/Node)
2. Run appropriate linters
3. Auto-fix issues when possible
4. Report remaining issues

## Commands

### Python
```bash
# Lint
ruff check .

# Lint with auto-fix
ruff check --fix .

# Format
black .

# Type check
mypy .
```

### TypeScript/JavaScript
```bash
# Lint
npx eslint .

# Lint with auto-fix
npx eslint --fix .

# Format
npx prettier --write .

# Type check
npx tsc --noEmit
```

## Output
- List of issues with file:line references
- Auto-fixed issues summary
- Remaining issues requiring manual fix
