import React from "react";
import connectToDatabase from "../../../../lib/mongo";
import MenProduct from "../../models/menproduct"; // Adjust path if `menproduct.js` is located in the `models` folder

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  // Hardcoded data for additional product details
  const hardcodedData = {
    description: "This is a high-quality product designed for comfort and style. Perfect for everyday wear or special occasions.",
    sizes: ["S", "M", "L", "XL"],
    deliveryCharges: "Free delivery on orders above $50. Standard delivery: $5.",
    rating: 4.5,
    reviews: 120,
    inStock: true,
  };

  return (
    <main className="min-h-screen text-white p-4 sm:p-8">
      <div className="flex flex-col md:flex-row items-start gap-6 max-w-6xl mx-auto">
        {/* Image on the top for mobile or left side for larger screens */}
        <div className="flex-shrink-0 w-full md:w-[400px] h-[500px] relative">
          <img
            src={product.imageurl}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content on the right side or below the image on mobile */}
        <div className="flex flex-col gap-0 flex-grow w-full">
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <p className="text-2xl font-semibold text-gray-300">${product.price}</p>
          <p className="text-lg text-gray-400">{hardcodedData.description}</p>

          {/* Sizes */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Sizes:</h4>
            <div className="flex gap-3 mt-3">
              {hardcodedData.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-5 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 hover:border-gray-700 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Charges */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Delivery:</h4>
            <p className="text-lg text-gray-400">{hardcodedData.deliveryCharges}</p>
          </div>

          {/* Rating and Reviews */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Rating:</h4>
            <p className="text-lg text-gray-400">
              {hardcodedData.rating} stars ({hardcodedData.reviews} reviews)
            </p>
          </div>

          {/* Stock Availability */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Availability:</h4>
            <p className="text-lg text-gray-400">
              {hardcodedData.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-3 px-8 py-3 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

const Page = async ({ params }) => {
  const { id } = await params; // Await the `params` before accessing `id`

  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch product by ID
    const product = await MenProduct.findById(id).lean();

    if (!product) {
      return <div>Product not found</div>; // Handle product not found
    }

    // Directly return the component with product data
    return <ProductDetail product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product</div>;
  }
};

export default Page;
