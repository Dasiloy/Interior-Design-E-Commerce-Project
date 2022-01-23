import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "Next-auth/providers/google";

export default NextAuth({
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: "/auth/signin",
		// error: "/auth/error", // Error code passed in query string as ?error=
		// verifyRequest: "/auth/verify-request", // (used for check email message)
		// newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
	},
});
