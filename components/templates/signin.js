import { useState } from "react";
import { useRouter } from "next/router";
import { Typography, Space, Input, Button, Spin, Image as AntImage } from "antd";
import GenLayout from "components/atoms/GenLayout";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import { signIn } from "next-auth/react";
import "twin.macro";

function Signin({ providerId }) {
	const router = useRouter();
	const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />;
	const [isLogIn, setIsLogIn] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [userDetails, setUserDetails] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	const handleInput = e => {
		const { name, value } = e.target;
		setUserDetails({
			[name]: value,
		});
	};

	const handleSubmit = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			router.push("/product");
		}, 5000);
	};

	const toggle = () => {
		setIsLogIn(prev => {
			setUserDetails({
				firstname: "",
				lastname: "",
				email: "",
				password: "",
			});
			return !prev;
		});
	};
	return (
		<GenLayout title="Sign Up page" content="Sign Up Page for classic interior design">
			<main tw="w-full min-h-screen bg-[#f5f1ef]">
				<article tw="w-full py-5 px-5 bg-white shadow-sm! lg:(px-20 py-5) flex justify-between items-center">
					<AntImage
						src="/logo/applogo.svg"
						alt="applogo"
						width={120}
						preview={false}
						tw="-ml-4 cursor-pointer"
					/>
					<Typography.Text tw="mb-0! text-lg font-medium">
						{isLogIn ? "Welcome Back!" : "Sign up and get amazing deals!"}
					</Typography.Text>
				</article>
				<div tw="flex items-center justify-center min-h-screen">
					<article tw="bg-white rounded-lg shadow-md border border-gray-100 p-4 lg:p-8">
						<Typography.Title level={2}>
							{isLogIn ? "Login to your profile" : "Create an account"}
						</Typography.Title>
						<div tw="mx-[-16px] bg-[#FAFAFA] px-8 py-5  mb-6 lg:(mb-8 mx-[-32px])">
							<Space size="large" tw="w-full justify-between items-center">
								<Typography.Text>
									You can aslo sign {isLogIn ? "in" : "up"} with social
								</Typography.Text>
								<Space size="middle">
									<Image
										tw="cursor-pointer"
										width={30}
										height={30}
										alt="facebook"
										src="/logo/facebook.svg"
										priority
									/>
									<Image
										tw="cursor-pointer"
										width={30}
										height={30}
										alt="google"
										src="/logo/google.svg"
										priority
										onClick={() => signIn(providerId)}
									/>
								</Space>
							</Space>
						</div>
						<div tw="mb-12 lg:mb-16">
							{!isLogIn && (
								<article tw="mb-5">
									<Input
										size="large"
										placeholder="john"
										name="firstname"
										value={userDetails.firstname}
										onChange={handleInput}
									/>
								</article>
							)}
							{!isLogIn && (
								<article tw="mb-5">
									<Input
										size="large"
										placeholder="Doe"
										name="lastname"
										value={userDetails.lastname}
										onChange={handleInput}
									/>
								</article>
							)}
							<article tw="mb-5">
								<Input
									size="large"
									placeholder="example@gmail.com"
									name="email"
									value={userDetails.email}
									onChange={handleInput}
								/>
							</article>
							<article className="password">
								<Input.Password
									size="large"
									placeholder="*********"
									name="password"
									value={userDetails.password}
									onChange={handleInput}
								/>
							</article>
						</div>
						{isLoading ? (
							<Button type="primary" block tw="rounded-md! bg-[#d18054]! border-[#d18054]!">
								<Spin indicator={antIcon} delay={200} spinning={isLoading} />
							</Button>
						) : (
							<Button type="primary" block tw="rounded-md!" onClick={handleSubmit}>
								{isLogIn ? "Log In" : "Sign Up"}
							</Button>
						)}

						<Typography.Text tw="text-center! text-[#ab7a5f] block mt-2">
							{isLogIn ? "Don't have an account yet?" : "Already have an account"}{" "}
							<span tw="font-bold cursor-pointer hover:text-[#d18054]" onClick={toggle}>
								{isLogIn ? "Sign up!" : "Log in!"}
							</span>
						</Typography.Text>
					</article>
				</div>
			</main>
		</GenLayout>
	);
}

export default Signin;
