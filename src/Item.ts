export default abstract class Item {

	constructor (readonly category: string, readonly description: string, public price: number) {
		if (price <= 0) throw new Error("Invalid price");
	}
	
}
