import Link from "next/link";
import React from "react";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
			<Link href={"/"}>
				<div>
					<a>index</a>
				</div>
			</Link>
        </header>
    )
};

export default Header;
