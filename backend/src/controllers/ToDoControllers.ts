const ToDoModel = require('../models/ToDoModel');
import { ITodo } from '../types/todo';
import TodoModel from '../models/TodoModel';
import { Request, Response } from 'express';

export const getToDo = async (req: Request, res: Response): Promise<void> => {
  try {
    const toDo: ITodo[] = await TodoModel.find();
    res.status(200).json({ toDo });
  } catch (error) {
    throw error;
  }
};

export const saveToDo = async (req: Request, res: Response): Promise<void> => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data: ITodo) => {
    console.log('Added Successfully.......');
    console.log(data);
    res.send(data);
  });
};

export const updateToDo = async (req: Request, res: Response) => {
  const { _id, text } = req.body;

  try {
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send('Updated Successfully.....');
  } catch (error) {
    console.log(error);
  }
};

export const deleteToDo = async (req: Request, res: Response) => {
  const { _id } = req.body;

  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.send('Delete Successfully.....');
  } catch (error) {
    console.log(error);
  }
};
