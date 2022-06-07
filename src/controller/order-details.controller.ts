import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { OrderDTO } from "src/dto/Order.dto";
import { Order001mb } from "src/entity/Order001mb.entity";
import { OrderDetailsService } from "src/service/order-details.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/orderdetails')

export class OrderDetailsController {

    constructor (private readonly orderDetailsService: OrderDetailsService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.orderDetailsService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.orderDetailsService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() orderDTO: OrderDTO): Promise<Order001mb> {
        return this.orderDetailsService.create(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() orderDTO: OrderDTO): Promise<Order001mb> {
        return this.orderDetailsService.update(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Order001mb[]> {
        return this.orderDetailsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Order001mb> {
        return this.orderDetailsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.orderDetailsService.remove(id);
    }
}