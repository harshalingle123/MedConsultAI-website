# /env - Environment Configuration

Check and validate environment configuration.

## Usage
```
/env [check|list|set]
```

## Checks

### 1. File Existence
```bash
# Check for .env file
ls -la .env .env.local .env.production
```

### 2. Required Variables
Compare against `.env.example` or documentation.

### 3. Value Validation
- API keys: Non-empty, correct format
- URLs: Valid format, reachable
- Ports: Numeric, not in use
- Paths: Exist and are accessible

## Common Issues
```
[ERROR] DATABASE_URL not set
[WARN]  Using default value for SECRET_KEY
[WARN]  DEBUG=true (should be false in production)
[OK]    API_KEY is set
```

## Commands
```bash
# List all env vars
printenv | grep -E "^(API|DB|SECRET)"

# Check specific var
echo $DATABASE_URL

# Set var (session only)
export API_KEY=value
```

## Best Practices
- Never commit .env files
- Use .env.example as template
- Different values for dev/staging/prod
- Rotate secrets regularly
