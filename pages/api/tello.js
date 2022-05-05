// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect'
import Password from '../../models/password'



export default async function handler(req, res) {
  const { method } = req
 
  await dbConnect()
 
  switch (method) {
    case 'GET':
      try {
      
        res.status(200).json({ success: true, data: 'sorrybro' })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'POST':
        try {
          const password = await Password.findById(
            req.body.id
          ) /* create a new model in the database */
          password.ticked=true
await password.save()
passwords=await Password.find()
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