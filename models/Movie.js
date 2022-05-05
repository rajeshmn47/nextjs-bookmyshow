import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
  },
  genre: {
    type: Array,
  },
  ratings: {
    type:Array,
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