import { IsNotEmpty } from "class-validator";
import { Termscondition001mb } from "src/entity/Termscondition001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TermsconditionDTO extends BaseDTO {
    tcId: number;


    @IsNotEmpty()
    tcName: string;


    @IsNotEmpty()
    status: string;


    @IsNotEmpty()
    terms: string;
    
    setProperties(termscondition001mb: Termscondition001mb) {
        this.tcId = termscondition001mb.tcId;
        this.tcName = termscondition001mb.tcName;
        this.status = termscondition001mb.status;
        this.terms = termscondition001mb.terms;
        this.insertUser = termscondition001mb.insertUser;
        this.insertDatetime = termscondition001mb.insertDatetime;
        this.updatedUser = termscondition001mb.updatedUser;
        this.updatedDatetime = termscondition001mb.updatedDatetime;
    }
}
