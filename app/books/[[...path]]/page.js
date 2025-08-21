// app/books/[[...path]]/page.js

"use client";
import { useParams } from "next/navigation";

export default function BooksPage() {
	const { path } = useParams(); // if no path is provided, it will be undefined otherwise it will be an array

	// Ensure path is always an array
	const segments = Array.isArray(path) ? path : [];

	return segments.length > 0 ? (
		<div>
			<h1>Books Path</h1>
			<p>Path segments: {segments.join("/")}</p>
		</div>
	) : (
		<div>
			<h1>Books Home</h1>
			<p>Welcome to the books section!</p>
		</div>
	);
}
