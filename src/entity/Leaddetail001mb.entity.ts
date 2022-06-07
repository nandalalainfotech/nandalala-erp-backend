import { LeaddetailDTO } from "src/dto/Leaddetail.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("leaddetail001mb")
export class Leaddetail001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "leadId" })
    leadId: number;

    @Column("varchar", { name: "leadName", length: 40 })
    leadName: string;

    @Column("varchar", { name: "companyName", length: 40 })
    companyName: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("varchar", { name: "address", length: 100 })
    address: string;

    @Column("varchar", { name: "state", length: 40 })
    state: string;

    @Column("int", { name: "pinCode" })
    pinCode: number;

    @Column("varchar", { name: "country", length: 50 })
    country: string;

    @Column("int", { name: "phone", nullable: true })
    phone: number | null;

    @Column("int", { name: "mobileNo" })
    mobileNo: number;

    @Column("varchar", { name: "email", length: 40 })
    email: string;

    @Column("varchar", { name: "leadOwner", length: 50 })
    leadOwner: string;

    @Column("varchar", { name: "terName", length: 40 })
    terName: string;

    setProperties(leaddetailsDTO: LeaddetailDTO) {
        this.leadId = leaddetailsDTO.leadId;
        this.leadName = leaddetailsDTO.leadName;
        this.companyName = leaddetailsDTO.companyName;
        this.status = leaddetailsDTO.status;
        this.pinCode = leaddetailsDTO.pinCode;
        this.country = leaddetailsDTO.country;
        this.phone = leaddetailsDTO.phone;
        this.mobileNo = leaddetailsDTO.mobileNo;
        this.email = leaddetailsDTO.email;
        this.email = leaddetailsDTO.email;
        this.leadOwner = leaddetailsDTO.leadOwner;
        this.terName = leaddetailsDTO.terName;
        this.state = leaddetailsDTO.state;
        this.address = leaddetailsDTO.address;
        this.insertUser = leaddetailsDTO.insertUser;
        this.insertDatetime = leaddetailsDTO.insertDatetime;
        this.updatedUser = leaddetailsDTO.updatedUser;
        this.updatedDatetime = leaddetailsDTO.updatedDatetime;
    }
}
