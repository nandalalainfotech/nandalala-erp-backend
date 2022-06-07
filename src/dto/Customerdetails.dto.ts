import { IsNotEmpty } from "class-validator";
import { Customerdetails001mb } from "src/entity/Customerdetails001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CustomerdetailsDTO extends BaseDTO {
    id: number;
    @IsNotEmpty()
    customerid: string;

    @IsNotEmpty()
    customername: string;

    @IsNotEmpty()
    customergroup: string;

    @IsNotEmpty()
    addressline1: string;

    @IsNotEmpty()
    addressline2: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    postalcode: number;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    isprimaryaddress: boolean;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    mobilenumber: number;

    @IsNotEmpty()
    emailid: string;

    @IsNotEmpty()
    isprimarycontact: number;

    setProperties(customerdetails001mb: Customerdetails001mb) {
        this.id = customerdetails001mb.id;
        this.customerid = customerdetails001mb.customerid;
        this.customername = customerdetails001mb.customername;
        this.customergroup = customerdetails001mb.customergroup;
        this.addressline1 = customerdetails001mb.addressline1;
        this.addressline2 = customerdetails001mb.addressline2;
        this.city = customerdetails001mb.city;
        this.state = customerdetails001mb.state;
        this.postalcode = customerdetails001mb.postalcode;
        this.country = customerdetails001mb.country;
        this.isprimaryaddress = customerdetails001mb.isprimaryaddress;
        this.firstname = customerdetails001mb.firstname;
        this.lastname = customerdetails001mb.lastname;
        this.phone = customerdetails001mb.phone;
        this.mobilenumber = customerdetails001mb.mobilenumber;
        this.emailid = customerdetails001mb.emailid;
        this.isprimarycontact = customerdetails001mb.isprimarycontact;
        this.insertUser = customerdetails001mb.insertUser;
        this.insertDatetime = customerdetails001mb.insertDatetime;
        this.updatedUser = customerdetails001mb.updatedUser;
        this.updatedDatetime = customerdetails001mb.updatedDatetime;
    }
}
