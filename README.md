# TechTalk: TypeScript Conditional Typings introduction

`T extends U ? X : Y`

## Helpful links

* [TypeScript 2.8 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html) 
* [Notes on TypeScript: Conditional Types - DEV Community](https://dev.to/busypeoples/notes-on-typescript-conditional-types-4bh)
* [Conditional types in TypeScript - Artsy Engineering](https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/)


## Quick Start

1. `git clone git@github.com:korniychuk/wallaby-ts-starter.git`
2. `cd wallaby-ts-starter`
3. `yarn`

## How to

### How to use NodeJS version from the `.nvmrc`

1. Install NVM
2. Use `.nvmrc` file one of the next ways:

    * Execute `nvm use` in the project root directory
    * Install [NVM Loader](https://github.com/korniychuk/ankor-shell) and your .nvmrc will be loaded automatically when you open the terminal.
      ![NVM Loader demo](./resources/readme.nvm-loader.png)

### How to make a build

`npm run build`

### How to run lint

* Just show problems `npm run lint`
* Fix problems if it is possible `npm run lint:fix`

### How to run tests

* All tests

  `npm run test`  
  `npm run test:watch`
* Specific tests

  `npm run test -- src/my.spec.ts`  
  `npm run test:watch -- src/my.spec.ts`

## Author

| [<img src="https://www.korniychuk.pro/avatar.jpg" width="100px;"/><br /><sub>Anton Korniychuk</sub>](https://korniychuk.pro) |
| :---: |
