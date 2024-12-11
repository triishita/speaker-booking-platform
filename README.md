# Speaker Booking Platform

This project is a backend platform that allows users to browse speaker profiles, book speaker sessions, and manage session bookings effectively. The platform includes user and speaker authentication, session booking, time slot management, email notifications, and Google calendar event integration.

### Objective

The goal of this project is to develop a platform where users can book speaker sessions from available speaker listings. Users can view speaker profiles, check their availability, and book sessions based on their preferences.

### Functionalities Implemented:

1. **User and Speaker Profiles:**
   - **Signup**: Users and speakers can create profiles with basic details (first name, last name, email, and password). OTP (One-Time Password) verification is implemented for user verification.
   - **Login Authentication**: After successful signup, users and speakers can log in. Upon successful login, an authentication token is generated and returned to the client.
   - **Role-based Access Control**: The platform ensures that only authorized users (based on user type) can access protected routes.

2. **Speaker Listing and Expertise:**
   - **Speaker Profile Setup**: Speakers can create their profiles by specifying their expertise and price per session. This feature is available only for authenticated speakers.

3. **Session Booking:**
   - **Speaker Listings**: Users can view a list of available speakers.
   - **Session Booking**: Logged-in users can book sessions with speakers based on their availability (9 AM to 4 PM). Time slots are available in 1-hour intervals.

4. **Time Slot Blocking:**
   - When a session is booked, the corresponding time slot is blocked to prevent double bookings.

5. **Email Notifications and Calendar Events:**
   - **Email Notifications**: After a successful booking, email notifications are sent to both the speaker and the user.
   - **Google Calendar Event**: A Google Calendar invite is sent to both parties to remind them of the scheduled session.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: SQL (MySQL)
- **Authentication**: JWT (JSON Web Token) for user and speaker authentication
- **Email**: Nodemailer for sending email notifications
- **Google Calendar Integration**: Google APIs
- **Environment Configuration**: dotenv for managing environment variables
