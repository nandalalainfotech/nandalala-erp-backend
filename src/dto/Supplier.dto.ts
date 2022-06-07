import { IsNotEmpty } from "class-validator";
import { Supplier001mb } from "src/entity/Supplier001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SupplierDTO extends BaseDTO {
	supId: number;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	addType: string;

	@IsNotEmpty()
	supCity: string;

	@IsNotEmpty()
	supAddress: string;

	@IsNotEmpty()
	supPhone: number;

	@IsNotEmpty()
	supCountry: string;

	@IsNotEmpty()
	supState: string;

	setProperties(supplier001mb: Supplier001mb) {
		this.supId = supplier001mb.supId;
		this.supName = supplier001mb.supName;
		this.addType = supplier001mb.addType;
		this.supCity = supplier001mb.supCity;
		this.supAddress = supplier001mb.supAddress;
		this.supPhone = supplier001mb.supPhone;
		this.supCountry = supplier001mb.supCountry;
		this.supState = supplier001mb.supState;
		this.insertUser = supplier001mb.insertUser;
        this.insertDatetime = supplier001mb.insertDatetime;
        this.updatedUser = supplier001mb.updatedUser;
        this.updatedDatetime = supplier001mb.updatedDatetime;
		this.insertUser = supplier001mb.insertUser;
        this.insertDatetime = supplier001mb.insertDatetime;
        this.updatedUser = supplier001mb.updatedUser;
        this.updatedDatetime = supplier001mb.updatedDatetime;
	}
}
