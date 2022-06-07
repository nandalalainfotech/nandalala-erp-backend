import { IsNotEmpty } from "class-validator";
import { Prpurchaseord001mb } from "src/entity/Prpurchaseord001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PrpurchaseordDTO extends BaseDTO {
	proId: number;

	@IsNotEmpty()
	poSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	supplier: string;

	@IsNotEmpty()
	supplyrawmat: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	rate: string;

	@IsNotEmpty()
	amount: string;

	@IsNotEmpty()
	prtype: string;

	@IsNotEmpty()
	accountHead: number | null;

	@IsNotEmpty()
	quotrate: string;

	@IsNotEmpty()
	taxandChg: number;

	setProperties(prpurchaseord001mb: Prpurchaseord001mb) {
		this.proId = prpurchaseord001mb.proId;
		this.poSeries = prpurchaseord001mb.poSeries;
		this.date = prpurchaseord001mb.date;
		this.supplier = prpurchaseord001mb.supplier;
		this.supplyrawmat = prpurchaseord001mb.supplyrawmat;
		this.itemCode = prpurchaseord001mb.itemCode;
		this.quantity = prpurchaseord001mb.quantity;
		this.rate = prpurchaseord001mb.rate;
		this.amount = prpurchaseord001mb.amount;
		this.prtype = prpurchaseord001mb.prtype;
		this.accountHead = prpurchaseord001mb.accountHead;
		this.quotrate = prpurchaseord001mb.quotrate;
		this.taxandChg = prpurchaseord001mb.taxandChg;
		this.insertUser = prpurchaseord001mb.insertUser;
        this.insertDatetime = prpurchaseord001mb.insertDatetime;
        this.updatedUser = prpurchaseord001mb.updatedUser;
        this.updatedDatetime = prpurchaseord001mb.updatedDatetime;
	}
}
