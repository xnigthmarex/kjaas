import {prisma} from "@/db"
import {createHash} from 'crypto';

export default async function newUser(req, res) {
    //find unique email and then check password
    const { phonenumber, password } = req.body
    const user = await prisma.userdata.findUnique({
        where: {
            phonenumber,
        },
    })
    if (user != null && user.password === createHash('sha256').update(password).digest('base64')) {
        res.json(user.authtoken);
    }
    else {
        res.json("user not found")
    }
} 