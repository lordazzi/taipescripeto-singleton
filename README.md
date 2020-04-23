# TypeScript Singleton
The Singleton Decorator to garantee

> taipescripeto singulus

[![npm version](https://badge.fury.io/js/@taipescripeto/singleton.svg)](https://badge.fury.io/js/@taipescripeto/singleton)
[![Build Status](https://travis-ci.org/lordazzi/taipescripeto-singleton.svg?branch=master)](https://travis-ci.org/lordazzi/taipescripeto-singleton)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/lordazzi/taipescripeto-singleton/blob/master/LICENSE)

## Installation
```bash
npm install @taipescripeto/singleton --save
```

## Usage
This is a decorator @Singleton() to make you class single.
Compatible with most browsers, even old ones

```typescript
import { Singleton } from '@taipescripeto/singleton';

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
import { Singleton } from '@taipescripeto/singleton';

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

## Contributing

### 1. Create an issue
No one feature will be implemented without it having an open issue and without which the proposed has been accepted by the team responsible for the project. After the issue is approved, the applicant, a team member or anyone else can open a pull request associated with that issue (just paste the issue link in the pull request).

### 2. Did you find a bug?
When logging a bug, please be sure to include the following:
 * The library version;
 * If at all possible, an *isolated* way to reproduce the behavior;
 * The behavior you expect to see, and the actual behavior.

You can try to update the library to the last version to see if the bug has already been fixed.

### 3. Do not create a duplicate issue
[Search the existing issues](https://github.com/lordazzi/taipescripeto-singleton/search?type=Issues) before logging a new one.

Some search tips:
 * *Don't* restrict your search to only open issues. An issue with a title similar to yours may have been closed as a duplicate of one with a less-findable title.
 * Check for synonyms. For example, if your bug involves an interface, it likely also occurs with type aliases or classes.

### 4. Create a Pull Request
Follow the steps:

 * Create a [fork](https://guides.github.com/activities/forking/) from our repository, install [node](https://nodejs.org/), and run `npm install` in the application folder;
 * Create a branch in your forked repository, then code the feature or fix the bug;
 * Run `npm run lint`, `npm run test` and `npm run build` in the repository;
 * Create a Pull Request from your repository to this one, with the issue in the body and some information you think could be usefull to the reviewer (print or a [gif of it working](https://www.screentogif.com/) will be appreciated);
 * The reviewer can ask some changes, don't be mad, this is the GIT Flow process;
 * You get approved and your branch with the feature / fix 