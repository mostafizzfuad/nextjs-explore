// app/page.js (Home Page)
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<h1>🏠 Home Page</h1>
			<ul>
				<li>
					<Link href="/about">Go to About Page</Link>
				</li>
				<li>
					<Link href="/products">Go to Products Page</Link>
				</li>
			</ul>
		</div>
	);
}
