# Polyfill - JSON.stringify() - omit null value

Change original JSON.stringify method to omit null values by default

## Usage

```shell
npm install polyfill-json-stringify-omit-null-value
```

Then require this script somewhere **before all** you start using it:

With Javascript:

```ts
// with Javascript
require('polyfill-json-stringify-omit-null-value');
const express = require('express');

// with Typescript
import 'polyfill-json-stringify-omit-null-value';
import express from 'express';
```

When using typescript with ts-node, you can import this directly in `tsconfig.json` file like this:

```json
{
  "compilerOptions": {},
  "ts-node": {
    "require": [
      "polyfill-json-stringify-omit-null-value"
    ]
  }
}
```

This polyfill works on both the backend and frontend and works by modifying the JSON.stringify() method so that by default it ignores keys that have a null value

Enjoy!