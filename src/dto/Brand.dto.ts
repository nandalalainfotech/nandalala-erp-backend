import { IsNotEmpty } from "class-validator";
import { Brand001mb } from "src/entity/Brand001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BrandDTO extends BaseDTO{

	brandId: number;

	@IsNotEmpty()
	brandName: string;

	@IsNotEmpty()
	description: string;

	setProperties(brand001mb: Brand001mb) {
		this.brandId = brand001mb.brandId;
		this.brandName = brand001mb.brandName;
		this.description = brand001mb.description;
		this.insertUser = brand001mb.insertUser;
        this.insertDatetime = brand001mb.insertDatetime;
        this.updatedUser = brand001mb.updatedUser;
        this.updatedDatetime = brand001mb.updatedDatetime;
	}

}
