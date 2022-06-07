import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ItemwisepurregisterDTO } from 'src/dto/Itemwisepurregister.dto';
import { Itemwisepurregister001mb } from 'src/entity/Itemwisepurregister001mb.entity';
import { ItemWisePurchaseService } from 'src/service/itemwisepurchase.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/itemwisepurchase')
export class ItemWisePurchaseController {
	constructor(private readonly  itemWisePurchaseService: ItemWisePurchaseService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemWisePurchaseService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemWisePurchaseService.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()itemwisepurregisterDTO: ItemwisepurregisterDTO): Promise<Itemwisepurregister001mb> {
		return this.itemWisePurchaseService.create(itemwisepurregisterDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()itemwisepurregisterDTO: ItemwisepurregisterDTO): Promise<Itemwisepurregister001mb> {
		return this.itemWisePurchaseService.update(itemwisepurregisterDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Itemwisepurregister001mb[]> {
		return this.itemWisePurchaseService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Itemwisepurregister001mb> {
		return this.itemWisePurchaseService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.itemWisePurchaseService.remove(id);
	}
}

