import { IsNotEmpty } from "class-validator";
import { Itempuhist001mb } from "src/entity/Itempuhist001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItempuhistDTO extends BaseDTO {
    histId: number;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    itemGroup: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    uom: string;

    @IsNotEmpty()
    date: Date | null;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    poSeries: string | null;

    @IsNotEmpty()
    transDate: Date | null;

    @IsNotEmpty()
    supplier: string | null;

    @IsNotEmpty()
    receivedqty: number | null;

    @IsNotEmpty()
    company: string;

    setProperties(itempuhist001mb: Itempuhist001mb) {
        this.histId = itempuhist001mb.histId;
        this.itemCode = itempuhist001mb.itemCode;
        this.itemGroup = itempuhist001mb.itemGroup;
        this.description = itempuhist001mb.description;
        this.quantity = itempuhist001mb.quantity;
        this.uom = itempuhist001mb.uom;
        this.date = itempuhist001mb.date;
        this.amount = itempuhist001mb.amount;
        this.poSeries = itempuhist001mb.poSeries;
        this.transDate = itempuhist001mb.transDate;
        this.supplier = itempuhist001mb.supplier;
        this.receivedqty = itempuhist001mb.receivedqty;
        this.company = itempuhist001mb.company;
        this.insertUser = itempuhist001mb.insertUser;
        this.insertDatetime = itempuhist001mb.insertDatetime;
        this.updatedUser = itempuhist001mb.updatedUser;
        this.updatedDatetime = itempuhist001mb.updatedDatetime;
    }
}
