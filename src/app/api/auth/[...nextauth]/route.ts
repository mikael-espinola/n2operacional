import users from "@/data/users";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



const handler = nextAuth({
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            user: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials) {
                return null
            }
            const currentUser = users.find((user) => user.user === credentials.user && user.password === credentials.password)
            if(currentUser){
                return {
                    id: `${currentUser.id}`,
                    name: `${currentUser.name}`,
                    email: `${currentUser.user}`
                }
            }
            return null
          }
        })
      ],
})

export { handler as GET, handler as POST}