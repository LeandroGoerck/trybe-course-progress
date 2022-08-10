import { connect, Schema } from 'mongoose';

connect('mongodb://localhost:27017/model_example');

// Criamos uma interface em TypeScript para representar nosso schema:

interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true }});