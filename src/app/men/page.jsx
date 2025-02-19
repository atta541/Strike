// src/app/men/page.jsx
import React from "react";
import Link from "next/link";
import connectToDatabase from "../../../lib/mongo";
import MenProduct from "../models/menproduct";

const Men = async () => {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch all products
    const products = await MenProduct.find({}).lean();

    // Convert products to JSON for serialization
    const safeProducts = JSON.parse(JSON.stringify(products));

    return (
      <main className="min-h-screen text-white p-4">
        <h1 className="text-4xl font-bold mb-8 text-[#B4A596]">Men's Clothing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {safeProducts.length > 0 ? (
            safeProducts.map((product) => (
              <Link key={product._id} href={`/men/${product._id}`} passHref>
                <div className="flex flex-col items-center cursor-pointer">
                  <img
                    src={product.imageurl}
                    alt={product.name}
                    className="w-[400px] h-[500px] object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                  <p className="text-lg">${product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products.</div>;
  }
};

export default Men;
