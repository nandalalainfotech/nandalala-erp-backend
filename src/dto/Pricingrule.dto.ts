import { IsNotEmpty } from "class-validator";
import { Pricingrule001mb } from "src/entity/Pricingrule001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PricingruleDTO extends BaseDTO {

	priceruleid: number;

	@IsNotEmpty()
	priceTitle: string;

	@IsNotEmpty()
	itemCode: string;


	selling: boolean;

	buying: boolean;

	@IsNotEmpty()
	minQty: string;

	@IsNotEmpty()
	maxQty: string;

	@IsNotEmpty()
	validFrom: Date;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	validUpto: Date;

	@IsNotEmpty()
	prordisc: string;

	@IsNotEmpty()
	discprlist: string | null;

	@IsNotEmpty()
	forprlist: string | null;

	setProperties(pricingrule001mb: Pricingrule001mb) {
		this.priceruleid = pricingrule001mb.priceruleid;
		this.priceTitle = pricingrule001mb.priceTitle;
		this.itemCode = pricingrule001mb.itemCode;
		this.selling = pricingrule001mb.selling;
		this.buying = pricingrule001mb.buying;
		this.minQty = pricingrule001mb.minQty;
		this.maxQty = pricingrule001mb.maxQty;
		this.validFrom = pricingrule001mb.validFrom;
		this.company = pricingrule001mb.company;
		this.validUpto = pricingrule001mb.validUpto;
		this.prordisc = pricingrule001mb.prordisc;
		this.discprlist = pricingrule001mb.discprlist;
		this.forprlist = pricingrule001mb.forprlist;
		this.insertUser = pricingrule001mb.insertUser;
        this.insertDatetime = pricingrule001mb.insertDatetime;
        this.updatedUser = pricingrule001mb.updatedUser;
        this.updatedDatetime = pricingrule001mb.updatedDatetime;
	}
}
