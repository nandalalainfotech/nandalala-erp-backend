import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PaygateaccountDTO } from "src/dto/Paygateaccount.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("paygateaccount001mb")
export class Paygateaccount001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "paygateId" })
    paygateId: number;

    @Column("varchar", { name: "accountName", length: 50 })
    accountName: string;

    @Column("varchar", { name: "defMessage", nullable: true, length: 100 })
    defMessage: string | null;

    setProperties(paygateaccountDTO: PaygateaccountDTO) {
        this.paygateId = paygateaccountDTO.paygateId;
        this.accountName = paygateaccountDTO.accountName;
        this.defMessage = paygateaccountDTO.defMessage;
        this.insertUser = paygateaccountDTO.insertUser;
        this.insertDatetime = paygateaccountDTO.insertDatetime;
        this.updatedUser = paygateaccountDTO.updatedUser;
        this.updatedDatetime = paygateaccountDTO.updatedDatetime;
    }
}
