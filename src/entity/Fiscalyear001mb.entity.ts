import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FiscalyearDTO } from "src/dto/Fiscalyear.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("fiscalyear001mb")
export class Fiscalyear001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "yearId" })
    yearId: number;

    @Column("varchar", { name: "yearName", length: 20 })
    yearName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    setProperties(fiscalyearDTO: FiscalyearDTO) {
        this.yearId = fiscalyearDTO.yearId;
        this.yearName = fiscalyearDTO.yearName;
        this.status = fiscalyearDTO.status;
        this.insertUser = fiscalyearDTO.insertUser;
        this.insertDatetime = fiscalyearDTO.insertDatetime;
        this.updatedUser = fiscalyearDTO.updatedUser;
        this.updatedDatetime = fiscalyearDTO.updatedDatetime;
    }

}
