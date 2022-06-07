import { IsNotEmpty } from "class-validator";
import { Asset001mb } from "src/entity/Asset001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AssetDTO extends BaseDTO{
    id: number;

    @IsNotEmpty()
    asset: string;

    @IsNotEmpty()
    depreciationdate: Date;

    @IsNotEmpty()
    purchaseamount: number;

    @IsNotEmpty()
    depreciationamount: number;

    @IsNotEmpty()
    accumulateddepreciationamount: number;

    @IsNotEmpty()
    amountafterdepreciation: number;

    @IsNotEmpty()
    depreciationentry: string;

    @IsNotEmpty()
    assetcategory: string;

    @IsNotEmpty()
    currentstatus: string;

    @IsNotEmpty()
    depreciationmethod: string;

    @IsNotEmpty()
    purchasedate: Date;

    setProperties(asset001mb: Asset001mb) {
        this.id = asset001mb.id;
        this.asset = asset001mb.asset;
        this.depreciationdate = asset001mb.depreciationdate;
        this.purchaseamount = asset001mb.purchaseamount;
        this.depreciationamount = asset001mb.depreciationamount;
        this.accumulateddepreciationamount = asset001mb.accumulateddepreciationamount;
        this.amountafterdepreciation = asset001mb.amountafterdepreciation;
        this.depreciationentry = asset001mb.depreciationentry;
        this.assetcategory = asset001mb.assetcategory;
        this.currentstatus = asset001mb.currentstatus;
        this.depreciationmethod = asset001mb.depreciationmethod;
        this.purchasedate = asset001mb.purchasedate;
        this.insertUser = asset001mb.insertUser;
        this.insertDatetime = asset001mb.insertDatetime;
        this.updatedUser = asset001mb.updatedUser;
        this.updatedDatetime = asset001mb.updatedDatetime;
    }
}
