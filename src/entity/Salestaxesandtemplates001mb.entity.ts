import { SalestaxesandtemplatesDTO } from "src/dto/Salestaxesandtemplates.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("salestaxesandtemplates001mb")
export class Salestaxesandtemplates001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "title", length: 45 })
    title: string;

    @Column("varchar", { name: "company", length: 45 })
    company: string;

    @Column("varchar", { name: "type", length: 45 })
    type: string;

    @Column("varchar", { name: "accounthead", length: 45 })
    accounthead: string;

    @Column("int", { name: "rate", unsigned: true })
    rate: number;

    @Column("int", { name: "amount", unsigned: true })
    amount: number;

    @Column("int", { name: "total", unsigned: true })
    total: number;

    setProperties(salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO) {
        this.id = salestaxesandtemplatesDTO.id;
        this.title = salestaxesandtemplatesDTO.title;
        this.company = salestaxesandtemplatesDTO.company;
        this.type = salestaxesandtemplatesDTO.type;
        this.accounthead = salestaxesandtemplatesDTO.accounthead;
        this.rate = salestaxesandtemplatesDTO.rate;
        this.amount = salestaxesandtemplatesDTO.amount;
        this.total = salestaxesandtemplatesDTO.total;
        this.insertUser = salestaxesandtemplatesDTO.insertUser;
        this.insertDatetime = salestaxesandtemplatesDTO.insertDatetime;
        this.updatedUser = salestaxesandtemplatesDTO.updatedUser;
        this.updatedDatetime = salestaxesandtemplatesDTO.updatedDatetime;
    }
}
