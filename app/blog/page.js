// app/blog/page.js

export default async function BlogPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: { revalidate: 60 }, // প্রতি 60 সেকেন্ডে re-generate হবে
	});
	const posts = await res.json();

	return (
		<div>
			<h1>Blog Posts (revalidated every 60s)</h1>
			<ul>
				{posts.map((p) => (
					<li className="mb-7" key={p.id}>
						<h2>{p.title}</h2>
						<p>{p.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
