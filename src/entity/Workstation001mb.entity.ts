import { WorkstationDTO } from "src/dto/Workstation.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("workstation001mb")
export class Workstation001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "workstId" })
    workstId: number;

    @Column("varchar", { name: "workstName", length: 40 })
    workstName: string;

    setProperties(workstationDTO: WorkstationDTO) {
        this.workstId = workstationDTO.workstId;
        this.workstName = workstationDTO.workstName;
        this.insertUser = workstationDTO.insertUser;
        this.insertDatetime = workstationDTO.insertDatetime;
        this.updatedUser = workstationDTO.updatedUser;
        this.updatedDatetime = workstationDTO.updatedDatetime;
    }
}
