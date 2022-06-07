import { StksettingsDTO } from "src/dto/Stksettings.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stksettings001mb")
export class Stksettings001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "setId" })
    setId: number;

    @Column("varchar", { name: "itemnameBy", length: 30 })
    itemnameBy: string;

    @Column("varchar", { name: "defaultValue" })
    defaultValue: string;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    @Column("decimal", {
        name: "allowancePercent",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    allowancePercent: string | null;

    @Column("varchar", { name: "defaultUOM", length: 20 })
    defaultUom: string;

    @Column("varchar", { name: "warehouseName", length: 50 })
    warehouseName: string;

    @Column("char", { name: "showbarcodeField" })
    showbarcodeField: boolean;

    @Column("char", { name: "autoinsertPricelist" })
    autoinsertPricelist: boolean;

    @Column("char", { name: "autosetSerialno" })
    autosetSerialno: boolean;

    @Column("char", { name: "allownegativeStock" })
    allownegativeStock: boolean;

    setProperties(stksettingsDTO: StksettingsDTO) {
        this.setId = stksettingsDTO.setId;
        this.itemnameBy = stksettingsDTO.itemnameBy;
        this.defaultValue = stksettingsDTO.defaultValue;
        this.itemGroup = stksettingsDTO.itemGroup;
        this.allowancePercent = stksettingsDTO.allowancePercent;
        this.defaultUom = stksettingsDTO.defaultUom;
        this.warehouseName = stksettingsDTO.warehouseName;
        this.showbarcodeField = stksettingsDTO.showbarcodeField;
        this.autoinsertPricelist = stksettingsDTO.autoinsertPricelist;
        this.autosetSerialno = stksettingsDTO.autosetSerialno;
        this.allownegativeStock = stksettingsDTO.allownegativeStock;
        this.insertUser = stksettingsDTO.insertUser;
        this.insertDatetime = stksettingsDTO.insertDatetime;
        this.updatedUser = stksettingsDTO.updatedUser;
        this.updatedDatetime = stksettingsDTO.updatedDatetime;
    }
}
