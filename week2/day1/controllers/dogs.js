const Dog = require("../models/dog");

const getDogs = (req, res) => {
  Dog.find({})
    .then((dogs) => {
      res.status(200).send(dogs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getDog = (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  Dog.findById(_id)
    .then((dog) => {
      if (!dog) {
        return res.status(404).send();
      }
      res.status(200).send(dog);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const postDogs = (req, res) => {
  let dog = new Dog(req.body);
  dog
    .save()
    .then((dog) => {
      res.status(201).send(dog);
      console.log("dog saved correctly");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const putDogs = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "owner", "breed", "color", "vaccinated"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!!!" });
  }
  try {
    const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!dog) {
      return res.status(404).send();
    }

    res.send(dog);
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteDogs = async (req, res) => {
  try {
    const dog = await Dog.findByIdAndDelete(req.params.id);
    if (!dog) {
      return res.status(404).send();
    }
    res.send(dog);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { getDogs, getDog, postDogs, putDogs, deleteDogs };
