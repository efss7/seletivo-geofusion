export default class Product{
    constructor(
        private name: string,
        private description: string,
        private price: number
    ){}

    public getName(): string {
        return this.name
    }

    public getDescription(): string {
        return this.description
    }

    public getPrice(): number {
        return this.price
    }

}