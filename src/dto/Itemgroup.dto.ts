import { IsNotEmpty } from "class-validator";
import { Itemgroup001mb } from "src/entity/Itemgroup001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItemgroupDTO extends BaseDTO {
	igId: number;

	@IsNotEmpty()
	itemGroup: string;
	
	setProperties(itemgroup001mb: Itemgroup001mb) {
		this.igId = itemgroup001mb.igId;
		this.itemGroup = itemgroup001mb.itemGroup;
		this.insertUser = itemgroup001mb.insertUser;
        this.insertDatetime = itemgroup001mb.insertDatetime;
        this.updatedUser = itemgroup001mb.updatedUser;
        this.updatedDatetime = itemgroup001mb.updatedDatetime;
	}
}
