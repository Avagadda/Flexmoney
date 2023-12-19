# Yoga Class Admission System

This project is a web application designed to manage admissions for monthly Yoga classes. It includes an admission form built using HTML/CSS and a backend using Node.js, Express, and MySQL. The system adheres to specific requirements detailed below.

## Problem Statement

Assume that you are the CTO of an outsourcing firm responsible for creating an admission form for monthly Yoga classes. The requirements for the form are:

- **Age Limit**: Only individuals between 18 to 65 years can enroll.
- **Fee Payment**: Participants must pay a monthly fee of 500/- Rs INR. They can enroll any day of the month but need to pay for the entire month.
- **Batch Selection**: There are four daily batches - 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants can choose any batch in a month and switch batches monthly.

## Implementation Details

The system consists of:

- **Frontend**: A simple form built using HTML/CSS (`register.html`) to collect user details.
- **Backend**: Implemented using Node.js and Express (`index.js`), interacting with a MySQL database (`connection.js`) to:
  - Validate user data and store it in the database.
  - Simulate payment processing using a mock function named `CompletePayment()`.
- **Database Design**: The ER diagram for the database is provided along with sql .


- **REST API**: The backend provides a REST API that:
  - Accepts user data, performs basic validations, and stores it in the database.
  - Utilizes a mock `CompletePayment()` function to simulate payment processing.
  - Returns responses to the frontend based on the payment response from `CompletePayment()`.

## Installation

Follow these steps to set up and run the application:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/yoga-admission-system.git
    cd yoga-admission-system
    ```

2. **Install dependencies:**

    Ensure Node.js and MySQL are installed, then run:

    ```bash
    npm install
    ```

3. **Database Configuration:**

    - Create a MySQL database named `yoga_class`.
    - Update credentials in `connection.js`.

4. **Run the server:**

    ```bash
    node index.js
    ```

5. **Access the application:**

    Open your browser and navigate to `http://localhost:5000`.

## Usage

1. **Registration Form:**

    Fill out the form in `register.html` to enroll for Yoga classes.

2. **Payment and Enrollment:**

    Upon form submission, the system simulates payment processing and stores enrollment details based on the requirements.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.
