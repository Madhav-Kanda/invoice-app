# Invoice App

![Logo](https://via.placeholder.com/150)

A comprehensive Invoice Management Application built with React, Firebase, and TypeScript, designed for software engineering internships to showcase front-end and back-end integration, state management with Redux, and responsive UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features <a name="features"></a>

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Invoice Management**: Create, view, and delete invoices.
- **Dashboard**: Visualize overall and monthly collection with charts.
- **Profile Management**: Update profile information and company logo.
- **Responsive Design**: Mobile-friendly and responsive UI.
- **TypeScript**: Strongly typed code for better maintainability.
- **State Management**: Managed using Redux.
- **CI/CD Integration**: Automated deployment with Vercel.

## Technologies Used <a name="technologies-used"></a>

- **Frontend**: React, TypeScript, Redux, Material-UI
- **Backend**: Firebase Firestore, Firebase Functions
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel
- **Testing**: Jest
- **Build Tools**: Webpack, Babel
- **Code Quality**: ESLint, Prettier

## Installation <a name="installation"></a>

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/invoice-app.git
   cd invoice-app

2. **Install dependencies::**
   ```bash
   npm install

3. Set up Firebase:

- Create a Firebase project on Firebase Console.
- Enable Firestore, Authentication, and Storage.
- Copy your Firebase config and paste it into src/firebase.ts.

4. Run the app:
   ```bash
   npm start

## Usage <a name="usage"></a>

1. Register: Create a new account.
2. Login: Sign in with your credentials.
3. Dashboard: View your dashboard with overall and monthly collections.
4. Invoices: Create, view, and manage invoices.
5. Settings: Update your profile information and company logo.


## Folder Structure <a name="folder-structure"></a>

```plaintext
invoice-app
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── invoice.jpg
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── dashboard.css
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── InvoiceDetail.tsx
│   │   │   ├── Invoices.tsx
│   │   │   ├── NewInvoice.tsx
│   │   │   └── Setting.tsx
│   │   ├── login/
│   │   │   ├── Login.css
│   │   │   └── Login.tsx
│   │   ├── register/
│   │       ├── Register.css
│   │       └── Register.tsx
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store.ts
│   ├── App.css
│   ├── App.tsx
│   ├── firebase.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
