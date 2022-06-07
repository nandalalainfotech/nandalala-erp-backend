import { IsNotEmpty } from "class-validator";
import { Supstatus001mb } from "src/entity/Supstatus001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SupstatusDTO extends BaseDTO {
	sustatusId: number;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	sustatus: string;

	@IsNotEmpty()
	phone: number;


	setProperties(supstatus001mb: Supstatus001mb) {
		this.sustatusId = supstatus001mb.sustatusId;
		this.supName = supstatus001mb.supName;
		this.sustatus = supstatus001mb.sustatus;
		this.phone = supstatus001mb.phone;
		this.insertUser = supstatus001mb.insertUser;
        this.insertDatetime = supstatus001mb.insertDatetime;
        this.updatedUser = supstatus001mb.updatedUser;
        this.updatedDatetime = supstatus001mb.updatedDatetime;
	}
}
