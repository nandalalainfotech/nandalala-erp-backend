import { ShippingruleDTO } from "src/dto/Shippingrule.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("shippingrule001mb")
export class Shippingrule001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "sruleId" })
    sruleId: number;

    @Column("varchar", { name: "sruleName", length: 50 })
    sruleName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    @Column("varchar", { name: "sruleLabel", nullable: true, length: 50 })
    sruleLabel: string | null;

    setProperties(shippingruleDTO: ShippingruleDTO) {
        this.sruleId = shippingruleDTO.sruleId;
        this.sruleName = shippingruleDTO.sruleName;
        this.status = shippingruleDTO.status;
        this.sruleLabel = shippingruleDTO.sruleLabel;
        this.insertUser = shippingruleDTO.insertUser;
        this.insertDatetime = shippingruleDTO.insertDatetime;
        this.updatedUser = shippingruleDTO.updatedUser;
        this.updatedDatetime = shippingruleDTO.updatedDatetime;
    }
}
