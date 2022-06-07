import { IsNotEmpty } from "class-validator";
import { Holidaylist001mb } from "src/entity/Holidaylist001mb.entity";
import { BaseDTO } from "./Base.dto";

export class HolidaylistDTO extends BaseDTO {


    hlistId: number;

    @IsNotEmpty()
    holidayName: string;

    @IsNotEmpty()
    weeklyOff: string | null;
    
    setProperties(holidaylist001mb: Holidaylist001mb) {
        this.hlistId = holidaylist001mb.hlistId;
        this.holidayName = holidaylist001mb.holidayName;
        this.weeklyOff = holidaylist001mb.weeklyOff;
        this.insertUser = holidaylist001mb.insertUser;
        this.insertDatetime = holidaylist001mb.insertDatetime;
        this.updatedUser = holidaylist001mb.updatedUser;
        this.updatedDatetime = holidaylist001mb.updatedDatetime;
    }
}
