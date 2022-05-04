// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var a=['a','b','c','d']
  console.log(a)
  res.status(200).json({ a})
}
