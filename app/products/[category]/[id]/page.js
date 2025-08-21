// app/products/[category]/[id]/page.js
"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
	const { category, id } = useParams();

	return (
		<div>
			<h1>Product Details</h1>
			<h2>Category: {category}</h2>
			<h3>Product ID: {id}</h3>
		</div>
	);
}
