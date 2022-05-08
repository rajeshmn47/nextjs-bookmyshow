import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const TheaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  place: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  movies_playing:  [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      seats: [
        {
        type: String,
        required: true,
      }],
    },
  ],
  coordinates: {
    type: String,
  },
  city: {
    type:String,
  },
  image_url: {
    type:String,
  },
})

export default mongoose.models.Movie || mongoose.model('Movie',MovieSchema)