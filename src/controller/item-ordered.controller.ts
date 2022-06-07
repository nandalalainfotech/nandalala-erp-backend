import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReqitemorderDTO } from 'src/dto/Reqitemorder.dto';
import { Reqitemorder001mb } from 'src/entity/Reqitemorder001mb.entity';
import { ItemOrderedService } from 'src/service/item-ordered.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/itemorder')
export class ItemOrderedController {
    constructor(private readonly itemOrderedService: ItemOrderedService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemOrderedService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemOrderedService.downloadExcel(request, response);
	}
   
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.create(reqitemorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.update(reqitemorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Reqitemorder001mb[]> {
        return this.itemOrderedService.findAll();
    } 

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemOrderedService.remove(id);
    }
}