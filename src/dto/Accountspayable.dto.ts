import { IsNotEmpty } from "class-validator";
import { Accountspayable001mb } from "src/entity/Accountspayable001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccountspayableDTO extends BaseDTO{

	id: number;

	@IsNotEmpty()
	postingdate: Date;

	@IsNotEmpty()
	supplier: string;

	@IsNotEmpty()
	suppliertype: string;

	@IsNotEmpty()
	vouchertype: string;

	@IsNotEmpty()
	vouchernumber: string;

	@IsNotEmpty()
	duedate: Date;

	@IsNotEmpty()
	billno: number;

	@IsNotEmpty()
	billdate: Date;

	@IsNotEmpty()
	invoicedamount: number;

	@IsNotEmpty()
	paidamount: number;

	@IsNotEmpty()
	outstandingamount: number;

	@IsNotEmpty()
	age: number;

	@IsNotEmpty()
	uptothirty: number;

	@IsNotEmpty()
	uptosixty: number;

	@IsNotEmpty()
	uptoninety: number;

	@IsNotEmpty()
	ninetyabove: number;

	@IsNotEmpty()
	currency: number;

	@IsNotEmpty()
	remarks: string;

	setProperties(accountspayable001mb: Accountspayable001mb) {
		this.id = accountspayable001mb.id;
		this.postingdate = accountspayable001mb.postingdate;
		this.supplier = accountspayable001mb.supplier;
		this.suppliertype = accountspayable001mb.suppliertype;
		this.vouchertype = accountspayable001mb.vouchertype;
		this.vouchernumber = accountspayable001mb.vouchernumber;
		this.duedate = accountspayable001mb.duedate;
		this.billno = accountspayable001mb.billno;
		this.billdate = accountspayable001mb.billdate;
		this.invoicedamount = accountspayable001mb.invoicedamount;
		this.paidamount = accountspayable001mb.paidamount;
		this.outstandingamount = accountspayable001mb.outstandingamount;
		this.age = accountspayable001mb.age;
		this.uptothirty = accountspayable001mb.uptothirty;
		this.uptosixty = accountspayable001mb.uptosixty;
		this.uptoninety = accountspayable001mb.uptoninety;
		this.currency = accountspayable001mb.currency;
		this.remarks = accountspayable001mb.remarks;
		this.ninetyabove = accountspayable001mb.ninetyabove;
		this.insertUser = accountspayable001mb.insertUser;
        this.insertDatetime = accountspayable001mb.insertDatetime;
        this.updatedUser = accountspayable001mb.updatedUser;
        this.updatedDatetime = accountspayable001mb.updatedDatetime;
	}
}
