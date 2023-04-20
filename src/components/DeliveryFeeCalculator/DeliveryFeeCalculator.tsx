import React from "react";
import { useState } from "react";
import { DeliveryFeeInfo } from "../../models/delivery-fee-info.model";
import { DeliveryFeeService } from "../../services/delivery-fee-service";
import { Button } from "../Button/Button";
import { HeaderText } from "../Header/HeaderText";
import { NumberInput } from "../NumberInput/NumberInput";
import { Span } from "../Span/Span";

import { DateInput } from "../DateInput/DateInput";
import { DeliveryBody, DeliveryFeeContainer, DeliveryFooter } from "./styled";
import { format } from "date-fns";

const DeliveryFeeCalculator = () => {
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [cartValue, setCartValue] = useState("20");
  const [deliveryDistance, setDeliveryDistance] = useState("900");
  const [numberOfItems, setNumberOfItems] = useState("1");
  const [deliveryTime, setDeliveryTime] = useState(new Date());

  const calculateDeliveryFee = () => {
    const orderInfo: DeliveryFeeInfo = {
      cartValue: Number(cartValue) * 100,
      deliveryDistance: Number(deliveryDistance),
      numberOfItems: Number(numberOfItems),
      time: deliveryTime,
    };

    const value = new DeliveryFeeService().calculateDeliveryFee(orderInfo);
    setDeliveryFee(value);
  };

  return (
    <>
      <DeliveryFeeContainer>
        <HeaderText text="Delivery Fee Calculator" />
        <DeliveryBody>
          <NumberInput
            displayText="Cart Value"
            displayTextEnd="€"
            value={cartValue}
            onChange={(e) => setCartValue(e.target.value)}
          />
          <NumberInput
            displayText="Delivery distance"
            displayTextEnd="m"
            value={deliveryDistance}
            onChange={(e) => setDeliveryDistance(e.target.value)}
          />
          <NumberInput
            displayText="Amount of items"
            value={numberOfItems}
            onChange={(e) => setNumberOfItems(e.target.value)}
          />
          <DateInput
            displayText="Delivery Time"
            value={format(deliveryTime, "yyyy-MM-dd kk:mm:ss")}
            onChange={(e) => setDeliveryTime(new Date(e.target.value))}
          />
          <Button
            text="Calculate delivery price"
            onClick={() => calculateDeliveryFee()}
          />

          <Span text={`Delivery price: ${deliveryFee / 100} €`} />
        </DeliveryBody>
        <DeliveryFooter></DeliveryFooter>
      </DeliveryFeeContainer>
    </>
  );
};
export default DeliveryFeeCalculator;
