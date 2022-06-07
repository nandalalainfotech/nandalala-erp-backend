import { TerritoryDTO } from "src/dto/Territory.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("territory001mb")
export class Territory001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "terId" })
    terId: number;

    @Column("varchar", { name: "terName", length: 50 })
    terName: string;

    setProperties(territoryDTO: TerritoryDTO) {
        this.terId = territoryDTO.terId;
        this.terName = territoryDTO.terName;
        this.insertUser = territoryDTO.insertUser;
        this.insertDatetime = territoryDTO.insertDatetime;
        this.updatedUser = territoryDTO.updatedUser;
        this.updatedDatetime = territoryDTO.updatedDatetime;
    }
}
