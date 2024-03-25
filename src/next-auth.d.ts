import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            name: string,
            telephoneNumber: string,
            email: string,
            role: string,
            balance: string,
            token: string
        }
    }
}