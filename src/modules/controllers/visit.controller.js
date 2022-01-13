const Visit = require('../../db/models/visit_model')

module.exports.getAllVisits = async(req, res, next) => {
    try{
        await Visit.find().then((result) => {
            return res.send({data: result})
        }).catch((e)=> {
            return res.status(400).send(err);
        })
    }catch{
        res.status(400).json({ message: "Error" });
    }
}

