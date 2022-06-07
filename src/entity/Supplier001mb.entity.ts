import { SupplierDTO } from "src/dto/Supplier.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("supplier001mb")
export class Supplier001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "supId" })
    supId: number;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("varchar", { name: "addType", length: 50 })
    addType: string;

    @Column("varchar", { name: "supCity", length: 50 })
    supCity: string;

    @Column("varchar", { name: "supAddress", length: 100 })
    supAddress: string;

    @Column("int", { name: "supPhone" })
    supPhone: number;

    @Column("varchar", { name: "supCountry", length: 50 })
    supCountry: string;

    @Column("varchar", { name: "supState", length: 50 })
    supState: string;
    
    setProperties(supplierDTO: SupplierDTO) {
        this.supId = supplierDTO.supId;
        this.supName = supplierDTO.supName;
        this.addType = supplierDTO.addType;
        this.supCity = supplierDTO.supCity;
        this.supAddress = supplierDTO.supAddress;
        this.supPhone = supplierDTO.supPhone;
        this.supCountry = supplierDTO.supCountry;
        this.supState = supplierDTO.supState;
        this.insertUser = supplierDTO.insertUser;
        this.insertDatetime = supplierDTO.insertDatetime;
        this.updatedUser = supplierDTO.updatedUser;
        this.updatedDatetime = supplierDTO.updatedDatetime;
    }

}
