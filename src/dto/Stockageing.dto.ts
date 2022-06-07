import { IsNotEmpty } from "class-validator";
import { Stockageing001mb } from "src/entity/Stockageing001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StockageingDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	itemcode: string;

	@IsNotEmpty()
	itemname: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	itemgroup: string;
	@IsNotEmpty()
	brand: string;

	@IsNotEmpty()
	averageage: number;

	@IsNotEmpty()
	earliest: boolean;

	@IsNotEmpty()
	latest: boolean;

	@IsNotEmpty()
	uom: string;

	@IsNotEmpty()
	actual: number | null;

	@IsNotEmpty()
	item: string | null;

	@IsNotEmpty()
	ordered: number | null;

	@IsNotEmpty()
	projected: number | null;

	@IsNotEmpty()
	requested: number | null;

	@IsNotEmpty()
	reserved: number | null;

	@IsNotEmpty()
	warehouse: string | null;

	setProperties(stockageing001mb: Stockageing001mb) {
		this.id = stockageing001mb.id;
		this.itemcode = stockageing001mb.itemcode;
		this.itemname = stockageing001mb.itemname;
		this.description = stockageing001mb.description;
		this.itemgroup = stockageing001mb.itemgroup;
		this.brand = stockageing001mb.brand;
		this.averageage = stockageing001mb.averageage;
		this.earliest = stockageing001mb.earliest;
		this.latest = stockageing001mb.latest;
		this.uom = stockageing001mb.uom;
		this.actual = stockageing001mb.actual;
		this.item = stockageing001mb.item;
		this.ordered = stockageing001mb.ordered;
		this.projected = stockageing001mb.projected;
		this.requested = stockageing001mb.requested;
		this.reserved = stockageing001mb.reserved;
		this.warehouse = stockageing001mb.warehouse;
		this.insertUser = stockageing001mb.insertUser;
        this.insertDatetime = stockageing001mb.insertDatetime;
        this.updatedUser = stockageing001mb.updatedUser;
        this.updatedDatetime = stockageing001mb.updatedDatetime;
	}
}
