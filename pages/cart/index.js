import PageLayout from "components/layout/PageLayout";
import CartWrapper from "components/templates/wrappers/cartWrapper";
import Crumbs from "components/atoms/crumbs";

export default function CartPage() {
	const depth = [
		{
			id: 1,
			path: "/cart",
			text: "Cart",
		},
	];
	return (
		<PageLayout title="Interior cart page" content="The cart page for classic interior design">
			<div>
				<Crumbs depth={depth} />
				<CartWrapper />
			</div>
		</PageLayout>
	);
}
