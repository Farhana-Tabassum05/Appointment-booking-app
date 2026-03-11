#  Appointment Booking System

A clean, responsive, and interactive front-end application for managing schedules. This project demonstrates efficient DOM manipulation and state management using Vanilla JavaScript.


##  Features

* **Dynamic Booking:** Add appointments instantly with a real-time table update.
* **Smart Venue Assignment:** Automatically assigns venues (Block A, B, or C) based on the selected time slot.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views using CSS Media Queries.
* **Form Validation:** Includes error handling to ensure all user data is captured before submission.
* **Modern UI:** Features a sleek "Glassmorphism-lite" aesthetic with linear gradients and smooth hover transitions.

##  Tech Stack

* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:** Custom styling featuring Flexbox, transitions, and responsive breakpoints.
* **JavaScript (ES6):** Functional logic, event handling, and dynamic UI rendering.

##  Getting Started

Since this is a client-side application, there are no dependencies to install.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Farhana-Tabassum05/appointment-booking-system.git
    ```
2.  **Open the project:**
    Simply double-click the `appointment-booking-system.html` file to view it in your preferred web browser.

##  How It Works

The application uses a central `appointments` array to store data. When the `bookAppointment()` function is triggered:
1.  It validates the input fields.
2.  It maps the `timeSlot` ID to a human-readable time and a specific venue using a `switch` statement.
3.  It pushes the new object to the array and triggers `updateTable()`, which re-renders the UI efficiently.
