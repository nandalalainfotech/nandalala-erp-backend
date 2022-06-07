import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RecruitofferDTO } from 'src/dto/Recruitoffer.dto';
import { Recruitoffer001mb } from 'src/entity/Recruitoffer001mb.entity';
import { OfferLetterService } from 'src/service/offer-letter.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/offerletter')
export class OfferLetterController {
    constructor(private readonly offerLetterService: OfferLetterService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.offerLetterService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.offerLetterService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() recruitofferDTO: RecruitofferDTO): Promise<Recruitoffer001mb> {
        return this.offerLetterService.create(recruitofferDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() recruitofferDTO: RecruitofferDTO): Promise<Recruitoffer001mb> {
        return this.offerLetterService.update(recruitofferDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Recruitoffer001mb[]> {
        return this.offerLetterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Recruitoffer001mb> {
        return this.offerLetterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.offerLetterService.remove(id);
    }
}
