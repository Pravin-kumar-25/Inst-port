export { default } from 'next-auth/middleware'

console.log("inside middleware");

export const config = {
    matcher: ["/profile" ,"/", "/posts"]
}