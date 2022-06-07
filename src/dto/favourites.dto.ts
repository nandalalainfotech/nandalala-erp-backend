import { Favourites001mb } from "src/entity/Favourites001mb.entity";
import { BaseDTO } from "./Base.dto";

export class FavouritesDTO extends BaseDTO {
	favId: number;
	property: string | null;
	link: string | null;
	loginUser: string | null;
	status: string | null;
	insertUser: string | null;
	insertDatetime: Date | null;
	updatedUser: string | null;
	updatedDatetime: Date | null;

	setProperties(favourites001mb: Favourites001mb) {
		this.favId = favourites001mb.favId;
		this.property = favourites001mb.property;
		this.link = favourites001mb.link;
		this.loginUser = favourites001mb.loginUser;
		this.status = favourites001mb.status;
		this.insertUser = favourites001mb.insertUser;
		this.insertDatetime = favourites001mb.insertDatetime;
		this.updatedUser = favourites001mb.updatedUser;
		this.updatedDatetime = favourites001mb.updatedDatetime;
	}

}
