# Javascript Katas

1. fork this repo
2. clone your forked directory
3. `cd` into the new directory and run `npm install`, this can take a few minutes
4. `code .` to open the repo in VS Code.  

This challenge is broken into 5 suites. In your terminal you can run them each individually by running `npm test` followed by the name of the suite, like this:

```sh
$ npm test 1-variables-and-arrays
```

The suites are called:

1. `1-variables-and-arrays`
2. `2-manipulating-objects`
3. `3-super-flipflop`
4. `4-gradebook`
5. `5-builtin-methods`
6. `6-js-olympics`

When you first run the suites you'll see that all the tests are failing, your job is to go through each suite in order and update the code so that the tests pass. Use the kata information in the Handbook as a guide. 

When you've completed suites 1-5 you can run all the tests at once with `npm test` and the output should look a little like this:

```sh
$ npm test

> test
> jest

 PASS  src/5-builtin-methods/whereAreYou.test.js
 PASS  src/4-gradebook/index.test.js
 PASS  src/2-manipulating-objects/index.test.js
 PASS  src/5-builtin-methods/concatMyArray.test.js
 PASS  src/1-variables-and-arrays/index.test.js
 PASS  src/3-flipflop/super-flipflop.test.js
 PASS  src/5-builtin-methods/capitalize.test.js
 PASS  src/5-builtin-methods/deBee.test.js
 PASS  src/3-super-flipflop/flipflop.test.js

Test Suites: 9 passed, 9 total
Tests:       2 skipped, 58 passed, 60 total
Snapshots:   0 total
Time:        0.883 s, estimated 1 s
Ran all test suites.
```

The last test suite is optional, so it currently starts like this:

```js
describe.skip('The JS Olympics (stretch)', () => {
```

This means the tests won't run, to active these tests just remove the `.skip` so it looks like this:

```js
describe('The JS Olympics (stretch)', () => {
```
