import { IsNotEmpty, MaxLength } from "class-validator";
import { Accprofitlossstatement001mb } from "src/entity/Accprofitlossstatement001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccprofitlossstatementDTO extends BaseDTO{

	aplsId: number;

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
	costcenter: string;

	@IsNotEmpty()
	projectname: string;

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

	setProperties(accprofitlossstatement001mb: Accprofitlossstatement001mb) {
		this.aplsId = accprofitlossstatement001mb.aplsId;
		this.costcenter = accprofitlossstatement001mb.costcenter;
		this.company = accprofitlossstatement001mb.company;
		this.startYear = accprofitlossstatement001mb.startYear;
		this.endYear = accprofitlossstatement001mb.endYear;
		this.periodicity = accprofitlossstatement001mb.periodicity;
		this.account = accprofitlossstatement001mb.account;
		this.jan = accprofitlossstatement001mb.jan;
		this.feb = accprofitlossstatement001mb.feb;
		this.mar = accprofitlossstatement001mb.mar;
		this.apr = accprofitlossstatement001mb.apr;
		this.may = accprofitlossstatement001mb.may;
		this.jun = accprofitlossstatement001mb.jun;
		this.jul = accprofitlossstatement001mb.jul;
		this.aug = accprofitlossstatement001mb.aug;
		this.sep = accprofitlossstatement001mb.sep;
		this.oct = accprofitlossstatement001mb.oct;
		this.nov = accprofitlossstatement001mb.nov;
		this.dece = accprofitlossstatement001mb.dece;
		this.projectname = accprofitlossstatement001mb.projectname;
		this.insertUser = accprofitlossstatement001mb.insertUser;
        this.insertDatetime = accprofitlossstatement001mb.insertDatetime;
        this.updatedUser = accprofitlossstatement001mb.updatedUser;
        this.updatedDatetime = accprofitlossstatement001mb.updatedDatetime;
	}
}
