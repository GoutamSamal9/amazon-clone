import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Basket is Empty</h1>
            <p></p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your shoping Basket</h2>
            {basket?.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
