import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);

// Define the schema for the data
const helloSchema = new mongoose.Schema({
        language: String,
        greeting: String
});

// Create a model.  This is what provides the nice API to
// manipulate the database.
const HelloModel = mongoose.model ('messages', helloSchema);

// Make the model and schema available
module.exports = HelloModel;
