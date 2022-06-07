import { IsNotEmpty } from "class-validator";
import { Lvblocklist001mb } from "src/entity/Lvblocklist001mb.entity";
import { BaseDTO } from "./Base.dto";

export class LvblocklistDTO extends BaseDTO {

	lvblockId: number;

	@IsNotEmpty()
	blockName: string;


	sNo: number | null;

	@IsNotEmpty()
	company: string | null;

	setProperties(lvblocklist001mb: Lvblocklist001mb) {
		this.lvblockId = lvblocklist001mb.lvblockId;
		this.blockName = lvblocklist001mb.blockName;
		this.sNo = lvblocklist001mb.sNo;
		this.company = lvblocklist001mb.company;
		this.insertUser = lvblocklist001mb.insertUser;
        this.insertDatetime = lvblocklist001mb.insertDatetime;
        this.updatedUser = lvblocklist001mb.updatedUser;
        this.updatedDatetime = lvblocklist001mb.updatedDatetime;
	}
}
