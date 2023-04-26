// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    getAllCartItems,
    getUserCartItems,
    postCreateCartItem,
    putIncreaseCartCount,
    putUpdateCartItem,
<<<<<<< Updated upstream
    deleteCartItem
=======
    deleteCartItem,
    getUserCartTotal,
    getUserCartCount,
    deleteUserCartItems,
    getCartItem,
    putCartItem
    
>>>>>>> Stashed changes
} = require("../controllers/cartController");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllCartItems);

<<<<<<< Updated upstream
=======
router.get("/getItem/:id", getCartItem)

router.delete("/user/:userId", deleteUserCartItems)

router.put("/update/:id", putCartItem)

>>>>>>> Stashed changes
/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 *  
 */

router.get("/:userId", getUserCartItems);

router.post("/", postCreateCartItem);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateCartItem);

router.put("/increase/:id", putIncreaseCartCount);


/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteCartItem);

module.exports = router;