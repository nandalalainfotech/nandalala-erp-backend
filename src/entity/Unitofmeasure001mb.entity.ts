import { UnitofmeasureDTO } from "src/dto/Unitofmeasure.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("unitofmeasure001mb")
export class Unitofmeasure001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "unitId" })
    unitId: number;

    @Column("varchar", { name: "unitName", length: 40 })
    unitName: string;

    setProperties(unitofmeasureDTO: UnitofmeasureDTO) {
        this.unitId = unitofmeasureDTO.unitId;
        this.unitName = unitofmeasureDTO.unitName;
        this.insertUser = unitofmeasureDTO.insertUser;
        this.insertDatetime = unitofmeasureDTO.insertDatetime;
        this.updatedUser = unitofmeasureDTO.updatedUser;
        this.updatedDatetime = unitofmeasureDTO.updatedDatetime;
    }
}
