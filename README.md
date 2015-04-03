# maybe-extend

> Extend an object with a defaults if the subject object's value is 'falsey'

# Install

```
npm install --save maybe-extend
```

# Example

```javascript
import extend from 'maybe-extend';

const subject = {
  x: 30,
  y: null
};
const defaults = {
  x: 10,
  y: 20
};

let obj = extend(subject, defaults);
/**
 * {
 *   x: 30,
 *   y: 20
 * }
 */
```

# License

MIT