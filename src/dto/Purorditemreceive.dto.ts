import { IsNotEmpty } from "class-validator";
import { Purorditemreceive001mb } from "src/entity/Purorditemreceive001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurorditemreceiveDTO extends BaseDTO{

	poitrecId: number;

	@IsNotEmpty()
	puOrder: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	reqbyDate: string;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	projectName: string | null;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	receivedQty: string | null;

	@IsNotEmpty()
	qtytoReceive: string | null;

	@IsNotEmpty()
	warehouseName: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	brandName: string;

	@IsNotEmpty()
	company: string;

	setProperties(purorditemreceive001mb: Purorditemreceive001mb) {
		this.poitrecId = purorditemreceive001mb.poitrecId;
		this.itemCode = purorditemreceive001mb.itemCode;
		this.puOrder = purorditemreceive001mb.puOrder;
		this.date = purorditemreceive001mb.date;
		this.reqbyDate = purorditemreceive001mb.reqbyDate;
		this.supName = purorditemreceive001mb.supName;
		this.projectName = purorditemreceive001mb.projectName;
		this.quantity = purorditemreceive001mb.quantity;
		this.receivedQty = purorditemreceive001mb.receivedQty;
		this.qtytoReceive = purorditemreceive001mb.qtytoReceive;
		this.warehouseName = purorditemreceive001mb.warehouseName;
		this.description = purorditemreceive001mb.description;
		this.brandName = purorditemreceive001mb.brandName;
		this.company = purorditemreceive001mb.company;
		this.insertUser = purorditemreceive001mb.insertUser;
        this.insertDatetime = purorditemreceive001mb.insertDatetime;
        this.updatedUser = purorditemreceive001mb.updatedUser;
        this.updatedDatetime = purorditemreceive001mb.updatedDatetime;
	}
}
