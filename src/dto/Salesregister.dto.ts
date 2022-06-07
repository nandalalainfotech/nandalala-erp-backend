import { IsNotEmpty } from "class-validator";
import { Salesregister001mb } from "src/entity/Salesregister001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SalesregisterDTO extends BaseDTO {
	regId: number;

	@IsNotEmpty()
	postingDate: Date;

	@IsNotEmpty()
	customername: string;

	@IsNotEmpty()
	customergroup: string;

	@IsNotEmpty()
	terName: string;

	@IsNotEmpty()
	accountType: string;

	@IsNotEmpty()
	paymentMode: string;

	@IsNotEmpty()
	projectname: string;

	@IsNotEmpty()
	remarks: string;

	@IsNotEmpty()
	salesCode: string;

	@IsNotEmpty()
	delNote: string;

	@IsNotEmpty()
	currency: string;

	@IsNotEmpty()
	gainloss: string | null;

	@IsNotEmpty()
	saleswpl: string | null;

	@IsNotEmpty()
	netTotal: string | null;

	@IsNotEmpty()
	totalTax: string | null;

	@IsNotEmpty()
	grandTotal: string | null;

	@IsNotEmpty()
	roundedTotal: string | null;

	@IsNotEmpty()
	outstandAmt: string | null;

	setProperties(salesregister001mb: Salesregister001mb) {
		this.regId = salesregister001mb.regId;
		this.postingDate = salesregister001mb.postingDate;
		this.customername = salesregister001mb.customername;
		this.customergroup = salesregister001mb.customergroup;
		this.terName = salesregister001mb.terName;
		this.accountType = salesregister001mb.accountType;
		this.paymentMode = salesregister001mb.paymentMode;
		this.projectname = salesregister001mb.projectname;
		this.remarks = salesregister001mb.remarks;
		this.salesCode = salesregister001mb.salesCode;
		this.delNote = salesregister001mb.delNote;
		this.currency = salesregister001mb.currency;
		this.gainloss = salesregister001mb.gainloss;
		this.saleswpl = salesregister001mb.saleswpl;
		this.netTotal = salesregister001mb.netTotal;
		this.totalTax = salesregister001mb.totalTax;
		this.grandTotal = salesregister001mb.grandTotal;
		this.roundedTotal = salesregister001mb.roundedTotal;
		this.outstandAmt = salesregister001mb.outstandAmt;
		this.insertUser = salesregister001mb.insertUser;
        this.insertDatetime = salesregister001mb.insertDatetime;
        this.updatedUser = salesregister001mb.updatedUser;
        this.updatedDatetime = salesregister001mb.updatedDatetime;
	}
}
