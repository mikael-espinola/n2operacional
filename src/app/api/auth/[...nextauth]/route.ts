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
            if(credentials.user === "mikael.espinola" && credentials.password === "123"){
                return {
                    id: "1",
                    name: "Mikael Espínola"
                }
            }
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST}