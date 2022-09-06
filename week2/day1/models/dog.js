const { Schema, model } = require("mongoose");

const DogSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  owner: {
    type: String,
    required: [true, "El propietario es obligatorio"],
  },
  breed: {
    type: String,
    required: [true, "La raza es obligatoria"],
  },
  color: {
    type: String,
    required: [true, "El color es obligatorio"],
  },
  vaccinated: {
    type: Boolean,
    default: false,
    required: [true, "La vacuna es obligatoria"],
  },
});

module.exports = model("Dog", DogSchema);

// {
//   name: "dog1",
//   owner: "owner1",
//   breed: "breed1",
//   color: "color1",
//   vaccinated: true,
// }
