import { UpdatebankDTO } from "src/dto/Updatebank.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("updatebank001mb")
export class Updatebank001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "bankaccount", length: 45 })
    bankaccount: string;

    @Column("datetime", { name: "fromdate" })
    fromdate: Date;

    @Column("datetime", { name: "todate" })
    todate: Date;

    @Column("varchar", { name: "customername", length: 50 })
    customername: string;

    @Column("decimal", {
        name: "amount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amount: string | null;

    @Column("varchar", { name: "chqNumber", nullable: true, length: 50 })
    chqNumber: string | null;

    @Column("datetime", { name: "clearanceDate" })
    clearanceDate: Date;

    setProperties(updatebankDTO: UpdatebankDTO) {
        this.id = updatebankDTO.id;
        this.bankaccount = updatebankDTO.bankaccount;
        this.fromdate = updatebankDTO.fromdate;
        this.todate = updatebankDTO.todate;
        this.customername = updatebankDTO.customername;
        this.amount = updatebankDTO.amount;
        this.chqNumber = updatebankDTO.chqNumber;
        this.clearanceDate = updatebankDTO.clearanceDate;
        this.insertUser = updatebankDTO.insertUser;
        this.insertDatetime = updatebankDTO.insertDatetime;
        this.updatedUser = updatebankDTO.updatedUser;
        this.updatedDatetime = updatebankDTO.updatedDatetime;
    }
}
