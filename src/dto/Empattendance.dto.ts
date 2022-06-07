import { IsNotEmpty } from "class-validator";
import { Empattendance001mb } from "src/entity/Empattendance001mb.entity";
import { BaseDTO } from "./Base.dto";


export class EmpattendanceDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	clBalance: number | null;

	@IsNotEmpty()
	clTaken: string | null;

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
	lwtoutpBalance: number | null;

	@IsNotEmpty()
	lwtoutpTaken: string | null;

	@IsNotEmpty()
	mtlvBalance: number | null;

	@IsNotEmpty()
	mtlvTaken: string | null;

	@IsNotEmpty()
	ptyBalance: number | null;

	@IsNotEmpty()
	ptyTaken: string | null;

	@IsNotEmpty()
	pvglvBalance: number | null;

	@IsNotEmpty()
	pvglvTaken: string | null;

	@IsNotEmpty()
	sklvBalance: number | null;

	@IsNotEmpty()
	sklvTaken: string | null;

	@IsNotEmpty()
	vcBalance: number | null;

	@IsNotEmpty()
	vcTaken: string | null;

	setProperties(empattendance001mb: Empattendance001mb) {
		this.id = empattendance001mb.id;
		this.clBalance = empattendance001mb.clBalance;
		this.clTaken = empattendance001mb.clTaken;
		this.compoffBalance = empattendance001mb.compoffBalance;
		this.compoffTaken = empattendance001mb.compoffTaken;
		this.deptName = empattendance001mb.deptName;
		this.empName = empattendance001mb.empName;
		this.empNumber = empattendance001mb.empNumber;
		this.lwtoutpBalance = empattendance001mb.lwtoutpBalance;
		this.lwtoutpTaken = empattendance001mb.lwtoutpTaken;
		this.mtlvBalance = empattendance001mb.mtlvBalance;
		this.mtlvTaken = empattendance001mb.mtlvTaken;
		this.ptyBalance = empattendance001mb.ptyBalance;
		this.ptyTaken = empattendance001mb.ptyTaken;
		this.pvglvBalance = empattendance001mb.pvglvBalance;
		this.pvglvTaken = empattendance001mb.pvglvTaken;
		this.sklvBalance = empattendance001mb.sklvBalance;
		this.sklvTaken = empattendance001mb.sklvTaken;
		this.vcBalance = empattendance001mb.vcBalance;
		this.vcTaken = empattendance001mb.vcTaken;
		this.insertUser = empattendance001mb.insertUser;
        this.insertDatetime = empattendance001mb.insertDatetime;
        this.updatedUser = empattendance001mb.updatedUser;
        this.updatedDatetime = empattendance001mb.updatedDatetime;
	}
}
