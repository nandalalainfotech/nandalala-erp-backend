import { IsNotEmpty } from "class-validator";
import { Lead001mb } from "src/entity/Lead001mb.entity";
import { BaseDTO } from "./Base.dto";

export class LeadDTO extends BaseDTO {

	id: number;

	@IsNotEmpty()
	personname: string;

	@IsNotEmpty()
	organisationname: string;

	@IsNotEmpty()
	status: string;

	@IsNotEmpty()
	source: string;

	@IsNotEmpty()
	leadowner: string;

	@IsNotEmpty()
	nextcontactby: string | null;

	@IsNotEmpty()
	leadtype: string | null;

	@IsNotEmpty()
	marketsegment: string | null;

	setProperties(lead001mb: Lead001mb) {
		this.id = lead001mb.id;
		this.personname = lead001mb.personname;
		this.organisationname = lead001mb.organisationname;
		this.status = lead001mb.status;
		this.source = lead001mb.source;
		this.leadowner = lead001mb.leadowner;
		this.nextcontactby = lead001mb.nextcontactby;
		this.leadtype = lead001mb.leadtype;
		this.marketsegment = lead001mb.marketsegment;
		this.insertUser = lead001mb.insertUser;
        this.insertDatetime = lead001mb.insertDatetime;
        this.updatedUser = lead001mb.updatedUser;
        this.updatedDatetime = lead001mb.updatedDatetime;
	}
}
