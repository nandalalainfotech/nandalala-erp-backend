import { IsNotEmpty } from "class-validator";
import { Stktranspurecpt001mb } from "src/entity/Stktranspurecpt001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StktranspurecptDTO extends BaseDTO {

	stpurtId: number;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	status: string;

	@IsNotEmpty()
	grandTotal: number;
	
	@IsNotEmpty()
	purtName: string;

	setProperties(stktranspurecpt001mb: Stktranspurecpt001mb) {
		this.stpurtId = stktranspurecpt001mb.stpurtId;
		this.title = stktranspurecpt001mb.title;
		this.status = stktranspurecpt001mb.status;
		this.grandTotal = stktranspurecpt001mb.grandTotal;
		this.purtName = stktranspurecpt001mb.purtName;
		this.insertUser = stktranspurecpt001mb.insertUser;
        this.insertDatetime = stktranspurecpt001mb.insertDatetime;
        this.updatedUser = stktranspurecpt001mb.updatedUser;
        this.updatedDatetime = stktranspurecpt001mb.updatedDatetime;
	}

}
