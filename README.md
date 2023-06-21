# react-testing-library-and-jest
Few projects regarding React testing library and Jest

## RTL books
- `roles-notes`: More about how to find element by role
- `query-notes`: More about `getBy, queryBy, findBy, getAllBy, queryAllBy, findAllBy`
- `criteria-notes`: More about how to get element using different suffixes (`getByLabelText`, `getByPlaceholderText`, `getByText`, `getByTitle`...)
- `matcher-notes`: More about jest matchers and how to create custom matcher

### How to run rtl-book?
`npx rtl-book serve roles-notes.js`  
`npx rtl-book serve query-notes.js`  
`npx rtl-book serve criteria-notes.js`  
`npx rtl-book serve matcher-notes.js`  


### How to make a [msw](https://mswjs.io/docs/) server? 
Check `src/test/server.js` file and `createServer` implementation in some other testign files.

### How to debugg test?
- To wrap up some tests with mocking api calls (`createServer`), put everything inside `describe` suit.
- To run some particular test, use `only`. It allow us easier debbugin. (`describe.only(...)` or `test.only(...)`).

### How to setup and use `debugger` ?
#### `Debugger` setup:
- Open `package.json` file
- Inside `script` section add following code:  
`"test:debug": test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"` 

#### Run `debugger`:
- Run `npm run test:debug`
- Open `chrome` and type `about:inspect`

More about debugging [here](https://create-react-app.dev/docs/debugging-tests/).


### Summary
During the [course](https://www.udemy.com/course/react-testing-library-and-jest/), I learned a lot about writing React tests.

- How to select elements based on role, name, attributes, or similar criteria.
- How to find elements asynchronously (`findBy`) or synchronously (`getBy/queryBy`).
- How to debug tests.
- What `jest` is and how to write custom matchers.
- What `MSW (Mock Service Worker)` is.
- What `SWR` is and the issue related to test caching.

And much, much more.