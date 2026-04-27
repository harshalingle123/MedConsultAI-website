# /deps - Dependency Management

Check and update project dependencies.

## Usage
```
/deps [check|update|audit]
```

## Commands

### Check Outdated
```bash
# Python
pip list --outdated

# Node
npm outdated
```

### Update Dependencies
```bash
# Python
pip install --upgrade <package>
pip freeze > requirements.txt

# Node
npm update
npm install <package>@latest
```

### Security Audit
```bash
# Python
pip-audit
safety check

# Node
npm audit
npm audit fix
```

## Output
- List of outdated packages with current/latest versions
- Security vulnerabilities found
- Suggested updates with breaking change warnings
