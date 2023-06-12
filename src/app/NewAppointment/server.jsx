'use server'

async function test(description, time, date ,state, userauthtoken) {
    //use the userauthtoken to get the user id and then use that to create the appointment
    const {prisma} = require("@/db");
    const user = await prisma.userdata.findUnique({
        where: {
            authtoken: userauthtoken,
        },
    })
    if (user != null) {
        const appointment = await prisma.appointments.create({
            data: {
                description,
                time,
                date,
                state,
                user_id: user.id,
            },
        })
        return appointment;
    }
}
export default test;