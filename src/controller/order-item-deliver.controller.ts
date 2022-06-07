import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrditemsdeliverDTO } from 'src/dto/Orditemsdeliver.dto';
import { Orditemsdeliver001mb } from 'src/entity/Orditemsdeliver001mb.entity';
import { OrderItemDeliverService } from 'src/service/order-item-deliver.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/orddeliver')
export class OrderItemDeliverController {
	constructor(private readonly orderItemDeliverService:OrderItemDeliverService ) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.orderItemDeliverService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.orderItemDeliverService.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()orditemsdeliverDTO:OrditemsdeliverDTO): Promise<Orditemsdeliver001mb> {
		return this.orderItemDeliverService.create(orditemsdeliverDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()orditemsdeliverDTO:OrditemsdeliverDTO): Promise<Orditemsdeliver001mb> {
		return this.orderItemDeliverService.update(orditemsdeliverDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Orditemsdeliver001mb[]> {
		return this.orderItemDeliverService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Orditemsdeliver001mb> {
		return this.orderItemDeliverService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.orderItemDeliverService.remove(id);
	}
}

