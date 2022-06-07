import { CrmspcustDTO } from "src/dto/Crmspcust.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("crmspcust001mb")
export class Crmspcust001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "custId" })
    custId: number;

    @Column("varchar", { name: "customername", length: 50 })
    customername: string;

    @Column("varchar", { name: "status", nullable: true, length: 30 })
    status: string | null;

    @Column("varchar", { name: "customergroup", nullable: true, length: 50 })
    customergroup: string | null;

    setProperties(crmspcustDTO: CrmspcustDTO) {
        this.custId = crmspcustDTO.custId;
        this.customername = crmspcustDTO.customername;
        this.status = crmspcustDTO.status;
        this.customergroup = crmspcustDTO.customergroup;
        this.insertUser = crmspcustDTO.insertUser;
        this.insertDatetime = crmspcustDTO.insertDatetime;
        this.updatedUser = crmspcustDTO.updatedUser;
        this.updatedDatetime = crmspcustDTO.updatedDatetime;
    }
}
