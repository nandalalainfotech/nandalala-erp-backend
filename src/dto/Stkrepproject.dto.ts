import { IsNotEmpty } from "class-validator";
import { Stkrepproject001mb } from "src/entity/Stkrepproject001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StkrepprojectDTO extends BaseDTO {

	stprojId: number;

	@IsNotEmpty()
	uom: string | null;

	@IsNotEmpty()
	actualQty: number | null;

	@IsNotEmpty()
	brand: string | null;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	itemCode: string | null;

	@IsNotEmpty()
	itemGroup: string | null;

	@IsNotEmpty()
	orderedQty: number | null;

	@IsNotEmpty()
	plannedQty: number | null;

	@IsNotEmpty()
	reorderQty: number | null;

	@IsNotEmpty()
	reorderValue: number | null;

	@IsNotEmpty()

	requestedQty: number | null;

	@IsNotEmpty()
	reservedQty: number | null;

	@IsNotEmpty()
	shortageQty: number | null;
	@IsNotEmpty()
	wareHouse: string | null;

	setProperties(stkrepproject001mb: Stkrepproject001mb) {
		this.stprojId = stkrepproject001mb.stprojId;
		this.uom = stkrepproject001mb.uom;
		this.actualQty = stkrepproject001mb.actualQty;
		this.brand = stkrepproject001mb.brand;
		this.description = stkrepproject001mb.description;
		this.itemCode = stkrepproject001mb.itemCode;
		this.itemGroup = stkrepproject001mb.itemGroup;
		this.orderedQty = stkrepproject001mb.orderedQty;
		this.plannedQty = stkrepproject001mb.plannedQty;
		this.reorderQty = stkrepproject001mb.reorderQty;
		this.reorderValue = stkrepproject001mb.reorderValue;
		this.requestedQty = stkrepproject001mb.requestedQty;
		this.reservedQty = stkrepproject001mb.reservedQty;
		this.shortageQty = stkrepproject001mb.shortageQty;
		this.wareHouse = stkrepproject001mb.wareHouse;
		this.insertUser = stkrepproject001mb.insertUser;
        this.insertDatetime = stkrepproject001mb.insertDatetime;
        this.updatedUser = stkrepproject001mb.updatedUser;
        this.updatedDatetime = stkrepproject001mb.updatedDatetime;
	}
}
