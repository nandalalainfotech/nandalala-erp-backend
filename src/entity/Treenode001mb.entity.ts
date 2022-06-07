import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TreenodeDTO } from "src/dto/Treenode.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("treenode001mb")
export class Treenode001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
    id: string;

    @Column("varchar", { name: "ISPARENT", length: 255 })
    isparent: string;

    @Column("varchar", { name: "PID", length: 255 })
    pid: string;

    @Column("varchar", { name: "PARENTNAME", length: 255 })
    parentname: string;

    setProperties(treenodeDTO: TreenodeDTO) {
        this.id = treenodeDTO.id;
        this.isparent = treenodeDTO.isparent;
        this.pid = treenodeDTO.pid;
        this.parentname = treenodeDTO.parentname;
        this.insertUser = treenodeDTO.insertUser;
        this.insertDatetime = treenodeDTO.insertDatetime;
        this.updatedUser = treenodeDTO.updatedUser;
        this.updatedDatetime = treenodeDTO.updatedDatetime;
    }
}
