import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EmploybirthdayDTO } from 'src/dto/Employbirthday.dto';
import { Employbirthday001mb } from 'src/entity/Employbirthday001mb.entity';
import { EmployeeBirthdayService } from 'src/service/emp-birthday.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/empbirthday')
export class EmployeeBirthdayController {
    constructor(private readonly employeeBirthService: EmployeeBirthdayService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.employeeBirthService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.employeeBirthService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() employbirthdayDTO: EmploybirthdayDTO): Promise<Employbirthday001mb> {
        return this.employeeBirthService.create(employbirthdayDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() employbirthdayDTO: EmploybirthdayDTO): Promise<Employbirthday001mb> {
        return this.employeeBirthService.update(employbirthdayDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Employbirthday001mb[]> {
        return this.employeeBirthService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Employbirthday001mb> {
        return this.employeeBirthService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.employeeBirthService.remove(id);
    }
}
