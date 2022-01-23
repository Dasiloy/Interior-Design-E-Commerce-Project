import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors/userSelector";
import PageLayout from "components/layout/PageLayout";
import HomeWrapper from "components/templates/wrappers/homeWrapper";

export default function Home() {
	const user = useSelector(userSelector);

	return (
		<PageLayout
			title="Interior homepage"
			content="The homepage for classic interior design"
			uid={1}>
			<HomeWrapper />
		</PageLayout>
	);
}
