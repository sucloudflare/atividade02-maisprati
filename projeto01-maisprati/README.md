# Hotel Reservation System

## Overview
The Hotel Reservation System is a web application that allows users to manage hotel bookings. Users can add hotels, search for hotels by city, make reservations, and cancel them. The system ensures that reservations are only made when rooms are available.

## Features
- **Add Hotels**: Users can add new hotels to the system with details such as name, city, total rooms, and available rooms.
- **Search Hotels by City**: Users can list all available hotels in a specific city.
- **Make Reservations**: Users can make reservations at hotels, which decreases the number of available rooms.
- **Cancel Reservations**: Users can cancel reservations, which increases the number of available rooms.
- **List Reservations**: Users can view all reservations along with hotel and client details.

## Project Structure
```
hotel-reservation-system
├── src
│   ├── app.js                  # Entry point of the application
│   ├── models
│   │   ├── hotel.js            # Hotel model
│   │   └── reservation.js       # Reservation model
│   ├── controllers
│   │   ├── hotelController.js   # Controller for hotel-related requests
│   │   └── reservationController.js # Controller for reservation-related requests
│   ├── services
│   │   ├── hotelService.js      # Service for hotel management
│   │   └── reservationService.js # Service for reservation management
│   └── utils
│       └── idGenerator.js       # Utility for generating unique IDs
├── package.json                 # NPM configuration file
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hotel-reservation-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
node src/app.js
```
The server will start and you can access the API endpoints for managing hotels and reservations.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.