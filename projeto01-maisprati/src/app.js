const express = require('express');
const bodyParser = require('body-parser');
const hotelController = require('./controllers/hotelController');
const reservationController = require('./controllers/reservationController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/hotels', hotelController.addHotel);
app.get('/hotels/:city', hotelController.getHotelsByCity);
app.post('/reservations', reservationController.makeReservation);
app.delete('/reservations/:id', reservationController.cancelReservation);
app.get('/reservations', reservationController.listReservations);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});