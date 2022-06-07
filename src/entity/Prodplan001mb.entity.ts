import { ProdplanDTO } from "src/dto/Prodplan.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prodplan001mb")
export class Prodplan001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prplanId" })
    prplanId: number;

    @Column("varchar", { name: "getItems", length: 40 })
    getItems: string;

    @Column("varchar", { name: "itemCode", length: 40 })
    itemCode: string;

    @Column("varchar", { name: "bomNo", length: 30 })
    bomNo: string;

    @Column("varchar", { name: "plannedQty", length: 40 })
    plannedQty: string;

    @Column("varchar", { name: "pendingQty", length: 30 })
    pendingQty: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    setProperties(prodPlanDTO: ProdplanDTO) {
        this.prplanId = prodPlanDTO.prplanId;
        this.getItems = prodPlanDTO.getItems;
        this.itemCode = prodPlanDTO.itemCode;
        this.bomNo = prodPlanDTO.bomNo;
        this.plannedQty = prodPlanDTO.plannedQty;
        this.pendingQty = prodPlanDTO.pendingQty;
        this.description = prodPlanDTO.description;
        this.insertUser = prodPlanDTO.insertUser;
        this.insertDatetime = prodPlanDTO.insertDatetime;
        this.updatedUser = prodPlanDTO.updatedUser;
        this.updatedDatetime = prodPlanDTO.updatedDatetime;
    }
}
