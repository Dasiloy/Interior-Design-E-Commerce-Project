import PageLayout from "components/layout/PageLayout";
import ProductWrapper from "components/templates/wrappers/productWrapper";
import Crumbs from "components/atoms/crumbs";

export default function ProductPage() {
	const depth = [
		{
			id: 1,
			path: "/product",
			text: "Products",
		},
	];
	return (
		<PageLayout
			title="Interior products page"
			content="The products page for classic interior design"
			uid={3}>
			<div>
				<Crumbs depth={depth} />
				<ProductWrapper />
			</div>
		</PageLayout>
	);
}
