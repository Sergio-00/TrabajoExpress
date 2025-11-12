import prisma from "../prismaClient.js";

export const createTask = async (req, res) => {
  const { title, userId } = req.body;
  const newTask = await prisma.tasks.create({
    data: {
      title,
      userId,
    },
  });
  res.status(201).json(newTask);
};

export const getAllTasks = async (req, res) => {
  const tasks = await prisma.tasks.findMany();
  res.status(200).json(tasks);
};

export const getTasksByUser = async (req, res) => {
  const { userId } = req.params;
  const tasks = await prisma.tasks.findMany({
    where: {
      userId: parseInt(userId),
    },
  });
  res.status(200).json(tasks);
};
