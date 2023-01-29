/**
 * Change original JSON.stringify method to omit null values by default
 * @example
 * JSON.stringify({ a: 1, b: null, c: undefined })
 * // returns '"{"a":1}"'
 */
function overrideJsonStringifyOmitNullValue () {
  JSON.__stringify = JSON.stringify
  JSON.stringify = (
    value,
    replacer = (_, value) => value === null ? undefined : value,
    space
  ) => JSON.__stringify(value, replacer, space)
}

overrideJsonStringifyOmitNullValue()
