import { IsNotEmpty } from "class-validator";
import { Appraisal001mb } from "src/entity/Appraisal001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AppraisalDTO extends BaseDTO{

    apprId: number;

    @IsNotEmpty()
    series: string;

    @IsNotEmpty()
    appraisalTemp: string | null;

    setProperties(appraisal001mb: Appraisal001mb) {
        this.apprId = appraisal001mb.apprId;
        this.series = appraisal001mb.series;
        this.appraisalTemp = appraisal001mb.appraisalTemp;
        this.insertUser = appraisal001mb.insertUser;
        this.insertDatetime = appraisal001mb.insertDatetime;
        this.updatedUser = appraisal001mb.updatedUser;
        this.updatedDatetime = appraisal001mb.updatedDatetime;
    }
}
