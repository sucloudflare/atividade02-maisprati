const reservationService = require('../services/reservationService');

const makeReservation = (req, res) => {
    const { hotelId, clientName } = req.body;
    const result = reservationService.createReservation(hotelId, clientName);
    if (result.success) {
        res.status(201).json(result.reservation);
    } else {
        res.status(400).json({ message: result.message });
    }
};

const cancelReservation = (req, res) => {
    const { reservationId } = req.params;
    const result = reservationService.cancelReservation(reservationId);
    if (result.success) {
        res.status(200).json({ message: 'Reservation canceled successfully.' });
    } else {
        res.status(400).json({ message: result.message });
    }
};

const listReservations = (req, res) => {
    const reservations = reservationService.getAllReservations();
    res.status(200).json(reservations);
};

module.exports = {
    makeReservation,
    cancelReservation,
    listReservations
};