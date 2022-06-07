import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MaterialrequestDTO } from "src/dto/Materialrequest.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("materialrequest001mb")
export class Materialrequest001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "item", length: 30 })
    item: string;

    @Column("varchar", { name: "warehouse", length: 30 })
    warehouse: string;

    @Column("int", { name: "actual" })
    actual: number;

    @Column("int", { name: "requested" })
    requested: number;

    @Column("int", { name: "reserved" })
    reserved: number;

    @Column("int", { name: "ordered" })
    ordered: number;

    @Column("int", { name: "projected" })
    projected: number;

    setProperties(materialrequestDTO: MaterialrequestDTO) {
        this.id = materialrequestDTO.id;
        this.item = materialrequestDTO.item;
        this.warehouse = materialrequestDTO.warehouse;
        this.actual = materialrequestDTO.actual;
        this.requested = materialrequestDTO.requested;
        this.reserved = materialrequestDTO.reserved;
        this.ordered = materialrequestDTO.ordered;
        this.projected = materialrequestDTO.projected;
        this.insertUser = materialrequestDTO.insertUser;
        this.insertDatetime = materialrequestDTO.insertDatetime;
        this.updatedUser = materialrequestDTO.updatedUser;
        this.updatedDatetime = materialrequestDTO.updatedDatetime;
    }
}
