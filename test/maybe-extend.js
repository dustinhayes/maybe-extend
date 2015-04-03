'use strict';

import test from 'tape';
import extend from '../src/';

test('should extend with defaults if values are falsey', function (t) {
  const subject = {
    x: 30,
    y: null
  };
  const defaults = {
    x: 10,
    y: 20
  };
  const expected = {
    x: 30,
    y: 20
  };

  t.deepEqual(extend(subject, defaults), expected);

  t.end();
});
