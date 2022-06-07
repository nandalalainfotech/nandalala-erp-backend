import { StktransentryDTO } from "src/dto/Stktransentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stktransentry001mb")
export class Stktransentry001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stentId" })
    stentId: number;

    @Column("varchar", { name: "title", length: 50 })
    title: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("varchar", { name: "purpose", length: 50 })
    purpose: string;

    @Column("varchar", { name: "stName", length: 30 })
    stName: string;

    setProperties(stktransentryDTO: StktransentryDTO) {
        this.stentId = stktransentryDTO.stentId;
        this.title = stktransentryDTO.title;
        this.status = stktransentryDTO.status;
        this.purpose = stktransentryDTO.purpose;
        this.stName = stktransentryDTO.stName;
        this.insertUser = stktransentryDTO.insertUser;
        this.insertDatetime = stktransentryDTO.insertDatetime;
        this.updatedUser = stktransentryDTO.updatedUser;
        this.updatedDatetime = stktransentryDTO.updatedDatetime;
    }
}
