import Item from "./Item";

export default class Juice extends Item {

	constructor (readonly description: string, readonly price: number) {
		super("Juice", description, price);
	}

}
