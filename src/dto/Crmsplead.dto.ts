import { IsNotEmpty } from "class-validator";
import { Crmsplead001mb } from "src/entity/Crmsplead001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CrmspleadDTO extends BaseDTO{
    
    slineId: number;

    @IsNotEmpty()
    personName: string;

    @IsNotEmpty()
    orgName: string;

    @IsNotEmpty()
    status: string | null;

    setProperties(crmsplead001mb: Crmsplead001mb) {
        this.slineId = crmsplead001mb.slineId;
        this.personName = crmsplead001mb.personName;
        this.orgName = crmsplead001mb.orgName;
        this.status = crmsplead001mb.status;
        this.insertUser = crmsplead001mb.insertUser;
        this.insertDatetime = crmsplead001mb.insertDatetime;
        this.updatedUser = crmsplead001mb.updatedUser;
        this.updatedDatetime = crmsplead001mb.updatedDatetime;
    }
}
