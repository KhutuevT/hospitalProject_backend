const Visit = require("../../../db/models/visit_model");

const visitResolvers = {
  Query: {
    getAllVisits: () => {
      try {
        return Visit.find().then((result) => result);
      } catch (err) {
        return err;
      }
    },
  },
  Mutation: {
    addNewVisits: (_, { input }) => {
      try {
        const visit = new Visit({ ...input });
        return visit.save().then((result) => result);
      } catch (err) {
        return err;
      }
    },
    updateVisit: (_, { input }) => {
      try {
        console.log(input._id);
        return Visit.updateOne({ _id: input._id }, input).then(
          (result) => result
        );
      } catch (err) {
        return err;
      }
    },
    deleteVisit: (_, { _id }) => {
      try {
        return Visit.deleteOne({ _id }).then((result) => result);
      } catch (err) {
        return err;
      }
    },
  },
};

module.exports = visitResolvers;
