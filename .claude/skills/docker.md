# /docker - Docker Operations

Build and run Docker containers.

## Usage
```
/docker [build|up|down|logs|ps]
```

## Commands

### Build Images
```bash
docker-compose build
docker-compose build --no-cache
```

### Start Containers
```bash
docker-compose up -d
docker-compose up --build -d
```

### Stop Containers
```bash
docker-compose down
docker-compose down -v  # Remove volumes
```

### View Logs
```bash
docker-compose logs -f
docker-compose logs -f <service>
```

### Container Status
```bash
docker-compose ps
docker ps -a
```

### Clean Up
```bash
docker system prune -f
docker image prune -f
docker volume prune -f
```

## Troubleshooting
- Check Dockerfile syntax
- Verify port mappings
- Check environment variables
- Review build logs for errors
