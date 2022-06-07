import { IsNotEmpty } from "class-validator";
import { Dailytimesheet001mb } from "src/entity/Dailytimesheet001mb.entity";
import { BaseDTO } from "./Base.dto";

export class DailytimesheetDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	timesheet: string;

	@IsNotEmpty()
	employee: string;

	@IsNotEmpty()
	employeename: string;

	@IsNotEmpty()
	fromdatetime: Date;

	@IsNotEmpty()
	todatetime: Date;

	@IsNotEmpty()
	hours: string;

	@IsNotEmpty()
	activitytype: string;

	@IsNotEmpty()
	task: string;

	@IsNotEmpty()
	project: string;

	@IsNotEmpty()
	status: string;

	setProperties(dailytimesheet001mb: Dailytimesheet001mb) {
		this.id = dailytimesheet001mb.id;
		this.activitytype = dailytimesheet001mb.activitytype;
		this.timesheet = dailytimesheet001mb.timesheet;
		this.employee = dailytimesheet001mb.employee;
		this.employeename = dailytimesheet001mb.employeename;
		this.fromdatetime = dailytimesheet001mb.fromdatetime;
		this.todatetime = dailytimesheet001mb.todatetime;
		this.hours = dailytimesheet001mb.hours;
		this.task = dailytimesheet001mb.task;
		this.project = dailytimesheet001mb.project;
		this.status = dailytimesheet001mb.status;
		this.insertUser = dailytimesheet001mb.insertUser;
        this.insertDatetime = dailytimesheet001mb.insertDatetime;
        this.updatedUser = dailytimesheet001mb.updatedUser;
        this.updatedDatetime = dailytimesheet001mb.updatedDatetime;
	}
}
