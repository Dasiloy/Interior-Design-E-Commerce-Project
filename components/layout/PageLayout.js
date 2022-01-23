import GenLayout from "components/atoms/GenLayout";
import { Layout } from "antd";
import Navbar from "components/atoms/navbar";
import "twin.macro";

function PageLayout({ title, content, uid, children }) {
	const user = {
		firstname: "Dasiloy",
		lastname: "john",
		_id: "erqsfdftrkj1200",
	};
	const Header = Layout.Header;
	const Content = Layout.Content;
	const Footer = Layout.Footer;
	return (
		<GenLayout title={title} content={content}>
			<Header tw="px-0! py-0! mb-2">
				<Navbar user={user} uid={uid} />
			</Header>
			<Content tw="min-h-screen w-screen">{children}</Content>
			<Footer tw="px-5 lg:px-20">hello from footer</Footer>
		</GenLayout>
	);
}

export default PageLayout;
