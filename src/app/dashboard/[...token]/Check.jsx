'use server';
import {prisma} from "@/db"
export default async function test(auth) {
  let authtoken = auth[0].toString();
    const user = await prisma.userdata.findUnique({
        where: {
            authtoken,
        },
    })
    if (user != null) {
        return user;
    }
    else {
        return "Not found Error";
    }
}
