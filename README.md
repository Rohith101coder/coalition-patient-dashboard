# Patient Dashboard

This project is a frontend implementation of the Coalition Technologies Patient Dashboard assessment. The goal of this task was to convert the provided Adobe XD design into a responsive single-page healthcare dashboard and populate the UI using the provided Patient Data API.

The application was developed using React with Vite and styled using normal CSS.

## Features

- Responsive healthcare dashboard UI
- API integration using Fetch API
- Dynamic patient data rendering
- Blood pressure chart using Chart.js
- Diagnosis history section
- Diagnostic list table
- Patient profile details
- Lab results section
- Reusable React component structure

## Technologies Used

- React
- Vite
- CSS
- Chart.js
- React Icons

## Project Structure

```bash
src
│
├── assets
├── components
├── services
├── styles
├── App.jsx
└── main.jsx



API Integration

The application fetches patient data from the Coalition Technologies Patient Data API using Basic Authentication. Only the data for Jessica Taylor is displayed as per the task instructions.

Running the Project

Clone the repository and install dependencies:

npm install

Start the development server:

npm run dev

Build for production:

npm run build
Notes
The UI was designed to closely match the provided Adobe XD template.
Focus was given to layout accuracy, responsiveness, reusable components, and clean frontend structure.
Only the interactions required in the task were implemented.