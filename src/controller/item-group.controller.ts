import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ItemgroupDTO } from "src/dto/Itemgroup.dto";
import { Itemgroup001mb } from "src/entity/Itemgroup001mb.entity";
import { ItemGroupService } from "src/service/item-group.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/itemgroup')
export class ItemGroupController {
    constructor(private readonly itemGroupService: ItemGroupService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemGroupService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemGroupService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itemgroupDTO: ItemgroupDTO): Promise<Itemgroup001mb> {
        return this.itemGroupService.create(itemgroupDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itemgroupDTO: ItemgroupDTO): Promise<Itemgroup001mb> {
        return this.itemGroupService.update(itemgroupDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Itemgroup001mb[]> {
        return this.itemGroupService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Itemgroup001mb> {
        return this.itemGroupService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.itemGroupService.remove(id);
    }
}
