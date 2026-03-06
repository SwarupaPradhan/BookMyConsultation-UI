# BookMyConsultation-UI

Frontend application for the **Book My Consultation** system built with **React**.  
This project allows users to view doctors, book consultations, and view all scheduled consultations.

It works together with the backend API built using **Spring Boot**.

Backend Repository:  
https://github.com/SwarupaPradhan/BookMyConsultation-backend

## Technologies Used

- React
- JavaScript
- HTML / CSS
- Fetch API
- Spring Boot REST API (backend)

## Features

- View available doctors
- Book a consultation appointment
- Display list of consultations
- Connects to backend REST API
- Simple UI with reusable components

## Project Structure

src
├── components
│ └── Navbar.js
│
├── pages
│ ├── Home.js
│ ├── DoctorList.js
│ └── AppointmentForm.js
│
├── ConsultationList.js
├── App.js
└── index.js

## Getting Started
### 1 Clone the repository
git clone https://github.com/SwarupaPradhan/BookMyConsultation-UI.git

### 2 Navigate to the project folder
cd BookMyConsultation-UI

### 3 Install dependencies
npm install

### 4 Start the application

npm start
The application will run at: http://localhost:3000

## Backend API

Make sure the backend server is running before starting the frontend.
Backend runs on:
http://localhost:8080
Example API endpoint used:
GET /api/consultations
POST /api/appointments

## Future Improvements

- Update and delete consultations
- Form validation
- Better UI styling
- Add authentication

## Author
Swarupa Pradhan
GitHub  
https://github.com/SwarupaPradhan
LinkedIn  
https://www.linkedin.com/in/swarupapradhan8


## Project Structure
