import { Filemanager001mb } from "src/entity/Filemanager001mb.entity";
import { BaseDTO } from "./Base.dto";

export class FilemanagerDTO extends BaseDTO {

	id: number;

	// @IsNotEmpty()
	category: string | null;


	// @IsNotEmpty()
	filename: string | null;

	// @IsNotEmpty()
	loginuser: string | null;

	// @IsNotEmpty()
	originalfilename: string | null;

	setProperties(filemanager001mb: Filemanager001mb) {
		this.id = filemanager001mb.id;
		this.category = filemanager001mb.category;
		this.filename = filemanager001mb.filename;
		this.loginuser = filemanager001mb.loginuser;
		this.originalfilename = filemanager001mb.originalfilename;
		this.insertUser = filemanager001mb.insertUser;
		this.insertDatetime = filemanager001mb.insertDatetime;
		this.updatedUser = filemanager001mb.updatedUser;
		this.updatedDatetime = filemanager001mb.updatedDatetime;
	}

}
