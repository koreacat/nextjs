import Link from "next/link";

export default function Header() {
    return (
        <header>
			<Link href={"/"}>
				<div>
					<a>index</a>
				</div>
			</Link>
        </header>
    )
}
