import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestitembuyDTO } from 'src/dto/Requestitembuy.dto';
import { Requestitembuy001mb } from 'src/entity/Requestitembuy001mb.entity';
import { ItemRequestService } from 'src/service/item-request.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/itemrequest')
export class ItemRequestController {
    constructor(private readonly itemRequestService: ItemRequestService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemRequestService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemRequestService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() requestitembuyDTO: RequestitembuyDTO): Promise<Requestitembuy001mb> {
        return this.itemRequestService.create(requestitembuyDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() requestitembuyDTO: RequestitembuyDTO): Promise<Requestitembuy001mb> {
        return this.itemRequestService.update(requestitembuyDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Requestitembuy001mb[]> {
        return this.itemRequestService.findAll();
    } 

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Requestitembuy001mb> {
        return this.itemRequestService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemRequestService.remove(id);
    }
}