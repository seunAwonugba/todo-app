# To-Do List API

A RESTful API for managing a basic "To-Do List" application. This API is built with **Express.js**, **Sequelize**, **TypeScript**, and **PostgreSQL**, and it provides CRUD operations for managing to-do items.

---

## Table of Contents

1. [Setup and Run the API](#setup-and-run-the-api)
2. [API Endpoints](#api-endpoints)

---

## Setup and Run the API

### Prerequisites

-   **Node.js** (v16 or higher)
-   **npm** or **yarn**
-   **PostgreSQL** database installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/seunAwonugba/todo-app.git
    cd todo-list
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables:

    ```bash
     PORT=
     HOST=
     DB_HOST_DEV=
     DB_PORT=
     DB_USERNAME=
     DB_PASSWORD=
     DEV_DB=
     DB_DIALECT=
    ```

4. Run database migrations:

    ```bash
     npm run db:migrate

    ```

5. Start the server:

    ```bash
     npm run dev

    ```

6. Access the API at:

    ```bash
     http://localhost:{{PORT}}

    ```

## API Endpoints

1.  Create a New To-Do Item (POST)

    ```bash
    http://localhost:{{PORT}}


    BODY
    {
    "title": "Buy groceries",
    "status": "completed"
    }
    ```

2.  Retrieve All To-Do Items (GET)

    ```bash
     http://localhost:{{PORT}}
    ```

3.  Get a To-Do Item (GET)

    ```bash
    http://localhost:{{PORT}}/:id
    ```

4.  Update a To-Do Item (PATCH)

    ```bash
    http://localhost:{{PORT}}/:id

    ```

5.  Delete a To-Do Item (DELETE)

    ```bash
    http://localhost:{{PORT}}/:id
    ```
