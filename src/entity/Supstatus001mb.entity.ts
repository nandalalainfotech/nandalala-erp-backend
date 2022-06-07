import { SupstatusDTO } from "src/dto/Supstatus.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("supstatus001mb")
export class Supstatus001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "sustatusId" })
    sustatusId: number;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("varchar", { name: "sustatus", length: 50 })
    sustatus: string;

    @Column("int", { name: "phone" })
    phone: number;

    setProperties(supstatusDTO: SupstatusDTO) {
        this.sustatusId = supstatusDTO.sustatusId;
        this.supName = supstatusDTO.supName;
        this.sustatus = supstatusDTO.sustatus;
        this.phone = supstatusDTO.phone;
        this.insertUser = supstatusDTO.insertUser;
        this.insertDatetime = supstatusDTO.insertDatetime;
        this.updatedUser = supstatusDTO.updatedUser;
        this.updatedDatetime = supstatusDTO.updatedDatetime;
    }
}
