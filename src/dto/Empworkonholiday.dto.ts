import { IsNotEmpty } from "class-validator";
import { Empworkonholiday001mb } from "src/entity/Empworkonholiday001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmpworkonholidayDTO extends BaseDTO {

	empwhId: number;

	@IsNotEmpty()
	empName: string | null;

	@IsNotEmpty()
	empNumber: string | null;

	@IsNotEmpty()
	empStatus: string | null;

	@IsNotEmpty()
	fromDate: Date | null;

	@IsNotEmpty()
	holiday: string | null;

	@IsNotEmpty()
	holidayList: string | null;

	@IsNotEmpty()
	toDate: Date | null;

	@IsNotEmpty()
	whDate: Date | null;

	setProperties(empworkonholiday001mb: Empworkonholiday001mb) {
		this.empwhId = empworkonholiday001mb.empwhId;
		this.empName = empworkonholiday001mb.empName;
		this.empNumber = empworkonholiday001mb.empNumber;
		this.empStatus = empworkonholiday001mb.empStatus;
		this.fromDate = empworkonholiday001mb.fromDate;
		this.holiday = empworkonholiday001mb.holiday;
		this.holidayList = empworkonholiday001mb.holidayList;
		this.toDate = empworkonholiday001mb.toDate;
		this.whDate = empworkonholiday001mb.whDate;
		this.insertUser = empworkonholiday001mb.insertUser;
		this.insertDatetime = empworkonholiday001mb.insertDatetime;
		this.updatedUser = empworkonholiday001mb.updatedUser;
		this.updatedDatetime = empworkonholiday001mb.updatedDatetime;
	}
}
