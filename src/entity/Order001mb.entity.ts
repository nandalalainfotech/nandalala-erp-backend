import { OrderDTO } from "src/dto/Order.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("Ordername", ["ordername"], { unique: true })
@Index("IDX_3568b8d6f99a332cda5e2e2fdb", ["ordername"], { unique: true })
@Entity("order001mb")
export class Order001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "Orderid" })
    orderid: number;

    @Column("varchar", {
        name: "Ordername",
        nullable: true,
        unique: true,
        length: 50,
    })
    ordername: string | null;

    setProperties(orderDTO: OrderDTO) {
        this.orderid = orderDTO.orderid;
        this.ordername = orderDTO.ordername;
        this.insertUser = orderDTO.insertUser;
        this.insertDatetime = orderDTO.insertDatetime;
        this.updatedUser = orderDTO.updatedUser;
        this.updatedDatetime = orderDTO.updatedDatetime;
    }

}
