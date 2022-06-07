import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ItempriceDTO } from "src/dto/Itemprice.dto";
import { Itemprice001mb } from "src/entity/Itemprice001mb.entity";
import { BuyingItemPriceService } from "src/service/buying-item-price.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/itemprice')
export class BuyingItemPriceController {
    constructor(private readonly buyingItemPriceService: BuyingItemPriceService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.buyingItemPriceService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.buyingItemPriceService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itempriceDTO: ItempriceDTO): Promise<Itemprice001mb> {
        return this.buyingItemPriceService.create(itempriceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itempriceDTO: ItempriceDTO): Promise<Itemprice001mb> {
        return this.buyingItemPriceService.update(itempriceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Itemprice001mb[]> {
        return this.buyingItemPriceService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Itemprice001mb> {
        return this.buyingItemPriceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.buyingItemPriceService.remove(id);
    }
}
