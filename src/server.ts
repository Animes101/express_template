import mongoose from 'mongoose';
import app from './app';
import config from './app/config/index.js';

const PORT = config.port;
const uri: string = config.mongoURI;

async function bootstrap() {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server Error', error);
  }
}

bootstrap();
