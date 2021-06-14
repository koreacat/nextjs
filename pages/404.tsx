import Link from "next/link";

const Custom404 = () => {
	return (
		<div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontSize: '60px'}}>
			<Link href={"/"}>
				<a>index</a>
			</Link>
		</div>

	)
};

export default Custom404;
