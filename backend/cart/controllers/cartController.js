// controllers/todo.js
const Cart = require("../models/cart");


exports.getAllCartItems = (req, res) => {
    Cart.find()
        .then((cartItem) => res.json(cartItem))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Cart item not found", error: err.message })
        );
};

exports.postCreateCartItem = (req, res) => {
    Cart.create(req.body)
        .then((data) => res.json({ message: "Cart item added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add cart item", error: err.message })
        );
};

// exports.postCreateCartItem = async(req, res) => {
//     let sum = 0;
//     const id = req.params.id;
//     const cartItems = await Cart.find();
//     const cartItem = cartItems.filter(e => e.userId == id );
//     cartItem.forEach(e => {
//         sum += parseFloat(e.total)
//     })
//     res.json(sum);
// };



exports.getUserCartItems = async (req, res) => {
    const id = req.params.userId;
    const cartItems = await Cart.find();
    const cartItem = cartItems.filter(e => e.userId == id);
    res.json(cartItem);
};

exports.deleteUserCartItems = async (req, res) =>{
    const id =req.params.userId;
    Cart.deleteMany({userId:id});
    res.json("deleted successfully");
}

exports.getUserCartCount = async (req, res) => {

    const id = req.params.id;
    const cartItems = await Cart.find();
    const cartItem = cartItems.filter(e => e.userId == id );
    res.json(cartItem.length);

};


exports.getUserCartTotal = async (req, res) => {
    let sum = 0;
    const id = req.params.id;
    const cartItems = await Cart.find();
    const cartItem = cartItems.filter(e => e.userId == id);
    cartItem.forEach(e => {
        sum += parseFloat(e.total)
    })
    res.json(sum);
}




exports.putIncreaseCartCount = async (req, res) => {

    const id = req.params.id;

    const filter = { _id: id };

    const cartItems = await Cart.find();
    const cartItem = cartItems.filter(e => e._id == id);
    var c = parseInt(cartItem.quantity);
    c = c + 1;
    const update = { quantity: c };

    let doc = await Cart.updateMany(filter, update);

    res.json(doc);
    // const cartItem = await Cart.findById(req.params.id);
    // var count = cartItem.quantity;
    // count=count+1;
    // const newCartItem = {...cartItem, quantity: count};
    // Cart.findOneAndReplace(newCartItem);
};



exports.putUpdateCartItem = (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update cart item", error: err.message })
        );
};


exports.deleteCartItem = (req, res) => {
    Cart.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Cart item deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Cart item not found", error: err.message })
        );
};