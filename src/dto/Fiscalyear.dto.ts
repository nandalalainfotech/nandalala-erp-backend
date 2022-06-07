import { IsNotEmpty } from "class-validator";
import { Fiscalyear001mb } from "src/entity/Fiscalyear001mb.entity";
import { BaseDTO } from "./Base.dto";

export class FiscalyearDTO extends BaseDTO {

	yearId: number;

	@IsNotEmpty()
	yearName: string;

	@IsNotEmpty()
	status: string;

	setProperties(fiscalyear001mb: Fiscalyear001mb) {
		this.yearId = fiscalyear001mb.yearId;
		this.yearName = fiscalyear001mb.yearName;
		this.status = fiscalyear001mb.status;
		this.insertUser = fiscalyear001mb.insertUser;
        this.insertDatetime = fiscalyear001mb.insertDatetime;
        this.updatedUser = fiscalyear001mb.updatedUser;
        this.updatedDatetime = fiscalyear001mb.updatedDatetime;
	}
}
