# /perf - Performance Profiling

Profile code performance and identify bottlenecks.

## Usage
```
/perf [profile|benchmark|memory]
```

## Python Profiling

### cProfile
```bash
python -m cProfile -s cumtime script.py
python -m cProfile -o profile.stats script.py
```

### py-spy (Production-safe)
```bash
py-spy record -o profile.svg -- python script.py
py-spy top --pid <PID>
```

### Memory Profiling
```bash
python -m memory_profiler script.py
```

## Node Profiling

### Built-in Profiler
```bash
node --prof app.js
node --prof-process isolate-*.log > profile.txt
```

### Clinic.js
```bash
npx clinic doctor -- node app.js
npx clinic flame -- node app.js
```

## Analysis
- Identify slow functions (cumulative time)
- Find memory leaks (growing allocations)
- Detect N+1 query patterns
- Measure API response times

## Output
```
Top 10 Slowest Functions:
1. database.query()     - 2.3s (45%)
2. json.dumps()         - 0.8s (15%)
3. http.request()       - 0.5s (10%)
...
```
