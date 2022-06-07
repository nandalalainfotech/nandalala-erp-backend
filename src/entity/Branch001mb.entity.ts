import { BranchDTO } from "src/dto/Branch.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("branch001mb")
export class Branch001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "branchId" })
    branchId: number;

    @Column("varchar", { name: "branchName", length: 30 })
    branchName: string;

    setProperties(branchDTO: BranchDTO) {
        this.branchId = branchDTO.branchId;
        this.branchName = branchDTO.branchName;
        this.insertUser = branchDTO.insertUser;
        this.insertDatetime = branchDTO.insertDatetime;
        this.updatedUser = branchDTO.updatedUser;
        this.updatedDatetime = branchDTO.updatedDatetime;
    }
}
