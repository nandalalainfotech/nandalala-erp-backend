import { IsNotEmpty } from "class-validator";
import { Status001mb } from "src/entity/Status001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StatusDTO extends BaseDTO {

    statusid: number;

    @IsNotEmpty()
    statusname: string | null;

    setProperties(status001mb: Status001mb) {
        this.statusid = status001mb.statusid;
        this.statusname = status001mb.statusname;
        this.insertUser = status001mb.insertUser;
        this.insertDatetime = status001mb.insertDatetime;
        this.updatedUser = status001mb.updatedUser;
        this.updatedDatetime = status001mb.updatedDatetime;
    }
}
