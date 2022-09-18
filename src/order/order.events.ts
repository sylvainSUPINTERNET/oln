export class OrderEvent {
    constructor(
     public readonly orderTransactionGUID: string,
     public readonly orderUser: string,
     public readonly orderItem: string,
     public readonly orderAmount: number,
   ) { }
  }
  export class OrderEventSuccess {
    constructor(
     public readonly orderTransactionGUID: string,
     public readonly orderItem: string,
     public readonly orderAmount: number,
     public readonly user: { email: string, id: string },
   ) { }
  }
  export class OrderEventFail {
  constructor(
  public readonly orderTransactionGUID: string,
  public readonly error: object,
  ) { }
  }