// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {events}=require('./data.json');

export default function handler(req, res) {
     let evt=events.filter(event=>event.slug===req.query.slug)

  if(req.method==='GET'){
    res.status(200).json({ evt })
  }else{
    res.setHeader('Allow',['GET'])
    res.status(405).json({message:`method ${req.method} is not valid`})
  }
}



