import TaxItem from "./TaxItem";

export default class Gin extends TaxItem {

	constructor (readonly description: string, readonly price: number) {
		super("Gin", description, price);
	}

	getTax(): number {
		return 0.2;
	}

}
