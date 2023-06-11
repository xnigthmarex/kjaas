import {prisma} from "@/db"

const {createHash} = require('crypto');

export default async function newUser(req, res) {
  const authtoken = createHash('sha256').update(req.body.phonenumber).digest('base64').replace(/[\/=]/g, '');
  const { name, email, phonenumber} = req.body
  const password = createHash('sha256').update(req.body.password).digest('base64');
  const user = await prisma.userdata.create({
    data: { 
      name,
      email,
      authtoken,
      phonenumber,
      password,
    },
  })
  res.json(user)
}