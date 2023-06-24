import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { email, id } = req.query;
        if (!email && !id) {
            res.status(400).json({ Error: "Bad request: email or id is required" })
            return;
        }
        const result = await prisma.user.findUnique({
            where: {
                email: email
            },

        })
        if (!result) {
            res.status(200).json({
                user: false,
                message: `No user found with the provided params`
            })
            return;
        }
        const userWithoutPassword = exclude(result, ['password'])
        console.log(userWithoutPassword);
        res.status(200).json({
            user: true,
            data: { ...userWithoutPassword }
        })
        return;
    }
}

const exclude = (user, keys) => {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    );
}