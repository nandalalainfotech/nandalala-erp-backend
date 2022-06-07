import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ItemshortagerepDTO } from 'src/dto/Itemshortagerep.dto';
import { Itemshortagerep001mb } from 'src/entity/Itemshortagerep001mb.entity';
import { ItemShortageService } from 'src/service/item-shortage.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/itemshortage')

export class ItemShortageController {
	constructor(private readonly itemShortageService:ItemShortageService ) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemShortageService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemShortageService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()itemshortagerepDTO:ItemshortagerepDTO): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.create(itemshortagerepDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()itemshortagerepDTO:ItemshortagerepDTO): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.update(itemshortagerepDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Itemshortagerep001mb[]> {
		return this.itemShortageService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.itemShortageService.remove(id);
	}
}

