// import connectToDatabase from "../../../../lib/mongo";
// import MenProduct from "../../models/menproduct";
// export async function GET(req) {
//   try {
//     // Connect to MongoDB
//     await connectToDatabase();
    
//     // Fetch all products from the Product collection
//     const products = await MenProduct.find({});

//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch products" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
