import { IsNotEmpty } from "class-validator";
import { Leaddetail001mb } from "src/entity/Leaddetail001mb.entity";
import { BaseDTO } from "./Base.dto";

export class LeaddetailDTO extends BaseDTO {

    leadId: number;

    @IsNotEmpty()
    leadName: string;

    @IsNotEmpty()
    companyName: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    pinCode: number;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    phone: number | null;

    @IsNotEmpty()
    mobileNo: number;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    leadOwner: string;

    @IsNotEmpty()
    terName: string;

    setProperties(leaddetail001mb: Leaddetail001mb) {
        this.leadId = leaddetail001mb.leadId;
        this.leadName = leaddetail001mb.leadName;
        this.companyName = leaddetail001mb.companyName;
        this.status = leaddetail001mb.status;
        this.pinCode = leaddetail001mb.pinCode;
        this.country = leaddetail001mb.country;
        this.phone = leaddetail001mb.phone;
        this.mobileNo = leaddetail001mb.mobileNo;
        this.email = leaddetail001mb.email;
        this.email = leaddetail001mb.email;
        this.leadOwner = leaddetail001mb.leadOwner;
        this.terName = leaddetail001mb.terName;
        this.address = leaddetail001mb.address;
        this.state = leaddetail001mb.state;
        this.insertUser = leaddetail001mb.insertUser;
        this.insertDatetime = leaddetail001mb.insertDatetime;
        this.updatedUser = leaddetail001mb.updatedUser;
        this.updatedDatetime = leaddetail001mb.updatedDatetime;
    }
}
