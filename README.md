# AcePapers Writers

**AcePapers Writers** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to manage academic writing services, including essays, quizzes, research papers, term papers and online class assistance. The system allows seamless interaction between writers and clients with automated workflows, payment tracking and secure account management.

---

## 🌐 Live Demo
> Coming soon...

---

## 📌 Features

### ✅ For Clients
- User registration & authentication
- Create, view and manage orders
- Upload assignment instructions and resources
- Monitor order progress & writer communication
- Payment processing and history

### ✍️ For Writers
- Secure login and personalized dashboards
- Access to available orders and deadlines
- Submit completed work
- Track payment status

### ⚙️ Admin Features
- Manage user roles (Client/Writer/Admin)
- Approve or assign writers
- Monitor transactions and activity logs
- Generate reports

---

## 💻 Tech Stack

### Frontend:
- React.js with Tailwind CSS (responsive UI)
- Redux Toolkit (state management)
- React Router DOM (page routing)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT-based Authentication
- Bcrypt.js for password hashing

### Dev Tools:
- ESLint & Prettier for code formatting
- Nodemon for auto-restarting server
- GitHub Actions (CI/CD)

---

## 🛠️ Installation Instructions

### 1. Clone the Repo
```bash
git clone 
cd AcePapers-Writers
```

### 2. Install Dependencies
```bash
# Install frontend packages
cd client
npm install

# Install backend packages
cd ../server
npm install
```

### 3. Environment Variables
Create a `.env` file in the `server` directory:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

### 4. Run the Application
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
```

---

## 📁 Project Structure

```
AcePapers-Writers/
├── client/           # React frontend
├── server/           # Node/Express backend
├── .env.acepaper-writer      # Example environment file
├── README.md
```

---

## 🧪 API Testing with Postman
To simplify development and testing, we’ve provided a complete Postman collection that includes all API endpoints for the AcePapers Writers backend.

### 📥 How to Import the Postman Collection
Open Postman – Download it from postman.com if you haven’t already.

Navigate to: File → Import → Upload Files.

Select the file located at:

```bash
/docs/AcePapers_Writers_API.postman_collection.json
Click "Import" and the collection will appear in your sidebar.
```

### 📡 Using the Collection
The collection is organized by resource (e.g., Auth, Users, Orders, Payments, etc.).
  
Each request includes method, route, headers and body format.

For routes requiring authentication:

> Set your Bearer Token in the Authorization tab or define it as an environment variable.

### 🔐 Environment Setup (Optional)
To manage variables (like BASE_URL, JWT_TOKEN, etc.) easily:

- Go to the Environments tab in Postman.

- Click "Add" and create a new environment.

- Define variables such as:

```
BASE_URL = http://localhost:5000/api
JWT_TOKEN = <your_token_here>
Select this environment when sending requests.
```

---

## 🧠 Inspiration

AcePapers Writers streamlines the academic outsourcing model with transparency and user-friendliness. It empowers freelance writers and academic professionals with the tools to deliver, manage and monetize their services in a secure digital workspace.

---

## 👨‍💻 Author

**Knoph O. Ayieko**  
> Web Developer | IT Specialist | certified Virtual Assistant
> 
---

## 📃 License

This project is licensed under the MIT License. Feel free to contribute and customize.

---
