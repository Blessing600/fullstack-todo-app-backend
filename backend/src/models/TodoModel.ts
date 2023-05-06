import { Schema, model, Model, Document } from 'mongoose';

interface ITodoModel extends Model<ITodo> {}

interface ITodo extends Document {
  text: string;
}

const todoSchema = new Schema<ITodo>({
  text: {
    type: String,
    required: true,
  },
});

const TodoModel: ITodoModel = model<ITodo, ITodoModel>('Todo', todoSchema);

export default TodoModel;
