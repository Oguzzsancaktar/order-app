import dbConnect from "../../../util/mongo.js";
import Product from "../../../models/product.js";

export default async function handler(req, res) {
  const {
    method,
    query:{id}
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  if (method === "PUT") {
    try {
      const { body } = req;
      const product = await Product.create(body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "delete ") {
    try {
      const { body } = req;
      const product = await Product.create(body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
