import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  genre: {
    type: Array,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  ratings: {
    type:Array,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  cast: {
    type: Array,
  },
  crew: {
    /* Boolean poddy_trained value, if applicable */

    type:Array,
  },
  image_url: {
    /* List of dietary needs, if applicable */

    type:String,
  },
  release_date: {
    /* Url to pet image */

    required: [true, 'Please provide an image url for this pet.'],
    type: Date,
  },
  description: {
    /* List of things your pet likes to do */

    type: String,
  },
  likes: {
    /* List of things your pet does not like to do */

    type: Array,
  },
})

export default mongoose.models.Movie || mongoose.model('Movie',MovieSchema)