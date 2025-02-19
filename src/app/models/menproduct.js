import mongoose from "mongoose";

const MenProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageurl: { type: String, required: true },
  description: { type: String, required: true },
});

// Prevent model overwrite upon hot reload in development
export default mongoose.models.MenProduct ||
  mongoose.model("MenProduct", MenProductSchema, "menproduct");
