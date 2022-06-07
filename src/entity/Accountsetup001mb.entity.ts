import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AccountsetupDTO } from "src/dto/Accountsetup.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("accountsetup001mb")
export class Accountsetup001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "setId" })
    setId: number;

    @Column("varchar", { name: "mkentryforstkMang", nullable: true, length: 20 })
    mkentryforstkMang: string | null;

    @Column("varchar", { name: "accfrozenUpto", length: 30 })
    accfrozenUpto: string;

    @Column("varchar", { name: "creditName", length: 60 })
    creditName: string;

    @Column("varchar", { name: "roleallowedtoFreeze", length: 60 })
    roleallowedtoFreeze: string;

    @Column("varchar", { name: "chksupinvoice", nullable: true, length: 20 })
    chksupinvoice: string | null;

    @Column("varchar", { name: "mkpayviaJournal", nullable: true, length: 20 })
    mkpayviaJournal: string | null;

    @Column("varchar", { name: "unlinkpayonCancel", nullable: true, length: 20 })
    unlinkpayonCancel: string | null;

    setProperties(accountsetupDTO: AccountsetupDTO) {
        this.setId = accountsetupDTO.setId;
        this.mkentryforstkMang = accountsetupDTO.mkentryforstkMang;
        this.accfrozenUpto = accountsetupDTO.accfrozenUpto;
        this.creditName = accountsetupDTO.creditName;
        this.roleallowedtoFreeze = accountsetupDTO.roleallowedtoFreeze;
        this.chksupinvoice = accountsetupDTO.chksupinvoice;
        this.mkpayviaJournal = accountsetupDTO.mkpayviaJournal;
        this.unlinkpayonCancel = accountsetupDTO.unlinkpayonCancel;
        this.insertUser = accountsetupDTO.insertUser;
        this.insertDatetime = accountsetupDTO.insertDatetime;
        this.updatedUser = accountsetupDTO.updatedUser;
        this.updatedDatetime = accountsetupDTO.updatedDatetime;
    }
}
