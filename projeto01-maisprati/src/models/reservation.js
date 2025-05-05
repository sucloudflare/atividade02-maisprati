class Reservation {
    constructor(reservationId, hotelId, clientName) {
        this.reservationId = reservationId;
        this.hotelId = hotelId;
        this.clientName = clientName;
    }

    static createReservation(reservationId, hotelId, clientName) {
        return new Reservation(reservationId, hotelId, clientName);
    }

    static cancelReservation(reservation) {
        // Logic to cancel the reservation
        return reservation;
    }
}

export default Reservation;