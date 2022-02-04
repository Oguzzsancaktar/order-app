import dbConnect from "../../../util/mongo";
import Order from "../../../models/order";

const handler = async (req, res) => {

  const {
    method,
    query: { id },
  } = req;

  await dbConnect()

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      console.log(order);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler
