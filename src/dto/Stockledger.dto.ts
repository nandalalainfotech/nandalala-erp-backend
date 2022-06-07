import { IsNotEmpty } from "class-validator";
import { Stockledger001mb } from "src/entity/Stockledger001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StockledgerDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	date: Date;

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
	qty: number;

	@IsNotEmpty()
	balanceqty: number;

	@IsNotEmpty()
	incomingrate: number;

	@IsNotEmpty()
	valuationrate: number;

	@IsNotEmpty()
	balancevalue: number;

	@IsNotEmpty()
	vouchertype: string;

	@IsNotEmpty()
	voucherno: number;

	@IsNotEmpty()
	batch: number;

	@IsNotEmpty()
	serialno: number;

	@IsNotEmpty()
	company: string;

	setProperties(stockledger001mb: Stockledger001mb) {
		this.id = stockledger001mb.id;
		this.date = stockledger001mb.date;
		this.item = stockledger001mb.item;
		this.itemname = stockledger001mb.itemname;
		this.itemgroup = stockledger001mb.itemgroup;
		this.brand = stockledger001mb.brand;
		this.description = stockledger001mb.description;
		this.warehouse = stockledger001mb.warehouse;
		this.stockuom = stockledger001mb.stockuom;
		this.qty = stockledger001mb.qty;
		this.balanceqty = stockledger001mb.balanceqty;
		this.incomingrate = stockledger001mb.incomingrate;
		this.valuationrate = stockledger001mb.valuationrate;
		this.balancevalue = stockledger001mb.balancevalue;
		this.vouchertype = stockledger001mb.vouchertype;
		this.voucherno = stockledger001mb.voucherno;
		this.batch = stockledger001mb.batch;
		this.serialno = stockledger001mb.serialno;
		this.company = stockledger001mb.company;
		this.insertUser = stockledger001mb.insertUser;
        this.insertDatetime = stockledger001mb.insertDatetime;
        this.updatedUser = stockledger001mb.updatedUser;
        this.updatedDatetime = stockledger001mb.updatedDatetime;
	}
}
