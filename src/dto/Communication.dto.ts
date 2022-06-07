import { IsNotEmpty } from "class-validator";
import { Communication001mb } from "src/entity/Communication001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CommunicationDTO extends BaseDTO{

    commId: number;

    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    status: string | null;

    @IsNotEmpty()
    sentrec: string | null;

    setProperties(communication001mb: Communication001mb) {
        this.commId = communication001mb.commId;
        this.subject = communication001mb.subject;
        this.sentrec = communication001mb.sentrec;
        this.status = communication001mb.status;
        this.insertUser = communication001mb.insertUser;
        this.insertDatetime = communication001mb.insertDatetime;
        this.updatedUser = communication001mb.updatedUser;
        this.updatedDatetime = communication001mb.updatedDatetime;
    }
}
