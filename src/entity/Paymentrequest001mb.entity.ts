import { PaymentrequestDTO } from "src/dto/Paymentrequest.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("paymentrequest001mb")
export class Paymentrequest001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "payreqId" })
    payreqId: number;

    @Column("varchar", { name: "prName", length: 50 })
    prName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    setProperties(paymentrequestDTO: PaymentrequestDTO) {
        this.payreqId = paymentrequestDTO.payreqId;
        this.prName = paymentrequestDTO.prName;
        this.status = paymentrequestDTO.status;
        this.insertUser = paymentrequestDTO.insertUser;
        this.insertDatetime = paymentrequestDTO.insertDatetime;
        this.updatedUser = paymentrequestDTO.updatedUser;
        this.updatedDatetime = paymentrequestDTO.updatedDatetime;
        this.insertUser = paymentrequestDTO.insertUser;
        this.insertDatetime = paymentrequestDTO.insertDatetime;
        this.updatedUser = paymentrequestDTO.updatedUser;
        this.updatedDatetime = paymentrequestDTO.updatedDatetime;
    }
}
