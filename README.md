# @architecturex/utils.is

## is

A utility library for performing various type and value checks on JavaScript entities.

### Installation

`npm install @architecturex/utils.is`

### API

- **array():** Checks if the value is an array.
- **Base64 Encoding & Decoding:** Convert data between Base64 and other formats.
- **defined():** Checks if the value is defined and not `null`.
- **email():** Checks if the value is a valid email address format.
- **empty():** Checks if the value is empty. This can be an empty string, an empty array, or an object with no enumerable properties.
- **json():** Checks if the value is a valid JSON string.
- **number():** Checks if the value is a number.
- **string():** Checks if the value is a string.

### Usage

```javascript
import is from '@architecturex/utils.is'

is([1, 2, 3]).array() // true
is('hello@architecturex.com').email() // true
is('hello').string() // true
is(123).number() // true
is('').empty() // true
is({}).empty() // true
is({ key: 'value' }).empty() // false
is(null).defined() // false
is('{}').json() // true
```

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
