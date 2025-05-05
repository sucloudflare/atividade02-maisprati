class Hotel {
    constructor(id, name, city, totalRooms) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.totalRooms = totalRooms;
        this.availableRooms = totalRooms;
    }

    addHotel(name, city, totalRooms) {
        this.name = name;
        this.city = city;
        this.totalRooms = totalRooms;
        this.availableRooms = totalRooms;
    }

    checkAvailability() {
        return this.availableRooms > 0;
    }

    updateRoomCount(count) {
        this.availableRooms += count;
    }
}

module.exports = Hotel;