import mongoose from 'mongoose';

export function connectToDatabase() {
  const url = 'mongodb+srv://sgaye:SheriffGaye@cluster0.yzonjwz.mongodb.net/users?retryWrites=true&w=majority';

  mongoose.Promise = global.Promise;

  mongoose.connect(url);

  mongoose.connection.on('connected', () => {
    console.log('Connected to the MongoDB database');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to the MongoDB database:', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from the MongoDB database');
  });
}


