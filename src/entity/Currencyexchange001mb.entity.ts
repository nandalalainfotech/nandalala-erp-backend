import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CurrencyexchangeDTO } from "src/dto/currencyexchange.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("currencyexchange001mb")
export class Currencyexchange001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "cuexId" })
    cuexId: number;

    @Column("varchar", { name: "cuexName", length: 50 })
    cuexName: string;

    @Column("int", { name: "fromCurrency" })
    fromCurrency: number;

    @Column("int", { name: "toCurrency" })
    toCurrency: number;

    setProperties(currencyexchangeDTO: CurrencyexchangeDTO) {
        this.cuexId = currencyexchangeDTO.cuexId;
        this.cuexName = currencyexchangeDTO.cuexName;
        this.fromCurrency = currencyexchangeDTO.fromCurrency;
        this.toCurrency = currencyexchangeDTO.toCurrency;
        this.insertUser = currencyexchangeDTO.insertUser;
        this.insertDatetime = currencyexchangeDTO.insertDatetime;
        this.updatedUser = currencyexchangeDTO.updatedUser;
        this.updatedDatetime = currencyexchangeDTO.updatedDatetime;
    }

}
