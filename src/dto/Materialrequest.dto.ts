import { IsNotEmpty } from "class-validator";
import { Materialrequest001mb } from "src/entity/Materialrequest001mb.entity";
import { BaseDTO } from "./Base.dto";

export class MaterialrequestDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	item: string;

	@IsNotEmpty()
	warehouse: string;

	@IsNotEmpty()
	actual: number;

	@IsNotEmpty()
	requested: number;

	@IsNotEmpty()
	reserved: number;

	@IsNotEmpty()
	ordered: number;

	@IsNotEmpty()
	projected: number;

	setProperties(materialrequest001mb: Materialrequest001mb) {
		this.id = materialrequest001mb.id;
		this.item = materialrequest001mb.item;
		this.warehouse = materialrequest001mb.warehouse;
		this.actual = materialrequest001mb.actual;
		this.requested = materialrequest001mb.requested;
		this.reserved = materialrequest001mb.reserved;
		this.ordered = materialrequest001mb.ordered
		this.projected = materialrequest001mb.projected;
		this.insertUser = materialrequest001mb.insertUser;
        this.insertDatetime = materialrequest001mb.insertDatetime;
        this.updatedUser = materialrequest001mb.updatedUser;
        this.updatedDatetime = materialrequest001mb.updatedDatetime;
	}
}
