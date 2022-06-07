import { IsNotEmpty } from "class-validator";
import { Stktransentry001mb } from "src/entity/Stktransentry001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StktransentryDTO extends BaseDTO {

    stentId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    purpose: string;
    
    @IsNotEmpty()
    stName: string;

    setProperties(stktransentry001mb: Stktransentry001mb) {
        this.stentId = stktransentry001mb.stentId;
        this.title = stktransentry001mb.title;
        this.status = stktransentry001mb.status;
        this.purpose = stktransentry001mb.purpose;
        this.stName = stktransentry001mb.stName;
        this.insertUser = stktransentry001mb.insertUser;
        this.insertDatetime = stktransentry001mb.insertDatetime;
        this.updatedUser = stktransentry001mb.updatedUser;
        this.updatedDatetime = stktransentry001mb.updatedDatetime;
    }

}
