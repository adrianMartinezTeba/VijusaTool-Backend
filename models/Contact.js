const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ContactSchema = new mongoose.Schema(
    {   
        name: { type: String, required: true },
        address: { type: String,  },
        type:
            {
                type: String,
                enum: ["Proveedor", "Cliente"],
                required: true
                
            }
        ,
        tlfn: { type: Number,required: true},
        notes: [{ type: String }],
        ordersIds: [{ type: ObjectId, ref: "Order"}],
        productsProvided: {type: String},
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
