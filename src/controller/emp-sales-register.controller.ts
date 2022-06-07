import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EmpleavebalanceDTO } from 'src/dto/Empleavebalance.dto';
import { EmpsalaryregisterDTO } from 'src/dto/Empsalaryregister.dto';
import { Empsalaryregister001mb } from 'src/entity/Empsalaryregister001mb.entity';
import { EmployeeSalesRegisterService } from 'src/service/emp-sales-register.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/empsales')
export class EmployeeSalesRegisterController {
    constructor(private readonly employeeSalesRegisterService: EmployeeSalesRegisterService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.employeeSalesRegisterService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.employeeSalesRegisterService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() empsalaryregisterDTO: EmpsalaryregisterDTO): Promise<Empsalaryregister001mb> {
        return this.employeeSalesRegisterService.create(empsalaryregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() empsalaryregisterDTO: EmpsalaryregisterDTO): Promise<Empsalaryregister001mb> {
        return this.employeeSalesRegisterService.update(empsalaryregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Empsalaryregister001mb[]> {
        return this.employeeSalesRegisterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Empsalaryregister001mb> {
        return this.employeeSalesRegisterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.employeeSalesRegisterService.remove(id);
    }
}
