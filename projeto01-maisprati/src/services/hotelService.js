const hotels = [];

const addHotel = (hotel) => {
    hotels.push(hotel);
};

const getHotelsByCity = (city) => {
    return hotels.filter(hotel => hotel.city === city);
};

const checkAvailability = (hotelId) => {
    const hotel = hotels.find(h => h.id === hotelId);
    return hotel ? hotel.availableRooms > 0 : false;
};

const updateRoomCount = (hotelId, count) => {
    const hotel = hotels.find(h => h.id === hotelId);
    if (hotel) {
        hotel.availableRooms += count;
    }
};

module.exports = {
    addHotel,
    getHotelsByCity,
    checkAvailability,
    updateRoomCount
};