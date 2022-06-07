import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpworkonholidayDTO } from 'src/dto/Empworkonholiday.dto';
import { Empworkonholiday001mb } from 'src/entity/Empworkonholiday001mb.entity';;
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
var html = fs.readFileSync("employeeHolidayWork.html", "utf8");


@Injectable()
export class EmployeeHolidayWorkService {
    constructor(@InjectRepository(Empworkonholiday001mb) private readonly employeeHolidayWorkRepository: Repository<Empworkonholiday001mb>) { }

    async create(empworkonholidayDTO: EmpworkonholidayDTO): Promise<Empworkonholiday001mb> {
        const empworkonholiday001mb = new Empworkonholiday001mb();
        empworkonholiday001mb.setProperties(empworkonholidayDTO);
        return this.employeeHolidayWorkRepository.save(empworkonholiday001mb);
    }

    async update(empworkonholidayDTO: EmpworkonholidayDTO): Promise<Empworkonholiday001mb> {
        const empworkonholiday001mb = new Empworkonholiday001mb();
        empworkonholiday001mb.setProperties(empworkonholidayDTO);
        await this.employeeHolidayWorkRepository.update({ empwhId: empworkonholiday001mb.empwhId }, empworkonholiday001mb);
        return empworkonholiday001mb;
    }

    async findAll(): Promise<Empworkonholiday001mb[]> {
        return this.employeeHolidayWorkRepository.find();
    }

    findOne(id: number): Promise<Empworkonholiday001mb> {
        return this.employeeHolidayWorkRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.employeeHolidayWorkRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let employeeHolidayWork: any[] = await this.employeeHolidayWorkRepository.find();


        var document = {
            html: html,
            data: {
                EmployeeHolidayWork: employeeHolidayWork,
            },
            path: path.join(`./pdf/employeeHolidayWork.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "potrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (employeeHolidayWork.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "employeeHolidayWork.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let employeeHolidayWork = await this.employeeHolidayWorkRepository.find();




        if (employeeHolidayWork.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('employeeHolidayWork');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 }, { key: 'D', width: 20.0 },
            { key: 'E', width: 25.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, { key: 'H', width: 20.0 },
            { key: 'I', width: 15.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:I1');
            worksheet.getCell('A1:I1').value = "NANDALALA ERP";
            worksheet.getCell('A1:I1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:I1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:I1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:I2');
            worksheet.getCell('A2:I2').value = "Employee Holiday List";
            worksheet.getCell('A2:I2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:I2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "From Date";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "To Date";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Employee Number";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Employee Name";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Holiday List";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Attendance Status";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Holiday Date";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "Day";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
       
            for (let i = 0; i < employeeHolidayWork.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = employeeHolidayWork[i].empwhId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = employeeHolidayWork[i].fromDate;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = employeeHolidayWork[i].toDate;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = employeeHolidayWork[i].empNumber;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
                };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = employeeHolidayWork[i].empName;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = employeeHolidayWork[i].holidayList;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = employeeHolidayWork[i].empStatus;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = employeeHolidayWork[i].whDate;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = employeeHolidayWork[i].holiday;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
