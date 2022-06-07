import { CustomeracquisitionDTO } from "src/dto/Customeracquisition.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("customeracquisition001mb")
export class Customeracquisition001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("year", { name: "year" })
    year: number;

    @Column("varchar", { name: "month", length: 45 })
    month: string;

    @Column("int", { name: "newcustomers", unsigned: true })
    newcustomers: number;

    @Column("int", { name: "repeatcustomers", unsigned: true })
    repeatcustomers: number;

    @Column("int", { name: "total", unsigned: true })
    total: number;

    @Column("int", { name: "newcustomersrevenue" })
    newcustomersrevenue: number;

    @Column("int", { name: "repeatcustomersrevenue" })
    repeatcustomersrevenue: number;

    @Column("int", { name: "totalrevenue" })
    totalrevenue: number;

    setProperties(customeracquisitionDTO: CustomeracquisitionDTO) {
        this.id = customeracquisitionDTO.id;
        this.year = customeracquisitionDTO.year;
        this.month = customeracquisitionDTO.month;
        this.newcustomers = customeracquisitionDTO.newcustomers;
        this.repeatcustomers = customeracquisitionDTO.repeatcustomers;
        this.total = customeracquisitionDTO.total;
        this.newcustomersrevenue = customeracquisitionDTO.newcustomersrevenue;
        this.repeatcustomersrevenue = customeracquisitionDTO.repeatcustomersrevenue;
        this.totalrevenue = customeracquisitionDTO.totalrevenue;
        this.insertUser = customeracquisitionDTO.insertUser;
        this.insertDatetime = customeracquisitionDTO.insertDatetime;
        this.updatedUser = customeracquisitionDTO.updatedUser;
        this.updatedDatetime = customeracquisitionDTO.updatedDatetime;
    }
}
