import { IsNotEmpty } from "class-validator";
import { Updatebank001mb } from "src/entity/Updatebank001mb.entity";
import { BaseDTO } from "./Base.dto";

export class UpdatebankDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	bankaccount: string;

	@IsNotEmpty()
	fromdate: Date;

	@IsNotEmpty()
	todate: Date;

	@IsNotEmpty()
	customername: string;

	@IsNotEmpty()
	amount: string | null;

	@IsNotEmpty()
	chqNumber: string | null;

	@IsNotEmpty()
	clearanceDate: Date;

	setProperties(updatebank001mb: Updatebank001mb) {
		this.id = updatebank001mb.id;
		this.bankaccount = updatebank001mb.bankaccount;
		this.fromdate = updatebank001mb.fromdate;
		this.todate = updatebank001mb.todate;
		this.customername = updatebank001mb.customername;
		this.amount = updatebank001mb.amount;
		this.chqNumber = updatebank001mb.chqNumber;
		this.clearanceDate = updatebank001mb.clearanceDate;
		this.insertUser = updatebank001mb.insertUser;
        this.insertDatetime = updatebank001mb.insertDatetime;
        this.updatedUser = updatebank001mb.updatedUser;
        this.updatedDatetime = updatebank001mb.updatedDatetime;
	}
}
