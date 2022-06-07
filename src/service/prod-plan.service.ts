import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdplanDTO } from 'src/dto/Prodplan.dto';
import { Prodplan001mb } from 'src/entity/Prodplan001mb.entity';
import { Repository } from 'typeorm';
import { Request } from "supertest";
import { Response } from "express";
import { Console } from 'console';
import { createReadStream } from 'fs';
var path = require('path');
const excel = require('exceljs');
var path = require('path');
var pdf = require("pdf-creator-node");
var fs = require("fs");
var html = fs.readFileSync("proPlan.html", "utf8");

@Injectable()
export class ProdPlanService {
	constructor(@InjectRepository(Prodplan001mb) private readonly prodPlanRepository: Repository<Prodplan001mb>,) { }
	async create(prodplanDTO: ProdplanDTO): Promise<ProdplanDTO> {
		const prodplan001mb = new Prodplan001mb();
		prodplan001mb.setProperties(prodplanDTO);
		return this.prodPlanRepository.save(prodplan001mb);
	}
	async update(prodplanDTO: ProdplanDTO): Promise<ProdplanDTO> {
		const prodplan001mb = new Prodplan001mb();
		prodplan001mb.setProperties(prodplanDTO);
		await this.prodPlanRepository.update({ prplanId: prodplan001mb.prplanId }, prodplan001mb);
		return prodplan001mb;
	}

	async findAll(): Promise<Prodplan001mb[]> {
		return this.prodPlanRepository.find();
	}

	findOne(id: string): Promise<Prodplan001mb> {
		return this.prodPlanRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodPlanRepository.delete(id);
	}

	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		let prodPlans: any[] = await this.prodPlanRepository.find();
		console.log("backend prodPlans-service for pdf----->",prodPlans);

		var document = {
            html: html,
            data: {
                pPlans: prodPlans,
            },
            path: path.join(`./pdf/prodPlan.pdf`),
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
		if (prodPlans.length < 0) {
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
		
		let prodPlans = await this.prodPlanRepository.find();
		// console.log("backend prodPlans-->",prodPlans);
		

		if (prodPlans.length < 0) {
			return;
		}
		else {
			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('Product Planning Tools');
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
			worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 28.0 }, { key: 'C', width: 28.0 },
			{ key: 'D', width: 28.0 }, { key: 'E', width: 28.0 }, { key: 'F', width: 28.0 },
			{ key: 'G', width: 34.0 }];
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
			worksheet.getCell('A2:G2').value = "Production Plan";
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
			worksheet.getCell('B3').value = "Get Items From";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' }

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Item Code ";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('D3');
			worksheet.getCell('D3').value = "BOM Number";
			worksheet.getCell('D3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('E3');
			worksheet.getCell('E3').value = "Planned Quantity";
			worksheet.getCell('E3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('F3');
			worksheet.getCell('F3').value = "Pending Quantity";
			worksheet.getCell('F3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('G3');
			worksheet.getCell('G3').value = "Description";
			worksheet.getCell('G3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

			for (let i = 0; i < prodPlans.length; i++) {
				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = prodPlans[i].prplanId;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				
				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = prodPlans[i].getItems;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = prodPlans[i].itemCode;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('D' + temp);
				worksheet.getCell('D' + temp).value = prodPlans[i].bomNo;
				worksheet.getCell('D' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('E' + temp);
				worksheet.getCell('E' + temp).value = prodPlans[i].plannedQty;
				worksheet.getCell('E' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('F' + temp);
				worksheet.getCell('F' + temp).value = prodPlans[i].pendingQty;
				worksheet.getCell('F' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('G' + temp);
				worksheet.getCell('G' + temp).value = prodPlans[i].description;
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
