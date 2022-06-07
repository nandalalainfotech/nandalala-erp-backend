import { IsNotEmpty } from "class-validator";
import { Itempricereport001mb } from "src/entity/Itempricereport001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItempricereportDTO extends BaseDTO {

	itpricesId: number;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	itemGroup: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	uom: string;

	@IsNotEmpty()
	lstPurchase: string;

	@IsNotEmpty()
	valuationRate: string | null;

	@IsNotEmpty()
	spList: string;

	@IsNotEmpty()
	ppList: string;

	@IsNotEmpty()
	bomRate: string | null;

	setProperties(itempricereport001mb: Itempricereport001mb) {
		this.itpricesId = itempricereport001mb.itpricesId;
		this.itemCode = itempricereport001mb.itemCode;
		this.itemGroup = itempricereport001mb.itemGroup;
		this.description = itempricereport001mb.description;
		this.uom = itempricereport001mb.uom;
		this.lstPurchase = itempricereport001mb.lstPurchase;
		this.valuationRate = itempricereport001mb.valuationRate;
		this.spList = itempricereport001mb.spList;
		this.ppList = itempricereport001mb.ppList;
		this.bomRate = itempricereport001mb.bomRate;
		this.insertUser = itempricereport001mb.insertUser;
        this.insertDatetime = itempricereport001mb.insertDatetime;
        this.updatedUser = itempricereport001mb.updatedUser;
        this.updatedDatetime = itempricereport001mb.updatedDatetime;
	}
}
