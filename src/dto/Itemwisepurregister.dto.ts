import { IsNotEmpty } from "class-validator";
import { Itemwisepurregister001mb } from "src/entity/Itemwisepurregister001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItemwisepurregisterDTO extends BaseDTO {
	iwprId: number;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	itemGroup: string;

	@IsNotEmpty()
	inVoice: string;

	@IsNotEmpty()
	postingDate: Date;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	payAccount: number;

	@IsNotEmpty()
	paymentMode: string;

	@IsNotEmpty()
	projectname: string;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	poSeries: string;

	@IsNotEmpty()
	purtName: string;

	@IsNotEmpty()
	expenseAccount: number | null;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	rate: string | null;

	@IsNotEmpty()
	amount: string | null;

	@IsNotEmpty()
	totalTax: string | null;

	@IsNotEmpty()
	total: string | null;

	@IsNotEmpty()
	currency: string;
	
	setProperties(itemwisepurregister001mb: Itemwisepurregister001mb) {
		this.iwprId = itemwisepurregister001mb.iwprId;
		this.itemCode = itemwisepurregister001mb.itemCode;
		this.itemGroup = itemwisepurregister001mb.itemGroup;
		this.inVoice = itemwisepurregister001mb.inVoice;
		this.postingDate = itemwisepurregister001mb.postingDate;
		this.supName = itemwisepurregister001mb.supName;
		this.payAccount = itemwisepurregister001mb.payAccount;
		this.paymentMode = itemwisepurregister001mb.paymentMode;
		this.projectname = itemwisepurregister001mb.projectname;
		this.company = itemwisepurregister001mb.company;
		this.poSeries = itemwisepurregister001mb.poSeries;
		this.purtName = itemwisepurregister001mb.purtName;
		this.expenseAccount = itemwisepurregister001mb.expenseAccount;
		this.quantity = itemwisepurregister001mb.quantity;
		this.rate = itemwisepurregister001mb.rate;
		this.amount = itemwisepurregister001mb.amount;
		this.totalTax = itemwisepurregister001mb.totalTax;
		this.total = itemwisepurregister001mb.total;
		this.currency = itemwisepurregister001mb.currency;
		this.insertUser = itemwisepurregister001mb.insertUser;
        this.insertDatetime = itemwisepurregister001mb.insertDatetime;
        this.updatedUser = itemwisepurregister001mb.updatedUser;
        this.updatedDatetime = itemwisepurregister001mb.updatedDatetime;
	}
}
