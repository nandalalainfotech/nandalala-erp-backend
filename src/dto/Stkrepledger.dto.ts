import { IsNotEmpty } from "class-validator";
import { Stkrepledger001mb } from "src/entity/Stkrepledger001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StkrepledgerDTO extends BaseDTO {

	stledId: number;

	@IsNotEmpty()
	balanceQty: number | null;

	@IsNotEmpty()
	balanceValue: number | null;

	@IsNotEmpty()
	batch: string | null;

	@IsNotEmpty()
	brand: string | null;

	@IsNotEmpty()
	company: string | null;

	@IsNotEmpty()
	date: Date | null;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	incomingRate: number | null;

	@IsNotEmpty()
	itemCode: string | null;

	@IsNotEmpty()
	itemGroup: string | null;

	@IsNotEmpty()
	quantity: number | null;

	@IsNotEmpty()
	serialNo: string | null;

	@IsNotEmpty()
	stkUom: string | null;

	@IsNotEmpty()
	valuationRate: number | null;

	@IsNotEmpty()
	voucherCode: string | null;

	@IsNotEmpty()
	voucherType: string | null;

	@IsNotEmpty()
	wareHouse: string | null;

	setProperties(stkrepledger001mb: Stkrepledger001mb) {
		this.stledId = stkrepledger001mb.stledId;
		this.balanceQty = stkrepledger001mb.balanceQty;
		this.balanceValue = stkrepledger001mb.balanceValue;
		this.batch = stkrepledger001mb.batch;
		this.brand = stkrepledger001mb.brand;
		this.company = stkrepledger001mb.company;
		this.date = stkrepledger001mb.date;
		this.description = stkrepledger001mb.description;
		this.incomingRate = stkrepledger001mb.incomingRate;
		this.itemCode = stkrepledger001mb.itemCode;
		this.itemGroup = stkrepledger001mb.itemGroup;
		this.quantity = stkrepledger001mb.quantity;
		this.serialNo = stkrepledger001mb.serialNo;
		this.stkUom = stkrepledger001mb.stkUom;
		this.valuationRate = stkrepledger001mb.valuationRate;
		this.voucherCode = stkrepledger001mb.voucherCode;
		this.voucherType = stkrepledger001mb.voucherType;
		this.wareHouse = stkrepledger001mb.wareHouse;
		this.insertUser = stkrepledger001mb.insertUser;
        this.insertDatetime = stkrepledger001mb.insertDatetime;
        this.updatedUser = stkrepledger001mb.updatedUser;
        this.updatedDatetime = stkrepledger001mb.updatedDatetime;
	}
}
