// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../lib/dbConnect'
import Movie from '../../../models/Movie'



export default async function handler(req, res) {
  const { method } = req
 
  await dbConnect()
 
  switch (method) {
    case 'GET':
      try {
          const {id}=req.query
          console.log(req.query)
      const movie=await Movie.findById(id)
 res.status(200).json({ success: true, data: movie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'POST':
        try {
          const password = await Movie.findById(
            req.body.id
          ) /* create a new model in the database */
          password.ticked=true
await password.save()
passwords=await Movie.find()
          res.status(201).json({ success: true, data: passwords })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }