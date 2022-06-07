import { ChequetemplateDTO } from "src/dto/Chequetemplate.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("chequetemplate001mb")
export class Chequetemplate001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "cheqId" })
    cheqId: number;

    @Column("varchar", { name: "prmaccountName", length: 60 })
    prmaccountName: string;

    @Column("char", { name: "prmisaccPay", nullable: true, length: 1 })
    prmisaccPay: boolean;

    @Column("decimal", {
        name: "prmcheqSize",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    prmcheqSize: string | null;

    @Column("decimal", {
        name: "prmdistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    prmdistfromTop: string | null;

    @Column("decimal", {
        name: "prmcheqWidth",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    prmcheqWidth: string | null;

    @Column("decimal", {
        name: "prmdistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    prmdistfromLeft: string | null;

    @Column("decimal", {
        name: "prmcheqHeight",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    prmcheqHeight: string | null;

    @Column("varchar", { name: "prmmesgtoShow", length: 100 })
    prmmesgtoShow: string;

    @Column("decimal", {
        name: "scanCheq",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    scanCheq: string | null;

    @Column("decimal", {
        name: "dtdistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    dtdistfromTop: string | null;

    @Column("decimal", {
        name: "dtdistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    dtdistfromLeft: string | null;

    @Column("decimal", {
        name: "paydistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    paydistfromTop: string | null;

    @Column("decimal", {
        name: "paydistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    paydistfromLeft: string | null;

    @Column("decimal", {
        name: "amtwdistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtwdistfromTop: string | null;

    @Column("decimal", {
        name: "amtwdistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtwdistfromLeft: string | null;

    @Column("decimal", {
        name: "amtwWidth",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtwWidth: string | null;

    @Column("decimal", {
        name: "amtwlineSpace",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtwlineSpace: string | null;

    @Column("decimal", {
        name: "amtfdistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtfdistfromTop: string | null;

    @Column("decimal", {
        name: "amtfdistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amtfdistfromLeft: string | null;

    @Column("decimal", {
        name: "accnodistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    accnodistfromTop: string | null;

    @Column("decimal", {
        name: "accnodistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    accnodistfromLeft: string | null;

    @Column("decimal", {
        name: "signposdistfromTop",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    signposdistfromTop: string | null;

    @Column("decimal", {
        name: "signposdistfromLeft",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    signposdistfromLeft: string | null;

    setProperties(chequetemplateDTO: ChequetemplateDTO) {
        this.cheqId = chequetemplateDTO.cheqId;
        this.prmaccountName = chequetemplateDTO.prmaccountName;
        this.prmisaccPay = chequetemplateDTO.prmisaccPay;
        this.prmcheqSize = chequetemplateDTO.prmcheqSize;
        this.prmdistfromTop = chequetemplateDTO.prmdistfromTop;
        this.prmcheqWidth = chequetemplateDTO.prmcheqWidth;
        this.prmdistfromLeft = chequetemplateDTO.prmdistfromLeft;
        this.prmcheqHeight = chequetemplateDTO.prmcheqHeight;
        this.prmmesgtoShow = chequetemplateDTO.prmmesgtoShow;
        this.scanCheq = chequetemplateDTO.scanCheq;
        this.dtdistfromTop = chequetemplateDTO.dtdistfromTop;
        this.dtdistfromLeft = chequetemplateDTO.dtdistfromLeft;
        this.paydistfromTop = chequetemplateDTO.paydistfromTop;
        this.paydistfromLeft = chequetemplateDTO.paydistfromLeft;
        this.amtwdistfromTop = chequetemplateDTO.amtwdistfromTop;
        this.amtwdistfromLeft = chequetemplateDTO.amtwdistfromLeft;
        this.amtwWidth = chequetemplateDTO.amtwWidth;
        this.amtwlineSpace = chequetemplateDTO.amtwlineSpace;
        this.amtfdistfromTop = chequetemplateDTO.amtfdistfromTop;
        this.amtfdistfromLeft = chequetemplateDTO.amtfdistfromLeft;
        this.accnodistfromTop = chequetemplateDTO.accnodistfromTop;
        this.accnodistfromLeft = chequetemplateDTO.accnodistfromLeft;
        this.signposdistfromTop = chequetemplateDTO.signposdistfromTop;
        this.signposdistfromLeft = chequetemplateDTO.signposdistfromLeft;
        this.insertUser = chequetemplateDTO.insertUser;
        this.insertDatetime = chequetemplateDTO.insertDatetime;
        this.updatedUser = chequetemplateDTO.updatedUser;
        this.updatedDatetime = chequetemplateDTO.updatedDatetime;
    }
}
