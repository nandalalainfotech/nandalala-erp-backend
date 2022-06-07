import { IsNotEmpty } from "class-validator";
import { Swsanalytics001mb } from "src/entity/Swsanalytics001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SwsanalyticsDTO extends BaseDTO {
	swsId: number;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	swsUom: string;

	@IsNotEmpty()
	consQty: number;

	@IsNotEmpty()
	consAmt: string | null;

	@IsNotEmpty()
	delQty: number;

	@IsNotEmpty()
	delAmt: string | null;

	@IsNotEmpty()
	totalQty: number;

	@IsNotEmpty()
	totalAmt: string | null;

	setProperties(swsanalytics001mb: Swsanalytics001mb) {
		this.swsId = swsanalytics001mb.swsId;
		this.itemCode = swsanalytics001mb.itemCode;
		this.description = swsanalytics001mb.description;
		this.swsUom = swsanalytics001mb.swsUom;
		this.consQty = swsanalytics001mb.consQty;
		this.consAmt = swsanalytics001mb.consAmt;
		this.delQty = swsanalytics001mb.delQty;
		this.delAmt = swsanalytics001mb.delAmt;
		this.totalQty = swsanalytics001mb.totalQty;
		this.totalAmt = swsanalytics001mb.totalAmt;
		this.insertUser = swsanalytics001mb.insertUser;
        this.insertDatetime = swsanalytics001mb.insertDatetime;
        this.updatedUser = swsanalytics001mb.updatedUser;
        this.updatedDatetime = swsanalytics001mb.updatedDatetime;
	}

}
