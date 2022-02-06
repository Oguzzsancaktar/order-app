import dbConnect from "../../../util/mongo.js";
import Product from "../../../models/product.js";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

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
    if (!token || token !== process.env.TOKEN) {
      res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const { body } = req;
      const product = await Product.create(body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
