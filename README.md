# MediTerms-Backend
---------------------------------------------------------
### Requirements
- Node V16.18.1+
- Git
- A code editor (preferential [VsCode](https://code.visualstudio.com/))
- A local database management system (i.e [Xampp](https://www.apachefriends.org/es/index.html))
### Installation
1. Clone the repository in the folder of preference.
    ```
      git clone https://github.com/InteliGeneMT/mediterms-backend.git
    ```
2. Open project in your code editor and open terminal.
3. Install the dependencies and devDependencies.
    ```sh
    npm install
    ```
4. Create a file named `.env` in the root folder of the project and write the following variables.
    ```
        NODE_ENV="development"
        DATABASE_URL="mysql://root:@localhost:3306/mediterms"
        DATABASE_NAME="mediterms"
        JWT_SECRET=""
        AWS_REGION=""
        AWS_SECRET_ACCESS_KEY=""
        AWS_SECRET_ACCESS_ID=""
    ```
    - If need be, change the params to suit your database preference. `mysql://user:password@localhost:3306/mediterms`
    - For the last environment variables, inquire about them.

5. Create the database `mediterms`
6. Run the seeders files
    ```
       npx sequelize db:seed:all 
    ```
    - In case of error, reset the seeder
    ```
       npx sequelize db:seed:undo:all
    ```

### Run
- To start server run in terminal `npm run dev` and you could see the console output in the terminal.
### Preview
- To see the app open in your browser http://localhost:3000
