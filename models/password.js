import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const Password = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  ticked: {
    type: Boolean,
    required: [true, 'Please specify the species of your pet.'],
    default:false
  },

})

export default mongoose.models.Password || mongoose.model('Password', Password)