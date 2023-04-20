import { DeliveryFeeService } from "./delivery-fee-service";

describe('Delivery Fee Calculator outside rush hour', () => {
  it('Order with delivery fee should be at least 10 euros', () => {
    const data = {
      cartValue: 500,
      deliveryDistance: 501,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 5,00
    // distance = 501m
    // delivery surcharge = 5,00
    // delivery fee = 2,00
    // delivery fee +  surcharge = 7,00
    expect(deliveryFee).toBe(700);
  });

  it('Order with delivery fee should be at least 10 euros 2', () => {
    const data = {
      cartValue: 900,
      deliveryDistance: 501,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 9,00
    // distance = 501m
    // delivery surcharge = 1,00
    // delivery fee = 2,00
    // delivery fee + surcharge = 3,00
    expect(deliveryFee).toBe(300);
  });

  it('Distance < 1000m should have a minimum fee', () => {
    const data = {
      cartValue: 1500,
      deliveryDistance: 999,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 15,00
    // distance = 999m
    // delivery surcharge = 0,00
    // delivery fee = 2,00
    // delivery fee + surcharge = 2,00
    expect(deliveryFee).toBe(200);
  })

  it('Distance == 1499m', () => {
    const data = {
      cartValue: 1500,
      deliveryDistance: 1499,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 15,00
    // distance = 1499m
    // delivery surcharge = 0,00
    // delivery fee = 3,00
    // delivery fee + surcharge = 3,00
    expect(deliveryFee).toBe(300);
  })

  it('Distance == 1499m and cart value < 1000', () => {
    const data = {
      cartValue: 500,
      deliveryDistance: 1499,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 5,00
    // distance = 1499m
    // delivery surcharge = 5,00
    // delivery fee = 3,00
    // delivery fee + surcharge = 3,00
    expect(deliveryFee).toBe(800);
  })

  it('Distance == 1500m', () => {
    const data = {
      cartValue: 1500,
      deliveryDistance: 1500,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 15,00
    // distance = 1500m
    // delivery surcharge = 0,00
    // delivery fee = 3,00
    // delivery fee + surcharge = 3,00
    expect(deliveryFee).toBe(300);
  })

  it('Distance == 1500m and cart value < 1000', () => {
    const data = {
      cartValue: 900,
      deliveryDistance: 1500,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 9,00
    // distance = 1500m
    // delivery surcharge = 1,00
    // delivery fee = 3,00
    // delivery fee + surcharge = 4,00
    expect(deliveryFee).toBe(400);
  })

  it('Distance == 1501m', () => {
    const data = {
      cartValue: 1500,
      deliveryDistance: 1501,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 15,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // delivery fee = 4,00
    // delivery fee + surcharge = 4,00
    expect(deliveryFee).toBe(400);
  })

  it('Distance == 1501m and cart value < 1000', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 0,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // delivery fee = 4,00
    // delivery fee + surcharge = 7,00
    expect(deliveryFee).toBe(700);
  })

  it('Distance == 1501m and cart value < 1000 and 4 items', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 4,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // delivery fee = 4,00
    // delivery fee + surcharge = 7,00
    expect(deliveryFee).toBe(700);
  })


  it('Distance == 1501m and cart value < 1000 and 5 items', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 5,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // items surcharge = 0,50
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge  = 7,50
    expect(deliveryFee).toBe(750);
  })


  it('Distance == 1501m and cart value < 1000 and 10 items', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 10,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // items surcharge = 3,00
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge  = 10,00
    expect(deliveryFee).toBe(1000);
  })

  it('Distance == 1501m and cart value < 1000 and 13 items', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge  = 12,70
    expect(deliveryFee).toBe(1270);
  })

  it('Distance == 1501m and cart value = 1000 and 13 items', () => {
    const data = {
      cartValue: 1000,
      deliveryDistance: 1501,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge  = 9,70
    expect(deliveryFee).toBe(970);
  })


  it('Distance == 7500m and cart value = 1000 and 13 items', () => {
    const data = {
      cartValue: 1000,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 15,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge = 20,70
    // Delivery limit 15
    expect(deliveryFee).toBe(1500);
  })


  it('Free Delivery cart 100 euros', () => {
    const data = {
      cartValue: 10000,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    expect(deliveryFee).toBe(0);
  })

  it('Distance == 7500m and cart value = 9900 and 13 items', () => {
    const data = {
      cartValue: 9900,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 15,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge = 20,70
    // Delivery limit 15
    expect(deliveryFee).toBe(1500);
  })

  it('Free Delivery cart 101 euros', () => {
    const data = {
      cartValue: 10100,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T13:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    expect(deliveryFee).toBe(0);
  })
})


describe('Delivery Fee Calculator inside rush hour', () => {
  it('Order with delivery fee should be at least 10 euros', () => {
    const data = {
      cartValue: 500,
      deliveryDistance: 501,
      numberOfItems: 0,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 5,00
    // distance = 501m
    // delivery surcharge = 5,00
    // delivery fee = 2,00
    // delivery fee + surcharge = 7,00
    // rush hour = 7,00 * 1.2 = 8,40
    expect(deliveryFee).toBe(840);
  });

  it('Distance == 1501m and cart value < 1000 and 13 items', () => {
    const data = {
      cartValue: 700,
      deliveryDistance: 1501,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 3,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge  = 12,70
    // rush hour = 12,7 * 1.2 = 15,24 - 0,24 (15 eur cap)
    expect(deliveryFee).toBe(1500);
  })

  it('Distance == 1501m and cart value = 1000 and 13 items', () => {
    const data = {
      cartValue: 1000,
      deliveryDistance: 1501,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 4,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge  = 9,70
    // rush hours = 9,70 * 1.2 = 11,64
    expect(deliveryFee).toBe(1164);
  })


  it('Distance == 7500m and cart value = 1000 and 13 items', () => {
    const data = {
      cartValue: 1000,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 15,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge = 20,70
    // Delivery limit 15
    expect(deliveryFee).toBe(1500);
  })


  it('Free Delivery cart 100 euros', () => {
    const data = {
      cartValue: 10000,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    expect(deliveryFee).toBe(0);
  })

  it('Distance == 7500m and cart value = 9900 and 13 items', () => {
    const data = {
      cartValue: 9900,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    // order = 7,00
    // distance = 1501m
    // delivery surcharge = 0,00
    // items surcharge = 4,50
    // bulk surcharge = 1,20
    // delivery fee = 15,00
    // delivery fee + delivery surcharge + items surcharge + bulk surcharge = 20,70
    // Delivery limit 15
    expect(deliveryFee).toBe(1500);
  })

  it('Free Delivery cart 101 euros', () => {
    const data = {
      cartValue: 10100,
      deliveryDistance: 7500,
      numberOfItems: 13,
      time: new Date('2023-05-12T15:00')
    }
    const service = new DeliveryFeeService();

    const deliveryFee = service.calculateDeliveryFee(data);

    expect(deliveryFee).toBe(0);
  })
})
