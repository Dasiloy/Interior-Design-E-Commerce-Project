import PageLayout from "components/layout/PageLayout";
import AboutWrapper from "components/templates/wrappers/aboutWrapper";
import Crumbs from "components/atoms/crumbs";


export default function AboutPage() {
	const depth = [
		{
			id: 1,
			path: "/about",
			text: "About",
		},
	];
	return (
		<PageLayout
			title="Interior about page"
			content="The about page for classic interior design"
			uid={2}>
			<div>
				<Crumbs depth={depth} />
				<AboutWrapper />
			</div>
		</PageLayout>
	);
}
