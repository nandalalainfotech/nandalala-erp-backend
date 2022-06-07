import { IsNotEmpty } from "class-validator";
import { Crmspoppo001mb } from "src/entity/Crmspoppo001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CrmspoppoDTO extends BaseDTO{

    oppId: number;

    @IsNotEmpty()
    oppSeries: string;

    @IsNotEmpty()
    oppType: string | null;

    @IsNotEmpty()
    oppFrom: string | null;

    @IsNotEmpty()
    status: string | null;

    withitems: boolean;

    setProperties(crmspoppo001mb: Crmspoppo001mb) {
        this.oppId = crmspoppo001mb.oppId;
        this.oppSeries = crmspoppo001mb.oppSeries;
        this.oppType = crmspoppo001mb.oppType;
        this.oppFrom = crmspoppo001mb.oppFrom;
        this.status = crmspoppo001mb.status;
        this.withitems = crmspoppo001mb.withitems;
        this.insertUser = crmspoppo001mb.insertUser;
        this.insertDatetime = crmspoppo001mb.insertDatetime;
        this.updatedUser = crmspoppo001mb.updatedUser;
        this.updatedDatetime = crmspoppo001mb.updatedDatetime;
    }
}
