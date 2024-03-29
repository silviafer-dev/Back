const { faker } = require("@faker-js/faker");
require("./db");
const User = require("./models/user-model");
const Room = require("./models/room-model");
const Contact = require("./models/contact-model");
const Booking = require("./models/booking-model");

// for (let i = 0; i < 10; i++) {
//   const users = {
//     full_name: faker.name.fullName(),
//     job_title: faker.helpers.arrayElement([
//       "Manager",
//       "Room Service",
//       "Reception",
//     ]),
//     email: faker.internet.email(),
//     photo: faker.image.avatar(),
//     phone_number: faker.phone.number("+34 ### ## ##"),
//     password: "12345",
//     start_date: faker.date.recent(),
//     working_functions: faker.lorem.words(),
//     working_situation: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
//   };
//   const newUser = new User(users);

//   newUser.save();
// }
// let rooms = [];
// for (let i = 0; i < 20; i++) {
//   const room = {
//     photo:
//       "https://imgs.search.brave.com/e7xVP4YhXrsOBU9Q9Q0q_l0J89nIJI8ZqgOWbo0Xato/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY5NTcy/MzMuanBn",
//     room_type: faker.helpers.arrayElement([
//       "Double Superior",
//       "Single Bed",
//       "Suite",
//       "Double Bed",
//     ]),
//     room_number: faker.random.numeric(2),
//     facilities: faker.helpers.fake("WiFi, Cleaning, Breakfast, AC... "),
//     price: faker.finance.amount(200, 1000, 2),
//     offer_price: faker.finance.amount(200, 500, 2),
//     description: faker.lorem.words(),
//     status: faker.helpers.arrayElement(["AVAILABLE", "BOOKED"]),
//   };
//   const newRoom = new Room(room);
//   newRoom.save();
//   rooms.push(newRoom);
// }

// for (let i = 0; i <= 1; i++) {
//   const contacts = {
//     photo: faker.image.avatar(),
//     date: faker.date.between(
//       "2015-10-01T00:00:00.000Z",
//       "2022-07-01T00:00:00.000Z"
//     ),
//     customer: faker.name.fullName(),
//     email: faker.internet.email(),
//     phone_number: faker.phone.number("+34 ### ## ##"),
//     title: faker.lorem.words(),
//     comment: faker.lorem.words(50),
//   };
//   const newContact = new Contact(contacts);

//   newContact.save();
// }

for (let i = 0; i < 17; i++) {
  const bookings = {
    full_name: faker.name.fullName(),
    order_date: faker.date.recent(),
    check_in: faker.date.between(
      "2023-01-01T00:00:00.000Z",
      "2023-03-01T00:00:00.000Z"
    ),
    check_out: faker.date.between(
      "2023-03-01T00:00:00.000Z",
      "2023-04-22T00:00:00.000Z"
    ),
    special_request: faker.lorem.words(),
    status: faker.helpers.arrayElement([
      "In progress",
      "Check In",
      "Check Out",
    ]),

    room_type: faker.helpers.arrayElement([
      "Single Bed",
      "Double Superior",
      "Suite",
      "Double Bed",
    ]),
    room_number: faker.datatype.number({
      min: 1,
      max: 50,
    }),
  };
  const newBooking = new Booking(bookings);

  newBooking.save(newBooking);
}
