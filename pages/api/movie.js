// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect'
import Movie from '../../models/Movie'



export default async function handler(req, res) {
  const { method } = req
 
  await dbConnect()
 
  switch (method) {
    case 'GET':
      try {
     const movie=await Movie.create({
         name:'KGF2',genre:[Action,Thriller],img_url:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyMzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311733-wsbcgbzuzs-portrait.jpg',
         description:'Its continuation of KGF1 after rocky kills garuda in the first movie rocky continues doing great things in KGF 2'
     }) 
        res.status(200).json({ success: true, data:movie })
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