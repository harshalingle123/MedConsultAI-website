# /test - Run Project Tests

Run project tests with the appropriate test runner.

## Usage
```
/test [path] [options]
```

## Behavior
1. Detect test framework:
   - Python: pytest, unittest
   - Node: jest, vitest, mocha
2. Run tests with verbose output
3. Show failures with context
4. Suggest fixes for failing tests

## Examples
```bash
# Run all tests
/test

# Run specific test file
/test tests/test_api.py

# Run with coverage
/test --coverage
```

## Commands
```bash
# Python
pytest -v --tb=short

# Node (Jest)
npm test -- --verbose

# Node (Vitest)
npm run test
```
