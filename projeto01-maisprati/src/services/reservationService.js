const Reservation = require('../models/reservation');
const Hotel = require('../models/hotel');
const idGenerator = require('../utils/idGenerator');

let reservations = [];

const createReservation = (hotelId, clientName) => {
    const hotel = Hotel.findById(hotelId);
    if (!hotel || hotel.availableRooms <= 0) {
        throw new Error('Hotel not found or no available rooms.');
    }

    const reservationId = idGenerator.generateId();
    const newReservation = new Reservation(reservationId, hotelId, clientName);
    reservations.push(newReservation);
    hotel.availableRooms -= 1;

    return newReservation;
};

const cancelReservation = (reservationId) => {
    const reservationIndex = reservations.findIndex(res => res.reservationId === reservationId);
    if (reservationIndex === -1) {
        throw new Error('Reservation not found.');
    }

    const reservation = reservations[reservationIndex];
    const hotel = Hotel.findById(reservation.hotelId);
    hotel.availableRooms += 1;

    reservations.splice(reservationIndex, 1);
};

const listReservations = () => {
    return reservations.map(reservation => {
        const hotel = Hotel.findById(reservation.hotelId);
        return {
            reservationId: reservation.reservationId,
            hotelName: hotel.name,
            clientName: reservation.clientName,
        };
    });
};

module.exports = {
    createReservation,
    cancelReservation,
    listReservations,
};