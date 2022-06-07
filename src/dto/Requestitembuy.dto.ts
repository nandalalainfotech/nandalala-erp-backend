import { IsNotEmpty } from "class-validator";
import { Requestitembuy001mb } from "src/entity/Requestitembuy001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RequestitembuyDTO extends BaseDTO {
	riId: number;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	warehouse: string;

	@IsNotEmpty()
	actual: number;

	@IsNotEmpty()
	requested: number | null;

	@IsNotEmpty()
	reserved: number | null;

	@IsNotEmpty()
	ordered: number | null;

	@IsNotEmpty()
	projected: number | null;


	setProperties(requestitembuy001mb: Requestitembuy001mb) {
		this.riId = requestitembuy001mb.riId;
		this.itemCode = requestitembuy001mb.itemCode;
		this.warehouse = requestitembuy001mb.warehouse;
		this.actual = requestitembuy001mb.actual;
		this.requested = requestitembuy001mb.requested;
		this.reserved = requestitembuy001mb.reserved;
		this.ordered = requestitembuy001mb.ordered;
		this.projected = requestitembuy001mb.projected;
		this.insertUser = requestitembuy001mb.insertUser;
        this.insertDatetime = requestitembuy001mb.insertDatetime;
        this.updatedUser = requestitembuy001mb.updatedUser;
        this.updatedDatetime = requestitembuy001mb.updatedDatetime;
	}
}
