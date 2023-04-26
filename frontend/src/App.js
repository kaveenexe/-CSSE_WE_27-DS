import Cart from "./components/Cart";
import Review from "./components/Review/Review";

function App() {
  return (
    <Context.Provider>
      <BrowserRouter>
        <div>
          <Navbar
            fetchCartCount={fetchCartCount}
            cartCount={cartCount}
            setCartCount={setCartCount}
            isSeller={isSeller}
            setStatus={setStatus}
            status={status}
            logOut={logOut}
          />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/cart/:id"
              element={
                //<Protected isLoggedIn={status}>
                <Cart
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                  fetchCartCount={fetchCartCount}
                  deleteItem={deleteItem}
                  fetchCartFoodData={fetchCartFoodData}
                  cartFoodLoading={cartFoodLoading}
                  cartFoodData={cartFoodData}
                  getCartTotal={getCartTotal}
                  cartTotal={cartTotal}
                  orderData={orderData}
                  setOrderData={setOrderData}
                />
                //</Protected>
              }
            />

            <Route path="/add-food" element={<AddFood />} />

            <Route
              path="/payment"
              element={
                <Payment setCartTotal={setCartTotal} cartTotal={cartTotal} cartFoodData={cartFoodData} />
              }
            />

            {/* Categories */}

            <Route path="/herbal-beauty" element={<Catagory1 />} />
            <Route path="/herbal-hair" element={<Catagory2 />} />
            <Route path="/other" element={<Catagory3 />} />

            <Route
              path="/product/:id"
              element={
                <SingleFood
                  fetchCartFoodData={fetchCartFoodData}
                  fetchCartCount={fetchCartCount}
                  setLoading={setLoading}
                  setData={setData}
                  data={data}
                />
              }
            />

            <Route path="/add-food" element={<AddFood />} />

            <Route
              path="/my-account"
              element={
                <Protected isLoggedIn={status}>
                  <MyAccount isCustomer={isCustomer} />
                </Protected>
              }
            />

            <Route
              path="/seller-profile"
              element={
                
                  <Sellerdash isCustomer={isSeller} />
               
              }
            />

            <Route path="/update/:id" element={<UpdateFood fetchCartFoodData={fetchCartFoodData} />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
