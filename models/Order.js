const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const OrderSchema = new mongoose.Schema(
    {
        products:[{
            productId: { type: ObjectId, ref: "Product", required: true },
        }],
        description: { type: String},
        customerId: { type: ObjectId, ref: "Contact", required: true },
        price: { type: Number, required: true }, // Precio del producto
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
