import { IsNotEmpty, MaxLength } from "class-validator";
import { Salestaxesandtemplates001mb } from "src/entity/Salestaxesandtemplates001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SalestaxesandtemplatesDTO extends BaseDTO {
    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    accounthead: string;

    @IsNotEmpty()
    rate: number;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    total: number;

    setProperties(salestaxesandtemplates001mb: Salestaxesandtemplates001mb) {
        this.id = salestaxesandtemplates001mb.id;
        this.title = salestaxesandtemplates001mb.title;
        this.company = salestaxesandtemplates001mb.company;
        this.type = salestaxesandtemplates001mb.type;
        this.accounthead = salestaxesandtemplates001mb.accounthead;
        this.rate = salestaxesandtemplates001mb.rate;
        this.amount = salestaxesandtemplates001mb.amount;
        this.total = salestaxesandtemplates001mb.total;
        this.insertUser = salestaxesandtemplates001mb.insertUser;
        this.insertDatetime = salestaxesandtemplates001mb.insertDatetime;
        this.updatedUser = salestaxesandtemplates001mb.updatedUser;
        this.updatedDatetime = salestaxesandtemplates001mb.updatedDatetime;
    }
}
