import { IsNotEmpty } from "class-validator";
import { Leaveapp001mb } from "src/entity/Leaveapp001mb.entity";
import { BaseDTO } from "./Base.dto";

export class LeaveappDTO extends BaseDTO {

	lvappId: number;

	@IsNotEmpty()
	series: string;

	@IsNotEmpty()
	leaveType: string;

	@IsNotEmpty()
	reason: string;

	@IsNotEmpty()
	fromDate: Date;

	@IsNotEmpty()
	toDate: Date;

	@IsNotEmpty()
	leaveApprover: string;

	@IsNotEmpty()
	postingDate: Date;


	sNo: number | null;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	empNumber: string | null;

	@IsNotEmpty()
	deptName: string | null;

	setProperties(leaveapp001mb: Leaveapp001mb) {
		this.lvappId = leaveapp001mb.lvappId;
		this.series = leaveapp001mb.series;
		this.leaveType = leaveapp001mb.leaveType;
		this.reason = leaveapp001mb.reason;
		this.fromDate = leaveapp001mb.fromDate;
		this.toDate = leaveapp001mb.toDate;
		this.leaveApprover = leaveapp001mb.leaveApprover;
		this.postingDate = leaveapp001mb.postingDate;
		this.sNo = leaveapp001mb.sNo;
		this.company = leaveapp001mb.company;
		this.empNumber = leaveapp001mb.empNumber;
		this.deptName = leaveapp001mb.deptName;
		this.insertUser = leaveapp001mb.insertUser;
        this.insertDatetime = leaveapp001mb.insertDatetime;
        this.updatedUser = leaveapp001mb.updatedUser;
        this.updatedDatetime = leaveapp001mb.updatedDatetime;
	}
}
