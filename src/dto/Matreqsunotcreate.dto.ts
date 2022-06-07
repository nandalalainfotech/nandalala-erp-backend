import { IsNotEmpty } from "class-validator";
import { Matreqsunotcreate001mb } from "src/entity/Matreqsunotcreate001mb.entity";
import { BaseDTO } from "./Base.dto";

export class MatreqsunotcreateDTO extends BaseDTO {
	mrsId: number;

	@IsNotEmpty()
	mrSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	company: string;

	setProperties(matreqsunotcreate001mb: Matreqsunotcreate001mb) {
		this.mrsId = matreqsunotcreate001mb.mrsId;
		this.mrSeries = matreqsunotcreate001mb.mrSeries;
		this.date = matreqsunotcreate001mb.date;
		this.itemCode = matreqsunotcreate001mb.itemCode;
		this.quantity = matreqsunotcreate001mb.quantity;
		this.description = matreqsunotcreate001mb.description;
		this.company = matreqsunotcreate001mb.company;
		this.insertUser = matreqsunotcreate001mb.insertUser;
        this.insertDatetime = matreqsunotcreate001mb.insertDatetime;
        this.updatedUser = matreqsunotcreate001mb.updatedUser;
        this.updatedDatetime = matreqsunotcreate001mb.updatedDatetime;
	}
}
