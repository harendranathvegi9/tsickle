


import {expect} from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import * as tsickle from '../src/tsickle';
import {toArray} from '../src/util';

import * as testSupport from './test_support';

function tsickleTransformerFactory(context: ts.TransformationContext) {
  return function(n: ts.SourceFile): ts.SourceFile {
    // context.enableSubstitution
    console.log('Visiting', ts.SyntaxKind[n.kind]);
    return n;
  };
}


describe.only('transformer', () => {
  it('transforms', () => {
    const srcs = new Map<string, string>();
    srcs.set('a.ts', 'let m: string = "hello world";');
    const program = testSupport.createProgram(srcs);
    let emitted = new Map<string, string>();
    const result = program.emit(
        undefined, (fileName, data) => emitted.set(fileName, data), undefined, undefined,
        {after: [tsickleTransformerFactory]});
    console.log(result);
    console.log(emitted);
  });
});
