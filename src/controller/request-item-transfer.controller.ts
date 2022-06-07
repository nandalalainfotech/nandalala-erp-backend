import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReqitemtransferDTO } from 'src/dto/Reqitemtransfer.dto';
import { Reqitemtransfer001mb } from 'src/entity/Reqitemtransfer001mb.entity';
import { RequestItemTransferService } from 'src/service/request-item-transfer.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/reqtransfer')
export class  RequestItemTransferController {
	constructor(private readonly requestItemTransferService:RequestItemTransferService ) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.requestItemTransferService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.requestItemTransferService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() reqitemtransferDTO:ReqitemtransferDTO): Promise<Reqitemtransfer001mb> {
		return this.requestItemTransferService.create(reqitemtransferDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() reqitemtransferDTO:ReqitemtransferDTO): Promise<Reqitemtransfer001mb> {
		return this.requestItemTransferService.update(reqitemtransferDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Reqitemtransfer001mb[]> {
		return this.requestItemTransferService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Reqitemtransfer001mb> {
		return this.requestItemTransferService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.requestItemTransferService.remove(id);
	}
}

