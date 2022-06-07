import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { DelnotetrendsDTO } from "src/dto/Delnotetrends.dto";
import { Delnotetrends001mb } from "src/entity/Delnotetrends001mb.entity";
import { OrderTrendService } from "src/service/order-trend.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/ordertrend')

export class OrderTrendController {

    constructor (private readonly orderTrendService: OrderTrendService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.orderTrendService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.orderTrendService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() delnotetrendsDTO: DelnotetrendsDTO): Promise<Delnotetrends001mb> {
        return this.orderTrendService.create(delnotetrendsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() delnotetrendsDTO: DelnotetrendsDTO): Promise<Delnotetrends001mb> {
        return this.orderTrendService.update(delnotetrendsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Delnotetrends001mb[]> {
        return this.orderTrendService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Delnotetrends001mb> {
        return this.orderTrendService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.orderTrendService.remove(id);
    }
}