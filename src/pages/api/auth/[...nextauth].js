import prisma from "@/lib/prisma";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOption = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    placeholder: "Enter your email",
                    typeL: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password"
                }
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                
                console.log("user in authorize ", user)
                return user;
            }
        })
    ],
    callbacks: {
        session: ({session,token}) => {
            console.log('session callback', session);
            return {
                ...session
            }
        },
        jwt: ({ token, user}) => {
            console.log('jwt callback ', {token , user});
        }
    },
    pages: {
        signIn: "/sign-in"
    }
}

const handler = (req, res) => NextAuth(req, res, authOption)

export default handler