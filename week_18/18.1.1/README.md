- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url - one from paytm_18.1.1
- Go to `packages/db`
  - npx install bcrypt
  - npx prisma migrate dev
  - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)

well the code when ran was providing error that the userId not defined
hence moved to `apps/user-app/app/(dashboard)/dashboard/transfer/page.tsx` and did the code there

Right Now we see the `onramp` transactions that have been `seeded`.
Clicking on this button should initiate a new entry in the `onRampTransactions` table, that is eventually fulfilled by the `bank-webhook` module.

Let’s implement this feature via a server action

- Create a new action in lib/actions/createOnrampTransaction.ts
  now go to `apps/bank-webhook` -> run `npm run dev`
  18.1.1 done

