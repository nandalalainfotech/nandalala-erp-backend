import { IsNotEmpty } from "class-validator";
import { Salarystructure001mb } from "src/entity/Salarystructure001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SalarystructureDTO extends BaseDTO {

	strId: number;

	@IsNotEmpty()
	empName: string | null;

	@IsNotEmpty()
	isActive: string;

	@IsNotEmpty()
	fromDate: Date | null;

	setProperties(salarystructure001mb: Salarystructure001mb) {
		this.strId = salarystructure001mb.strId;
		this.empName = salarystructure001mb.empName;
		this.isActive = salarystructure001mb.isActive;
		this.fromDate = salarystructure001mb.fromDate;
		this.insertUser = salarystructure001mb.insertUser;
        this.insertDatetime = salarystructure001mb.insertDatetime;
        this.updatedUser = salarystructure001mb.updatedUser;
        this.updatedDatetime = salarystructure001mb.updatedDatetime;
	}
}
