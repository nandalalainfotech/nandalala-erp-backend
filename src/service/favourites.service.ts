import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FavouritesDTO } from "src/dto/favourites.dto";
import { Favourites001mb } from "src/entity/Favourites001mb.entity";
import { getConnection, Repository } from "typeorm";

@Injectable()
export class FavouritesService {
    constructor(@InjectRepository(Favourites001mb) private readonly favouritesRepository: Repository<Favourites001mb>) { }

    async create(favouriteDTOs: FavouritesDTO[]): Promise<Favourites001mb[]> {
        const favourites001mb = new Favourites001mb();
        if(favouriteDTOs.length > 0 ) {
            this.favouritesRepository.createQueryBuilder()
            .delete()
            .from(Favourites001mb)
            .where("loginUser = :loginUser", { loginUser: favouriteDTOs[0].loginUser })
            .execute();
        }
    
        for(let i=0; i<favouriteDTOs.length; i++){
            let favourites001mb = new Favourites001mb();
            favourites001mb.setProperties(favouriteDTOs[i]);
            this.favouritesRepository.save(favourites001mb);
        }
        return this.favouritesRepository.find();
    }

    async update(favouritesDTO: FavouritesDTO): Promise<Favourites001mb> {
        const favourites001mb = new Favourites001mb();
        favourites001mb.setProperties(favouritesDTO);
        await this.favouritesRepository.update({ favId: favourites001mb.favId }, favourites001mb);
        return favourites001mb;
    }

    async findAll(): Promise<Favourites001mb[]> {
        return this.favouritesRepository.find();
    }

    findOne(id: number): Promise<Favourites001mb> {
        return this.favouritesRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.favouritesRepository.delete(id);
    }
}
function login001mb(login001mb: any) {
    throw new Error("Function not implemented.");
}

