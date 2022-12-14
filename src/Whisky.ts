import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {

	constructor (readonly description: string, public price: number) {
		super("Whisky", description, price);
	}

	getTax(): number {
		return 0.2;
	}

}
