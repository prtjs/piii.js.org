export const filterObj = (obj, cb) => {
  const newObj = {}
  const entries = Object.entries(obj)

  for (let entry of entries) {
    const [key, val] = entry

    if (cb(key)) {
      newObj[key] = val
    }
  }

  return newObj
}