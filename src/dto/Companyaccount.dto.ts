import { IsNotEmpty, MaxLength } from "class-validator";
import { Companyaccount001mb } from "src/entity/Companyaccount001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CompanyaccountDTO extends BaseDTO{
    caId: number;


    @MaxLength(100)
    @IsNotEmpty()
    companyName: string;

    @MaxLength(60)
    @IsNotEmpty()
    country: string;

    @MaxLength(50)
    @IsNotEmpty()
    abbreviation: string;

    @MaxLength(60)
    @IsNotEmpty()
    companyDomain: string;

    @MaxLength(50)
    @IsNotEmpty()
    defholList: string;

    @MaxLength(50)
    @IsNotEmpty()
    defCurrency: string;

    @MaxLength(50)
    @IsNotEmpty()
    accchartType: string;

    @MaxLength(50)
    @IsNotEmpty()
    defbankAccount: string;

    @MaxLength(50)
    @IsNotEmpty()
    defcashAccount: string;

    @MaxLength(50)
    @IsNotEmpty()
    defpayAccount: string;


    @MaxLength(50)
    @IsNotEmpty()
    defincomeAccount: string;


    @MaxLength(50)
    @IsNotEmpty()
    rndoffCenter: string;



    setProperties(companyaccount001mb: Companyaccount001mb) {
        this.caId = companyaccount001mb.caId;
        this.companyName = companyaccount001mb.companyName;
        this.country = companyaccount001mb.country;
        this.abbreviation = companyaccount001mb.abbreviation;
        this.companyDomain = companyaccount001mb.companyDomain;
        this.defholList = companyaccount001mb.defholList;
        this.defCurrency = companyaccount001mb.defCurrency;
        this.accchartType = companyaccount001mb.accchartType;
        this.defbankAccount = companyaccount001mb.defbankAccount;
        this.defcashAccount = companyaccount001mb.defcashAccount;
        this.defpayAccount = companyaccount001mb.defpayAccount;
        this.defincomeAccount = companyaccount001mb.defincomeAccount;
        this.rndoffCenter = companyaccount001mb.rndoffCenter;
        this.insertUser = companyaccount001mb.insertUser;
        this.insertDatetime = companyaccount001mb.insertDatetime;
        this.updatedUser = companyaccount001mb.updatedUser;
        this.updatedDatetime = companyaccount001mb.updatedDatetime;
    }
}
