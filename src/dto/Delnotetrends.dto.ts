import { IsNotEmpty } from "class-validator";
import { Delnotetrends001mb } from "src/entity/Delnotetrends001mb.entity";
import { BaseDTO } from "./Base.dto";

export class DelnotetrendsDTO extends BaseDTO {

    dntrendId: number;

    @IsNotEmpty()
    period: string;

    @IsNotEmpty()
    basedOn: string;

    @IsNotEmpty()
    fiscalYear: number;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    janQty: string | null;

    @IsNotEmpty()
    janAmt: string | null;

    @IsNotEmpty()
    febQty: string | null;

    @IsNotEmpty()
    febAmt: string | null;

    @IsNotEmpty()
    marQty: string | null;

    @IsNotEmpty()
    marAmt: string | null;

    @IsNotEmpty()
    aprQty: string;

    @IsNotEmpty()
    aprAmt: string | null;

    @IsNotEmpty()
    mayQty: string | null;

    @IsNotEmpty()
    mayAmt: string | null;

    @IsNotEmpty()
    junQty: string | null;

    @IsNotEmpty()
    junAmt: string | null;

    @IsNotEmpty()
    julQty: string | null;

    @IsNotEmpty()
    julAmt: string | null;

    @IsNotEmpty()
    augQty: string | null;

    @IsNotEmpty()
    augAmt: string | null;

    @IsNotEmpty()
    sepQty: string | null;

    @IsNotEmpty()
    sepAmt: string | null;

    @IsNotEmpty()
    octQty: string | null;

    @IsNotEmpty()
    octAmt: string | null;

    @IsNotEmpty()
    novQty: string | null;

    @IsNotEmpty()
    novAmt: string | null;

    @IsNotEmpty()
    decQty: string | null;

    @IsNotEmpty()
    decAmt: string | null;

    @IsNotEmpty()
    totalQty: string | null;

    @IsNotEmpty()
    totalAmt: string | null;

    @IsNotEmpty()
    augQtyt: string | null;

    setProperties(delnotetrends001mb: Delnotetrends001mb) {
        this.dntrendId = delnotetrends001mb.dntrendId;
        this.itemCode = delnotetrends001mb.itemCode;
        this.period = delnotetrends001mb.period;
        this.basedOn = delnotetrends001mb.basedOn;
        this.fiscalYear = delnotetrends001mb.fiscalYear;
        this.company = delnotetrends001mb.company;
        this.janAmt = delnotetrends001mb.janAmt;
        this.janQty = delnotetrends001mb.janQty;
        this.febAmt = delnotetrends001mb.febAmt;
        this.febQty = delnotetrends001mb.febQty;
        this.marAmt = delnotetrends001mb.marAmt;
        this.marQty = delnotetrends001mb.marQty;
        this.aprAmt = delnotetrends001mb.aprAmt;
        this.aprQty = delnotetrends001mb.aprQty;
        this.mayAmt = delnotetrends001mb.mayAmt;
        this.mayQty = delnotetrends001mb.mayQty;
        this.junAmt = delnotetrends001mb.junAmt;
        this.junQty = delnotetrends001mb.junQty;
        this.julAmt = delnotetrends001mb.julAmt;
        this.julQty = delnotetrends001mb.julQty;
        this.augAmt = delnotetrends001mb.augAmt;
        this.augQty = delnotetrends001mb.augQty;
        this.sepAmt = delnotetrends001mb.sepAmt;
        this.sepQty = delnotetrends001mb.sepQty;
        this.octAmt = delnotetrends001mb.octAmt;
        this.octQty = delnotetrends001mb.octQty;
        this.novAmt = delnotetrends001mb.novAmt;
        this.novQty = delnotetrends001mb.novQty;
        this.decAmt = delnotetrends001mb.decAmt;
        this.decQty = delnotetrends001mb.decQty;
        this.totalAmt = delnotetrends001mb.totalAmt;
        this.totalQty = delnotetrends001mb.totalQty;
        this.augQtyt = delnotetrends001mb.augQtyt;
        this.insertUser = delnotetrends001mb.insertUser;
        this.insertDatetime = delnotetrends001mb.insertDatetime;
        this.updatedUser = delnotetrends001mb.updatedUser;
        this.updatedDatetime = delnotetrends001mb.updatedDatetime;
    }

}
