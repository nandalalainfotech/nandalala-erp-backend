import { IsNotEmpty } from "class-validator";
import { Stktransdeliver001mb } from "src/entity/Stktransdeliver001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StktransdeliverDTO extends BaseDTO {

	stdelId: number;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	status: string;

	@IsNotEmpty()
	grandTotal: number;

	@IsNotEmpty()
	delName: string;

	setProperties(stktransdeliver001mb: Stktransdeliver001mb) {
		this.stdelId = stktransdeliver001mb.stdelId;
		this.title = stktransdeliver001mb.title;
		this.status = stktransdeliver001mb.status;
		this.grandTotal = stktransdeliver001mb.grandTotal;
		this.delName = stktransdeliver001mb.delName;
		this.insertUser = stktransdeliver001mb.insertUser;
        this.insertDatetime = stktransdeliver001mb.insertDatetime;
        this.updatedUser = stktransdeliver001mb.updatedUser;
        this.updatedDatetime = stktransdeliver001mb.updatedDatetime;
	}

}
