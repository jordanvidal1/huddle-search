const identity = require('folktale/core/lambda/identity');

// composition hack
// eslint-disable-next-line no-prototype-builtins
if(!Function.prototype.hasOwnProperty('∘')) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Function.prototype, '∘', {
    enumerable: false,
    value(f) {
      return x => this(f(x));
    }
  });
}

const lodashGet = require('lodash.get');

const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
const partialSpread = (fn, obj = {}) => (restObj = {}) => fn.call(this, {...obj, ...restObj});

const prop = key => obj => obj[key];
const propIn = (key, defaultValue) => obj => lodashGet(obj, key, defaultValue);

const immutableGet = key => obj => obj.get(key);
const immutableGetIn = path => obj => obj.getIn(path);
const immutableCompareProps = (a, b, key) => a.get(key) === b.get(key);

const maybeValueReturn = (modifier = v => v) => ({value}) => modifier(value);
const maybeValueGet = key => ({value}) => value.get(key);
const maybeValueGetIn = path => ({value}) => value.getIn(path);

const asyncDataReturn = (modifier = v => v) => ({data}) => modifier(data);
const asyncDataGet = (key, modifier = identity) => ({data}) => modifier(data.get(key));
const asyncDataGetIn = path => ({data}) => data.getIn(path);

const noop = () => {};
const constant = val => () => val;
const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
const zip = (a, b) => a.map((e, i) => [e, b[i]]);

const removeNullProperties = obj => Object.keys(obj)
  .reduce((acc, key) => (obj[key] === null ? acc : {...acc, [key]: obj[key]}), {});

const removeUndefinedProperties = obj => Object.keys(obj)
  .reduce((acc, key) => (obj[key] === undefined ? acc : {...acc, [key]: obj[key]}), {});

const isFunction = func => typeof func === 'function';
const not = val => !val;
const negate = val => -1 * +val;
const last = arr => arr[arr.length - 1];
const head = arr => arr[0];
// eslint-disable-next-line no-shadow
const ignoreProp = prop => obj => {
  const {[prop]: _, ...rest} = obj;

  return rest;
};

const ignoreProps = (props = []) => obj => props
  .reduce((acc, curr) => ignoreProp(curr)(acc), obj);

const removeLastItem = arr => {
  const copy = [...arr];
  copy.pop();
  return copy;
};

const ignoreAtIndex = (array, ignoreIndex) => array
  .reduce((acc, curr, i) => (i === ignoreIndex ? acc : [...acc, curr]), []);

const toJS = immutable => immutable.toJS();

const equals = a => b => a === b;

const getNumLength = number => number.toString().length;

module.exports = {
  partial,
  partialSpread,
  prop,
  propIn,
  immutableGet,
  immutableGetIn,
  maybeValueReturn,
  maybeValueGet,
  maybeValueGetIn,
  asyncDataReturn,
  asyncDataGet,
  asyncDataGetIn,
  noop,
  constant,
  flatten,
  isFunction,
  not,
  head,
  last,
  removeNullProperties,
  removeUndefinedProperties,
  ignoreProp,
  ignoreProps,
  removeLastItem,
  ignoreAtIndex,
  toJS,
  negate,
  equals,
  identity,
  immutableCompareProps,
  zip,
  getNumLength
};
