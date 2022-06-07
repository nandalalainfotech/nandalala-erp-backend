import { IsNotEmpty } from "class-validator";
import { Stockbalance001mb } from "src/entity/Stockbalance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StockbalanceDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	item: string;

	@IsNotEmpty()
	itemname: string;

	@IsNotEmpty()
	itemgroup: string;

	@IsNotEmpty()
	brand: string;
	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	warehouse: string;

	@IsNotEmpty()
	stockuom: string;

	@IsNotEmpty()
	openingqty: string;

	@IsNotEmpty()
	openingvalue: string;

	@IsNotEmpty()
	inqty: string;
	@IsNotEmpty()
	invalue: string;

	@IsNotEmpty()
	outqty: string;

	@IsNotEmpty()
	outvalue: string;

	@IsNotEmpty()
	balqty: string;

	@IsNotEmpty()
	balvalue: string;

	@IsNotEmpty()
	validationrate: string;

	@IsNotEmpty()
	company: string;
	setProperties(stockbalance001mb: Stockbalance001mb) {
		this.id = stockbalance001mb.id;
		this.item = stockbalance001mb.item;
		this.itemname = stockbalance001mb.itemname;
		this.itemgroup = stockbalance001mb.itemgroup;
		this.brand = stockbalance001mb.brand;
		this.description = stockbalance001mb.description;
		this.warehouse = stockbalance001mb.warehouse;
		this.stockuom = stockbalance001mb.stockuom;
		this.openingqty = stockbalance001mb.openingqty;
		this.inqty = stockbalance001mb.inqty;
		this.invalue = stockbalance001mb.invalue;
		this.outqty = stockbalance001mb.outqty;
		this.outvalue = stockbalance001mb.outvalue;
		this.balqty = stockbalance001mb.balqty;
		this.balvalue = stockbalance001mb.balvalue;
		this.validationrate = stockbalance001mb.validationrate;
		this.company = stockbalance001mb.company;
		this.insertUser = stockbalance001mb.insertUser;
        this.insertDatetime = stockbalance001mb.insertDatetime;
        this.updatedUser = stockbalance001mb.updatedUser;
        this.updatedDatetime = stockbalance001mb.updatedDatetime;
	}
}
