// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  a=['a','b','c']
  console.log(a)
  res.status(200).json({ a})
}
