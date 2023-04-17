import Customer from "../models/Customer.js";

export const getCustomers = async ( req, res ) =>
{
  try {
    
  } catch (error) {
    res.status( 404 ).json( {message: error.message} );
  }
}