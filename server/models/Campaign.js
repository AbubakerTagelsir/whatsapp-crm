const mongoose = require('mongoose');

const CampaignsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    recipients: [
        {
            customerId:{
                type: mongoose.Types.ObjectId,
                ref: 'customers'
            }
        }
    ],
    body: {
        type: String,
        required: true,
    },
    sendingTime: {
        type: Date,
        default: new Date,
    },
    notes: {
        type: String,
    },
  });

module.exports = mongoose.model('campaigns', CampaignsSchema);
