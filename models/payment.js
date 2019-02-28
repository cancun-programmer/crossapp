'use strict';

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    paymentDate: Date,
    paymentType: String,
    amount: Number,
    comments: String,
    membershipID: mongoose.Types.ObjectId
});

const Payment = module.exports = mongoose.model('Payment', paymentSchema);

module.exports.getPaymentsByMembership = function (membershipID, callback) {
    Payment.find({ membershipID: membershipID }).sort({ '_id': -1 }).exec(callback);
}
module.exports.savePayment = function (newPayment, callback) {
    newPayment.save(callback);
}
module.exports.updatePayment = function (id, update, callback) {
    Payment.findOneAndUpdate({ '_id': id }, update, { new: true }, callback);
}