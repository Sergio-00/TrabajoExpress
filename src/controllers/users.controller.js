import prisma from "../prismaClient.js";

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.users.create({
    data: {
      name,
      email,
    },
  });
  res.status(201).json(newUser);
};

export const getAllUsers = async (req, res) => {
  const getUsers = await prisma.users.findMany();
  res.status(200).json(getUsers);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const getUser = await prisma.users.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json(getUser);
};
