import { CustomercreditbalanceDTO } from "src/dto/Customercreditbalance.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("customercreditbalance001mb", { schema: "erpnextgeneration" })
export class Customercreditbalance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "ccid" })
    ccid: number;

    @Column("varchar", { name: "customer", nullable: true, length: 45 })
    customer: string | null;

    @Column("mediumtext", { name: "creditlimit" })
    creditlimit: string;

    @Column("mediumtext", { name: "outstandingamount" })
    outstandingamount: string;

    @Column("mediumtext", { name: "creditbalance" })
    creditbalance: string;

    @Column("varchar", { name: "Customername", nullable: true, length: 40 })
    customername: string | null;

    setProperties(customercreditbalanceDTO: CustomercreditbalanceDTO) {
        this.ccid = customercreditbalanceDTO.ccid;
        this.customer = customercreditbalanceDTO.customer;
        this.creditlimit = customercreditbalanceDTO.creditlimit;
        this.outstandingamount = customercreditbalanceDTO.outstandingamount;
        this.creditbalance = customercreditbalanceDTO.creditbalance;
        this.customername = customercreditbalanceDTO.customername;
        this.insertUser = customercreditbalanceDTO.insertUser;
        this.insertDatetime = customercreditbalanceDTO.insertDatetime;
        this.updatedUser = customercreditbalanceDTO.updatedUser;
        this.updatedDatetime = customercreditbalanceDTO.updatedDatetime;
    }
}
