import { IsNotEmpty } from "class-validator";
import { Crmspcust001mb } from "src/entity/Crmspcust001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CrmspcustDTO extends BaseDTO{
    
    custId: number;

    @IsNotEmpty()
    customername: string;

    @IsNotEmpty()
    status: string | null;

    @IsNotEmpty()
    customergroup: string | null;

    setProperties(crmspcust001mb: Crmspcust001mb) {
        this.custId = crmspcust001mb.custId;
        this.customername = crmspcust001mb.customername;
        this.status = crmspcust001mb.status;
        this.customergroup = crmspcust001mb.customergroup;
        this.insertUser = crmspcust001mb.insertUser;
        this.insertDatetime = crmspcust001mb.insertDatetime;
        this.updatedUser = crmspcust001mb.updatedUser;
        this.updatedDatetime = crmspcust001mb.updatedDatetime;
    }
}
