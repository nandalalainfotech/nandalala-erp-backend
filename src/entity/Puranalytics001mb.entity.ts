import { PuranalyticsDTO } from "src/dto/Puranalytics.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("puranalytics001mb")
export class Puranalytics001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "puansId" })
    puansId: number;

    @Column("varchar", { name: "treeType", length: 50 })
    treeType: string;

    @Column("varchar", { name: "basedOn", length: 50 })
    basedOn: string;

    @Column("varchar", { name: "valueorqty", length: 40 })
    valueorqty: string;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("datetime", { name: "fromDate" })
    fromDate: Date;

    @Column("datetime", { name: "toDate" })
    toDate: Date;

    @Column("varchar", { name: "anRange", nullable: true, length: 50 })
    anRange: string | null;

    setProperties(puranalyticsDTO: PuranalyticsDTO) {
        this.puansId = puranalyticsDTO.puansId;
        this.treeType = puranalyticsDTO.treeType;
        this.basedOn = puranalyticsDTO.basedOn;
        this.valueorqty = puranalyticsDTO.valueorqty;
        this.company = puranalyticsDTO.company;
        this.fromDate = puranalyticsDTO.fromDate;
        this.toDate = puranalyticsDTO.toDate;
        this.anRange = puranalyticsDTO.anRange;
        this.insertUser = puranalyticsDTO.insertUser;
        this.insertDatetime = puranalyticsDTO.insertDatetime;
        this.updatedUser = puranalyticsDTO.updatedUser;
        this.updatedDatetime = puranalyticsDTO.updatedDatetime;
    }

}
