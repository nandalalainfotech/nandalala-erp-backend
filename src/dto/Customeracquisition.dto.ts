import { IsNotEmpty } from "class-validator";
import { Customeracquisition001mb } from "src/entity/Customeracquisition001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CustomeracquisitionDTO extends BaseDTO {
    id: number;

    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    month: string;

    @IsNotEmpty()
    newcustomers: number;

    @IsNotEmpty()
    repeatcustomers: number;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    newcustomersrevenue: number;

    @IsNotEmpty()
    repeatcustomersrevenue: number;
    
    @IsNotEmpty()
    totalrevenue: number;

    setProperties(customeracquisition001mb: Customeracquisition001mb) {
        this.id = customeracquisition001mb.id;
        this.year = customeracquisition001mb.year;
        this.month = customeracquisition001mb.month;
        this.newcustomers = customeracquisition001mb.newcustomers;
        this.repeatcustomers = customeracquisition001mb.repeatcustomers;
        this.total = customeracquisition001mb.total;
        this.newcustomersrevenue = customeracquisition001mb.newcustomersrevenue;
        this.repeatcustomersrevenue = customeracquisition001mb.repeatcustomersrevenue;
        this.totalrevenue = customeracquisition001mb.totalrevenue;
        this.insertUser = customeracquisition001mb.insertUser;
        this.insertDatetime = customeracquisition001mb.insertDatetime;
        this.updatedUser = customeracquisition001mb.updatedUser;
        this.updatedDatetime = customeracquisition001mb.updatedDatetime;
    }

}
