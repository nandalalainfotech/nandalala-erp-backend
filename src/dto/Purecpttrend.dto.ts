import { IsNotEmpty } from "class-validator";
import { Purecpttrend001mb } from "src/entity/Purecpttrend001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurecpttrendDTO extends BaseDTO {

    putrendId: number;

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

    setProperties(purecpttrend001mb: Purecpttrend001mb) {
        this.putrendId = purecpttrend001mb.putrendId;
        this.itemCode = purecpttrend001mb.itemCode;
        this.period = purecpttrend001mb.period;
        this.basedOn = purecpttrend001mb.basedOn;
        this.fiscalYear = purecpttrend001mb.fiscalYear;
        this.company = purecpttrend001mb.company;
        this.janAmt = purecpttrend001mb.janAmt;
        this.janQty = purecpttrend001mb.janQty;
        this.febAmt = purecpttrend001mb.febAmt;
        this.febQty = purecpttrend001mb.febQty;
        this.marAmt = purecpttrend001mb.marAmt;
        this.marQty = purecpttrend001mb.marQty;
        this.aprAmt = purecpttrend001mb.aprAmt;
        this.aprQty = purecpttrend001mb.aprQty;
        this.mayAmt = purecpttrend001mb.mayAmt;
        this.mayQty = purecpttrend001mb.mayQty;
        this.junAmt = purecpttrend001mb.junAmt;
        this.junQty = purecpttrend001mb.junQty;
        this.julAmt = purecpttrend001mb.julAmt;
        this.julQty = purecpttrend001mb.julQty;
        this.augAmt = purecpttrend001mb.augAmt;
        this.augQty = purecpttrend001mb.augQty;
        this.sepAmt = purecpttrend001mb.sepAmt;
        this.sepQty = purecpttrend001mb.sepQty;
        this.octAmt = purecpttrend001mb.octAmt;
        this.octQty = purecpttrend001mb.octQty;
        this.novAmt = purecpttrend001mb.novAmt;
        this.novQty = purecpttrend001mb.novQty;
        this.decAmt = purecpttrend001mb.decAmt;
        this.decQty = purecpttrend001mb.decQty;
        this.totalAmt = purecpttrend001mb.totalAmt;
        this.totalQty = purecpttrend001mb.totalQty;
        this.augQtyt = purecpttrend001mb.augQtyt;
        this.insertUser = purecpttrend001mb.insertUser;
        this.insertDatetime = purecpttrend001mb.insertDatetime;
        this.updatedUser = purecpttrend001mb.updatedUser;
        this.updatedDatetime = purecpttrend001mb.updatedDatetime;
    }

}
