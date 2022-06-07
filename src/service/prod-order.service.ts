import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { execFile } from 'child_process';
import { ProdorderDTO } from 'src/dto/Prodorder.dto';
import { Prodorder001mb } from 'src/entity/Prodorder001mb.entity';
import { Repository } from 'typeorm';
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
var html = fs.readFileSync("proOrder.html", "utf8");

@Injectable()
export class ProdOrderService {
	constructor(@InjectRepository(Prodorder001mb) private readonly prodorderRepository: Repository<Prodorder001mb>,) { }

	async create(prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		const prodorder001mb = new Prodorder001mb();
		prodorder001mb.setProperties(prodorderDTO);
		return this.prodorderRepository.save(prodorder001mb);
	}

	async update(prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		const prodorder001mb = new Prodorder001mb();
		prodorder001mb.setProperties(prodorderDTO);
		await this.prodorderRepository.update({ prId: prodorder001mb.prId }, prodorder001mb);
		return prodorder001mb;
	}

	async findAll(): Promise<Prodorder001mb[]> {
		return this.prodorderRepository.find();
	}

	findOne(id: string): Promise<Prodorder001mb> {
		return this.prodorderRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodorderRepository.delete(id);
	}

	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		let prodOrders: any[] = await this.prodorderRepository.find();
		// console.log("backend prodorer-service for pdf----->",prodOrders);

		var document = {
            html: html,
            data: {
                pOrders: prodOrders,
            },
            path: path.join(`./pdf/prodOrder.pdf`),
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
		if (prodOrders.length < 0) {
            return;
        } 
		else {
			pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "breakDown.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
		};

	}



	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		let prodOrders = await this.prodorderRepository.find();
		// console.log("backend prodorer-service----->",prodOrders);

		if (prodOrders.length < 0) {
			return;
		}
		else {

			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('Production Order');
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
			worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 30.0 }, { key: 'C', width: 30.0 },
			{ key: 'D', width: 30.0 }];

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
			worksheet.getCell('A2:D2').value = "Production Order";
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
			worksheet.getCell('B3').value = "Items To Manufacture";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Status";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('D3');
			worksheet.getCell('D3').value = "ProductOrder Code";
			worksheet.getCell('D3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };

			for (let i = 0; i < prodOrders.length; i++) {

				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = prodOrders[i].prId;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = prodOrders[i].itemtoManufacture;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = prodOrders[i].status;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('D' + temp);
				worksheet.getCell('D' + temp).value = prodOrders[i].prorderCode;
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

