# Invoice App
[![forthebadge made-with-typescript](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://www.typescriptlang.org/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<img src="https://github.com/user-attachments/assets/d1820dd9-9dba-4da0-bf5d-bc047398e941" alt="Invoice App" width="400" height="400">

A responsive Invoice Management Application developed using React, TypeScript, Redux, and Firebase, featuring user authentication, invoice creation, and dashboard visualization. Leveraging Vercel’s CI/CD pipeline for automated build and deployment ensures efficient application delivery. Check out the live demo of the application [here](invoiceapp-web.vercel.app/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Folder Structure](#folder-structure)

## Features <a name="features"></a>

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Invoice Management**: Create, view, and delete invoices.
- **Dashboard**: Visualize overall and monthly collection with charts.
- **State Management**: Managed using Redux.
- **Profile Management**: Update profile information and company logo.
- **CI/CD Integration**: Automated deployment with Vercel.

## Technologies Used <a name="technologies-used"></a>

- **Frontend**: React, TypeScript
- **Backend**: Firebase Firestore, Firebase Functions
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel

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

## Screenshots <a name="screenshots"></a>
<img width="1070" alt="image" src="https://github.com/user-attachments/assets/9d0ae01f-b1b4-4ab5-b7f4-6ecab80a3708">
<img width="1070" alt="image" src="https://github.com/user-attachments/assets/1f837324-429d-4be4-b868-4e85c8a8bb18">


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
