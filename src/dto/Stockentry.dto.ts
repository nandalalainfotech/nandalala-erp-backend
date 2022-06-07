import { IsNotEmpty } from "class-validator";
import { Stockentry001mb } from "src/entity/Stockentry001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StockentryDTO extends BaseDTO {

	stockid: number;

	@IsNotEmpty()
	materialrequest: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	quantity: number | null;

	@IsNotEmpty()
	transferedQty: string;

	@IsNotEmpty()
	qtytotransfer: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	itemid: number;

	setProperties(stockentry001mb: Stockentry001mb) {
		this.stockid = stockentry001mb.stockid;
		this.materialrequest = stockentry001mb.materialrequest;
		this.date = stockentry001mb.date;
		this.quantity = stockentry001mb.quantity;
		this.transferedQty = stockentry001mb.transferedQty;
		this.qtytotransfer = stockentry001mb.qtytotransfer;
		this.description = stockentry001mb.description;
		this.company = stockentry001mb.company;
		this.itemid = stockentry001mb.itemid;
		this.insertUser = stockentry001mb.insertUser;
        this.insertDatetime = stockentry001mb.insertDatetime;
        this.updatedUser = stockentry001mb.updatedUser;
        this.updatedDatetime = stockentry001mb.updatedDatetime;
	}
}
