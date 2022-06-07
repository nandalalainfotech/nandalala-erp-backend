import { IsNotEmpty } from "class-validator";
import { Leavetype001mb } from "src/entity/Leavetype001mb.entity";
import { BaseDTO } from "./Base.dto";

export class LeavetypeDTO extends BaseDTO {

	lvtypeId: number;

	@IsNotEmpty()
	lvtypeName: string;

	@IsNotEmpty()
	maxdaysAllowed: number;

	setProperties(leavetype001mb: Leavetype001mb) {
		this.lvtypeId = leavetype001mb.lvtypeId;
		this.lvtypeName = leavetype001mb.lvtypeName;
		this.maxdaysAllowed = leavetype001mb.maxdaysAllowed;
		this.insertUser = leavetype001mb.insertUser;
        this.insertDatetime = leavetype001mb.insertDatetime;
        this.updatedUser = leavetype001mb.updatedUser;
        this.updatedDatetime = leavetype001mb.updatedDatetime;
	}
}
