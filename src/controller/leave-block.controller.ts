import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LvblocklistDTO } from 'src/dto/Lvblocklist.dto';
import { Lvblocklist001mb } from 'src/entity/Lvblocklist001mb.entity';
import { LeaveBlockService } from 'src/service/leave-block.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/leaveblock')
export class LeaveBlockController {
	constructor(private readonly leaveBlockService: LeaveBlockService ) { }

	
	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.leaveBlockService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.leaveBlockService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()lvblocklistDTO:LvblocklistDTO): Promise<Lvblocklist001mb> {
		return this.leaveBlockService.create(lvblocklistDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()lvblocklistDTO:LvblocklistDTO): Promise<Lvblocklist001mb> {
		return this.leaveBlockService.update(lvblocklistDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Lvblocklist001mb[]> {
		return this.leaveBlockService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Lvblocklist001mb> {
		return this.leaveBlockService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.leaveBlockService.remove(id);
	}
}

