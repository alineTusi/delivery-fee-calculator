import { format } from "date-fns";
import { DeliveryFeeInfo } from "../models/delivery-fee-info.model";

export class DeliveryFeeService {
  // Config constants
  private readonly MINIMUN_DELIVERY_DISTANCE: number = 1000;
  private readonly MINIMUN_DELIVERY_DISTANCE_EXTRA: number = 500;
  private readonly MINIMUM_DELIVERY_FEE: number = 200;
  private readonly ITEMS_SURCHARGE_FEE: number = 50;
  private readonly BULK_SURCHARGE_FEE: number = 120;
  private readonly DELIVERY_FEE_MULTIPLIER: number = 1.2;
  private readonly MAX_DELIVERY_FEE: number = 1500;
  private readonly MINIMUM_BULK_ITEMS: number = 12;
  private readonly MINIMUM_CART_VALUE: number = 1000;
  private readonly MINIMUM_CART_VALUE_FREE_DELIVERY: number = 10000;
  private readonly MAXIMUM_NO_SURCHARGE_ITEMS: number = 4;
  private readonly DELIVERY_FEE_PER_DISTANCE: number = 100;

  public calculateDeliveryFee(deliveryFeeInfo: DeliveryFeeInfo): number {
    const { cartValue, deliveryDistance, numberOfItems, time } = deliveryFeeInfo;
    let deliveryFee = 0;
    let deliveryFeeSurcharge = 0;
    let itemsSurcharge = 0;
    let bulkSurcharge = 0;

    // Check free delivery
    if (cartValue >= this.MINIMUM_CART_VALUE_FREE_DELIVERY) {
      return 0;
    }

    // Check minimum cart value with no surcharge
    if (cartValue + deliveryFee < this.MINIMUM_CART_VALUE) {
      deliveryFeeSurcharge = this.MINIMUM_CART_VALUE - (cartValue + deliveryFee);
    }

    // Check if distance is less than minimum 1000 meters
    if (deliveryDistance < this.MINIMUN_DELIVERY_DISTANCE) {
      deliveryFee = this.MINIMUM_DELIVERY_FEE;
    } else {
      const deliveryDistanceCount = Math.ceil(deliveryDistance / this.MINIMUN_DELIVERY_DISTANCE_EXTRA);
      deliveryFee = this.DELIVERY_FEE_PER_DISTANCE * deliveryDistanceCount;
    }

    // Check if number of items is greater then the limit
    if (numberOfItems > this.MAXIMUM_NO_SURCHARGE_ITEMS) {
      itemsSurcharge = this.ITEMS_SURCHARGE_FEE * (numberOfItems - this.MAXIMUM_NO_SURCHARGE_ITEMS)
    }

    // Check if the number of items becomes a bulk
    if (numberOfItems > this.MINIMUM_BULK_ITEMS) {
      bulkSurcharge = this.BULK_SURCHARGE_FEE;
    }


    let totalDeliveryFee = deliveryFee + deliveryFeeSurcharge + itemsSurcharge + bulkSurcharge;

    // Check if it's ruish hour and add a multiplier
    if (this.isRushHour(time)) {
      totalDeliveryFee = totalDeliveryFee * this.DELIVERY_FEE_MULTIPLIER;
    }

    // Finally after all fees are applied, check if they are greater than the maximum allowed fee
    if (totalDeliveryFee > this.MAX_DELIVERY_FEE) {
      return this.MAX_DELIVERY_FEE
    }

    return totalDeliveryFee;
  }

  private isRushHour(time: Date): boolean {
    const orderDay = format(time, "EEEE");
    const hour = Number(format(time, "kk"));

    return (orderDay.toLowerCase() === 'friday') && (hour >= 15 && hour <= 18);
  }
}