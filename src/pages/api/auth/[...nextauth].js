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
                return {
                    id: user.user_id,
                    name: user.name,
                    email: user.email,
                    image: user.profile_pic_url
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            console.log('session callback', session, token);
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }
            return session
        },
        async jwt({ token, user }) {
            console.log('jwt callback ', { token, user });
            if (user) {
                return {
                    ...token,
                    id: user.id
                }
            }
            return token;
        }
    },
    pages: {
        signIn: "/sign-in"
    }
}

const handler = (req, res) => NextAuth(req, res, authOption)

export default handler