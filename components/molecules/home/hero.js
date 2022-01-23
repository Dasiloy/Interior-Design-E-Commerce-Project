import { Typography, Button, Image } from "antd";
import { useRouter } from "next/router";
import "twin.macro";

function Hero() {
	const router = useRouter();
	return (
		<div tw="min-h-[80vh] grid  items-center lg:(min-h-[90vh] grid-cols-2  gap-x-10) px-5 lg:px-20">
			<div>
				<Typography.Title
					tw="capitalize mb-8! mt-4! lg:mt-0! text-4xl! leading-10 font-normal! lg:(text-5xl! leading-[4rem]!)"
					level={3}>
					Design your
					<br />
					comfort zone
				</Typography.Title>
				<p
					className="hero-p"
					tw=" capitalize text-base leading-9 lg:(text-lg leading-[2.2rem])">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At est quisquam dolore quas
					quasi perspiciatis. Quaerat sunt ipsam earum repudiandae facilis dicta numquam,
					pariatur nostrum.
				</p>
				<Button tw="px-6" type="primary" size="large" onClick={() => router.push("/product")}>
					Shop Now
				</Button>
			</div>
			<div tw="hidden lg:(block ml-auto)" className="hero-display">
				<Image
					src="/images/hero-bcg.a876f19f.jpeg"
					alt="hero-img"
					width={"100%"}
					height={560}
					preview={false}
					tw="-ml-4 cursor-pointer mt-11"
					onClick={() => {
						router.push("/");
					}}
				/>
			</div>
		</div>
	);
}

export default Hero;
