import { FavouritesDTO } from "src/dto/favourites.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("favourites001mb", { schema: "erpnextgeneration4" })
export class Favourites001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "fav_id" })
  favId: number;

  @Column("varchar", { name: "property", nullable: true, length: 250 })
  property: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 250 })
  link: string | null;

  @Column("varchar", { name: "login_user", nullable: true, length: 50 })
  loginUser: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 50 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 50 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(favouritesDTO: FavouritesDTO) {
		this.favId = favouritesDTO.favId;
		this.property = favouritesDTO.property;
		this.link = favouritesDTO.link;
		this.loginUser = favouritesDTO.loginUser;
		this.status = favouritesDTO.status;
		this.insertUser = favouritesDTO.insertUser;
		this.insertDatetime = favouritesDTO.insertDatetime;
		this.updatedUser = favouritesDTO.updatedUser;
		this.updatedDatetime = favouritesDTO.updatedDatetime;
	}
}
