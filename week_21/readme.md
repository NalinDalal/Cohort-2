# Why rate limitting

1. Preventing Overload: Rate limiting controls how often a user or system can make requests to a service. This helps prevent overuse of resources, ensuring that the system remains available and responsive for all users. For example, rate limiting can stop a single user from making thousands of login attempts in a minute, which could otherwise degrade service for others.
2. Mitigating Abuse: Without rate limiting, an application could be more susceptible to abuse such as brute force attacks on passwords or spamming behavior. By limiting how often someone can perform an action, it reduces the feasibility of such attacks.
3. Managing Traffic: In high-traffic scenarios, like ticket sales for a popular event, rate limiting can help manage the load on a server, preventing crashes and ensuring a fairer distribution of service like bandwidth or access to the purchasing system.
4. DDoS Protection: A DDoS attack involves overwhelming a site with a flood of traffic from multiple sources, which can make the website unavailable. DDoS protection mechanisms detect unusual traffic flows and can filter out malicious traffic, helping to keep the service operational despite the attack.

# Common place to add rate limits

When you allow a user to `reset their password` using an OTP from their email, the following endpoint should be rate limited heavily.

<div class="notion-column notion-block-3532903bb2244530ba4d2fe01610fc7d" style="width: calc((100% - 1 * min(32px, 4vw)) * 0.5);"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-840e837f46fa4c61a56a09cbc848c30e"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F32608b57-91ff-4651-a3cb-0578fe693aa3%2FScreenshot_2024-04-20_at_4.02.36_PM.png?table=block&amp;id=840e837f-46fa-4c61-a56a-09cbc848c30e&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure></div>

<div class="notion-column notion-block-e288a1945f0b48e181de68eec71c8026" style="width: calc((100% - 1 * min(32px, 4vw)) * 0.5);"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-65deaa3cbd7440c29c196a6eb85c9f93"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5af7a0d5-901f-44ce-8b58-2b9855bf3a53%2FScreenshot_2024-04-20_at_4.02.42_PM.png?table=block&amp;id=65deaa3c-bd74-40c2-9c19-6a6eb85c9f93&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure></div>

```bash
 mkdir week-21-pentesting
 cd week-21-pentesting
 mkdir backend
 cd backend
 npm init -y
npx tsc --init
```

update package.json, rootDir, outDir

install dependencies->

```bash
npm i express @types/express
```

copy over the code, then compile down the code and run it.
go to postman and hit `http://localhost:3000/reset-password` endpoint and send the OTP

you will notice that, once we login, we would log something
then when you go for password reset, it would give input as

```json
{
  "email": "harkirat22@gmail.com",
  "otp": "770996",
  "newPassword": "hi there"
}
```

check the logs in terminal and see what is happening->

```bash
OTP for harkirat22@gmail.com: 770996
Password for harkirat22@gmail.com has been reset to: hi there
```

make a folder attack for attack logic

```bash
mkdir attack
cd attack
npm init -y
npx tsc --init
npm install axios
```

do the code, when you run the backend folder, a OTP gets created, put that otp here
now run the attack folder

we can see that in the backend folder, we get a 200 status code and we get a new password

# Exploiting a prod URL

Try resetting password on https://harkirat.classx.co.in

1. Go to the website
2. Put in a random users email
3. Send OTP
4. Try putting a random OTP

## Exploiting it

Copy over the request from the network tab as curl
Paste it in Postman
Send a request via postman
Export the request
Update the script to brute force on this endpoint

# Problem?

DDoS
Your server is still vulnerable to DDoS
Though DDoS is rarely used for password reset, it is usually used to choke a server

Why do attackers to DDoS -

1. To charge ransom because the service remains down until DDoS is lifted
2. On sneaker drop events/NFT mints where the faster the request reaches the server the better

## How can you save your reset password endpoint?

You can implement logic that only 3 resets are allowed per email sent out
You can implement captcha logic

# Captchas

Captchas are a great-sh solution to making sure the request was sent by a human and not by a machine
There are various freely available captchas, Cloudflare Turnstile is one of them

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-df0ce3bd0a624ab3bc808a8aa4660767"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7b36e3f0-5e7f-4c7f-8a29-3913911178ba%2Fimage-3.png?table=block&amp;id=df0ce3bd-0a62-4ab3-bc80-8a8aa4660767&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-16035a06304645ba93e4554bfc351c97"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fca248aac-6e57-4867-8584-aeb700b0b318%2FScreenshot_2024-04-20_at_5.07.29_PM.png?table=block&amp;id=16035a06-3046-45ba-93e4-554bfc351c97&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

# Adding captchas via cloudflare

Add a new site to turnstile
Keep your site key and site secret safe
Create a react project

```bash
 npm create vite@latest

> npx
> create-vite

✔ Project name: … react
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

Add https://github.com/marsidev/react-turnstile
Update `App.tsx`
Update backend code

go to cloudflare, go to Turnstile, create a new site
copy over the site key