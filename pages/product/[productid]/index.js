import PageLayout from "components/layout/PageLayout";
import SingleProductWrapper from "components/templates/wrappers/singleProductWrapper";
import Crumbs from "components/atoms/crumbs";
import { useRouter } from "next/router";

export default function SingleProductPage() {
	const router = useRouter();
	const { productid } = router.query;
	const depth = [
		{
			id: 1,
			path: "/product",
			text: "Products",
		},
		{
			id: 1,
			path: `/product/${productid}`,
			text: "SingleProducts",
		},
	];
	return (
		<PageLayout
			title="Interior product page"
			content="The product page for classic interior design">
			<div>
				<Crumbs depth={depth} />
				<SingleProductWrapper />
			</div>
		</PageLayout>
	);
}
