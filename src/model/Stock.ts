export default class Stock {
  constructor(
    private qtyInStock: number,

  ) { }

  public getQtyInStock(): number {
    return this.qtyInStock
  }

}