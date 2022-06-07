import { IsNotEmpty } from "class-validator";
import { Assetmovement001mb } from "src/entity/Assetmovement001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AssetmovementDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    asset: string | null;

    @IsNotEmpty()
    company: string | null;

    @IsNotEmpty()
    targetwarehouse: string | null;

    @IsNotEmpty()
    transactiondate: Date | null;

    setProperties(assetmovement001mb: Assetmovement001mb) {
        this.id = assetmovement001mb.id;
        this.asset = assetmovement001mb.asset;
        this.company = assetmovement001mb.company;
        this.targetwarehouse = assetmovement001mb.targetwarehouse;
        this.transactiondate = assetmovement001mb.transactiondate;
        this.insertUser = assetmovement001mb.insertUser;
        this.insertDatetime = assetmovement001mb.insertDatetime;
        this.updatedUser = assetmovement001mb.updatedUser;
        this.updatedDatetime = assetmovement001mb.updatedDatetime;
    }
}
