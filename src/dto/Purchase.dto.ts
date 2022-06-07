import { IsNotEmpty } from "class-validator";
import { Purchase001mb } from "src/entity/Purchase001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurchaseDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	date: Date | null;

	@IsNotEmpty()
	grandtotal: number | null;

	@IsNotEmpty()
	status: string | null;

	@IsNotEmpty()
	supplier: string | null;

	@IsNotEmpty()
	supplieraddress: string | null;

	setProperties(purchase001mb: Purchase001mb) {
		this.id = purchase001mb.id;
		this.date = purchase001mb.date;
		this.grandtotal = purchase001mb.grandtotal;
		this.status = purchase001mb.status;
		this.supplier = purchase001mb.supplier;
		this.supplieraddress = purchase001mb.supplieraddress;
		this.insertUser = purchase001mb.insertUser;
        this.insertDatetime = purchase001mb.insertDatetime;
        this.updatedUser = purchase001mb.updatedUser;
        this.updatedDatetime = purchase001mb.updatedDatetime;
	}
}
