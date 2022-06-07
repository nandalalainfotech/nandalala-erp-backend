import { IsNotEmpty } from "class-validator";
import { Taxrule001mb } from "src/entity/Taxrule001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TaxruleDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	billingcity: string | null;

	@IsNotEmpty()
	billingcountry: string | null;

	@IsNotEmpty()
	billingstate: string | null;

	@IsNotEmpty()
	customer: string | null;

	@IsNotEmpty()
	fromdate: Date | null;

	@IsNotEmpty()
	shippingcity: string | null;

	@IsNotEmpty()
	shippingcountry: string | null;

	@IsNotEmpty()
	shippingstate: string | null;

	@IsNotEmpty()
	taxtemplate: string | null;

	@IsNotEmpty()
	taxtype: string | null;


	@IsNotEmpty()
	todate: Date | null;


	setProperties(taxrule001mb: Taxrule001mb) {
		this.id = taxrule001mb.id;
		this.billingcity = taxrule001mb.billingcity;
		this.billingcountry = taxrule001mb.billingcountry;
		this.billingstate = taxrule001mb.billingstate;
		this.customer = taxrule001mb.customer;
		this.fromdate = taxrule001mb.fromdate;
		this.shippingcity = taxrule001mb.shippingcity;
		this.shippingcountry = taxrule001mb.shippingcountry;
		this.shippingstate = taxrule001mb.shippingstate;
		this.taxtemplate = taxrule001mb.taxtemplate;
		this.taxtype = taxrule001mb.taxtype;
		this.todate = taxrule001mb.todate;
		this.insertUser = taxrule001mb.insertUser;
        this.insertDatetime = taxrule001mb.insertDatetime;
        this.updatedUser = taxrule001mb.updatedUser;
        this.updatedDatetime = taxrule001mb.updatedDatetime;
	}
}
