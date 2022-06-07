import { InstalnoteDTO } from "src/dto/Instalnote.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("instalnote001mb")
export class Instalnote001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "instId" })
    instId: number;

    @Column("varchar", { name: "name", length: 50 })
    name: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("varchar", { name: "remark", length: 100 })
    remark: string;

    @Column("varchar", { name: "instCode", length: 40 })
    instCode: string;

    setProperties(instalnoteDTO: InstalnoteDTO) {
        this.instId = instalnoteDTO.instId;
        this.name = instalnoteDTO.name;
        this.status = instalnoteDTO.status;
        this.remark = instalnoteDTO.remark;
        this.instCode = instalnoteDTO.instCode;
        this.insertUser = instalnoteDTO.insertUser;
        this.insertDatetime = instalnoteDTO.insertDatetime;
        this.updatedUser = instalnoteDTO.updatedUser;
        this.updatedDatetime = instalnoteDTO.updatedDatetime;
    }
}
