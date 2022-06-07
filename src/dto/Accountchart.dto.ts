import { IsNotEmpty } from "class-validator";
import { Accountchart001mb } from "src/entity/Accountchart001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccountchartDTO extends BaseDTO{
	chartId: number;

    @IsNotEmpty()
	chartName: string;

	setProperties(accountchart001mb: Accountchart001mb) {
		this.chartId = accountchart001mb.chartId;
		this.chartName = accountchart001mb.chartName;
		this.insertUser = accountchart001mb.insertUser;
        this.insertDatetime = accountchart001mb.insertDatetime;
        this.updatedUser = accountchart001mb.updatedUser;
        this.updatedDatetime = accountchart001mb.updatedDatetime;
	}
}


