# /db-migrate - Database Migrations

Run database migrations.

## Usage
```
/db-migrate [up|down|status|create]
```

## Frameworks

### Alembic (Python/SQLAlchemy)
```bash
# Create migration
alembic revision --autogenerate -m "description"

# Run migrations
alembic upgrade head

# Rollback
alembic downgrade -1

# Status
alembic current
alembic history
```

### Prisma (Node)
```bash
# Create migration
npx prisma migrate dev --name description

# Run migrations
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# Status
npx prisma migrate status
```

### Knex (Node)
```bash
# Create migration
npx knex migrate:make description

# Run migrations
npx knex migrate:latest

# Rollback
npx knex migrate:rollback

# Status
npx knex migrate:status
```

## Best Practices
- Always backup before migrations
- Test migrations on staging first
- Keep migrations small and focused
- Never edit existing migrations
