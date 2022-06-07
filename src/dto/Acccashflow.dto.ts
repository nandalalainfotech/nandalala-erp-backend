import { IsNotEmpty, MaxLength } from "class-validator";
import { Acccashflow001mb } from "src/entity/Acccashflow001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AcccashflowDTO extends BaseDTO{
	
	acfId: number;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	startYear: number;

	@IsNotEmpty()
	endYear: number;

	@IsNotEmpty()
	periodicity: string;

	@IsNotEmpty()
	account: string;

	@IsNotEmpty()
	jan: string | null;

	@IsNotEmpty()
	feb: string | null;

	@IsNotEmpty()
	mar: string | null;

	@IsNotEmpty()
	apr: string | null;

	@IsNotEmpty()
	may: string | null;

	@IsNotEmpty()
	jun: string | null;

	@IsNotEmpty()
	jul: string | null;

	@IsNotEmpty()
	aug: string | null;

	@IsNotEmpty()
	sep: string | null;

	@IsNotEmpty()
	oct: string | null;

	@IsNotEmpty()
	nov: string | null;

	@IsNotEmpty()
	dece: string | null;

	setProperties(acccashflow001mb: Acccashflow001mb) {
		this.acfId = acccashflow001mb.acfId;
		this.company = acccashflow001mb.company;
		this.startYear = acccashflow001mb.startYear;
		this.endYear = acccashflow001mb.endYear;
		this.periodicity = acccashflow001mb.periodicity;
		this.account = acccashflow001mb.account;
		this.jan = acccashflow001mb.jan;
		this.feb = acccashflow001mb.feb;
		this.mar = acccashflow001mb.mar;
		this.apr = acccashflow001mb.apr;
		this.may = acccashflow001mb.may;
		this.jun = acccashflow001mb.jun;
		this.jul = acccashflow001mb.jul;
		this.aug = acccashflow001mb.aug;
		this.sep = acccashflow001mb.sep;
		this.oct = acccashflow001mb.oct;
		this.nov = acccashflow001mb.nov;
		this.dece = acccashflow001mb.dece;
		this.insertUser = acccashflow001mb.insertUser;
        this.insertDatetime = acccashflow001mb.insertDatetime;
        this.updatedUser = acccashflow001mb.updatedUser;
        this.updatedDatetime = acccashflow001mb.updatedDatetime;
	}
}
