import { IsNotEmpty } from "class-validator";
import { Project001mb } from "src/entity/Project001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ProjectDTO extends BaseDTO {


	id: number;

	@IsNotEmpty()
	projectname: string;

	@IsNotEmpty()
	estimatedcost: number;

	@IsNotEmpty()
	enddate: Date;

	@IsNotEmpty()
	startdate: Date;

	@IsNotEmpty()
	status: string;

	setProperties(project001mb: Project001mb) {
		this.id = project001mb.id;
		this.projectname = project001mb.projectname;
		this.estimatedcost = project001mb.estimatedcost;
		this.enddate = project001mb.enddate;
		this.startdate = project001mb.startdate;
		this.status = project001mb.status;
		this.insertUser = project001mb.insertUser;
        this.insertDatetime = project001mb.insertDatetime;
        this.updatedUser = project001mb.updatedUser;
        this.updatedDatetime = project001mb.updatedDatetime;
	}

}
