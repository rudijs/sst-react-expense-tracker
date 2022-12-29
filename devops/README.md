## Stage: local

**Deployment**

3 terminals

In the first terminal expot the AWS environment variables for the AWS account for tihs environment.

1.  - Export the AWS environment variables for the AWS account for tihs environment.
    - `npx sst start --stage rudijs`
2.  - `cd web`
    - `npm run dev`
    - Open [localhost:5173](http://localhost:5173/)
3.  - Run tests and watch for code changes
    - `npm test`

**Remove**

1.  - Export the AWS environment variables for the AWS account for tihs environment.
    - `npx sst remove --stage rudijs`

## Stage development

**Deployment**

1.  - Export the AWS environment variables for the AWS account for tihs environment.
    - `npx sst deploy --stage dev`
    - Open [dev.expense-tracker.rudijs.com](https://dev.expense-tracker.rudijs.com)

**Remove**

1.  - Export the AWS environment variables for the AWS account for tihs environment.
    - `npx sst remove --stage dev`
