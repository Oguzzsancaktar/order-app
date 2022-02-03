import dbConnect from "../../../util/mongo.js";
import Product from "../../../models/product.js";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  if (method === "POST") {
    try {
      const {body} = req;
      const product = await Product.create(body);

      res.status(200).json({product})
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
