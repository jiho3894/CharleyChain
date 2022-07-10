const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @see has, hasIn, hasPathIn
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * hasPath(object, 'a.b')
 * // => true
 *
 * hasPath(object, ['a', 'b'])
 * // => true
 */

interface path {
  <T>(object: T[], path: string): T;
}
function hasPath(object, path) {
  let index = -1;
  let { length } = path;
  let result = false;
  let key: number = 0;

  while (++index < length) {
    if (!(result = object != null && hasOwnProperty.call(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return length;
}

export default hasPath;
