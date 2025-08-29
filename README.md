# ExpressJS A-to-Z 🚂

This repository documents my personal journey of learning Express.js, the fast, unopinionated, minimalist web framework for Node.js. The projects are structured alphabetically, starting from the very basics ("Hello World") and progressively moving towards more complex API concepts.

Each folder is a self-contained, runnable Express application that demonstrates a specific feature or concept.

---

## 🚀 Projects

Here is a breakdown of the APIs and concepts covered in this repository, from A to Z.

| Project                   | Concept(s) Demonstrated                                | Directory                                         |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| **A. Hello Express** | Basic server setup and a single "Hello World" route.   | [`./A. Hello Express`](./A.%20Hello%20Express)    |
| **B. Calculator API** | Handling GET requests with query parameters.           | [`./B. Calculator API`](./B.%20Calculator%20API)  |
| **C. Static Serving** | Serving static files like HTML, CSS, and client-side JS. | [`./C. Static Serving`](./C.%20Static%20Serving)  |
| **D. Quote API** | Creating a simple JSON API with a static dataset.      | [`./D. Quote API`](./D.%20Quote%20API)            |
| **E. To-Do API** | Basic CRUD (Create, Read, Update, Delete) operations.  | [`./E. To-Do API`](./E.%20To-Do%20API)            |
| **F. JSON Formatter** | Working with middleware and parsing JSON request bodies. | [`./F. JSON Formatter`](./F.%20JSON%20Formatter)  |
| **G. Greetings API** | Using route parameters for dynamic responses.          | [`./G. Greetings API`](./G.%20Greetings%20API)    |
| **H. Environment Variable**| Managing configuration with `.env` files.            | [`./H. Environment Variable`](./H.%20Environment%20Variable)|
| **I. IP Logger** | Creating custom middleware to log request details.     | [`./I. IP Logger`](./I.%20IP%20Logger)            |
| **J. Time API** | Working with dates and creating time-based responses.  | [`./J. Time API`](./J.%20Time%20API)              |
| **K. Registration API** | Handling POST requests and basic data validation.      | [`./K. Registration API`](./K.%20Registration%20API)|
| **L. Notes API** | Implementing more complex CRUD logic.                  | [`./L. Notes API`](./L.%20Notes%20API)            |
| **M. Proxy Server** | Building a basic proxy to forward requests.            | [`./M. Proxy Server`](./M.%20Proxy%20Server)      |

More soon....

---

## ⚙️ How to Run Each Project

Each project is a standalone application. To run one:

1.  **Navigate to the project directory:**
    ```bash
    # Example for the Calculator API
    cd "B. Calculator API"
    ```

2.  **Install dependencies:**
    Each folder should have its own `package.json` file.
    ```bash
    npm install
    ```

3.  **Run the server:**
    ```bash
    node server.js
    # or node app.js, check the main file in the directory
    ```
    The server will start, and you can access the API, typically at `http://localhost:3000`.

---

## 🎯 Purpose

The primary goal of this repository is to serve as a hands-on learning log. By building these small, focused APIs, I aim to gain a solid understanding of the core concepts of Express.js and backend development in general.

---

## 🤝 Contributing

This is a personal learning project, but if you spot an error or have a suggestion for improvement, feel free to open an issue or submit a pull request!

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
