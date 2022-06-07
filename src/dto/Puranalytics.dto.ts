import { IsNotEmpty } from "class-validator";
import { Puranalytics001mb } from "src/entity/Puranalytics001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PuranalyticsDTO extends BaseDTO {
    puansId: number;

    @IsNotEmpty()
    treeType: string;

    @IsNotEmpty()
    basedOn: string;

    @IsNotEmpty()
    valueorqty: string;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    fromDate: Date;

    @IsNotEmpty()
    toDate: Date;

    @IsNotEmpty()
    anRange: string | null;

    setProperties(puranalytics001mb: Puranalytics001mb) {
        this.puansId = puranalytics001mb.puansId;
        this.treeType = puranalytics001mb.treeType;
        this.basedOn = puranalytics001mb.basedOn;
        this.valueorqty = puranalytics001mb.valueorqty;
        this.company = puranalytics001mb.company;
        this.fromDate = puranalytics001mb.fromDate;
        this.toDate = puranalytics001mb.toDate;
        this.anRange = puranalytics001mb.anRange;
        this.insertUser = puranalytics001mb.insertUser;
        this.insertDatetime = puranalytics001mb.insertDatetime;
        this.updatedUser = puranalytics001mb.updatedUser;
        this.updatedDatetime = puranalytics001mb.updatedDatetime;
    }

}
