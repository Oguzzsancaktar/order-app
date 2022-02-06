import dbConnect from "../../../util/mongo.js";
import Product from "../../../models/product.js";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;
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
      if (!token || token !== process.env.TOKEN) {
        res.status(401).json({ message: "Unauthorized" });
      }
      const { body } = req;
      const product = await Product.create(body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    try {
      if (!token || token !== process.env.TOKEN) {
        res.status(401).json({ message: "Unauthorized" });
      }
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
