import { PackingslipDTO } from "src/dto/Packingslip.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("packingslip001mb")
export class Packingslip001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "psId" })
    psId: number;

    @Column("varchar", { name: "slipName", length: 50 })
    slipName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    @Column("varchar", { name: "delName", length: 50 })
    delName: string;

    setProperties(packingslipDTO: PackingslipDTO) {
        this.psId = packingslipDTO.psId;
        this.slipName = packingslipDTO.slipName;
        this.status = packingslipDTO.status;
        this.delName = packingslipDTO.delName;
        this.insertUser = packingslipDTO.insertUser;
        this.insertDatetime = packingslipDTO.insertDatetime;
        this.updatedUser = packingslipDTO.updatedUser;
        this.updatedDatetime = packingslipDTO.updatedDatetime;
    }
}
