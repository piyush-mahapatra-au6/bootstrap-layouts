import { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import Buttons from "./Buttons";
import { footer } from "./footerLinks";
import Menu from "./Menu";

const Header = () => {
	const [navLinks, setNavLinks] = useState(footer);
	const [isOpen, setIsOpen] = useState(false);
	const [width, setWidth] = useState(768);

	useEffect(() => {
		if (window.innerWidth > width) {
			setIsOpen(true);
		}
	}, []);

	return (
		<header className='absolute p-5 flex items-center justify-between w-full'>
			<div>
				<img src={logo} alt='' />
			</div>

			{isOpen && (
				<nav className='navbar md:flex'>
					<ul>
						{navLinks.map(({ id, title, links }) => (
							<li key={id}>{title}</li>
						))}
					</ul>
					<Buttons />
				</nav>
			)}

			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	);
};

export default Header;
