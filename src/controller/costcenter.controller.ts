import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CostcenterDTO } from 'src/dto/Costcenter.dto';
import { Costcenter001mb } from 'src/entity/Costcenter001mb.entity';
import { CostCenterService } from 'src/service/costcenter.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/costcenter')

export class CostCenterController {

    constructor(private readonly costCenterService: CostCenterService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.costCenterService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.costCenterService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() costcenterDTO: CostcenterDTO): Promise<Costcenter001mb> {
        return this.costCenterService.create(costcenterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() costcenterDTO: CostcenterDTO): Promise<Costcenter001mb> {
        return this.costCenterService.update(costcenterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Costcenter001mb[]> {
        return this.costCenterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Costcenter001mb> {
        return this.costCenterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.costCenterService.remove(id);
    }
}