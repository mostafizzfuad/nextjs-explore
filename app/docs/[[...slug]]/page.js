// app/docs/[...slug]/page.js
"use client";
import { useParams } from "next/navigation";

export default function DocsPage() {
	const params = useParams();

	return (
		<div>
			<h1>📘 Docs Page</h1>
			<p>Slug Params: {JSON.stringify(params.slug)}</p>
		</div>
	);
}
