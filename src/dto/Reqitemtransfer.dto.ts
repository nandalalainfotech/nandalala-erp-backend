import { IsNotEmpty } from "class-validator";
import { Reqitemtransfer001mb } from "src/entity/Reqitemtransfer001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ReqitemtransferDTO extends BaseDTO {

	ittransId: number;

	@IsNotEmpty()
	mrSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	transferQty: string | null;

	@IsNotEmpty()
	qtytoTransfer: string | null;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	company: string;

	setProperties(reqitemtransfer001mb: Reqitemtransfer001mb) {
		this.ittransId = reqitemtransfer001mb.ittransId;
		this.itemCode = reqitemtransfer001mb.itemCode;
		this.mrSeries = reqitemtransfer001mb.mrSeries;
		this.quantity = reqitemtransfer001mb.quantity;
		this.transferQty = reqitemtransfer001mb.transferQty;
		this.date = reqitemtransfer001mb.date;
		this.qtytoTransfer = reqitemtransfer001mb.qtytoTransfer;
		this.description = reqitemtransfer001mb.description;
		this.company = reqitemtransfer001mb.company;
		this.insertUser = reqitemtransfer001mb.insertUser;
        this.insertDatetime = reqitemtransfer001mb.insertDatetime;
        this.updatedUser = reqitemtransfer001mb.updatedUser;
        this.updatedDatetime = reqitemtransfer001mb.updatedDatetime;
	}
}
