import { ProdtimesheetDTO } from "src/dto/Prodtimesheet.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prodtimesheet001mb")
export class Prodtimesheet001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prtId" })
    prtId: number;

    @Column("varchar", { name: "empName", length: 40 })
    empName: string;

    @Column("varchar", { name: "tsName", length: 50 })
    tsName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    @Column("varchar", { name: "empCompany", length: 40 })
    empCompany: string;

    @Column("varchar", { name: "twhrs", length: 40 })
    twhrs: string;
    setProperties(prodtimesheetDTO: ProdtimesheetDTO) {
        this.prtId = prodtimesheetDTO.prtId;
        this.empName = prodtimesheetDTO.empName;
        this.tsName = prodtimesheetDTO.tsName;
        this.status = prodtimesheetDTO.status;
        this.empCompany = prodtimesheetDTO.empCompany;
        this.twhrs = prodtimesheetDTO.twhrs;
        this.insertUser = prodtimesheetDTO.insertUser;
        this.insertDatetime = prodtimesheetDTO.insertDatetime;
        this.updatedUser = prodtimesheetDTO.updatedUser;
        this.updatedDatetime = prodtimesheetDTO.updatedDatetime;
    }
}
