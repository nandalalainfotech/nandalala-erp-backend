import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MonthlyattendsheetDTO } from 'src/dto/Monthlyattendsheet.dto';
import { Monthlyattendsheet001mb } from 'src/entity/Monthlyattendsheet001mb.entity';
import { Repository } from 'typeorm';
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Console } from 'console';
var html = fs.readFileSync("monthlyAttendSheet.html", "utf8");

@Injectable()
export class MonthlyAttendSheetService {
    constructor(@InjectRepository(Monthlyattendsheet001mb) private readonly monthlyAttendSheetRepository: Repository<Monthlyattendsheet001mb>) { }

    async create(monthlyattendsheetDTO: MonthlyattendsheetDTO): Promise<Monthlyattendsheet001mb> {
        const monthlyattendsheet001mb = new Monthlyattendsheet001mb();
        monthlyattendsheet001mb.setProperties(monthlyattendsheetDTO);
        return this.monthlyAttendSheetRepository.save(monthlyattendsheet001mb);
    }

    async update(monthlyattendsheetDTO: MonthlyattendsheetDTO): Promise<Monthlyattendsheet001mb> {
        const monthlyattendsheet001mb = new Monthlyattendsheet001mb();
        monthlyattendsheet001mb.setProperties(monthlyattendsheetDTO);
        await this.monthlyAttendSheetRepository.update({ atsId: monthlyattendsheet001mb.atsId }, monthlyattendsheet001mb);
        return monthlyattendsheet001mb;
    }

    async findAll(): Promise<Monthlyattendsheet001mb[]> {
        return this.monthlyAttendSheetRepository.find();
    }

    findOne(id: number): Promise<Monthlyattendsheet001mb> {
        return this.monthlyAttendSheetRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.monthlyAttendSheetRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let monthlyAttendSheet: any[] = await this.monthlyAttendSheetRepository.find();


        var document = {
            html: html,
            data: {
                MonthlyAttendSheet: monthlyAttendSheet,
            },
            path: path.join(`./pdf/monthlyAttendSheet.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "landscape",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (monthlyAttendSheet.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "monthlyAttendSheet.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let monthlyAttendSheet = await this.monthlyAttendSheetRepository.find();
       

        if (monthlyAttendSheet.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('monthlyAttendSheet');
            worksheet.getRow(1).height = 30;
            worksheet.getRow(2).height = 30;
            worksheet.getRow(3).height = 25;
            worksheet.getRow(4).height = 20;
            worksheet.getRow(5).height = 20;
            worksheet.getRow(6).height = 20;
            worksheet.getRow(7).height = 20;
            worksheet.getRow(8).height = 20;
            worksheet.getRow(9).height = 20;
            worksheet.getRow(10).height = 20;
            worksheet.getRow(11).height = 20;
            worksheet.getRow(12).height = 20;
            worksheet.getRow(13).height = 20;
            worksheet.getRow(14).height = 20;
            worksheet.getRow(15).height = 20;
            worksheet.getRow(16).height = 20;
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, 
			{ key: 'H', width: 20.0 }, { key: 'I', width: 20.0 }, { key: 'J', width: 20.0 }, { key: 'K', width: 20.0 },
            { key: 'L', width: 20.0 }, { key: 'M', width: 20.0 },{ key: 'N', width: 20.0 }, { key: 'O', width: 20.0 }, 
			{ key: 'P', width: 20.0 }, { key: 'Q', width: 20.0 },{ key: 'R', width: 20.0 },{ key: 'S', width: 20.0 },
            { key: 'T', width: 20.0 },{ key: 'U', width: 15.0 }, { key: 'V', width: 20.0 }, { key: 'W', width: 20.0 },
            { key: 'X', width: 20.0 }, { key: 'Y', width: 20.0 }, { key: 'Z', width: 20.0 }, { key: 'AA', width: 20.0 }, 
			{ key: 'AB', width: 20.0 }, { key: 'AC', width: 20.0 }, { key: 'AD', width: 20.0 }, { key: 'AE', width: 20.0 },
            { key: 'AF', width: 20.0 }, { key: 'AG', width: 20.0 },{ key: 'AH', width: 20.0 }, { key: 'AI', width: 20.0 }, 
			{ key: 'AJ', width: 20.0 }, { key: 'AK', width: 20.0 },{ key: 'AL', width: 20.0 },{ key: 'AM', width: 20.0 },
            { key: 'AN', width: 20.0 }, { key: 'AO', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:AO1');
            worksheet.getCell('A1:AO1').value = "NANDALALA ERP";
            worksheet.getCell('A1:AO1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:AO1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:AO1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:AO2');
            worksheet.getCell('A2:AO2').value = "Employee Monthly Attendance Record";
            worksheet.getCell('A2:AO2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:AO2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Year";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Employee Number";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Employee Name";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Department Name";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Branch";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Company";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Designation";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "One";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "Two";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('K3');
            worksheet.getCell('K3').value = "Three";
            worksheet.getCell('K3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('K3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('L3');
            worksheet.getCell('L3').value = "Four";
            worksheet.getCell('L3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('L3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('M3');
            worksheet.getCell('M3').value = "Five";
            worksheet.getCell('M3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('M3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('N3');
            worksheet.getCell('N3').value = "Six";
            worksheet.getCell('N3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('N3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('O3');
            worksheet.getCell('O3').value = "Seven";
            worksheet.getCell('O3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('O3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('P3');
            worksheet.getCell('P3').value = "Eight";
            worksheet.getCell('P3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('P3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('Q3');
            worksheet.getCell('Q3').value = "Nine";
            worksheet.getCell('Q3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Q3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('R3');
            worksheet.getCell('R3').value = "Ten";
            worksheet.getCell('R3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('R3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('S3');
            worksheet.getCell('S3').value = "Eleven";
            worksheet.getCell('S3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('S3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('T3');
            worksheet.getCell('T3').value = "Twelve";
            worksheet.getCell('T3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('T3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('U3');
            worksheet.getCell('U3').value = "Thirteen";
            worksheet.getCell('U3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('U3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('V3');
            worksheet.getCell('V3').value = "Fourteen";
            worksheet.getCell('V3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('V3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('W3');
            worksheet.getCell('W3').value = "Fifteen";
            worksheet.getCell('W3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('W3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('X3');
            worksheet.getCell('X3').value = "Sixteen";
            worksheet.getCell('X3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('X3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('Y3');
            worksheet.getCell('Y3').value = "Seventeen";
            worksheet.getCell('Y3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Y3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('Z3');
            worksheet.getCell('Z3').value = "Eighteen";
            worksheet.getCell('Z3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Z3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AA3');
            worksheet.getCell('AA3').value = "Nineteen";
            worksheet.getCell('AA3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AA3').alignment = { vertical: 'middle', horizontal: 'center' };

           
            worksheet.mergeCells('AB3');
            worksheet.getCell('AB3').value = "Twenty";
            worksheet.getCell('AB3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AB3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AC3');
            worksheet.getCell('AC3').value = "Twenty One";
            worksheet.getCell('AC3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AC3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AD3');
            worksheet.getCell('AD3').value = "Twenty Two";
            worksheet.getCell('AD3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AD3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AE3');
            worksheet.getCell('AE3').value = "Twenty Three";
            worksheet.getCell('AE3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AE3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AF3');
            worksheet.getCell('AF3').value = "Twenty Four";
            worksheet.getCell('AF3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AF3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('AG3');
            worksheet.getCell('AG3').value = "Twenty Five";
            worksheet.getCell('AG3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AG3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('AH3');
            worksheet.getCell('AH3').value = "Twenty Six";
            worksheet.getCell('AH3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AH3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('AI3');
            worksheet.getCell('AI3').value = "Twenty Seven";
            worksheet.getCell('AI3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AI3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('AJ3');
            worksheet.getCell('AJ3').value = "Twenty Eight";
            worksheet.getCell('AJ3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AJ3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('AK3');
            worksheet.getCell('AK3').value = "Twenty Nine";
            worksheet.getCell('AK3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AK3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('AL3');
            worksheet.getCell('AL3').value = "Thirty";
            worksheet.getCell('AL3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AL3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AM3');
            worksheet.getCell('AM3').value = "Total Present";
            worksheet.getCell('AM3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AM3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AN3');
            worksheet.getCell('AN3').value = "Total Absent";
            worksheet.getCell('AN3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AN3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('AO3');
            worksheet.getCell('AO3').value = "Month";
            worksheet.getCell('AO3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('AO3').alignment = { vertical: 'middle', horizontal: 'center' };


            for (let i = 0; i < monthlyAttendSheet.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = monthlyAttendSheet[i].atsId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = monthlyAttendSheet[i].attYear;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = monthlyAttendSheet[i].empNumber;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = monthlyAttendSheet[i].empName;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = monthlyAttendSheet[i].deptName;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = monthlyAttendSheet[i].branch;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = monthlyAttendSheet[i].empCompany;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = monthlyAttendSheet[i].empDesign;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = monthlyAttendSheet[i].one1;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = monthlyAttendSheet[i].two2;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = monthlyAttendSheet[i].three3;
                worksheet.getCell('K' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('K' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = monthlyAttendSheet[i].four4;
                worksheet.getCell('L' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('L' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = monthlyAttendSheet[i].five5;
                worksheet.getCell('M' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('M' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = monthlyAttendSheet[i].six6;
                worksheet.getCell('N' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('N' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = monthlyAttendSheet[i].seven7;
                worksheet.getCell('O' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('O' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = monthlyAttendSheet[i].eight8;
                worksheet.getCell('P' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('P' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = monthlyAttendSheet[i].nine9;
                worksheet.getCell('Q' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Q' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('R' + temp);
                worksheet.getCell('R' + temp).value = monthlyAttendSheet[i].ten10;
                worksheet.getCell('R' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('R' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('S' + temp);
                worksheet.getCell('S' + temp).value = monthlyAttendSheet[i].eleven11;
                worksheet.getCell('S' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('S' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('T' + temp);
                worksheet.getCell('T' + temp).value = monthlyAttendSheet[i].twelve12;
                worksheet.getCell('T' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('T' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('U' + temp);
                worksheet.getCell('U' + temp).value = monthlyAttendSheet[i].thirteen13;
                worksheet.getCell('U' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('U' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('V' + temp);
                worksheet.getCell('V' + temp).value = monthlyAttendSheet[i].fourteen14;
                worksheet.getCell('V' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('V' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('W' + temp);
                worksheet.getCell('W' + temp).value = monthlyAttendSheet[i].fifteen15;
                worksheet.getCell('W' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('W' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('X' + temp);
                worksheet.getCell('X' + temp).value = monthlyAttendSheet[i].sixteen16;
                worksheet.getCell('X' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('X' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Y' + temp);
                worksheet.getCell('Y' + temp).value = monthlyAttendSheet[i].seventeen17;
                worksheet.getCell('Y' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Y' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Z' + temp);
                worksheet.getCell('Z' + temp).value = monthlyAttendSheet[i].eighteen18;
                worksheet.getCell('Z' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Z' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AA' + temp);
                worksheet.getCell('AA' + temp).value = monthlyAttendSheet[i].nineteen19;
                worksheet.getCell('AA' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AA' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AB' + temp);
                worksheet.getCell('AB' + temp).value = monthlyAttendSheet[i].twenty20;
                worksheet.getCell('AB' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AB' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AC' + temp);
                worksheet.getCell('AC' + temp).value = monthlyAttendSheet[i].twentyone21;
                worksheet.getCell('AC' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AC' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AD' + temp);
                worksheet.getCell('AD' + temp).value = monthlyAttendSheet[i].twentytwo22;
                worksheet.getCell('AD' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AE' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AE' + temp);
                worksheet.getCell('AE' + temp).value = monthlyAttendSheet[i].twentythree23;
                worksheet.getCell('AE' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AE' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AF' + temp);
                worksheet.getCell('AF' + temp).value = monthlyAttendSheet[i].twentyfour24;
                worksheet.getCell('AF' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AF' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AG' + temp);
                worksheet.getCell('AG' + temp).value = monthlyAttendSheet[i].twentyfive25;
                worksheet.getCell('AG' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AG' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AH' + temp);
                worksheet.getCell('AH' + temp).value = monthlyAttendSheet[i].twentysix26;
                worksheet.getCell('AH' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AH' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AI' + temp);
                worksheet.getCell('AI' + temp).value = monthlyAttendSheet[i].twentyseven27;
                worksheet.getCell('AI' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AI' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AJ' + temp);
                worksheet.getCell('AJ' + temp).value = monthlyAttendSheet[i].twentyeight28;
                worksheet.getCell('AJ' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AJ' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AK' + temp);
                worksheet.getCell('AK' + temp).value = monthlyAttendSheet[i].twentynine29;
                worksheet.getCell('AK' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AK' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AL' + temp);
                worksheet.getCell('AL' + temp).value = monthlyAttendSheet[i].thirty30;
                worksheet.getCell('AL' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AL' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('AM' + temp);
                worksheet.getCell('AM' + temp).value = monthlyAttendSheet[i].totalPresent;
                worksheet.getCell('AM' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AM' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AN' + temp);
                worksheet.getCell('AN' + temp).value = monthlyAttendSheet[i].totalAbsent;
                worksheet.getCell('AN' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AN' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('AO' + temp);
                worksheet.getCell('AO' + temp).value = monthlyAttendSheet[i].months;
                worksheet.getCell('AO' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('AO' + temp).alignment = { vertical: 'middle', horizontal: 'center' };



            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}


