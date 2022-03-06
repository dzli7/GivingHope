import { render } from "@testing-library/react";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Confirmation from './Confirmation';



export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Joon Young Park's Dildo",
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING"
            }
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert('You have successfully saved Joon')
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}