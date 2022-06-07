import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PaymentmodeDTO } from "src/dto/Paymentmode.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("paymentmode001mb")
export class Paymentmode001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "payId" })
    payId: number;

    @Column("varchar", { name: "modeName", length: 60 })
    modeName: string;

    setProperties(paymentmodeDTO: PaymentmodeDTO) {
        this.payId = paymentmodeDTO.payId;
        this.modeName = paymentmodeDTO.modeName;
        this.insertUser = paymentmodeDTO.insertUser;
        this.insertDatetime = paymentmodeDTO.insertDatetime;
        this.updatedUser = paymentmodeDTO.updatedUser;
        this.updatedDatetime = paymentmodeDTO.updatedDatetime;
    }
}
