import { IsNotEmpty } from "class-validator";
import { Customercreditbalance001mb } from "src/entity/Customercreditbalance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CustomercreditbalanceDTO extends BaseDTO {
    ccid: number;

    @IsNotEmpty()
    customer: string | null;

    @IsNotEmpty()
    creditlimit: string;

    @IsNotEmpty()
    outstandingamount: string;

    @IsNotEmpty()
    creditbalance: string;

    @IsNotEmpty()
    customername: string | null;
    
    setProperties(customercreditbalance001mb: Customercreditbalance001mb) {
        this.ccid = customercreditbalance001mb.ccid;
        this.customer = customercreditbalance001mb.customer;
        this.creditlimit = customercreditbalance001mb.creditlimit;
        this.outstandingamount = customercreditbalance001mb.outstandingamount;
        this.creditbalance = customercreditbalance001mb.creditbalance;
        this.customername = customercreditbalance001mb.customername;
        this.insertUser = customercreditbalance001mb.insertUser;
        this.insertDatetime = customercreditbalance001mb.insertDatetime;
        this.updatedUser = customercreditbalance001mb.updatedUser;
        this.updatedDatetime = customercreditbalance001mb.updatedDatetime;
    }
}
