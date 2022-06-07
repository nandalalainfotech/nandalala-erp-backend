import { IsNotEmpty } from "class-validator";
import { Purchaseregister001mb } from "src/entity/Purchaseregister001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurchaseregisterDTO extends BaseDTO {
	regId: number;

	@IsNotEmpty()
	invoice: string;

	@IsNotEmpty()
	postingDate: Date;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	supType: string;

	@IsNotEmpty()
	accountType: string;

	@IsNotEmpty()
	paymentMode: string;

	@IsNotEmpty()
	projectname: string;

	@IsNotEmpty()
	billNo: string;

	@IsNotEmpty()
	billDate: Date;

	@IsNotEmpty()
	remarks: string;

	@IsNotEmpty()
	poSeries: string;

	@IsNotEmpty()
	purecpt: string;

	@IsNotEmpty()
	currency: string;

	@IsNotEmpty()
	furnituresCount: string | null;

	@IsNotEmpty()
	softwaresCount: string | null;

	@IsNotEmpty()
	stkrecBalance: string | null;

	@IsNotEmpty()
	netTotal: string | null;

	@IsNotEmpty()
	totalTax: string | null;

	@IsNotEmpty()
	grandTotal: string | null;

	@IsNotEmpty()
	roundTotal: string | null;
	
	@IsNotEmpty()
	outstandAmt: number | null;

	setProperties(purchaseregister001mb: Purchaseregister001mb) {
		this.regId = purchaseregister001mb.regId;
		this.invoice = purchaseregister001mb.invoice;
		this.postingDate = purchaseregister001mb.postingDate;
		this.supName = purchaseregister001mb.supName;
		this.supType = purchaseregister001mb.supType;
		this.accountType = purchaseregister001mb.accountType;
		this.paymentMode = purchaseregister001mb.paymentMode;
		this.projectname = purchaseregister001mb.projectname;
		this.billNo = purchaseregister001mb.billNo;
		this.billDate = purchaseregister001mb.billDate;
		this.remarks = purchaseregister001mb.remarks;
		this.poSeries = purchaseregister001mb.poSeries;
		this.purecpt = purchaseregister001mb.purecpt;
		this.currency = purchaseregister001mb.currency;
		this.furnituresCount = purchaseregister001mb.furnituresCount;
		this.softwaresCount = purchaseregister001mb.softwaresCount;
		this.stkrecBalance = purchaseregister001mb.stkrecBalance;
		this.netTotal = purchaseregister001mb.netTotal;
		this.totalTax = purchaseregister001mb.totalTax;
		this.grandTotal = purchaseregister001mb.grandTotal;
		this.roundTotal = purchaseregister001mb.roundTotal;
		this.outstandAmt = purchaseregister001mb.outstandAmt;
		this.insertUser = purchaseregister001mb.insertUser;
        this.insertDatetime = purchaseregister001mb.insertDatetime;
        this.updatedUser = purchaseregister001mb.updatedUser;
        this.updatedDatetime = purchaseregister001mb.updatedDatetime;
	}
}
