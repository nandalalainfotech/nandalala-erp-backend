import { AccountchartDTO } from "src/dto/Accountchart.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("accountchart001mb")
export class Accountchart001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "chartId" })
    chartId: number;

    @Column("varchar", { name: "chartName", length: 100 })
    chartName: string;

    setProperties(accountchartDTO: AccountchartDTO) {
        this.chartId = accountchartDTO.chartId;
        this.chartName = accountchartDTO.chartName;
        this.insertUser = accountchartDTO.insertUser;
        this.insertDatetime = accountchartDTO.insertDatetime;
        this.updatedUser = accountchartDTO.updatedUser;
        this.updatedDatetime = accountchartDTO.updatedDatetime;
    }
}
