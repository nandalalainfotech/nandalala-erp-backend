import { SetupcugrpDTO } from "src/dto/Setupcugrp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("setupcugrp001mb")
export class Setupcugrp001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "cugrpId" })
    cugrpId: number;

    @Column("varchar", { name: "customergroup", length: 40 })
    customergroup: string;

    @Column("varchar", { name: "salesPerson", length: 40 })
    salesPerson: string;

    setProperties(setupcugrpDTO: SetupcugrpDTO) {
        this.cugrpId = setupcugrpDTO.cugrpId;
        this.customergroup = setupcugrpDTO.customergroup;
        this.salesPerson = setupcugrpDTO.salesPerson;
        this.insertUser = setupcugrpDTO.insertUser;
        this.insertDatetime = setupcugrpDTO.insertDatetime;
        this.updatedUser = setupcugrpDTO.updatedUser;
        this.updatedDatetime = setupcugrpDTO.updatedDatetime;
    }
}
