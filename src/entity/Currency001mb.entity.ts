import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CurrencyDTO } from "src/dto/currency.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("currency001mb")
export class Currency001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "currId" })
    currId: number;

    @Column("varchar", { name: "currencyName", length: 30 })
    currencyName: string;

    @Column("varchar", { name: "currencyAbbr", nullable: true, length: 60 })
    currencyAbbr: string | null;

    @Column("varchar", { name: "fractionName", nullable: true, length: 40 })
    fractionName: string | null;

    setProperties(currencyDTO: CurrencyDTO) {
        this.currId = currencyDTO.currId;
        this.currencyName = currencyDTO.currencyName;
        this.currencyAbbr = currencyDTO.currencyAbbr;
        this.fractionName = currencyDTO.fractionName;
        this.insertUser = currencyDTO.insertUser;
        this.insertDatetime = currencyDTO.insertDatetime;
        this.updatedUser = currencyDTO.updatedUser;
        this.updatedDatetime = currencyDTO.updatedDatetime;
    }
}
