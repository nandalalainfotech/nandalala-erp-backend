import { StktranspurecptDTO } from "src/dto/Stktranspurecpt.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stktranspurecpt001mb")
export class Stktranspurecpt001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stpurtId" })
    stpurtId: number;

    @Column("varchar", { name: "title", length: 50 })
    title: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("int", { name: "grandTotal" })
    grandTotal: number;

    @Column("varchar", { name: "purtName", length: 40 })
    purtName: string;

    setProperties(stktranspurecptDTO: StktranspurecptDTO) {
        this.stpurtId = stktranspurecptDTO.stpurtId;
        this.title = stktranspurecptDTO.title;
        this.status = stktranspurecptDTO.status;
        this.grandTotal = stktranspurecptDTO.grandTotal;
        this.purtName = stktranspurecptDTO.purtName;
        this.insertUser = stktranspurecptDTO.insertUser;
        this.insertDatetime = stktranspurecptDTO.insertDatetime;
        this.updatedUser = stktranspurecptDTO.updatedUser;
        this.updatedDatetime = stktranspurecptDTO.updatedDatetime;
    }
}
