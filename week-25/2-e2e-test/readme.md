# End to end tests

Until now, we’re not tested our frontend + backend together.
End to end tests let you `spin up a browser` and test things like an end user.
Good reference video -`https://www.cypress.io/`

There are many frameworks that let u do browser based testing
Cypress
Playwright
nightwatchjs

We’ll be using `cypress`

Init ts project

```bash
npm init -y
npx tsc --init
mkdir src
```

install & bootstrap `cypress`

```bash
npm install cypress --save-dev
npx cypress open
```

- Select default example to start with
- Delete 2-advanced-examples
- Try running the todo test

```bash
npx cypress run --browser chrome --headed
```

update the todo test-> todo.cy.js
