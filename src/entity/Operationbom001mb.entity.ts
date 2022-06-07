import { OperationbomDTO } from "src/dto/Operationbom.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("operationbom001mb")
export class Operationbom001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "opId" })
    opId: number;

    @Column("varchar", { name: "opName", length: 50 })
    opName: string;

    @Column("varchar", { name: "workstName", length: 50 })
    workstName: string;

    setProperties(operationbomDTO: OperationbomDTO) {
        this.opId = operationbomDTO.opId;
        this.opName = operationbomDTO.opName;
        this.workstName = operationbomDTO.workstName;
        this.insertUser = operationbomDTO.insertUser;
        this.insertDatetime = operationbomDTO.insertDatetime;
        this.updatedUser = operationbomDTO.updatedUser;
        this.updatedDatetime = operationbomDTO.updatedDatetime;
    }
}
