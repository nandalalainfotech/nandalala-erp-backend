import { IsNotEmpty } from "class-validator";
import { Empleavebalance001mb } from "src/entity/Empleavebalance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmpleavebalanceDTO extends BaseDTO {

	elbId: number;

	@IsNotEmpty()
	branch: string | null;

	@IsNotEmpty()
	clBalance: number | null;

	@IsNotEmpty()
	clTaken: string | null;

	@IsNotEmpty()
	company: string | null;

	@IsNotEmpty()
	compoffBalance: number | null;

	@IsNotEmpty()
	compoffTaken: string | null;

	@IsNotEmpty()
	deptName: string | null;

	@IsNotEmpty()
	empName: string | null;

	@IsNotEmpty()
	empNumber: string | null;

	@IsNotEmpty()
	fromDate: Date | null;

	@IsNotEmpty()
	lvwoutpayBalance: number | null;

	@IsNotEmpty()
	lvwoutpayTaken: string | null;

	@IsNotEmpty()
	plBalance: number | null;

	@IsNotEmpty()
	plTaken: string | null;

	@IsNotEmpty()
	slBalance: number | null;

	@IsNotEmpty()
	slTaken: string | null;

	@IsNotEmpty()
	toDate: Date | null;

	setProperties(empleavebalance001mb: Empleavebalance001mb) {
		this.elbId = empleavebalance001mb.elbId;
		this.branch = empleavebalance001mb.branch;
		this.clBalance = empleavebalance001mb.clBalance;
		this.clTaken = empleavebalance001mb.clTaken;
		this.company = empleavebalance001mb.company;
		this.compoffBalance = empleavebalance001mb.compoffBalance;
		this.compoffTaken = empleavebalance001mb.compoffTaken;
		this.deptName = empleavebalance001mb.deptName;
		this.empName = empleavebalance001mb.empName;
		this.empNumber = empleavebalance001mb.empNumber;
		this.fromDate = empleavebalance001mb.fromDate;
		this.lvwoutpayBalance = empleavebalance001mb.lvwoutpayBalance;
		this.lvwoutpayTaken = empleavebalance001mb.lvwoutpayTaken;
		this.plTaken = empleavebalance001mb.plTaken;
		this.plBalance = empleavebalance001mb.plBalance;
		this.slBalance = empleavebalance001mb.slBalance;
		this.slTaken = empleavebalance001mb.slTaken;
		this.toDate = empleavebalance001mb.toDate;
		this.insertUser = empleavebalance001mb.insertUser;
		this.insertDatetime = empleavebalance001mb.insertDatetime;
		this.updatedUser = empleavebalance001mb.updatedUser;
		this.updatedDatetime = empleavebalance001mb.updatedDatetime;
	}
}
