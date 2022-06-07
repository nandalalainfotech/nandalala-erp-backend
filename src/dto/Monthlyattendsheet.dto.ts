import { IsNotEmpty } from "class-validator";
import { Monthlyattendsheet001mb } from "src/entity/Monthlyattendsheet001mb.entity";
import { BaseDTO } from "./Base.dto";

export class MonthlyattendsheetDTO extends BaseDTO {

	atsId: number;

	@IsNotEmpty()
	attYear: number;

	@IsNotEmpty()
	empNumber: string;

	@IsNotEmpty()
	empName: string;

	@IsNotEmpty()
	branch: string;

	@IsNotEmpty()
	deptName: string;

	@IsNotEmpty()
	empDesign: string;

	@IsNotEmpty()
	empCompany: string;

	@IsNotEmpty()
	one1: string | null;

	@IsNotEmpty()
	two2: string | null;

	@IsNotEmpty()
	three3: string | null;

	@IsNotEmpty()
	four4: string | null;

	@IsNotEmpty()
	five5: string | null;

	@IsNotEmpty()
	six6: string | null;

	@IsNotEmpty()
	seven7: string | null;

	@IsNotEmpty()
	eight8: string | null;

	@IsNotEmpty()
	nine9: string | null;

	@IsNotEmpty()
	ten10: string | null;

	@IsNotEmpty()
	eleven11: string | null;

	@IsNotEmpty()
	twelve12: string | null;

	@IsNotEmpty()
	thirteen13: string | null;

	@IsNotEmpty()
	fourteen14: string | null;

	@IsNotEmpty()
	fifteen15: string | null;

	@IsNotEmpty()
	sixteen16: string | null;

	@IsNotEmpty()
	seventeen17: string | null;

	@IsNotEmpty()
	eighteen18: string | null;

	@IsNotEmpty()
	nineteen19: string | null;

	@IsNotEmpty()
	twenty20: string | null;

	@IsNotEmpty()
	twentyone21: string | null;

	@IsNotEmpty()
	twentytwo22: string | null;

	@IsNotEmpty()
	twentythree23: string | null;

	@IsNotEmpty()
	twentyfour24: string | null;

	@IsNotEmpty()
	twentyfive25: string | null;

	@IsNotEmpty()
	twentysix26: string | null;

	@IsNotEmpty()
	twentyseven27: string | null;

	@IsNotEmpty()
	twentyeight28: string | null;

	@IsNotEmpty()
	twentynine29: string | null;

	@IsNotEmpty()
	thirty30: string | null;

	@IsNotEmpty()
	totalPresent: string | null;

	@IsNotEmpty()
	totalAbsent: string | null;

	@IsNotEmpty()
	months: string | null;

	setProperties(monthlyattendsheet001mb: Monthlyattendsheet001mb) {
		this.atsId = monthlyattendsheet001mb.atsId;
		this.attYear = monthlyattendsheet001mb.attYear;
		this.empNumber = monthlyattendsheet001mb.empNumber;
		this.empName = monthlyattendsheet001mb.empName;
		this.branch = monthlyattendsheet001mb.branch;
		this.deptName = monthlyattendsheet001mb.deptName;
		this.empDesign = monthlyattendsheet001mb.empDesign;
		this.empCompany = monthlyattendsheet001mb.empCompany;
		this.totalPresent = monthlyattendsheet001mb.totalPresent;
		this.totalAbsent = monthlyattendsheet001mb.totalAbsent;
		this.months = monthlyattendsheet001mb.months;
		this.one1 = monthlyattendsheet001mb.one1;
		this.two2 = monthlyattendsheet001mb.two2;
		this.three3 = monthlyattendsheet001mb.three3;
		this.four4 = monthlyattendsheet001mb.four4;
		this.five5 = monthlyattendsheet001mb.five5;
		this.six6 = monthlyattendsheet001mb.six6;
		this.seven7 = monthlyattendsheet001mb.seven7;
		this.eight8 = monthlyattendsheet001mb.eight8;
		this.nine9 = monthlyattendsheet001mb.nine9;
		this.ten10 = monthlyattendsheet001mb.ten10;
		this.eleven11 = monthlyattendsheet001mb.eleven11;
		this.twelve12 = monthlyattendsheet001mb.twelve12;
		this.thirteen13 = monthlyattendsheet001mb.thirteen13;
		this.fourteen14 = monthlyattendsheet001mb.fourteen14;
		this.fifteen15 = monthlyattendsheet001mb.fifteen15;
		this.sixteen16 = monthlyattendsheet001mb.sixteen16;
		this.seventeen17 = monthlyattendsheet001mb.seventeen17;
		this.eighteen18 = monthlyattendsheet001mb.eighteen18;
		this.nineteen19 = monthlyattendsheet001mb.nineteen19;
		this.twenty20 = monthlyattendsheet001mb.twenty20;
		this.twentyone21 = monthlyattendsheet001mb.twentyone21;
		this.twentytwo22 = monthlyattendsheet001mb.twentytwo22;
		this.twentythree23 = monthlyattendsheet001mb.twentythree23;
		this.twentyfour24 = monthlyattendsheet001mb.twentyfour24;
		this.twentyfive25 = monthlyattendsheet001mb.twentyfive25;
		this.twentysix26 = monthlyattendsheet001mb.twentysix26;
		this.twentyseven27 = monthlyattendsheet001mb.twentyseven27;
		this.twentyeight28 = monthlyattendsheet001mb.twentyeight28;
		this.twentynine29 = monthlyattendsheet001mb.twentynine29;
		this.thirty30 = monthlyattendsheet001mb.thirty30;
		this.insertUser = monthlyattendsheet001mb.insertUser;
        this.insertDatetime = monthlyattendsheet001mb.insertDatetime;
        this.updatedUser = monthlyattendsheet001mb.updatedUser;
        this.updatedDatetime = monthlyattendsheet001mb.updatedDatetime;
	}
}
