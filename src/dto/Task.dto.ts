import { IsNotEmpty } from "class-validator";
import { Task001mb } from "src/entity/Task001mb.entity";
import { DeleteQueryBuilder } from "typeorm";
import { BaseDTO } from "./Base.dto";


export class TaskDTO extends BaseDTO {

	taskid: number;

	@IsNotEmpty()
	taskdescription: string;

	@IsNotEmpty()
	assignTo: string;

	@IsNotEmpty()
	assignBy: string;

	@IsNotEmpty()
	status: string;

	@IsNotEmpty()
	starton: Date;

	@IsNotEmpty()
	endon: Date;

	allday: boolean;


	sendanemail: boolean;

	repeatthisevent: boolean;

	@IsNotEmpty()
	projectname: string | null;

	@IsNotEmpty()
	duration: string | null;

	@IsNotEmpty()
	projectid: number;

	setProperties(task001mb: Task001mb) {

		this.taskid = task001mb.taskid;
		this.taskdescription = task001mb.taskdescription;
		this.assignTo = task001mb.assignTo;
		this.assignBy = task001mb.assignBy;
		this.status = task001mb.status;
		this.starton = task001mb.starton;
		this.endon = task001mb.endon;
		this.allday = task001mb.allday;
		this.sendanemail = task001mb.sendanemail;
		this.repeatthisevent = task001mb.repeatthisevent;
		this.projectname = task001mb.projectname;
		let duration = new Date(task001mb.duration);
		
		this.duration = duration.getHours() + ":" + duration.getMinutes() + ":" + duration.getSeconds();
		// this.duration = duration.toUTCString();
		// 
		// this.duration = duration.getHours() + ":" + duration.getMinutes() + ":" + duration.getSeconds();
		// let duration = new Date(task001mb.duration);
		// this.duration =  (duration.getUTCHours(), duration.getUTCMinutes(), duration.getUTCSeconds());
		this.projectid = task001mb.projectid;
		this.insertUser = task001mb.insertUser;
		this.insertDatetime = task001mb.insertDatetime;
		this.updatedUser = task001mb.updatedUser;
		this.updatedDatetime = task001mb.updatedDatetime;
	}

}
