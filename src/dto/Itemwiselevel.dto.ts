import { IsNotEmpty } from "class-validator";
import { Itemwiselevel001mb } from "src/entity/Itemwiselevel001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItemwiselevelDTO extends BaseDTO {

	iwlId: number;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	safetyStk: string;

	@IsNotEmpty()
	leadtimeDays: string | null;

	@IsNotEmpty()
	consumed: string | null;

	@IsNotEmpty()
	delivered: string | null;

	@IsNotEmpty()
	totalOutgoing: string | null;

	@IsNotEmpty()
	avgdailyOutgoing: string | null;

	@IsNotEmpty()
	reorderLevel: string;

	setProperties(itemwiselevel001mb: Itemwiselevel001mb) {
		this.iwlId = itemwiselevel001mb.iwlId;
		this.itemCode = itemwiselevel001mb.itemCode;
		this.description = itemwiselevel001mb.description;
		this.safetyStk = itemwiselevel001mb.safetyStk;
		this.leadtimeDays = itemwiselevel001mb.leadtimeDays;
		this.consumed = itemwiselevel001mb.consumed;
		this.delivered = itemwiselevel001mb.delivered;
		this.totalOutgoing = itemwiselevel001mb.totalOutgoing;
		this.avgdailyOutgoing = itemwiselevel001mb.avgdailyOutgoing;
		this.reorderLevel = itemwiselevel001mb.reorderLevel;
		this.insertUser = itemwiselevel001mb.insertUser;
        this.insertDatetime = itemwiselevel001mb.insertDatetime;
        this.updatedUser = itemwiselevel001mb.updatedUser;
        this.updatedDatetime = itemwiselevel001mb.updatedDatetime;
	}
}
