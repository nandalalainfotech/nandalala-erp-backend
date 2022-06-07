import { IsNotEmpty } from "class-validator";
import { Testcase001mb } from "src/entity/Testcase001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TestcaseDTO extends BaseDTO {
	id: string;

	@IsNotEmpty()
	assignto: string;

	@IsNotEmpty()
	automated: string;

	@IsNotEmpty()
	dateupdated: Date;

	@IsNotEmpty()
	exectype: string;

	@IsNotEmpty()
	foldername: string;

	@IsNotEmpty()
	lstrnby: string;

	@IsNotEmpty()
	lstrndate: Date;

	@IsNotEmpty()
	lstrnrelease: string;

	@IsNotEmpty()
	lstrnstatus: string;

	@IsNotEmpty()
	lstrntestset: string;

	@IsNotEmpty()
	originalid: string;
	@IsNotEmpty()
	owner: string;

	@IsNotEmpty()
	priority: string | null;

	@IsNotEmpty()
	reviewed: string;

	@IsNotEmpty()
	rnbyhost: string;

	@IsNotEmpty()
	runtime: string;

	@IsNotEmpty()
	status: string;
	@IsNotEmpty()
	testtype: string;
	@IsNotEmpty()

	title: string;

	@IsNotEmpty()
	version: string;
	
	setProperties(testcase001mb: Testcase001mb) {
		this.id = testcase001mb.id;
		this.assignto = testcase001mb.assignto;
		this.automated = testcase001mb.automated;
		this.dateupdated = testcase001mb.dateupdated;
		this.exectype = testcase001mb.exectype;
		this.foldername = testcase001mb.foldername;
		this.lstrnby = testcase001mb.lstrnby;
		this.lstrndate = testcase001mb.lstrndate;
		this.lstrnrelease = testcase001mb.lstrnrelease;
		this.lstrnstatus = testcase001mb.lstrnstatus;
		this.lstrntestset = testcase001mb.lstrntestset;
		this.originalid = testcase001mb.originalid;
		this.owner = testcase001mb.owner;
		this.priority = testcase001mb.priority;
		this.reviewed = testcase001mb.reviewed;
		this.rnbyhost = testcase001mb.rnbyhost;
		this.runtime = testcase001mb.runtime;
		this.status = testcase001mb.status;
		this.testtype = testcase001mb.testtype;
		this.title = testcase001mb.title;
		this.version = testcase001mb.version;
		this.insertUser = testcase001mb.insertUser;
        this.insertDatetime = testcase001mb.insertDatetime;
        this.updatedUser = testcase001mb.updatedUser;
        this.updatedDatetime = testcase001mb.updatedDatetime;
	}
}
