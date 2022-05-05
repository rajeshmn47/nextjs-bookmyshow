import dbConnect from '../../lib/dbConnect'
import Movie from '../../models/movie'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        var pets = await Password.find({})
        res.status(200).json({ success: true, data:pets })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const pet = await Password.findById(
          req.body.id
        ) /* create a new model in the database */
        pet.ticked=!pet.ticked
        await pet.save()
        res.status(201).json({ success: true, data: pet })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}