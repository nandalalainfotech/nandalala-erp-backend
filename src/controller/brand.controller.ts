import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BrandDTO } from 'src/dto/Brand.dto';
import { Brand001mb } from 'src/entity/Brand001mb.entity';
import { BrandService } from 'src/service/brand.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/brand')
export class BrandController {
	constructor(private readonly brandService: BrandService) { }

	@Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.brandService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.brandService.downloadExcel(request, response);
    }


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() brandDTO: BrandDTO): Promise<Brand001mb> {
		return this. brandService.create(brandDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() brandDTO: BrandDTO): Promise<Brand001mb> {
		return this. brandService.update(brandDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Brand001mb[]> {
		return this. brandService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Brand001mb> {
		return this. brandService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this. brandService.remove(id);
	}
}