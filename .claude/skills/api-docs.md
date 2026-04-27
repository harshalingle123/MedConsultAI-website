# /api-docs - API Documentation

Generate or view API documentation.

## Usage
```
/api-docs [generate|serve|list]
```

## FastAPI (Python)
```bash
# Auto-generated at runtime
# Swagger UI: http://localhost:8000/docs
# ReDoc: http://localhost:8000/redoc
# OpenAPI JSON: http://localhost:8000/openapi.json
```

## Express (Node)
```bash
# With swagger-jsdoc
npx swagger-jsdoc -d swaggerDef.js -o swagger.json

# Serve docs
# Add swagger-ui-express middleware
```

## Output Format
```
API Endpoints:
├── GET    /api/users         - List all users
├── POST   /api/users         - Create user
├── GET    /api/users/{id}    - Get user by ID
├── PUT    /api/users/{id}    - Update user
└── DELETE /api/users/{id}    - Delete user
```

## Actions
1. List all endpoints with methods
2. Show request/response schemas
3. Generate curl examples
4. Export OpenAPI spec
