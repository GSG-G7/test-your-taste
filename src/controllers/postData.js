const { saveData } = require('../database/quieres/postData');
exports.addData = (req, res, next) => {
  saveData(req.body)
   .then((result) => res.redirect('/'))
   .catch(err => next(err.stack))
}