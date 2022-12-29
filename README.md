# sst-react-expense-tracker

Serverless Stack React Expense Tracker - Demo App

## Init project

Create the SST codebase.

- `npx create-sst@latest sst-react-expense-tracker`
  - ? What kind of project do you want to create? minimal
  - ? Select a template minimal/typescript-starter
- `cd sst-react-expense-tracker`
- `npm install`

Create the static site codebase

- `npm create vite@latest web -- --template react-ts`
  - `cd web`
  - `npm install`

Configure the static site to work with SST

- [https://docs.sst.dev/constructs/StaticSite](https://docs.sst.dev/constructs/StaticSite)

- Create stack DNS.ts
- Create stack Web.ts

## AWS DNS Setup (for multiple accounts)

Follow the instruction below.

Setup a DNS NS record for the sub-domain in the AWS account for that environment (this delegates the subdomain to the AWS account.)

- https://sst.dev/chapters/share-route-53-domains-across-aws-accounts.html
- https://www.youtube.com/watch?v=YxHnpHaGcmY&t

Delegate domains across AWS accounts

1. First, go into your Route 53 console in your Development|Staging|Production account
2. Click Hosted zones in the left menu. Then select Create Hosted Zone.
   - Ex: dev.expense-tracker.rudijs.com
   - Type is NS, then click Create.
3. Select the zone you just created.
4. Click on the row with NS type. And copy the 4 lines in the Value field. We need this in the steps after.
5. Now, switch to the Master account where the domain is hosted. And go into Route 53 console.
6. Select the domain
7. Click Create Record Set.
8. Fill in:
   - Name: dev.expense-tracker.rudijs.com (or staging or just the main prod domain name)
   - Type: NS - Name server
   - And paste the 4 lines from above in the Value field.
   - Click Create.
9. You should see a new dev.expense-tracker.rudijs.com row in the table.
