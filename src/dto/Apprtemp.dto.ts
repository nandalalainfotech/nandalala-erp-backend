import { IsNotEmpty } from "class-validator";
import { Apprtemp001mb } from "src/entity/Apprtemp001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ApprtempDTO extends BaseDTO{

    apptmpId: number;

    @IsNotEmpty()
    appraisalTemp: string;

    @IsNotEmpty()
    description: string | null;

    setProperties(apprtemp001mb: Apprtemp001mb) {
        this.apptmpId = apprtemp001mb.apptmpId;
        this.appraisalTemp = apprtemp001mb.appraisalTemp;
        this.description = apprtemp001mb.description;
        this.insertUser = apprtemp001mb.insertUser;
        this.insertDatetime = apprtemp001mb.insertDatetime;
        this.updatedUser = apprtemp001mb.updatedUser;
        this.updatedDatetime = apprtemp001mb.updatedDatetime;
    }
}
