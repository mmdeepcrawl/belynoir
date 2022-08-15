# Belynoir App

### Table of Contents
1. [Belynoir backend](#belynoir-backend)
2. [Belynoir frontend](#belynoir-frontend)

### Belynoir backend
1. Retrieve all the packages with `npm install`
2. Place the BigQuery keys inside the `apiKeys` folder
3. Create a `.env` file with the same keys as `.env.example`
  * `PORT`: Port where the server is going to run.
  * `GOOGLE_APPLICATION_CREDENTIALS`: Relative path of your BigQuery keys file.
4. Run `npx ts-node app.ts`

### Belynoir frontend
1. Retrieve all the packages with npm install
2. Run `react-scripts start`
