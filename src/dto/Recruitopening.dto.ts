import { IsNotEmpty } from "class-validator";
import { Recruitopening001mb } from "src/entity/Recruitopening001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RecruitopeningDTO extends BaseDTO {

    jobId: number;

    @IsNotEmpty()
    jobName: string;

    @IsNotEmpty()
    status: string;

    setProperties(recruitopening001mb: Recruitopening001mb) {
        this.jobId = recruitopening001mb.jobId;
        this.jobName = recruitopening001mb.jobName;
        this.status = recruitopening001mb.status;
        this.insertUser = recruitopening001mb.insertUser;
        this.insertDatetime = recruitopening001mb.insertDatetime;
        this.updatedUser = recruitopening001mb.updatedUser;
        this.updatedDatetime = recruitopening001mb.updatedDatetime;
    }
}
