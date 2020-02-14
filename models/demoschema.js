var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MagazineSchema = new Schema(
    {
        title: String,
        publisher: String,
        issue: String,
        pages: {type: Number, min: 0},
        publication_date: {type: Date, min: Date.now()},
    });

    MagazineSchema
.virtual('url')
.get(function () {
  return '/catalog/magazine/' + this._id;
})


    module.exports = mongoose.model('Magazine', MagazineSchema);