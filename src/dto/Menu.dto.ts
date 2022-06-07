import { IsNotEmpty } from "class-validator";
import { Menu001mb } from "src/entity/Menu001mb.entity";
import { BaseDTO } from "./Base.dto";

export class MenuDTO extends BaseDTO {

	menuid: number;

	@IsNotEmpty()
	menuname: string;

	@IsNotEmpty()
	menulink: string | null;

	@IsNotEmpty()
	menutype:
		| "Main-Menu"
		| "Child-Menu"
		| "Page-Main-Menu"
		| "Page-Child-Menu"
		| null;
	parentid: number | null;

	@IsNotEmpty()
	parentname: string | null;

	@IsNotEmpty()
	domain: string;

	setProperties(menu001mb: Menu001mb) {
		this.menuid = menu001mb.menuid;
		this.menuname = menu001mb.menuname;
		this.menulink = menu001mb.menulink;
		this.parentid = menu001mb.parentid;
		this.parentname = menu001mb.parentname;
		this.domain = menu001mb.domain;
		this.insertUser = menu001mb.insertUser;
        this.insertDatetime = menu001mb.insertDatetime;
        this.updatedUser = menu001mb.updatedUser;
        this.updatedDatetime = menu001mb.updatedDatetime;
	}
}
