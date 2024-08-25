class Seat {
  [seatNumber: string]: string;
}

const seat = new Seat();
console.log((seat.name = "mgmg"));
console.log((seat["age"] = "12"));
console.log(seat);

// static member
class Ride {
  static activeRide = 2; // dont need to create instance
}
console.log(Ride.activeRide);
