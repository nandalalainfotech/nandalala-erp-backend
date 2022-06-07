import { IsNotEmpty } from "class-validator";
import { Processpr001mb } from "src/entity/Processpr001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ProcessprDTO extends BaseDTO {

    processId: number;

    sNo: number | null;

    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    month: number;

    @IsNotEmpty()
    postingDate: Date;

    @IsNotEmpty()
    deptName: string | null;

    @IsNotEmpty()
    empCompany: string | null;

    setProperties(processpr001mb: Processpr001mb) {
        this.processId = processpr001mb.processId;
        this.sNo = processpr001mb.sNo;
        this.year = processpr001mb.year;
        this.month = processpr001mb.month;
        this.postingDate = processpr001mb.postingDate;
        this.deptName = processpr001mb.deptName;
        this.empCompany = processpr001mb.empCompany;
        this.insertUser = processpr001mb.insertUser;
        this.insertDatetime = processpr001mb.insertDatetime;
        this.updatedUser = processpr001mb.updatedUser;
        this.updatedDatetime = processpr001mb.updatedDatetime;
    }
}
