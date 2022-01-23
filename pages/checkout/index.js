import PageLayout from "components/layout/PageLayout";
import CheckoutWrapper from "components/templates/wrappers/checkoutWrapper";
import Crumbs from "components/atoms/crumbs";

export default function CheckoutPage() {
	const depth = [
		{
			id: 1,
			path: "/checkout",
			text: "Checkout",
		},
	];
	return (
		<PageLayout
			title="Interior checkout  page"
			content="The checkpout page for classic interior design"
			uid={4}>
			<div>
				<Crumbs depth={depth} />
				<CheckoutWrapper />
			</div>
		</PageLayout>
	);
}
