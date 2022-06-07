import { IsNotEmpty } from "class-validator";
import { Setupcugrp001mb } from "src/entity/Setupcugrp001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SetupcugrpDTO extends BaseDTO {

    cugrpId: number;

    @IsNotEmpty()
    customergroup: string;

    @IsNotEmpty()
    salesPerson: string;

    setProperties(setupcugrp001mb: Setupcugrp001mb) {
        this.cugrpId = setupcugrp001mb.cugrpId;
        this.customergroup = setupcugrp001mb.customergroup;
        this.salesPerson = setupcugrp001mb.salesPerson;
        this.insertUser = setupcugrp001mb.insertUser;
        this.insertDatetime = setupcugrp001mb.insertDatetime;
        this.updatedUser = setupcugrp001mb.updatedUser;
        this.updatedDatetime = setupcugrp001mb.updatedDatetime;
    }
}
