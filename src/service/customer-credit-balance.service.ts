import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomercreditbalanceDTO } from "src/dto/Customercreditbalance.dto";
import { Customercreditbalance001mb } from "src/entity/Customercreditbalance001mb.entity";
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
var html = fs.readFileSync("balance.html", "utf8");

@Injectable()
export class Balanceservice {

    constructor(@InjectRepository(Customercreditbalance001mb) private readonly balanceRepository: Repository<Customercreditbalance001mb>) { }

    async create(customercreditbalanceDTO: CustomercreditbalanceDTO): Promise<Customercreditbalance001mb> {
        const customercreditbalance001mb = new Customercreditbalance001mb();
        customercreditbalance001mb.setProperties(customercreditbalanceDTO);
        return this.balanceRepository.save(customercreditbalance001mb);
    }

    async update(customercreditbalanceDTO: CustomercreditbalanceDTO): Promise<Customercreditbalance001mb> {
        const customercreditbalance001mb = new Customercreditbalance001mb();
        customercreditbalance001mb.setProperties(customercreditbalanceDTO);
        await this.balanceRepository.update({ ccid: customercreditbalance001mb.ccid }, customercreditbalance001mb);
        return this.balanceRepository.save(customercreditbalance001mb);
    }

    async findAll(): Promise<Customercreditbalance001mb[]> {
        return this.balanceRepository.find();
    }

    findOne(id: string): Promise<Customercreditbalance001mb> {
        return this.balanceRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.balanceRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let balance: any[] = await this.balanceRepository.find();


        var document = {
            html: html,
            data: {
                Balance: balance,
            },
            path: path.join(`./pdf/balance.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (balance.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "balance.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let balance = await this.balanceRepository.find();
       

        if (balance.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('customerdetail');
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
            { key: 'D', width: 30.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 } ];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:F1');
            worksheet.getCell('A1:F1').value = "NANDALALA ERP";
            worksheet.getCell('A1:F1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:F1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:F1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:F2');
            worksheet.getCell('A2:F2').value = "Customer Credit Balance";
            worksheet.getCell('A2:F2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:F2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Credit Limit";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Customer";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "OutStanding Amount";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Credit Balance";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Customer Name";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

           
           

            for (let i = 0; i < balance.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = balance[i].ccid;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = balance[i].creditlimit;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = balance[i].customer;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = balance[i].outstandingamount;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = balance[i].creditbalance;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = balance[i].customername;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}