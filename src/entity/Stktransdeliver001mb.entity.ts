import { StktransdeliverDTO } from "src/dto/Stktransdeliver.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stktransdeliver001mb")
export class Stktransdeliver001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stdelId" })
    stdelId: number;

    @Column("varchar", { name: "title", length: 50 })
    title: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("int", { name: "grandTotal" })
    grandTotal: number;

    @Column("varchar", { name: "delName", length: 30 })
    delName: string;

    setProperties(stktransdeliverDTO: StktransdeliverDTO) {
        this.stdelId = stktransdeliverDTO.stdelId;
        this.title = stktransdeliverDTO.title;
        this.status = stktransdeliverDTO.status;
        this.grandTotal = stktransdeliverDTO.grandTotal;
        this.delName = stktransdeliverDTO.delName;
        this.insertUser = stktransdeliverDTO.insertUser;
        this.insertDatetime = stktransdeliverDTO.insertDatetime;
        this.updatedUser = stktransdeliverDTO.updatedUser;
        this.updatedDatetime = stktransdeliverDTO.updatedDatetime;
    }
}
