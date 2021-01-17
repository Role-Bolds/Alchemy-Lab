import "mocha";
import 'chai/register-assert';
import { assert } from "chai";
import { fileName, tokenSanitize } from '../../src/lib/Util';

const fileNameTest = fileName(__filename);

describe('-- Util.ts', () => {
  describe('fileName()', () => {
    it('exists', () => {
      assert.exists(fileName, `is neither 'null' or 'undefined'`);
    });
    it('is function', () => {
      assert.isFunction(fileName, 'is a function')
    });
    it('returns string', () => {
      assert.isString(fileNameTest, 'returns string')
    });
  });
  describe('tokenSanitize', () => {
    it('exists', () => {
      assert.exists(tokenSanitize, `is neither 'null' or 'undefined'`)
    });
  });
});