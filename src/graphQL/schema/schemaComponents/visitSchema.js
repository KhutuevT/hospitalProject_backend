module.exports = `
type Visit {
  _id: ID,
  patient_name: String,
  doc_name: String,
  date: String,
  complaints: String
}

input VisitInput {
  patient_name: String!,
  doc_name: String!,
  date: String!,
  complaints: String!
}

input VisitChange {
  _id: ID!,
  patient_name: String,
  doc_name: String,
  date: String,
  complaints: String
}

type Query {
  getAllVisits: [Visit]
}

type Mutation {
  addNewVisits(input: VisitInput!): Visit
  updateVisit(input: VisitChange!): Visit
  deleteVisit(_id: ID!): Visit
}
`;
