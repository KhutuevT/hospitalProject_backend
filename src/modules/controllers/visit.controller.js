const Visit = require("../../db/models/visit_model");

module.exports.getAllVisits = async (req, res, next) => {
  try {
    const userId = req.user.id;
    await Visit.find({ userId })
      .then((result) => {
        return res.send({ data: result });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch {
    return res.status(400).json({ message: "Error" });
  }
};

module.exports.addNewVisits = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const body = req.body;
    const { patient_name, doc_name, date, complaints } = body;
    if (
      body.hasOwnProperty("patient_name") &&
      patient_name.trim().lenght !== 0 &&
      body.hasOwnProperty("doc_name") &&
      doc_name.trim().lenght !== 0 &&
      body.hasOwnProperty("date") &&
      date.trim().lenght !== 0 &&
      body.hasOwnProperty("complaints") &&
      complaints.trim().lenght !== 0
    ) {
      const visit = new Visit({ ...body, userId });
      await visit
        .save()
        .then((result) => {
          return res.send({ data: result });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    } else {
      return res.status(400).json({ message: "Empty fields" });
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

module.exports.updateVisit = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const body = req.body;
    // console.log(body);
    if (body.hasOwnProperty("_id") && body._id.trim().lenght !== 0) {
      if (
        body.hasOwnProperty("patient_name") &&
        body.patient_name.trim().lenght !== 0 &&
        body.hasOwnProperty("doc_name") &&
        body.doc_name.trim().lenght !== 0 &&
        body.hasOwnProperty("date") &&
        body.date.trim().lenght !== 0 &&
        body.hasOwnProperty("complaints") &&
        body.complaints.trim().lenght !== 0
      ) {
        await Visit.updateOne({ _id: body._id, userId }, body)
          .then((result) => {
            return res.send({ data: result });
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } else {
        return res.status(400).json({ message: "Empty fields" });
      }
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

module.exports.deleteVisit = async (req, res, next) => {
  try {
    const userId = req.user.id;
    if (req.query.id.trim().lenght !== 0) {
      const id = req.query.id;
      Visit.deleteOne({ _id: id, userId })
        .then((result) => {
          return res.send({ data: result });
        })
        .catch((err) => {
          return res.send({ message: "Error" });
        });
    } else {
      return res.status(400).json({ message: "Empty ID" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};
