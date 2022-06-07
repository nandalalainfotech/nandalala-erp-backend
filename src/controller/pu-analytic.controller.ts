import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PuranalyticsDTO } from 'src/dto/Puranalytics.dto';
import { Puranalytics001mb } from 'src/entity/Puranalytics001mb.entity';
import { PuAnalyticService } from 'src/service/pu-analytic.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/puanalytics')

export class PuAnalyticController {

    constructor(private readonly puAnalyticService: PuAnalyticService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.puAnalyticService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.puAnalyticService.downloadExcel(request, response);
	}


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() puranalyticsDTO: PuranalyticsDTO): Promise<Puranalytics001mb> {
        return this.puAnalyticService.create(puranalyticsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() puranalyticsDTO: PuranalyticsDTO): Promise<Puranalytics001mb> {
         return this.puAnalyticService.update(puranalyticsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Puranalytics001mb[]> {
        return this.puAnalyticService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Puranalytics001mb> {
        return this.puAnalyticService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.puAnalyticService.remove(id);
    }
}