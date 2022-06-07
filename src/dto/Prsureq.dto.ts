import { IsNotEmpty } from "class-validator";
import { Prsureq001mb } from "src/entity/Prsureq001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PrsureqDTO extends BaseDTO {
	prsrId: number;

	@IsNotEmpty()
	suSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	supplier: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	stockUom: string;

	@IsNotEmpty()
	rate: string;

	@IsNotEmpty()
	taxandChg: string | null;

	@IsNotEmpty()
	accountHead: string;

	@IsNotEmpty()
	squotrate: string | null;

	@IsNotEmpty()
	sutype: string;

	setProperties(prsureq001mb: Prsureq001mb) {
		this.prsrId = prsureq001mb.prsrId;
		this.suSeries = prsureq001mb.suSeries;
		this.date = prsureq001mb.date;
		this.supplier = prsureq001mb.supplier;
		this.itemCode = prsureq001mb.itemCode;
		this.quantity = prsureq001mb.quantity;
		this.stockUom = prsureq001mb.stockUom;
		this.rate = prsureq001mb.rate;
		this.taxandChg = prsureq001mb.taxandChg;
		this.accountHead = prsureq001mb.accountHead;
		this.squotrate = prsureq001mb.squotrate;
		this.sutype = prsureq001mb.sutype;
		this.insertUser = prsureq001mb.insertUser;
        this.insertDatetime = prsureq001mb.insertDatetime;
        this.updatedUser = prsureq001mb.updatedUser;
        this.updatedDatetime = prsureq001mb.updatedDatetime;
	}
}
