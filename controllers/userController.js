import { v4 as uuidv4 } from 'uuid';

let users = [];

const getUsers = (req, res) => {
  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push({...user, id: uuidv4()});

  res.send(`User with the name ${user.firstName} added to the database.`);
};

const getUserId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find(user => user.id === id);

  res.send(foundUser);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find(user => user.id === id);

  if(firstName) user.firstName = firstName;
  if(lastName) user.lastName = lastName;
  if(age) user.age = age;

  res.send(`User ${id} has been updated.`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);

  res.send(`User with ID ${id} has been deleted from the database.`);
};

export { createUser, getUsers, getUserId, updateUser, deleteUser };
