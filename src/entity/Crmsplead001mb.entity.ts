import { CrmspleadDTO } from "src/dto/Crmsplead.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("crmsplead001mb")
export class Crmsplead001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "slineId" })
    slineId: number;

    @Column("varchar", { name: "personName", length: 50 })
    personName: string;

    @Column("varchar", { name: "orgName", length: 50 })
    orgName: string;

    @Column("varchar", { name: "status", nullable: true, length: 50 })
    status: string | null;

    setProperties(crmspleadDTO: CrmspleadDTO) {
        this.slineId = crmspleadDTO.slineId;
        this.personName = crmspleadDTO.personName;
        this.orgName = crmspleadDTO.orgName;
        this.status = crmspleadDTO.status;
        this.insertUser = crmspleadDTO.insertUser;
        this.insertDatetime = crmspleadDTO.insertDatetime;
        this.updatedUser = crmspleadDTO.updatedUser;
        this.updatedDatetime = crmspleadDTO.updatedDatetime;
    }

}
