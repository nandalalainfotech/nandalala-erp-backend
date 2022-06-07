import { IsNotEmpty } from "class-validator";
import { Prreqquot001mb } from "src/entity/Prreqquot001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PrreqquotDTO extends BaseDTO {
	prqId: number;

	@IsNotEmpty()
	rqSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	supplier: string;

	@IsNotEmpty()
	emailId: string;

	@IsNotEmpty()
	contact: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	requiredDate: Date;

	@IsNotEmpty()
	quantity: string;

	@IsNotEmpty()
	warehouse: string;

	setProperties(prreqquot001mb: Prreqquot001mb) {
		this.prqId = prreqquot001mb.prqId;
		this.rqSeries = prreqquot001mb.rqSeries;
		this.date = prreqquot001mb.date;
		this.supplier = prreqquot001mb.supplier;
		this.emailId = prreqquot001mb.emailId;
		this.contact = prreqquot001mb.contact;
		this.itemCode = prreqquot001mb.itemCode;
		this.requiredDate = prreqquot001mb.requiredDate;
		this.quantity = prreqquot001mb.quantity;
		this.warehouse = prreqquot001mb.warehouse;
		this.insertUser = prreqquot001mb.insertUser;
        this.insertDatetime = prreqquot001mb.insertDatetime;
        this.updatedUser = prreqquot001mb.updatedUser;
        this.updatedDatetime = prreqquot001mb.updatedDatetime;
	}
}
