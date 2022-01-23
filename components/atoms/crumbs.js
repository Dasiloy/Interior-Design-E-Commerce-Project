import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import "twin.macro";

function Crumbs({ depth }) {
	const router = useRouter();
	return (
		<div className="crumbs" tw="w-full px-5 lg:px-20">
			<Breadcrumb size="large">
				<Breadcrumb.Item
					tw="font-semibold text-lg lg:text-xl cursor-pointer  text-[#453227]"
					onClick={() => router.push("/")}>
					Home
				</Breadcrumb.Item>
				{depth &&
					depth.length > 0 &&
					depth.map((item, index) => (
						<Breadcrumb.Item
							tw="font-semibold text-lg lg:text-xl cursor-pointer text-[#795744]"
							key={item.id}
							onClick={index === depth.length - 1 ? null : () => router.push(item.path)}>
							{item.text}
						</Breadcrumb.Item>
					))}
			</Breadcrumb>
		</div>
	);
}

export default Crumbs;
