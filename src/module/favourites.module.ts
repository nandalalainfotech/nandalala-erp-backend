import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FavouritesController } from "src/controller/favourites.controller";
import { Favourites001mb } from "src/entity/Favourites001mb.entity";
import { FavouritesService } from "src/service/favourites.service";

@Module({
    imports: [TypeOrmModule.forFeature([Favourites001mb])],
    providers: [FavouritesService],
    controllers: [ FavouritesController],
  })
  export class  FavouritesModule {}