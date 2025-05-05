const hotelService = require('../services/hotelService');

const addHotel = (req, res) => {
    const { name, city, totalRooms } = req.body;
    const newHotel = hotelService.addHotel(name, city, totalRooms);
    res.status(201).json(newHotel);
};

const searchHotelsByCity = (req, res) => {
    const { city } = req.params;
    const hotels = hotelService.getHotelsByCity(city);
    res.status(200).json(hotels);
};

module.exports = {
    addHotel,
    searchHotelsByCity
};