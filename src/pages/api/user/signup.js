import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await createUser(req, res)
    } else if (req.method === 'DELETE') {
        await deleteUser(req, res)
    } else {
        res.status(405).json({ error: `${req.method} Method not allowed` })
    }
}

export const createUser = async (req, res) => {
    const body = req.body;
    if (!body || !body.data) {
        res.status(400).json({ error: 'Bad request: Body cannot be null' })
        return;
    }
    const { name, email, password } = body.data;
    if (!name || !email || !password) {
        res.status(400).json({ error: 'Bad request: Any of the following fields are missing - name,email,password' })
        return;
    }

    try {
        const result = await prisma.user.create({
            data: { name, email, password }
        })

        res.status(201).json({
            message: 'Account created successfully',
            user: {
                email: result.email,
                userId: result.user_id
            }
        })
        return;
    } catch (error) {
        res.status(500).json({
            error: 'Internel server error',
            message: "Error occurred while creating account"
        })
        return;
    }
}

export const deleteUser = async (req, res) => {
    const body = req.body;
    if (!body) {
        res.status(400).json({ error: 'Bad request: Body cannot be null' })
    }

    const { email, password } = body;
    if (!email || !password) {
        res.status(400).json({ error: 'Bad request: Any of the following fields are missing - email,password' })
    }
    res.status(204)
}