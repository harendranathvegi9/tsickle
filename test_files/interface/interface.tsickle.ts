
/** @record */
export function Point() {}
/** @type {number} */
Point.prototype.x;
/** @type {number} */
Point.prototype.y;
/** Used by implement_import.ts */
export interface Point {
  x: number;
  y: number;
}
/**
 * Used by implement_import.ts
 */
export class User {
  shoeSize: number;
}

function User_tsickle_Closure_declarations() {
/** @type {number} */
User.prototype.shoeSize;
}

/**
 * @param {!Point} p
 * @return {number}
 */
function usePoint(p: Point): number {
  return p.x + p.y;
}

let /** @type {!Point} */ p: Point = {x: 1, y: 1};
usePoint(p);
usePoint({x: 1, y: 1});
/** @record */
function TrickyInterface() {}
/* TODO: handle strange member:
[offset: number]: number;
*/
/** @type {number} */
TrickyInterface.prototype.foo;
/* TODO: handle strange member:
(x: number): __ yuck __
      number;
*/
/** @type {(undefined|string)} */
TrickyInterface.prototype.foobar;
/**
 * \@param a some string value
 * \@return some number value
 * @override
 * @type {function(string): number}
 */
TrickyInterface.prototype.hasSomeParamJsDoc;


/*
TODO: this example crashes the compiler -- I've mailed the team about it.
interface Point3 extends Point {
  z: number;
}
let p3: Point3 = {x:1, y:1, z:1};
usePoint(p3);
*/

// Check some harder interface types.
interface TrickyInterface {
  [offset: number]: number;
  'foo': number;
  (x: number): /* yuck */
      number;
  // TODO: handle optional members.  Should have |undefined type.
  'foobar'?: 'true'|'false';
  /**
   * @param a some string value
   * @return some number value
   * @override
   */
  hasSomeParamJsDoc: (a: string) => number;
}
