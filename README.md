<p align="center">
  <img src="https://github.com/user-attachments/assets/c095b953-8dcc-4567-b195-982e439ae003">
</p>
<h1 align="center">
  ass2esl: Advanced Substation Alpha to Expressive Subtitle Language
</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ESL** is an open-source initiative defining a rich, human-readable subtitle format designed for expressive and dynamic text presentations. It leverages the clarity of HCL (HashiCorp Configuration Language) to provide a comprehensive framework for timed text, intricate styling, complex motion effects, and karaoke.

## Usage

**Read an ASS file and convert it to ESL:**

```js
import convertASStoESL from '@openanime/ass2esl';
import { readFileSync } from 'fs';

const assFile = readFileSync('example.ass', 'utf-8');
const eslContent = convertASStoESL(assFile);

console.log(eslContent); // Outputs the ESL content
```
