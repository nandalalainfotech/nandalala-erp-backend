import { AssetmovementDTO } from "src/dto/Assetmovement.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("assetmovement001mb")
export class Assetmovement001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "asset", nullable: true, length: 255 })
    asset: string | null;

    @Column("varchar", { name: "company", nullable: true, length: 255 })
    company: string | null;

    @Column("varchar", { name: "targetwarehouse", nullable: true, length: 255 })
    targetwarehouse: string | null;

    @Column("datetime", { name: "transactiondate", nullable: true })
    transactiondate: Date | null;

    setProperties(assetmovementDTO: AssetmovementDTO) {
        this.id = assetmovementDTO.id;
        this.asset = assetmovementDTO.asset;
        this.company = assetmovementDTO.company;
        this.targetwarehouse = assetmovementDTO.targetwarehouse;
        this.transactiondate = assetmovementDTO.transactiondate;
        this.insertUser = assetmovementDTO.insertUser;
        this.insertDatetime = assetmovementDTO.insertDatetime;
        this.updatedUser = assetmovementDTO.updatedUser;
        this.updatedDatetime = assetmovementDTO.updatedDatetime;
    }
}
