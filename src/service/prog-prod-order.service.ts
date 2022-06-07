import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgprodorderDTO } from 'src/dto/Progprodorder.dto';
import { Progprodorder001mb } from 'src/entity/Progprodorder001mb.entity';
import { Repository } from 'typeorm';
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
var html = fs.readFileSync("prog-order.html", "utf8");

@Injectable()
export class ProgProdOrderService {
     constructor(@InjectRepository(Progprodorder001mb) private readonly progProdOrderRepository: Repository<Progprodorder001mb>) { }

    async create(progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
    	const prodtimesheet001mb = new Progprodorder001mb();
    	prodtimesheet001mb.setProperties(progprodorderDTO);
    	return this.progProdOrderRepository.save(prodtimesheet001mb);
    }
    async update(progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
        const progprodorder001mb = new Progprodorder001mb();
    	progprodorder001mb.setProperties(progprodorderDTO);
    	await this.progProdOrderRepository.update({ prodId: progprodorder001mb.prodId }, progprodorder001mb);
    	return progprodorder001mb;
    }
    async findAll(): Promise<Progprodorder001mb[]> {
    	return this.progProdOrderRepository.find();
    }

    findOne(id: string): Promise<Progprodorder001mb> {
    	return this.progProdOrderRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
    	await this.progProdOrderRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let progProdOrder: any[] = await this.progProdOrderRepository.find();


        var document = {
            html: html,
            data: {
                ProgProdOrder: progProdOrder,
            },
            path: path.join(`./pdf/progProdOrder.pdf`),
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
        if (progProdOrder.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "progProdOrder.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };
    }
   
    
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let progProdOrder = await this.progProdOrderRepository.find();


        if (progProdOrder.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('progProdOrder');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 25.0 }, { key: 'E', width: 25.0 }, { key: 'F', width: 25.0 }, { key: 'G', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })
            worksheet.mergeCells('A1:G1');
            worksheet.getCell('A1:G1').value = "NANDALALA ERP";
            worksheet.getCell('A1:G1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:G1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:G1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:G2');
            worksheet.getCell('A2:G2').value = "Progress Production Order";
            worksheet.getCell('A2:G2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:G2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "PROrder Code";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Date";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Item To Manufacture ";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "To Produce";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Produced";
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

            for (let i = 0; i < progProdOrder.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = progProdOrder[i].prodId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = progProdOrder[i].prorderCode;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = progProdOrder[i].date;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = progProdOrder[i].itemtoManufacture;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = progProdOrder[i].toProduce;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = progProdOrder[i].produced;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = progProdOrder[i].empCompany;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

            }

            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}
