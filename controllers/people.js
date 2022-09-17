const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a inputs" });
  }
  return res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name, id } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }
  return res
    .status(201)
    .json({ success: true, data: [...people, { id, name }] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(400).json({
      success: false,
      msg: "Person not found",
    });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    res.status(400).json({
      success: false,
      msg: `Person not Found whose id ${req.params.id}`,
    });
  }
  const newPeople = people
    .filter((person) => person !== Number(req.params.id))
    .map((person) => person.name);
  const data = {
    success: true,
    msg: `Person with id : ${req.params.id} is  DELETED SUCCESSFULLY !!`,
    data: newPeople,
  };
  return res.status(200).json(data);
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
