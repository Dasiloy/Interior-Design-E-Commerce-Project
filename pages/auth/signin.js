import Signin from "components/templates/signin";
import { getProviders } from "next-auth/react";

function SigninPage({ providers }) {
	const googleProvider = providers?.facebook;
	return <Signin providerId={googleProvider.id} />;
}

export default SigninPage;

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
