import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItempriceDTO } from "src/dto/Itemprice.dto";
import { Itemprice001mb } from "src/entity/Itemprice001mb.entity";
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
var html = fs.readFileSync("buying-itemPrice.html", "utf8");

@Injectable()
export class BuyingItemPriceService {
    constructor(@InjectRepository(Itemprice001mb) private readonly itemPriceRepository: Repository<Itemprice001mb>,) { }

    async create(itempriceDTO: ItempriceDTO): Promise<Itemprice001mb> {
        const itemprice001mb = new Itemprice001mb();
        itemprice001mb.setProperties(itempriceDTO);
        return this.itemPriceRepository.save(itemprice001mb);
    }

    async update(itempriceDTO: ItempriceDTO): Promise<Itemprice001mb> {
        const itemprice001mb = new Itemprice001mb();
        itemprice001mb.setProperties(itempriceDTO);
        await this.itemPriceRepository.update({ ipId: itemprice001mb.ipId }, itemprice001mb);
        return itemprice001mb;
    }

    async findAll(): Promise<Itemprice001mb[]> {
        return this.itemPriceRepository.find();
    }

    findOne(id: string): Promise<Itemprice001mb> {
        return this.itemPriceRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.itemPriceRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let itemPrice: any[] = await this.itemPriceRepository.find();


        var document = {
            html: html,
            data: {
                ItemPrice: itemPrice,
            },
            path: path.join(`./pdf/itemPrice.pdf`),
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
        if (itemPrice.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "itemPrice.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let itemPrice = await this.itemPriceRepository.find();
        
        if (itemPrice.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('itemPrice');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 40.0 }, 
            { key: 'C', width: 40.0 },{ key: 'D', width: 40.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:D1');
            worksheet.getCell('A1:D1').value = "NANDALALA ERP";
            worksheet.getCell('A1:D1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:D1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:D1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:D2');
            worksheet.getCell('A2:D2').value = "Item Price";
            worksheet.getCell('A2:D2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:D2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Item";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Item Group";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Status";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };

            for (let i = 0; i < itemPrice.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = itemPrice[i].ipId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = itemPrice[i].itemCode;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = itemPrice[i].itemGroup;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = itemPrice[i].status;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}
