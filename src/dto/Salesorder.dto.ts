import { IsNotEmpty } from "class-validator";
import { Salesorder001mb } from "src/entity/Salesorder001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SalesorderDTO extends BaseDTO {
	sorder: number;

	@IsNotEmpty()
	customername: string;

	@IsNotEmpty()
	cpurchaseorder: string | null;

	@IsNotEmpty()
	statusname: string | null;


	itemid: number | null;


	orderid: number | null;

	@IsNotEmpty()
	itemcode: string | null;

	@IsNotEmpty()
	ordername: string | null;


	statusid: number | null;

	@IsNotEmpty()
	sdeliverydate: Date | null;

	@IsNotEmpty()
	sorderdate: Date | null;

	setProperties(salesorder001mb: Salesorder001mb) {
		this.sorder = salesorder001mb.sorder;
		this.customername = salesorder001mb.customername;
		this.cpurchaseorder = salesorder001mb.cpurchaseorder;
		this.statusname = salesorder001mb.statusname;
		this.itemid = salesorder001mb.itemid;
		this.orderid = salesorder001mb.orderid;
		this.itemcode = salesorder001mb.itemcode;
		this.ordername = salesorder001mb.ordername;
		this.statusid = salesorder001mb.statusid;
		this.sdeliverydate = salesorder001mb.sdeliverydate;
		this.sorderdate = salesorder001mb.sorderdate;
		this.insertUser = salesorder001mb.insertUser;
        this.insertDatetime = salesorder001mb.insertDatetime;
        this.updatedUser = salesorder001mb.updatedUser;
        this.updatedDatetime = salesorder001mb.updatedDatetime;
	}


}
