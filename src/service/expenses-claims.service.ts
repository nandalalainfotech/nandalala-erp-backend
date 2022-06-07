import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpensesclmDTO } from "src/dto/Expensesclm.dto";
import { Expensesclm001mb } from "src/entity/Expensesclm001mb.entity";
import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Console } from 'console';
var html = fs.readFileSync("expensesclm.html", "utf8");

@Injectable()
export class ExpensesClaimsService {
    constructor(@InjectRepository(Expensesclm001mb) private readonly expensesclmRepository: Repository<Expensesclm001mb>,) { }

    async create(expensesclmDTO: ExpensesclmDTO): Promise<Expensesclm001mb> {
        const expensesclm001mb = new Expensesclm001mb();
        expensesclm001mb.setProperties(expensesclmDTO);
        return this.expensesclmRepository.save(expensesclm001mb);
    }

    async update(expensesclmDTO: ExpensesclmDTO): Promise<Expensesclm001mb> {
        const expensesclm001mb = new Expensesclm001mb();
        expensesclm001mb.setProperties(expensesclmDTO);
        await this.expensesclmRepository.update({ expclmId: expensesclm001mb.expclmId }, expensesclm001mb);
        return expensesclm001mb;
    }

    async findAll(): Promise<Expensesclm001mb[]> {
        return this.expensesclmRepository.find();
    }

    findOne(id: string): Promise<Expensesclm001mb> {
        return this.expensesclmRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.expensesclmRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let expensesclm: any[] = await this.expensesclmRepository.find();


        var document = {
            html: html,
            data: {
                Expensesclm: expensesclm,
            },
            path: path.join(`./pdf/expensesclm.pdf`),
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
        if (expensesclm.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "expensesclm.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let expensesclm = await this.expensesclmRepository.find();




        if (expensesclm.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('expensesclm');
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
            { key: 'E', width: 15.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:E1');
            worksheet.getCell('A1:E1').value = "NANDALALA ERP";
            worksheet.getCell('A1:E1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:E1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:E1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:E2');
            worksheet.getCell('A2:E2').value = "Expense Claim List";
            worksheet.getCell('A2:E2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:E2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Status";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Total Claim Amount";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Expense Code";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Expense Type";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
       

            for (let i = 0; i < expensesclm.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = expensesclm[i].expclmId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = expensesclm[i].status;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = expensesclm[i].totalclmAmt;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = expensesclm[i].expCode;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
                };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = expensesclm[i].expType;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

              

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}