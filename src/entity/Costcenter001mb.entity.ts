import { CostcenterDTO } from "src/dto/Costcenter.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("costcenter001mb")
export class Costcenter001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "centId" })
    centId: number;

    @Column("varchar", { name: "centerName", length: 50 })
    centerName: string;

    setProperties(costcenterDTO: CostcenterDTO) {
        this.centId = costcenterDTO.centId;
        this.centerName = costcenterDTO.centerName;
        this.insertUser = costcenterDTO.insertUser;
        this.insertDatetime = costcenterDTO.insertDatetime;
        this.updatedUser = costcenterDTO.updatedUser;
        this.updatedDatetime = costcenterDTO.updatedDatetime;
    }

}
