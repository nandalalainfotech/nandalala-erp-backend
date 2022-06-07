import { IsNotEmpty } from "class-validator";
import { Stkrepbalance001mb } from "src/entity/Stkrepbalance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StkrepbalanceDTO extends BaseDTO {

	stbalId: number;

	@IsNotEmpty()
	balanceQty: number | null;

	@IsNotEmpty()
	balanceValue: number | null;

	@IsNotEmpty()
	brand: string | null;

	@IsNotEmpty()
	company: string | null;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	inQty: number | null;

	@IsNotEmpty()
	itemCode: string | null;

	@IsNotEmpty()
	itemGroup: string | null;

	@IsNotEmpty()
	openingQty: number | null;

	@IsNotEmpty()
	openingValue: number | null;

	@IsNotEmpty()

	outQty: number | null;

	@IsNotEmpty()
	outValue: number | null;

	@IsNotEmpty()
	stkUom: string | null;

	@IsNotEmpty()
	valuationRate: number | null;


	@IsNotEmpty()
	wareHouse: string | null;

	setProperties(stkrepbalance001mb: Stkrepbalance001mb) {
		this.stbalId = stkrepbalance001mb.stbalId;
		this.balanceQty = stkrepbalance001mb.balanceQty;
		this.balanceValue = stkrepbalance001mb.balanceValue;
		this.brand = stkrepbalance001mb.brand;
		this.company = stkrepbalance001mb.company;
		this.description = stkrepbalance001mb.description;
		this.inQty = stkrepbalance001mb.inQty;
		this.itemCode = stkrepbalance001mb.itemCode;
		this.itemGroup = stkrepbalance001mb.itemGroup;
		this.openingQty = stkrepbalance001mb.openingQty;
		this.openingValue = stkrepbalance001mb.openingValue;
		this.outQty = stkrepbalance001mb.outQty;
		this.outValue = stkrepbalance001mb.outValue;
		this.outValue = stkrepbalance001mb.outValue;
		this.stkUom = stkrepbalance001mb.stkUom;
		this.valuationRate = stkrepbalance001mb.valuationRate;
		this.wareHouse = stkrepbalance001mb.wareHouse;
		this.insertUser = stkrepbalance001mb.insertUser;
        this.insertDatetime = stkrepbalance001mb.insertDatetime;
        this.updatedUser = stkrepbalance001mb.updatedUser;
        this.updatedDatetime = stkrepbalance001mb.updatedDatetime;
	}
}
