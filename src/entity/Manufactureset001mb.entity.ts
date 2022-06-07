import { ManufacturesetDTO } from "src/dto/Manufactureset.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("manufactureset001mb")
export class Manufactureset001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "mansetId" })
    mansetId: number;

    @Column("char", { name: "disableCPandTT", length: 20 })
    disableCPandTt: boolean;

    @Column("char", { name: "allowOT", length: 20 })
    allowOt: boolean;

    @Column("char", { name: "allowProdinholy", length: 20 })
    allowProdinholy: boolean;

    @Column("decimal", { name: "prodPercent", precision: 12, scale: 4 })
    prodPercent: string;

    @Column("varchar", { name: "backflushRM", length: 40 })
    backflushRm: string;

    @Column("varchar", { name: "capacityPlan", length: 30 })
    capacityPlan: string;

    @Column("varchar", { name: "timebwOpern", nullable: true, length: 30 })
    timebwOpern: string | null;

    @Column("varchar", { name: "defworkinProgWH", length: 50 })
    defworkinProgWh: string;

    @Column("varchar", { name: "defFingoodsWH", length: 50 })
    defFingoodsWh: string;

    setProperties(manufacturesetDTO: ManufacturesetDTO) {
        this.mansetId = manufacturesetDTO.mansetId;
        this.disableCPandTt = manufacturesetDTO.disableCPandTt;
        this.allowOt = manufacturesetDTO.allowOt;
        this.allowProdinholy = manufacturesetDTO.allowProdinholy;
        this.prodPercent = manufacturesetDTO.prodPercent;
        this.backflushRm = manufacturesetDTO.backflushRm;
        this.capacityPlan = manufacturesetDTO.capacityPlan;
        this.timebwOpern = manufacturesetDTO.timebwOpern;
        this.defworkinProgWh = manufacturesetDTO.defworkinProgWh;
        this.defFingoodsWh = manufacturesetDTO.defFingoodsWh;
        this.insertUser = manufacturesetDTO.insertUser;
        this.insertDatetime = manufacturesetDTO.insertDatetime;
        this.updatedUser = manufacturesetDTO.updatedUser;
        this.updatedDatetime = manufacturesetDTO.updatedDatetime;
    }
}
