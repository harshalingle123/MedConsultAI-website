# /security - Security Scan

Quick security scan of the codebase.

## Usage
```
/security [path]
```

## Checks

### 1. Hardcoded Secrets
- API keys in source code
- Passwords in config files
- Private keys committed

### 2. SQL Injection
- Raw SQL with string concatenation
- Unsanitized user input in queries

### 3. XSS Vulnerabilities
- Unescaped HTML output
- innerHTML with user data
- dangerouslySetInnerHTML usage

### 4. Dependency Vulnerabilities
```bash
# Python
pip-audit

# Node
npm audit
```

### 5. Configuration Issues
- Debug mode enabled
- Weak CORS settings
- Missing security headers

## Output
```
[CRITICAL] Hardcoded API key in config.py:42
[HIGH] SQL injection risk in queries.py:15
[MEDIUM] Missing CSRF protection
[LOW] Debug mode enabled
```

## Severity Levels
- CRITICAL: Immediate fix required
- HIGH: Fix before deployment
- MEDIUM: Should be addressed
- LOW: Best practice improvement
