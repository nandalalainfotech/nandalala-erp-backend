import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProcessprDTO } from 'src/dto/Processpr.dto';
import { Processpr001mb } from 'src/entity/Processpr001mb.entity';
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
var html = fs.readFileSync("processpr.html", "utf8");

@Injectable()
export class HrProcessPrService {
	constructor(@InjectRepository(Processpr001mb) private readonly processprRepository: Repository<Processpr001mb>,) { }

	async create(processprDTO: ProcessprDTO): Promise<Processpr001mb> {
		const processpr001mb = new Processpr001mb();
		processpr001mb.setProperties(processprDTO);
		return this.processprRepository.save(processpr001mb);
	}

	async update(processprDTO: ProcessprDTO): Promise<Processpr001mb> {
		const processpr001mb = new Processpr001mb();
		processpr001mb.setProperties(processprDTO);
		await this.processprRepository.update({ processId: processpr001mb.processId }, processpr001mb);
		return processpr001mb;
	}

	async findAll(): Promise<Processpr001mb[]> {
		return this.processprRepository.find();
	}

	findOne(id: string): Promise<Processpr001mb> {
		return this.processprRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.processprRepository.delete(id);
	}

	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		let processpr: any[] = await this.processprRepository.find();


		var document = {
			html: html,
			data: {
				Processpr: processpr,
			},
			path: path.join(`./pdf/processpr.pdf`),
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
		if (processpr.length < 0) {
			return;
		}
		else {
			pdf.create(document, options).then((pathRes) => {
				const filestream = createReadStream(pathRes.filename);
				response.writeHead(200, {
					"Content-Disposition": "attachment;filename=" + "processpr.pdf",
					'Content-Type': 'application/pdf'
				});
				filestream.pipe(response);
			}).catch((error) => {
				console.error(error);
			});
		};

	}

	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		let processpr = await this.processprRepository.find();




		if (processpr.length < 0) {
			return;
		}
		else {

			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('processpr');
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
			{ key: 'E', width: 15.0 }, { key: 'F', width: 20.0 }];


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
			worksheet.getCell('A2:F2').value = "PayRoll List";
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
			worksheet.getCell('B3').value = "Year";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Month";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = {
				vertical: 'middle', horizontal: 'center'
			};
			worksheet.mergeCells('D3');
			worksheet.getCell('D3').value = "Posting Date";
			worksheet.getCell('D3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('D3').alignment = {
				vertical: 'middle', horizontal: 'center'
			};
			worksheet.mergeCells('E3');
			worksheet.getCell('E3').value = "Company";
			worksheet.getCell('E3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('E3').alignment = {
				vertical: 'middle', horizontal: 'center'
			};
			worksheet.mergeCells('F3');
			worksheet.getCell('F3').value = "Department";
			worksheet.getCell('F3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('F3').alignment = {
				vertical: 'middle', horizontal: 'center'
			};


			for (let i = 0; i < processpr.length; i++) {

				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = processpr[i].processId;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = processpr[i].year;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = processpr[i].month;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('D' + temp);
				worksheet.getCell('D' + temp).value = processpr[i].postingDate;
				worksheet.getCell('D' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('D' + temp).alignment = {
					vertical: 'middle', horizontal: 'center'
				};

				worksheet.mergeCells('E' + temp);
				worksheet.getCell('E' + temp).value = processpr[i].empCompany;
				worksheet.getCell('E' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('F' + temp);
				worksheet.getCell('F' + temp).value = processpr[i].deptName;
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
