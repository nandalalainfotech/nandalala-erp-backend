import { CustomerdetailsDTO } from "src/dto/Customerdetails.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("customerdetails001mb")
export class Customerdetails001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "customerid", length: 45 })
    customerid: string;

    @Column("varchar", { name: "customername", length: 45 })
    customername: string;

    @Column("varchar", { name: "customergroup", length: 45 })
    customergroup: string;

    @Column("varchar", { name: "addressline1", length: 45 })
    addressline1: string;

    @Column("varchar", { name: "addressline2", length: 45 })
    addressline2: string;

    @Column("varchar", { name: "city", length: 45 })
    city: string;

    @Column("varchar", { name: "state", length: 45 })
    state: string;

    @Column("int", { name: "postalcode" })
    postalcode: number;

    @Column("varchar", { name: "country", length: 45 })
    country: string;

    @Column("tinyint", { name: "isprimaryaddress", width: 1 })
    isprimaryaddress: boolean;

    @Column("varchar", { name: "firstname", length: 45 })
    firstname: string;

    @Column("varchar", { name: "lastname", length: 45 })
    lastname: string;

    @Column("int", { name: "phone" })
    phone: number;

    @Column("int", { name: "mobilenumber" })
    mobilenumber: number;

    @Column("varchar", { name: "emailid", length: 45 })
    emailid: string;

    @Column("tinyint", { name: "isprimarycontact" })
    isprimarycontact: number;

    setProperties(customerdetailsDTO: CustomerdetailsDTO) {
        this.id = customerdetailsDTO.id;
        this.customerid = customerdetailsDTO.customerid;
        this.customername = customerdetailsDTO.customername;
        this.customergroup = customerdetailsDTO.customergroup;
        this.addressline1 = customerdetailsDTO.addressline1;
        this.addressline2 = customerdetailsDTO.addressline2;
        this.city = customerdetailsDTO.city;
        this.state = customerdetailsDTO.state;
        this.postalcode = customerdetailsDTO.postalcode;
        this.country = customerdetailsDTO.country;
        this.isprimaryaddress = customerdetailsDTO.isprimaryaddress;
        this.firstname = customerdetailsDTO.firstname;
        this.lastname = customerdetailsDTO.lastname;
        this.phone = customerdetailsDTO.phone;
        this.mobilenumber = customerdetailsDTO.mobilenumber;
        this.emailid = customerdetailsDTO.emailid;
        this.isprimarycontact = customerdetailsDTO.isprimarycontact;
        this.insertUser = customerdetailsDTO.insertUser;
        this.insertDatetime = customerdetailsDTO.insertDatetime;
        this.updatedUser = customerdetailsDTO.updatedUser;
        this.updatedDatetime = customerdetailsDTO.updatedDatetime;
    }
}
