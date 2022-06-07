import { IsNotEmpty } from "class-validator";
import { Instalnote001mb } from "src/entity/Instalnote001mb.entity";
import { BaseDTO } from "./Base.dto";

export class InstalnoteDTO extends BaseDTO {

    instId: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    remark: string;

    @IsNotEmpty()
    instCode: string;
    
    setProperties(instalnote001mb: Instalnote001mb) {
        this.instId = instalnote001mb.instId;
        this.name = instalnote001mb.name;
        this.status = instalnote001mb.status;
        this.remark = instalnote001mb.remark;
        this.instCode = instalnote001mb.instCode;
        this.insertUser = instalnote001mb.insertUser;
        this.insertDatetime = instalnote001mb.insertDatetime;
        this.updatedUser = instalnote001mb.updatedUser;
        this.updatedDatetime = instalnote001mb.updatedDatetime;
    }
}
