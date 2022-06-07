import { IsNotEmpty } from "class-validator";
import { Inactivecust001mb } from "src/entity/Inactivecust001mb.entity";
import { BaseDTO } from "./Base.dto";

export class InactivecustDTO extends BaseDTO {

	inactcustId: number;

	@IsNotEmpty()
	custType: string;

	@IsNotEmpty()
	customername: string;

	@IsNotEmpty()
	terName: string;

	@IsNotEmpty()
	customergroup: string;

	@IsNotEmpty()
	numoforder: string;

	@IsNotEmpty()
	totalordval: string | null;

	@IsNotEmpty()
	totalordcons: string | null;

	@IsNotEmpty()
	lastordamt: string | null;

	@IsNotEmpty()
	lastorddate: Date | null;

	@IsNotEmpty()
	daysinlstord: Date | null;
	
	setProperties(inactivecust001mb: Inactivecust001mb) {
		this.inactcustId = inactivecust001mb.inactcustId;
		this.custType = inactivecust001mb.custType;
		this.customername = inactivecust001mb.customername;
		this.terName = inactivecust001mb.terName;
		this.customergroup = inactivecust001mb.customergroup;
		this.customername = inactivecust001mb.customername;
		this.numoforder = inactivecust001mb.numoforder;
		this.totalordcons = inactivecust001mb.numoforder;
		this.lastordamt = inactivecust001mb.lastordamt;
		this.lastorddate = inactivecust001mb.lastorddate;
		this.daysinlstord = inactivecust001mb.daysinlstord;
		this.insertUser = inactivecust001mb.insertUser;
        this.insertDatetime = inactivecust001mb.insertDatetime;
        this.updatedUser = inactivecust001mb.updatedUser;
        this.updatedDatetime = inactivecust001mb.updatedDatetime;
	}
}
