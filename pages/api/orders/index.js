import dbConnect from "../../../util/mongo";
import Order from "../../../models/order";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  if (method === "PUT") {
  }

  if (method === "DELETE") {
  }
};

export default handler;
