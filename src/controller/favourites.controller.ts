import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { FavouritesDTO } from "src/dto/favourites.dto";
import { Favourites001mb } from "src/entity/Favourites001mb.entity";
import { FavouritesService } from "src/service/favourites.service";

@Controller('/testandreportstudio/api/favourite')
export class FavouritesController {
    constructor(private readonly favouritesService: FavouritesService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() favouritesDTO: FavouritesDTO[]): Promise<Favourites001mb[]> {
        return this.favouritesService.create(favouritesDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() favouritesDTO: FavouritesDTO): Promise<Favourites001mb> {
        return this.favouritesService.update(favouritesDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Favourites001mb[]> {
        return this.favouritesService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Favourites001mb> {
        return this.favouritesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.favouritesService.remove(id);
    }
}
