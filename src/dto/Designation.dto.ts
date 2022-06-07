import { IsNotEmpty } from "class-validator";
import { Designation001mb } from "src/entity/Designation001mb.entity";
import { BaseDTO } from "./Base.dto";

export class DesignationDTO extends BaseDTO {

    designId: number;

    @IsNotEmpty()
    designation: string;


    setProperties(designation001mb: Designation001mb) {
        this.designId = designation001mb.designId;
        this.designation = designation001mb.designation;
        this.insertUser = designation001mb.insertUser;
        this.insertDatetime = designation001mb.insertDatetime;
        this.updatedUser = designation001mb.updatedUser;
        this.updatedDatetime = designation001mb.updatedDatetime;
    }
}
