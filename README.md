# eslint-config

## Installation

```
yarn add -DT eslint typescript somq14/eslint-config#<tag>
```

## Configuration

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: ["@somq14/eslint-config"],
  ignorePatterns: ["dist", "coverage"],
};
```

## Usage

```
yarn eslint --max-warnings 0 '**/*.{js,jsx,ts,tsx}'
```
