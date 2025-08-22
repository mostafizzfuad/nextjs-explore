// app/about/page.js
import Link from "next/link";

export default function AboutPage() {
	return (
		<div>
			<h1>ℹ️ About Page</h1>
			<Link href="/">Back to Home</Link>
		</div>
	);
}