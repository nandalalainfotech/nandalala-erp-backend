import { IsNotEmpty } from "class-validator";
import { Prmatreq001mb } from "src/entity/Prmatreq001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PrmatreqDTO extends BaseDTO {

	pmrId: number;

	@IsNotEmpty()
	mrType: string;

	@IsNotEmpty()
	mrSeries: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	quantity: string;

	@IsNotEmpty()
	forWarehouse: string;

	@IsNotEmpty()
	requiredDate: Date;

	setProperties(prmatreq001mb: Prmatreq001mb) {
		this.pmrId = prmatreq001mb.pmrId;
		this.mrType = prmatreq001mb.mrType;
		this.mrSeries = prmatreq001mb.mrSeries;
		this.itemCode = prmatreq001mb.itemCode;
		this.quantity = prmatreq001mb.quantity;
		this.forWarehouse = prmatreq001mb.forWarehouse;
		this.requiredDate = prmatreq001mb.requiredDate;
		this.insertUser = prmatreq001mb.insertUser;
        this.insertDatetime = prmatreq001mb.insertDatetime;
        this.updatedUser = prmatreq001mb.updatedUser;
        this.updatedDatetime = prmatreq001mb.updatedDatetime;
	}
}
