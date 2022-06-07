import { LvblocklistDTO } from "src/dto/Lvblocklist.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("sNo", ["sNo"], {})
@Entity("lvblocklist001mb")
export class Lvblocklist001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "lvblockId" })
    lvblockId: number;

    @Column("varchar", { name: "blockName", length: 30 })
    blockName: string;

    @Column("int", { name: "sNo", nullable: true })
    sNo: number | null;

    @Column("varchar", { name: "company", nullable: true, length: 255 })
    company: string | null;

    setProperties(lvblocklistDTO: LvblocklistDTO) {
        this.lvblockId = lvblocklistDTO.lvblockId;
        this.blockName = lvblocklistDTO.blockName;
        this.sNo = lvblocklistDTO.sNo;
        this.company = lvblocklistDTO.company;
        this.insertUser = lvblocklistDTO.insertUser;
        this.insertDatetime = lvblocklistDTO.insertDatetime;
        this.updatedUser = lvblocklistDTO.updatedUser;
        this.updatedDatetime = lvblocklistDTO.updatedDatetime;
    }
}
