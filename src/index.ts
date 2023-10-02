const is = (value: any) => ({
  array() {
    return Array.isArray(value)
  },
  defined() {
    return typeof value !== 'undefined' && value !== null
  },
  email() {
    return /^(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  },
  empty() {
    if (typeof value === 'string') {
      return value === ''
    }

    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true
    }

    for (const key in value) {
      if (value[key] === '' || !value[key]) {
        return true
      }
    }

    return false
  },
  json() {
    if (typeof value !== 'string' || !value) {
      return false
    }

    try {
      JSON.parse(value)
    } catch (e) {
      return false
    }

    return true
  },
  number() {
    return typeof value === 'number'
  },
  string() {
    return typeof value === 'string'
  }
})

export default is