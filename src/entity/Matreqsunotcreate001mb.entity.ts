import { MatreqsunotcreateDTO } from "src/dto/Matreqsunotcreate.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("matreqsunotcreate001mb")
export class Matreqsunotcreate001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "mrsId" })
    mrsId: number;

    @Column("varchar", { name: "mrSeries", length: 50 })
    mrSeries: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("varchar", { name: "description", nullable: true, length: 150 })
    description: string | null;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    setProperties(matreqsunotcreateDTO: MatreqsunotcreateDTO) {
        this.mrsId = matreqsunotcreateDTO.mrsId;
        this.mrSeries = matreqsunotcreateDTO.mrSeries;
        this.date = matreqsunotcreateDTO.date;
        this.itemCode = matreqsunotcreateDTO.itemCode;
        this.quantity = matreqsunotcreateDTO.quantity;
        this.description = matreqsunotcreateDTO.description;
        this.company = matreqsunotcreateDTO.company;
        this.insertUser = matreqsunotcreateDTO.insertUser;
        this.insertDatetime = matreqsunotcreateDTO.insertDatetime;
        this.updatedUser = matreqsunotcreateDTO.updatedUser;
        this.updatedDatetime = matreqsunotcreateDTO.updatedDatetime;
    }

}
