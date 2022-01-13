const Visit = require("../../db/models/visit_model");

module.exports.getAllVisits = async (req, res, next) => {
  try {
    await Visit.find()
      .then((result) => {
        return res.send({ data: result });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch {
    res.status(400).json({ message: "Error" });
  }
};

module.exports.addNewVisits = async (req, res, next) => {
  try {
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
      const visit = new Visit(body);
      await visit
        .save()
        .then((result) => {
          return res.send({ data: result });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    } else {
      res.status(400).json({ message: "Empty fields" });
    }
  } catch {
    res.status(400).json({ message: "Error" });
  }
};

module.exports.updateVisit = async (req, res, next) => {
  try {
    const body = req.body;
    if (body.hasOwnProperty("id") && body.id.trim().lenght !== 0) {
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
        await Visit.updateOne({ _id: body.id }, body)
          .then((result) => {
            return res.send(result);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } else {
        res.status(400).json({ message: "Empty fields" });
      }
    }
  } catch (e) {
    res.status(400).json({ message: "Error" });
  }
};
