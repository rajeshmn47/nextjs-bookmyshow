import dbConnect from '../../lib/dbConnect'
import Movie from '../../models/Movie'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        var movies = await Movie.find({})
        res.status(200).json({ success: true, data:movies })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
     
     
        res.status(201).json({ success: true, data: 'pet' })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}