import dbConnect from "../dbConnect.js";

export async function getAllAudio(req, res) {
    const db = dbConnect();
    const collection = await db.collection("JL-speakers").find().toArray()
      .catch(err => {
        res.status(500).send(err);
        return;
      });
    res.send(collection);
  }