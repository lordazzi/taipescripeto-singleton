# Singleton

## About
This is a decorator @Singleton() to make you class single.
Compatible with most browsers, even old ones

## Usage
```typescript
import { Singleton } from '@taipescripeto/basic';

@Singleton()
class SomeBusinessService {

  someBusinessRule(a: number, b: number): boolean {
    return a < b;
  }
}

//  this return true
new SomeBusinessService() === new SomeBusinessService();
```

If you like an old school singleton implementation, you can do that:
```typescript
import { Singleton } from '@taipescripeto/basic';

@Singleton()
class SomeBusinessService {

  static getInstance() {
    return new SomeBusinessService();
  }

  private constructor() { }

  someBusinessRule(a: number, b: number): boolean {
    return a < b;
  }
}

//  this return true
SomeBusinessService.getInstance() === SomeBusinessService.getInstance();
```