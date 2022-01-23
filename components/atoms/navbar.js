import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "hooks/general/useMediaQuery";
import useOverflow from "hooks/general/useOverflow";
import Link from "next/link";
import { navlinks } from "data/navdata";
import { Image, Badge, Modal, Tooltip } from "antd";
import { FaTimes } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import "twin.macro";

function Navbar({ user, uid }) {
	const router = useRouter();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 992px)");
	useOverflow(sidebarOpen);

	const logout = () => {
		setSidebarOpen(false);
		router.push("/api/auth/signout");
	};

	const login = () => {
		setSidebarOpen(false);
		router.push("/auth/signin");
	};

	const moveLink = cb => {
		setSidebarOpen(false);
		router.push("/cart");
	};

	const handleLink = id => {
		setSidebarOpen(false);
	};

	return (
		<main tw="bg-white w-full h-full shadow-sm! flex items-center py-9!">
			<div tw="px-5 lg:(px-20) w-[100%]! flex justify-between">
				<article
					tw="flex justify-between items-center "
					style={{
						width: isDesktop ? "auto" : "100%",
					}}>
					<Image
						src="/logo/applogo.svg"
						alt="applogo"
						width={160}
						preview={false}
						tw="-ml-4 cursor-pointer"
						onClick={() => {
							router.push("/");
						}}
					/>
					<button tw="lg:hidden">
						{!sidebarOpen ? (
							<AiOutlineMenu
								tw="text-2xl"
								className="icon"
								onClick={() => setSidebarOpen(!sidebarOpen)}
							/>
						) : (
							<FaTimes
								tw="text-2xl"
								className="icon-close"
								onClick={() => setSidebarOpen(!sidebarOpen)}
							/>
						)}
					</button>
				</article>
				<article tw="hidden lg:flex">
					<ul tw="list-none flex items-center">
						{navlinks.map(link => {
							const { id, url, text } = link;
							if (text === "Checkout") {
								if (user) {
									return (
										<li tw="mx-2" key={id}>
											<Link href={url}>
												<a
													className={uid === id ? "primary active" : "primary"}
													tw="font-medium text-[0.875rem]">
													{text}
												</a>
											</Link>
										</li>
									);
								} else {
									return null;
								}
							}
							return (
								<li tw="mx-2" key={id}>
									<Link href={url}>
										<a
											className={uid === id ? "primary active" : "primary"}
											tw="font-medium text-[0.875rem]">
											{text}
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
					<div tw="flex ml-8 items-center ml-6">
						<div tw="mx-2 mt-2">
							<Tooltip title="Cart" color="#ab7a5f">
								<Badge showZero count={2}>
									<BsFillCartPlusFill
										className="icon"
										onClick={() => router.push("/cart")}
									/>
								</Badge>
							</Tooltip>
						</div>
						<div tw="mx-4">
							{!user ? (
								<Tooltip title="Log in" color="#ab7a5f">
									<AiOutlineLogin className="icon" onClick={login} />
								</Tooltip>
							) : (
								<Tooltip title="Log out" color="#ab7a5f">
									<AiOutlineLogout className="icon" onClick={logout} />
								</Tooltip>
							)}
						</div>
					</div>
				</article>
			</div>
			<div tw="lg:hidden m-0 p-0 shadow-sm" className={sidebarOpen ? "sidebar show" : "sidebar"}>
				<Image src="/logo/applogo.svg" alt="applogo" width={150} preview={false} tw="mt-4" />
				<ul tw="list-none">
					{navlinks.map(link => {
						const { id, url, text } = link;
						if (text === "Checkout") {
							if (user) {
								return (
									<li tw="mx-2" key={id}>
										<Link href={url}>
											<a
												className={uid === id ? "active" : ""}
												tw="font-medium text-[0.875rem] items-center"
												onClick={() => handleLink()}>
												{text}
											</a>
										</Link>
									</li>
								);
							} else {
								return null;
							}
						}
						return (
							<li tw="mx-2" key={id}>
								<Link href={url}>
									<a
										className={uid === id ? "primary active" : "primary"}
										tw="font-medium text-[0.875rem] items-center"
										onClick={() => handleLink()}>
										{text}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
				<div tw="flex ml-8 items-center mt-6 justify-center">
					<div tw="mx-2 mt-2">
						<Tooltip title="Cart" color="#ab7a5f">
							<Badge showZero count={2}>
								<BsFillCartPlusFill className="icon" onClick={() => moveLink()} />
							</Badge>
						</Tooltip>
					</div>
					<div tw="mx-4">
						{!user ? (
							<Tooltip title="Log in" color="#ab7a5f">
								<AiOutlineLogin className="icon" onClick={login} />
							</Tooltip>
						) : (
							<Tooltip title="Log out" color="#ab7a5f">
								<AiOutlineLogout className="icon" onClick={logout} />
							</Tooltip>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Navbar;
