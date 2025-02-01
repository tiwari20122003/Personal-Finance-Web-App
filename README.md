**Personal Finance Management Web App**

**Project Overview**

This is a **Personal Finance Management Web App** that helps users track their income and expenses. Users can add, view, edit, and delete financial transactions and analyze their financial activities through visual representations. The project follows a **MERN (MongoDB, Express, React, Node.js)** stack for development.

**Features**

**1. User Authentication**

**Registration**: Users can create an account by providing their name, email, and password.

**Login:** Users can log in using their registered email and password.

**JWT Authentication:** On successful login, a JSON Web Token (JWT) is generated and stored on the client side for authentication.

**Authorization Middleware:** Protected routes require a valid JWT token.

**2. Dashboard Access**

After authentication, users are redirected to their personal dashboard.

Dashboard provides an overview of financial transactions categorized as **income** and **expenses.**

Data is visualized using circular progress bars from the **antd** library.

**3. Transaction Management**

**Viewing Transactions:** Users can see a list of their transactions with details like amount, type (income/expense), category, reference, description, and date.

**Adding Transactions:** Users can add new transactions by filling out a form.

**Editing Transactions:** Users can modify an existing transaction by submitting updated details.

**Deleting Transactions:** Users can remove a transaction permanently.

**4. Data Visualization**

Transactions are processed to calculate total income and expense percentages.

Progress bars represent income and expense turnover.

Transactions are categorized, and category-wise progress bars help users analyze spending habits.

**5. Feedback and Notifications**

Users receive notifications for actions like successful transaction additions, updates, deletions, and errors.

Backend Implementation

The backend server is built using Express.js.

CORS Middleware is used to allow communication between the frontend and backend.

JSON Parsing is handled using express.json().

Routes are defined separately for users and transactions to improve code maintainability.

Challenges Faced & Solutions

Handling CORS Issues

Used cors middleware in Express with app.use(cors()) to allow frontend-backend communication.

Managing Multiple API Endpoints

Organized routes into separate files like userRoutes.js and transactionRoutes.js to enhance code readability and maintainability.

Important Concepts Used

**1. JWT Authentication**

Stateless authentication, reducing server load and improving scalability.

**2. API Testing**

Tested using Postman and Thunderclient.

**3. ORM (Object-Relational Mapping)**

Mongoose is used to interact with MongoDB.

Mongoose schema is created to define the structure of data.

**4. Axios for API Requests**

Used to make HTTP requests in both frontend and backend.

**5. Async/Await and Promises**

async functions return a promise.

await pauses execution until the promise is resolved.

**6. Sync vs Async**

Sync is blocking (executes one request at a time).

Async is non-blocking (handles multiple requests simultaneously).

**7. Environment Variables**

.env file is used to store configuration values like PORT and MongoDB URI.

require('dotenv').config() loads environment variables.

HTTP Methods Used

GET Method



Example: https://example.com/dept?name=finance

Can be bookmarked because it contains all request details in the URL.

POST Method

Example: Submitting a form with financial data.

Cannot be bookmarked because data is sent in the request body, not in the URL.

Conclusion

This Personal Finance Management Web App helps users keep track of their financial activities, offering authentication, transaction management, data visualization, and easy-to-use features. 
The project is built with MongoDB, Express.js, React, and Node.js, ensuring efficiency and scalability.

Video Demonstration of the Functional Overview of our Application:
https://github.com/user-attachments/assets/763a7aa5-6081-4d1e-8039-ae2547ac4902
