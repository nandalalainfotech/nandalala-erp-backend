import { IsNotEmpty } from "class-validator";
import { Accountsreceivable001mb } from "src/entity/Accountsreceivable001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccountsreceivableDTO extends BaseDTO{
	id: number;

	@IsNotEmpty()
	postingdate: Date;

	@IsNotEmpty()
	customer: string;

	@IsNotEmpty()
	vouchertype: string;

	@IsNotEmpty()
	voucherno: string;

	@IsNotEmpty()
	duedate: Date;

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
	territory: string;

	@IsNotEmpty()
	remarks: string;

	setProperties(accountsreceivable001mb: Accountsreceivable001mb) {
		this.id = accountsreceivable001mb.id;
		this.postingdate = accountsreceivable001mb.postingdate;
		this.territory = accountsreceivable001mb.territory;
		this.vouchertype = accountsreceivable001mb.vouchertype;
		this.customer = accountsreceivable001mb.customer;
		this.duedate = accountsreceivable001mb.duedate;
		this.voucherno = accountsreceivable001mb.voucherno;
		this.invoicedamount = accountsreceivable001mb.invoicedamount;
		this.paidamount = accountsreceivable001mb.paidamount;
		this.outstandingamount = accountsreceivable001mb.outstandingamount;
		this.age = accountsreceivable001mb.age;
		this.uptothirty = accountsreceivable001mb.uptothirty;
		this.uptosixty = accountsreceivable001mb.uptosixty;
		this.uptoninety = accountsreceivable001mb.uptoninety;
		this.currency = accountsreceivable001mb.currency;
		this.remarks = accountsreceivable001mb.remarks;
		this.ninetyabove = accountsreceivable001mb.ninetyabove;
		this.insertUser = accountsreceivable001mb.insertUser;
        this.insertDatetime = accountsreceivable001mb.insertDatetime;
        this.updatedUser = accountsreceivable001mb.updatedUser;
        this.updatedDatetime = accountsreceivable001mb.updatedDatetime;
	}
}
