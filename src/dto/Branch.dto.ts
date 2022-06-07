import { IsNotEmpty } from "class-validator";
import { Branch001mb } from "src/entity/Branch001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BranchDTO extends BaseDTO{

    branchId: number;

    @IsNotEmpty()
    branchName: string;

    setProperties(branch001mb: Branch001mb) {
        this.branchId = branch001mb.branchId;
        this.branchName = branch001mb.branchName;
        this.insertUser = branch001mb.insertUser;
        this.insertDatetime = branch001mb.insertDatetime;
        this.updatedUser = branch001mb.updatedUser;
        this.updatedDatetime = branch001mb.updatedDatetime;
    }
}
