import { IsNotEmpty } from "class-validator";
import { Orditemsdeliver001mb } from "src/entity/Orditemsdeliver001mb.entity";
import { BaseDTO } from "./Base.dto";

export class OrditemsdeliverDTO extends BaseDTO {

	orditemsId: number;

	@IsNotEmpty()
	sorderName: string;

	@IsNotEmpty()
	customername: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	projectName: string | null;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	deliverQty: number;

	@IsNotEmpty()
	qtytoDeliver: number;

	@IsNotEmpty()
	rate: string | null;

	@IsNotEmpty()

	amount: string | null;

	@IsNotEmpty()

	amttoDeliver: string | null;

	@IsNotEmpty()
	availableQty: string;

	@IsNotEmpty()
	projectedQty: string | null;

	@IsNotEmpty()
	expectedQty: string | null;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	itemGroup: string;

	@IsNotEmpty()
	warehouseName: string;

	setProperties(orditemsdeliver001mb: Orditemsdeliver001mb) {
		this.orditemsId = orditemsdeliver001mb.orditemsId;
		this.itemCode = orditemsdeliver001mb.itemCode;
		this.sorderName = orditemsdeliver001mb.sorderName;
		this.customername = orditemsdeliver001mb.customername;
		this.date = orditemsdeliver001mb.date;
		this.projectName = orditemsdeliver001mb.projectName;
		this.quantity = orditemsdeliver001mb.quantity;
		this.deliverQty = orditemsdeliver001mb.deliverQty;
		this.qtytoDeliver = orditemsdeliver001mb.qtytoDeliver;
		this.rate = orditemsdeliver001mb.rate;
		this.amount = orditemsdeliver001mb.amount;
		this.amttoDeliver = orditemsdeliver001mb.amttoDeliver;
		this.availableQty = orditemsdeliver001mb.availableQty;
		this.projectedQty = orditemsdeliver001mb.projectedQty;
		this.expectedQty = orditemsdeliver001mb.expectedQty;
		this.description = orditemsdeliver001mb.description;
		this.itemGroup = orditemsdeliver001mb.itemGroup;
		this.warehouseName = orditemsdeliver001mb.warehouseName;
		this.insertUser = orditemsdeliver001mb.insertUser;
        this.insertDatetime = orditemsdeliver001mb.insertDatetime;
        this.updatedUser = orditemsdeliver001mb.updatedUser;
        this.updatedDatetime = orditemsdeliver001mb.updatedDatetime;
	}
}
