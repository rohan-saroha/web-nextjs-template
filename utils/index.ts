export const mapKeysDeep = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map(val => mapKeysDeep(val, fn))
    : typeof obj === "object"
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] = val !== null && typeof val === "object" ? mapKeysDeep(val, fn) : val;
        return acc;
      }, {})
    : obj;

export const isLocal = () => {
  try {
    const local = JSON.parse(process.env.IS_LOCAL ?? "false");
    return typeof local === "boolean" && local;
  } catch {
    // continue regardless of error
  }
  return false;
};

export { default as commonPropTypes } from "./commonPropTypes";
