import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { StatusDTO } from "src/dto/Status.dto";
import { BaseEntity } from "./BaseEntity";

@Index("Statusname", ["statusname"], { unique: true })
@Entity("status001mb")
export class Status001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "Statusid" })
    statusid: number;

    @Column("varchar", {
        name: "Statusname",
        nullable: true,
        unique: true,
        length: 40,
    })
    statusname: string | null;

    setProperties(statusDTO: StatusDTO) {
        this.statusid = statusDTO.statusid;
        this.statusname = statusDTO.statusname;
        this.insertUser = statusDTO.insertUser;
        this.insertDatetime = statusDTO.insertDatetime;
        this.updatedUser = statusDTO.updatedUser;
        this.updatedDatetime = statusDTO.updatedDatetime;
    }
}
