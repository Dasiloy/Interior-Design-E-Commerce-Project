import { useState } from "react";
import useGetProducts from "hooks/query/useGetProducts";
import { Layout, Menu } from "antd";
import "twin.macro";

function ProductWrapper() {
	const [collapsed, setCollapsed] = useState(false);
	const { Sider, Content } = Layout;
	return (
		<div tw="px-5 lg:px-20">
			<Layout tw="bg-white!">
				<Sider
					tw="bg-yellow-200!"
					breakpoint="lg"
					collapsedWidth="0"
					width={300}
					onCollapse={(collapsed, _type) => {
						// console.log(collapsed, type);
						setCollapsed(collapsed);
					}}>
					heloo from sider
				</Sider>
				<Content>hello from content</Content>
			</Layout>
		</div>
	);
}

export default ProductWrapper;
