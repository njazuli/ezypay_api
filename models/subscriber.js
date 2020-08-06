const mongoose = require('mongoose')

// set date format
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

const subscriberSchema = new mongoose.Schema({
  amount_charged: {
    type: String,
    required: true
  },
  subscriptions_type: {
    type: String,
    required: true
  },
  subscriptions_start_date: {
      type: String,
      required: true
  },
  subscriptions_end_date: {
      type: String,
      required: true
  },
  invoices_date: [String],
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)