// app/products/page.js
import Link from "next/link";

export default function ProductsPage() {
	const products = [
		{ id: 1, name: "Book" },
		{ id: 2, name: "Pen" },
		{ id: 3, name: "Laptop" },
		{ id: 4, name: "Eraser" },
		{ id: 5, name: "Pencil" },
	];

	return (
		<div>
			<h1>🛒 Products Page</h1>
			<ul>
				{products.map((p) => (
					<li key={p.id}>
						<Link href={`/products/${p.id}`}>{p.name}</Link>
					</li>
				))}
			</ul>
			<Link href="/">Back to Home</Link>
		</div>
	);
}


