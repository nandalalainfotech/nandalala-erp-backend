import { IsNotEmpty } from "class-validator";
import { Grossprofit001mb } from "src/entity/Grossprofit001mb.entity";
import { BaseDTO } from "./Base.dto";

export class GrossprofitDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    salesinvoice: string;

    @IsNotEmpty()
    customer: string;

    @IsNotEmpty()
    postingdate: Date;

    @IsNotEmpty()
    itemname: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    warehouse: string;

    @IsNotEmpty()
    project: string;

    @IsNotEmpty()
    currency: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    averagesellingrate: number;

    @IsNotEmpty()
    averagebuyingrate: number;

    @IsNotEmpty()
    sellingamount: number;

    @IsNotEmpty()
    buyingamount: number;

    @IsNotEmpty()
    grossprofit: number;

    @IsNotEmpty()
    grosspercentage: number;
    setProperties(grossprofit001mb: Grossprofit001mb) {
        this.id = grossprofit001mb.id;
        this.salesinvoice = grossprofit001mb.salesinvoice;
        this.customer = grossprofit001mb.customer;
        this.postingdate = grossprofit001mb.postingdate;
        this.itemname = grossprofit001mb.itemname;
        this.description = grossprofit001mb.description;
        this.warehouse = grossprofit001mb.warehouse;
        this.project = grossprofit001mb.project;
        this.currency = grossprofit001mb.currency;
        this.quantity = grossprofit001mb.quantity;
        this.averagesellingrate = grossprofit001mb.averagesellingrate;
        this.averagebuyingrate = grossprofit001mb.averagebuyingrate;
        this.sellingamount = grossprofit001mb.sellingamount;
        this.buyingamount = grossprofit001mb.buyingamount;
        this.grossprofit = grossprofit001mb.grossprofit;
        this.grosspercentage = grossprofit001mb.grosspercentage;
        this.insertUser = grossprofit001mb.insertUser;
        this.insertDatetime = grossprofit001mb.insertDatetime;
        this.updatedUser = grossprofit001mb.updatedUser;
        this.updatedDatetime = grossprofit001mb.updatedDatetime;
    }
}
