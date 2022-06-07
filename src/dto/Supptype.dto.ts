import { IsNotEmpty } from "class-validator";
import { Supptype001mb } from "src/entity/Supptype001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SupptypeDTO extends BaseDTO {
    sutypeId: number;

    @IsNotEmpty()
    supName: string;

    @IsNotEmpty()
    suType: string;
    
    setProperties(supptype001mb: Supptype001mb) {
        this.sutypeId = supptype001mb.sutypeId;
        this.supName = supptype001mb.supName;
        this.suType = supptype001mb.suType;
        this.insertUser = supptype001mb.insertUser;
        this.insertDatetime = supptype001mb.insertDatetime;
        this.updatedUser = supptype001mb.updatedUser;
        this.updatedDatetime = supptype001mb.updatedDatetime;
    }
}
