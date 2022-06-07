import { IsNotEmpty, MaxLength } from "class-validator";
import { Accgenledge001mb } from "src/entity/Accgenledge001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccgenledgeDTO extends BaseDTO{
	accglId: number;

	@IsNotEmpty()
	company: string;

	@MaxLength(40)
	@IsNotEmpty()
	fromDate: Date;

	@IsNotEmpty()
	toDate: Date;

	@IsNotEmpty()
	partyType: string;

	@IsNotEmpty()
	partyName: string;

	grpbyVoucher: boolean;

	grobyAccount: boolean;

	@IsNotEmpty()
	letterHead: string;

	@IsNotEmpty()
	postingDate: Date;

	@IsNotEmpty()
	accountName: string;

	@IsNotEmpty()
	debit: number | null;

	@IsNotEmpty()
	credit: number | null;

	@IsNotEmpty()
	voucherCode: string;

	@IsNotEmpty()
	voucherType: string;

	@IsNotEmpty()
	againstAmt: number | null;

	@IsNotEmpty()
	projectname: string;

	@IsNotEmpty()
	costCenter: string;

	@IsNotEmpty()
	againvcType: string;

	@IsNotEmpty()
	againvcName: string;


	setProperties(accgenledge001mb: Accgenledge001mb) {
		this.accglId = accgenledge001mb.accglId;
		this.company = accgenledge001mb.company;
		this.fromDate = accgenledge001mb.fromDate;
		this.toDate = accgenledge001mb.toDate;
		this.partyType = accgenledge001mb.partyType;
		this.partyName = accgenledge001mb.partyName;
		this.grpbyVoucher = accgenledge001mb.grpbyVoucher;
		this.grobyAccount = accgenledge001mb.grobyAccount;
		this.letterHead = accgenledge001mb.letterHead;
		this.postingDate = accgenledge001mb.postingDate;
		this.accountName = accgenledge001mb.accountName;
		this.debit = accgenledge001mb.debit;
		this.credit = accgenledge001mb.credit;
		this.voucherCode = accgenledge001mb.voucherCode;
		this.voucherType = accgenledge001mb.voucherType;
		this.againstAmt = accgenledge001mb.againstAmt;
		this.projectname = accgenledge001mb.projectname;
		this.costCenter = accgenledge001mb.costCenter;
		this.againvcType = accgenledge001mb.againvcType;
		this.againvcName = accgenledge001mb.againvcName;
		this.insertUser = accgenledge001mb.insertUser;
        this.insertDatetime = accgenledge001mb.insertDatetime;
        this.updatedUser = accgenledge001mb.updatedUser;
        this.updatedDatetime = accgenledge001mb.updatedDatetime;
	}
}



