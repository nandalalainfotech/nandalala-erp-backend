import { CrmmintorespDTO } from "src/dto/Crmmintoresp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("crmmintoresp001mb")
export class Crmmintoresp001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "mrpId" })
    mrpId: number;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "mintoresp", length: 20 })
    mintoresp: string;

    setProperties(crmmintorespDTO: CrmmintorespDTO) {
        this.mrpId = crmmintorespDTO.mrpId;
        this.date = crmmintorespDTO.date;
        this.mintoresp = crmmintorespDTO.mintoresp;
        this.insertUser = crmmintorespDTO.insertUser;
        this.insertDatetime = crmmintorespDTO.insertDatetime;
        this.updatedUser = crmmintorespDTO.updatedUser;
        this.updatedDatetime = crmmintorespDTO.updatedDatetime;
    }
}
