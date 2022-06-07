import { IsNotEmpty } from "class-validator";
import { Uploadtemplate001mb } from "src/entity/Uploadtemplate001mb.entity";
import { BaseDTO } from "./Base.dto";

export class UploadtemplateDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	content: Buffer;

	@IsNotEmpty()
	filename: string;
	
	setProperties(uploadtemplate001mb: Uploadtemplate001mb) {
		this.id = uploadtemplate001mb.id;
		this.content = uploadtemplate001mb.content;
		this.filename = uploadtemplate001mb.filename;
		this.insertUser = uploadtemplate001mb.insertUser;
        this.insertDatetime = uploadtemplate001mb.insertDatetime;
        this.updatedUser = uploadtemplate001mb.updatedUser;
        this.updatedDatetime = uploadtemplate001mb.updatedDatetime;
	}
}
