// app/products/[category]/page.js
"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductCategory() {
    // const params = useParams();
	const { category } = useParams();

	return (
		<div>
            {/* <h2>Category: {params.category}</h2> */}
			<h1>Product Category: {category}</h1>
		</div>
	);
}
