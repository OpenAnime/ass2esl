import { readFileSync, writeFileSync } from 'node:fs';
import convertASStoESL from '../index';
import { compile } from 'ass-compiler';

const input = readFileSync('test.ass', 'utf8');
const compiledASS = compile(input, {});

writeFileSync('asscompiled.json', JSON.stringify(compiledASS, null, 2));

const out = convertASStoESL(input);

writeFileSync('testout.esl', out);
