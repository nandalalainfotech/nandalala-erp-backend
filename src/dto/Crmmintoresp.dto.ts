import { IsNotEmpty } from "class-validator";
import { Crmmintoresp001mb } from "src/entity/Crmmintoresp001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CrmmintorespDTO extends BaseDTO{

    mrpId: number;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    mintoresp: string;

    setProperties(crmmintoresp001mb: Crmmintoresp001mb) {
        this.mrpId = crmmintoresp001mb.mrpId;
        this.date = crmmintoresp001mb.date;
        this.mintoresp = crmmintoresp001mb.mintoresp;
        this.insertUser = crmmintoresp001mb.insertUser;
        this.insertDatetime = crmmintoresp001mb.insertDatetime;
        this.updatedUser = crmmintoresp001mb.updatedUser;
        this.updatedDatetime = crmmintoresp001mb.updatedDatetime;
    }
}