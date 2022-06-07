import { IsNotEmpty } from "class-validator";
import { Stkreconcile001mb } from "src/entity/Stkreconcile001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StkreconcileDTO extends BaseDTO {

    stkrecId: number;

    @IsNotEmpty()
    series: string;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    postingDate: Date;

    @IsNotEmpty()
    postingTime: string;

    @IsNotEmpty()
    diffAcc: string | null;

    @IsNotEmpty()
    costCenter: string | null;

    setProperties(stkreconcile001mb: Stkreconcile001mb) {
        this.stkrecId = stkreconcile001mb.stkrecId;
        this.series = stkreconcile001mb.series;
        this.company = stkreconcile001mb.company;
        this.postingDate = stkreconcile001mb.postingDate;
        let postingTime = new Date(stkreconcile001mb.postingTime);
        this.postingTime = postingTime.getHours() + ":" + postingTime.getMinutes() + ":" + postingTime.getSeconds();
        this.diffAcc = stkreconcile001mb.diffAcc;
        this.costCenter = stkreconcile001mb.costCenter;
        this.insertUser = stkreconcile001mb.insertUser;
        this.insertDatetime = stkreconcile001mb.insertDatetime;
        this.updatedUser = stkreconcile001mb.updatedUser;
        this.updatedDatetime = stkreconcile001mb.updatedDatetime;
    }
}
