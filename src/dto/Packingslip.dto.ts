import { IsNotEmpty } from "class-validator";
import { Packingslip001mb } from "src/entity/Packingslip001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PackingslipDTO extends BaseDTO {

    psId: number;

    @IsNotEmpty()
    slipName: string;

    @IsNotEmpty()
    status: string;
    
    @IsNotEmpty()
    delName: string;

    setProperties(packingslip001mb:Packingslip001mb){
        this.psId=packingslip001mb.psId;
        this.slipName=packingslip001mb.slipName;
        this.status=packingslip001mb.status;
        this.delName=packingslip001mb.delName;
        this.insertUser = packingslip001mb.insertUser;
        this.insertDatetime = packingslip001mb.insertDatetime;
        this.updatedUser = packingslip001mb.updatedUser;
        this.updatedDatetime = packingslip001mb.updatedDatetime;
    }
}
