import { IsNotEmpty } from "class-validator";
import { Stkrepageing001mb } from "src/entity/Stkrepageing001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StkrepageingDTO extends BaseDTO {

    stageId: number;

    @IsNotEmpty()
    uom: string | null;

    @IsNotEmpty()
    averageAge: number | null;

    @IsNotEmpty()
    brand: string | null;

    @IsNotEmpty()
    description: string | null;

    @IsNotEmpty()
    earliest: number | null;

    @IsNotEmpty()
    itemCode: string | null;

    @IsNotEmpty()
    itemGroup: string | null;

    @IsNotEmpty()
    latest: number | null;

    setProperties(stkrepageing001mb: Stkrepageing001mb) {
        this.stageId = stkrepageing001mb.stageId;
        this.uom = stkrepageing001mb.uom;
        this.averageAge = stkrepageing001mb.averageAge;
        this.brand = stkrepageing001mb.brand;
        this.description = stkrepageing001mb.description;
        this.earliest = stkrepageing001mb.earliest;
        this.itemCode = stkrepageing001mb.itemCode;
        this.itemGroup = stkrepageing001mb.itemGroup;
        this.latest = stkrepageing001mb.latest;
        this.insertUser = stkrepageing001mb.insertUser;
        this.insertDatetime = stkrepageing001mb.insertDatetime;
        this.updatedUser = stkrepageing001mb.updatedUser;
        this.updatedDatetime = stkrepageing001mb.updatedDatetime;
    }
}
