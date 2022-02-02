import dbConnect from '../../../utils/dbConnect';

export default function handler(req, res) {
  const { method } = req;

  dbConnect()
  if (method === "GET") {

  }

  if (method === "POST") {
  }
}
