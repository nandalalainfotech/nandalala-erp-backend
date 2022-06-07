import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MenuDTO } from "src/dto/Menu.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("menu001mb")
export class Menu001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "menuid" })
    menuid: number;

    @Column("varchar", { name: "menuname", length: 25 })
    menuname: string;

    @Column("varchar", { name: "menulink", nullable: true, length: 75 })
    menulink: string | null;

    @Column("enum", {
        name: "menutype",
        nullable: true,
        enum: ["Main-Menu", "Child-Menu", "Page-Main-Menu", "Page-Child-Menu"],
    })
    menutype:
        | "Main-Menu"
        | "Child-Menu"
        | "Page-Main-Menu"
        | "Page-Child-Menu"
        | null;

    @Column("int", { name: "parentid", nullable: true, default: () => "'0'" })
    parentid: number | null;

    @Column("varchar", { name: "parentname", nullable: true, length: 25 })
    parentname: string | null;

    @Column("varchar", { name: "domain", length: 25 })
    domain: string;

    setProperties(menuDTO: MenuDTO) {
        this.menuid = menuDTO.menuid;
        this.menuname = menuDTO.menuname;
        this.menulink = menuDTO.menulink;
        this.parentid = menuDTO.parentid;
        this.parentname = menuDTO.parentname;
        this.domain = menuDTO.domain;
        this.insertUser = menuDTO.insertUser;
        this.insertDatetime = menuDTO.insertDatetime;
        this.updatedUser = menuDTO.updatedUser;
        this.updatedDatetime = menuDTO.updatedDatetime;
    }
}
