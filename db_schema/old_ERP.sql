-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.5.9


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema erpnextgeneration
--

CREATE DATABASE IF NOT EXISTS erpnextgeneration;
USE erpnextgeneration;

--
-- Definition of table `accbalancesheet001mb`
--

DROP TABLE IF EXISTS `accbalancesheet001mb`;
CREATE TABLE `accbalancesheet001mb` (
  `absId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `startYear` varchar(20) NOT NULL,
  `endYear` varchar(20) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`absId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accbalancesheet001mb`
--

/*!40000 ALTER TABLE `accbalancesheet001mb` DISABLE KEYS */;
INSERT INTO `accbalancesheet001mb` (`absId`,`company`,`startYear`,`endYear`,`periodicity`,`account`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`) VALUES 
 (3,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (5,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (8,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (12,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (13,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (14,'afd','','','','323','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (15,'sdf','','','','sf','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (16,'sdf','','','','sf','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (17,'sdf','','','','sf','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (18,'sdf','Dummy1','Dummy2','','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (19,'sdf','Dummy1','Dummy2','Dummy1','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (20,'sdf','Dummy1','Dummy2','Dummy1','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (21,'sdf','Dummy1','Dummy2','Dummy1','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000');
/*!40000 ALTER TABLE `accbalancesheet001mb` ENABLE KEYS */;


--
-- Definition of table `acccashflow001mb`
--

DROP TABLE IF EXISTS `acccashflow001mb`;
CREATE TABLE `acccashflow001mb` (
  `acfId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `startYear` varchar(20) NOT NULL,
  `endYear` varchar(20) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`acfId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acccashflow001mb`
--

/*!40000 ALTER TABLE `acccashflow001mb` DISABLE KEYS */;
INSERT INTO `acccashflow001mb` (`acfId`,`company`,`startYear`,`endYear`,`periodicity`,`account`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`) VALUES 
 (6,'ergd','','','','10.000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000'),
 (7,'ergd','','','','10.000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000','10.0000'),
 (8,'sdf','Dummy1','Dummy3','Dummy2','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (9,'drg','Dummy1','Dummy2','Dummy3','32','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000');
/*!40000 ALTER TABLE `acccashflow001mb` ENABLE KEYS */;


--
-- Definition of table `accgenledge001mb`
--

DROP TABLE IF EXISTS `accgenledge001mb`;
CREATE TABLE `accgenledge001mb` (
  `accglId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `fromDate` varchar(40) NOT NULL,
  `toDate` varchar(40) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(40) NOT NULL,
  `grpbyVoucher` varchar(20) DEFAULT NULL,
  `grobyAccount` varchar(20) DEFAULT NULL,
  `letterHead` varchar(40) NOT NULL,
  `postingDate` varchar(40) NOT NULL,
  `accountName` varchar(60) NOT NULL,
  `debit` decimal(12,4) DEFAULT NULL,
  `credit` decimal(12,4) DEFAULT NULL,
  `voucherCode` varchar(50) NOT NULL,
  `voucherType` varchar(50) NOT NULL,
  `againstAmt` varchar(50) DEFAULT NULL,
  `projectname` varchar(50) NOT NULL,
  `costCenter` varchar(40) NOT NULL,
  `againvcType` varchar(50) NOT NULL,
  `againvcName` varchar(60) NOT NULL,
  PRIMARY KEY (`accglId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accgenledge001mb`
--

/*!40000 ALTER TABLE `accgenledge001mb` DISABLE KEYS */;
INSERT INTO `accgenledge001mb` (`accglId`,`company`,`fromDate`,`toDate`,`partyType`,`partyName`,`grpbyVoucher`,`grobyAccount`,`letterHead`,`postingDate`,`accountName`,`debit`,`credit`,`voucherCode`,`voucherType`,`againstAmt`,`projectname`,`costCenter`,`againvcType`,`againvcName`) VALUES 
 (7,'','','','','','','','','','','1213.0000','12313.0000','','',NULL,'','','1231','132123'),
 (10,'','','','','','','','','','','1213.0000','12313.0000','','',NULL,'','','1231','132123'),
 (11,'','','','','','','','','','','1213.0000','12313.0000','','',NULL,'','','1231','132123'),
 (12,'sdgf','','','','','true','true','','d','','43535.0000','34535.0000','','',NULL,'','34534','435345','3453543'),
 (13,'','','','','','true','','','','','1213.0000','1213.0000','','',NULL,'','','',''),
 (14,'sdsdvs','3223','232','','','true','true','Dummy1','2','Dummy2','2314.0000','131.0000','Dummy1','Delivery Note',NULL,'Dummy2','123','243','213'),
 (15,'sdf','3223','3424','','','true','true','Dummy1','2','Dummy1','21.0000','243.0000','Dummy1','Delivery Note',NULL,'Dummy1','423','243','213'),
 (16,'sdf','3223','232','','','true','true','Dummy1','2','Dummy1','2314.0000','131.0000','Dummy1','Delivery Note',NULL,'Dummy1','123','243','213'),
 (17,'sdf','3223','232','','','true','true','Dummy1','2','Dummy1','2314.0000','131.0000','Dummy1','Delivery Note',NULL,'Dummy1','123','243','213'),
 (18,'sdf','3223','232','','','true','true','Dummy1','2','Dummy1','2314.0000','131.0000','Dummy1','Delivery Note','345','Dummy1','123','243','213');
/*!40000 ALTER TABLE `accgenledge001mb` ENABLE KEYS */;


--
-- Definition of table `accountchart001mb`
--

DROP TABLE IF EXISTS `accountchart001mb`;
CREATE TABLE `accountchart001mb` (
  `chartId` int(11) NOT NULL AUTO_INCREMENT,
  `chartName` varchar(100) NOT NULL,
  PRIMARY KEY (`chartId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountchart001mb`
--

/*!40000 ALTER TABLE `accountchart001mb` DISABLE KEYS */;
INSERT INTO `accountchart001mb` (`chartId`,`chartName`) VALUES 
 (1,'Equity'),
 (3,'sdaf'),
 (4,'sdaf'),
 (6,'sdfgdfg'),
 (7,'sfs'),
 (8,'sdfgv'),
 (9,'dgb'),
 (10,'dfg'),
 (11,'qqq'),
 (12,'dfgdrg'),
 (13,'');
/*!40000 ALTER TABLE `accountchart001mb` ENABLE KEYS */;


--
-- Definition of table `accountsetup001mb`
--

DROP TABLE IF EXISTS `accountsetup001mb`;
CREATE TABLE `accountsetup001mb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `mkentryforstkMang` varchar(20) DEFAULT NULL,
  `accfrozenUpto` varchar(30) NOT NULL,
  `creditName` varchar(60) NOT NULL,
  `roleallowedtoFreeze` varchar(60) NOT NULL,
  `chksupinvoice` varchar(20) DEFAULT NULL,
  `mkpayviaJournal` varchar(20) DEFAULT NULL,
  `unlinkpayonCancel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsetup001mb`
--

/*!40000 ALTER TABLE `accountsetup001mb` DISABLE KEYS */;
INSERT INTO `accountsetup001mb` (`setId`,`mkentryforstkMang`,`accfrozenUpto`,`creditName`,`roleallowedtoFreeze`,`chksupinvoice`,`mkpayviaJournal`,`unlinkpayonCancel`) VALUES 
 (1,'1','12/12/2015','Customer','Supplier','1','0','1'),
 (2,'0','10/10/2015','Student','Leave Approver','1','1','1');
/*!40000 ALTER TABLE `accountsetup001mb` ENABLE KEYS */;


--
-- Definition of table `accountspayable001mb`
--

DROP TABLE IF EXISTS `accountspayable001mb`;
CREATE TABLE `accountspayable001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postingdate` varchar(45) NOT NULL,
  `supplier` varchar(45) NOT NULL,
  `suppliertype` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `vouchernumber` varchar(45) NOT NULL,
  `duedate` varchar(45) NOT NULL,
  `billno` varchar(45) NOT NULL,
  `billdate` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(10) unsigned NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `currency` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountspayable001mb`
--

/*!40000 ALTER TABLE `accountspayable001mb` DISABLE KEYS */;
INSERT INTO `accountspayable001mb` (`id`,`postingdate`,`supplier`,`suppliertype`,`vouchertype`,`vouchernumber`,`duedate`,`billno`,`billdate`,`invoicedamount`,`paidamount`,`outstandingamount`,`age`,`uptothirty`,`uptosixty`,`uptoninety`,`ninetyabove`,`currency`,`remarks`) VALUES 
 (29,'undefined','undefined','undefined','as','asf','undefined','af','undefined',322,124,123,32,23,23,23,32,'23','23');
/*!40000 ALTER TABLE `accountspayable001mb` ENABLE KEYS */;


--
-- Definition of table `accountsreceivable001mb`
--

DROP TABLE IF EXISTS `accountsreceivable001mb`;
CREATE TABLE `accountsreceivable001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postingdate` varchar(45) NOT NULL,
  `customer` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `voucherno` varchar(45) NOT NULL,
  `duedate` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(11) NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `currency` varchar(45) NOT NULL,
  `territory` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsreceivable001mb`
--

/*!40000 ALTER TABLE `accountsreceivable001mb` DISABLE KEYS */;
INSERT INTO `accountsreceivable001mb` (`id`,`postingdate`,`customer`,`vouchertype`,`voucherno`,`duedate`,`invoicedamount`,`paidamount`,`outstandingamount`,`age`,`uptothirty`,`uptosixty`,`uptoninety`,`ninetyabove`,`currency`,`territory`,`remarks`) VALUES 
 (31,'','','333','333','',333,333,0,333,333,333,333,333,'333','333','333');
/*!40000 ALTER TABLE `accountsreceivable001mb` ENABLE KEYS */;


--
-- Definition of table `accprofitlossstatement001mb`
--

DROP TABLE IF EXISTS `accprofitlossstatement001mb`;
CREATE TABLE `accprofitlossstatement001mb` (
  `aplsId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `startYear` varchar(20) NOT NULL,
  `endYear` varchar(20) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `costcenter` varchar(50) NOT NULL,
  `projectname` varchar(60) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`aplsId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accprofitlossstatement001mb`
--

/*!40000 ALTER TABLE `accprofitlossstatement001mb` DISABLE KEYS */;
INSERT INTO `accprofitlossstatement001mb` (`aplsId`,`company`,`startYear`,`endYear`,`periodicity`,`account`,`costcenter`,`projectname`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`) VALUES 
 (3,'sdf','','','','sfdg','dfg','','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (4,'sdf','','','','sfdg','dfg','','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000'),
 (6,'sdf','Dummy1','Dummy2','Dummy3','asd','dfg','Dummy1','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000','112.0000');
/*!40000 ALTER TABLE `accprofitlossstatement001mb` ENABLE KEYS */;


--
-- Definition of table `appraisal001mb`
--

DROP TABLE IF EXISTS `appraisal001mb`;
CREATE TABLE `appraisal001mb` (
  `apprId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `appraisalTemp` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`apprId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appraisal001mb`
--

/*!40000 ALTER TABLE `appraisal001mb` DISABLE KEYS */;
INSERT INTO `appraisal001mb` (`apprId`,`series`,`appraisalTemp`) VALUES 
 (1,'SER_001','Mode_1'),
 (2,'SER_002','LTT'),
 (3,'SER_002','Dummy1'),
 (4,'','');
/*!40000 ALTER TABLE `appraisal001mb` ENABLE KEYS */;


--
-- Definition of table `apprtemp001mb`
--

DROP TABLE IF EXISTS `apprtemp001mb`;
CREATE TABLE `apprtemp001mb` (
  `apptmpId` int(11) NOT NULL AUTO_INCREMENT,
  `appraisalTemp` varchar(40) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`apptmpId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `apprtemp001mb`
--

/*!40000 ALTER TABLE `apprtemp001mb` DISABLE KEYS */;
INSERT INTO `apprtemp001mb` (`apptmpId`,`appraisalTemp`,`description`) VALUES 
 (1,'Mode_1','Hard Work'),
 (2,'LTT','Full Attendance'),
 (3,'LTT','Full Attendance'),
 (4,'','');
/*!40000 ALTER TABLE `apprtemp001mb` ENABLE KEYS */;


--
-- Definition of table `asset001mb`
--

DROP TABLE IF EXISTS `asset001mb`;
CREATE TABLE `asset001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `asset` varchar(45) NOT NULL,
  `depreciationdate` varchar(45) NOT NULL,
  `purchaseamount` int(10) unsigned NOT NULL,
  `depreciationamount` int(10) unsigned NOT NULL,
  `accumulateddepreciationamount` int(10) unsigned NOT NULL,
  `amountafterdepreciation` int(10) unsigned NOT NULL,
  `depreciationentry` varchar(45) NOT NULL,
  `assetcategory` varchar(45) NOT NULL,
  `currentstatus` varchar(45) NOT NULL,
  `depreciationmethod` varchar(45) NOT NULL,
  `purchasedate` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asset001mb`
--

/*!40000 ALTER TABLE `asset001mb` DISABLE KEYS */;
INSERT INTO `asset001mb` (`id`,`asset`,`depreciationdate`,`purchaseamount`,`depreciationamount`,`accumulateddepreciationamount`,`amountafterdepreciation`,`depreciationentry`,`assetcategory`,`currentstatus`,`depreciationmethod`,`purchasedate`) VALUES 
 (10,'123','undefined',12313,123213,123,123,'123','123','123','123','undefined'),
 (11,'123','undefined',12313,123213,123,123,'123','123','123','123','undefined'),
 (14,'','',0,0,0,0,'','','','','');
/*!40000 ALTER TABLE `asset001mb` ENABLE KEYS */;


--
-- Definition of table `assetmovement001mb`
--

DROP TABLE IF EXISTS `assetmovement001mb`;
CREATE TABLE `assetmovement001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `targetwarehouse` varchar(255) DEFAULT NULL,
  `transactiondate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assetmovement001mb`
--

/*!40000 ALTER TABLE `assetmovement001mb` DISABLE KEYS */;
INSERT INTO `assetmovement001mb` (`id`,`asset`,`company`,`targetwarehouse`,`transactiondate`) VALUES 
 (4,'','xdfcdfgd','dsfgdfgfd',''),
 (15,'','sdfdrfh','fdhfdh',''),
 (16,'Dummy1','sdfdrfh11','fdhfdh11','10/07/2016'),
 (17,'','sdfdrfh2222','fdhfdh','10/07/2016');
/*!40000 ALTER TABLE `assetmovement001mb` ENABLE KEYS */;


--
-- Definition of table `bankclearance001mb`
--

DROP TABLE IF EXISTS `bankclearance001mb`;
CREATE TABLE `bankclearance001mb` (
  `bankclrId` int(11) NOT NULL AUTO_INCREMENT,
  `fromDate` varchar(50) NOT NULL,
  `toDate` varchar(50) NOT NULL,
  `bankAccount` varchar(50) NOT NULL,
  `payDocument` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `chequeref` varchar(50) NOT NULL,
  `clearanceDate` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`bankclrId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankclearance001mb`
--

/*!40000 ALTER TABLE `bankclearance001mb` DISABLE KEYS */;
INSERT INTO `bankclearance001mb` (`bankclrId`,`fromDate`,`toDate`,`bankAccount`,`payDocument`,`entrySeries`,`chequeref`,`clearanceDate`,`againstAccount`,`amount`) VALUES 
 (2,'','','','ssff','','sfdfsd','','','24000.0000'),
 (3,'','','','ssff','','sfdfsd','','','24000.0000'),
 (4,'','','','sf','','sdf','','','24000.0000'),
 (5,'','','','sf','','sdf','','','24000.0000'),
 (7,'','','','sf','','sdf','','','24000.0000'),
 (8,'','','','sf','','sdf','','','24000.0000'),
 (9,'','','','sf','','sdf','','','24000.0000'),
 (10,'','','','sf','','sdf','','','24000.0000'),
 (11,'','','','sf','','sdf','','','24000.0000'),
 (12,'','','','ssff','Dummy1','sfdfsd','','','24000.0000'),
 (13,'','','','ssff','Dummy1','sfdfsd','','','24000.0000'),
 (14,'','','','ssff','Dummy1','sfdfsd','','','24000.0000'),
 (15,'3223','232','','ssff','Dummy1','sfdfsd','243','Dummy1','24000.0000');
/*!40000 ALTER TABLE `bankclearance001mb` ENABLE KEYS */;


--
-- Definition of table `bankreconcile001mb`
--

DROP TABLE IF EXISTS `bankreconcile001mb`;
CREATE TABLE `bankreconcile001mb` (
  `bankrecId` int(11) NOT NULL AUTO_INCREMENT,
  `bankAccount` varchar(50) NOT NULL,
  `postingDate` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `debit` varchar(50) NOT NULL,
  `credit` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `referenceName` varchar(50) NOT NULL,
  `referenceDate` varchar(50) NOT NULL,
  `clearanceDate` varchar(50) NOT NULL,
  `currency` varchar(40) NOT NULL,
  PRIMARY KEY (`bankrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankreconcile001mb`
--

/*!40000 ALTER TABLE `bankreconcile001mb` DISABLE KEYS */;
INSERT INTO `bankreconcile001mb` (`bankrecId`,`bankAccount`,`postingDate`,`entrySeries`,`debit`,`credit`,`againstAccount`,`referenceName`,`referenceDate`,`clearanceDate`,`currency`) VALUES 
 (3,'','','','234','243','','243','','243',''),
 (4,'','','','234','243','','243','','243',''),
 (11,'','','','2342','345','','drgse','','',''),
 (12,'','','','2342','345','','drgse','','','');
/*!40000 ALTER TABLE `bankreconcile001mb` ENABLE KEYS */;


--
-- Definition of table `bom001mb`
--

DROP TABLE IF EXISTS `bom001mb`;
CREATE TABLE `bom001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bom` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bom001mb`
--

/*!40000 ALTER TABLE `bom001mb` DISABLE KEYS */;
INSERT INTO `bom001mb` (`id`,`bom`,`type`) VALUES 
 (1,'BOM - Windmill A series','BOM'),
 (2,'BOM - Bearing Assembly','BOM'),
 (3,'BOM - Wing Sheet','BOM'),
 (4,'BOM - Base Plate','BOM'),
 (5,'BOM - Wind Turbine - S001','BOM'),
 (6,'BOM - Base Bearing Plate 001','BOM'),
 (7,'BOM - Base Bearing Plate 002','BOM'),
 (8,'BOM - Wind Turbine - S002','BOM'),
 (9,'BOM - Windmill B series','BOM'),
 (10,'BOM - Wind Turbine - S001','BOM'),
 (11,'BOM - Windmill B series','BOM'),
 (12,'BOM - Windmill B series','BOM'),
 (13,'BOM - Windmill B series','BOM'),
 (14,'BOM - Base Plate','BOM'),
 (15,'BOM - Wing Sheet','BOM'),
 (16,'BOM - Windmill B series','BOM'),
 (17,'BOM - Wind Turbine - S001','BOM '),
 (18,'BOM - Windmill B series','BOM '),
 (19,'BOM - Wind Turbine - S001','BOM '),
 (20,'BOM - Wind Turbine - S001','BOM '),
 (21,'BOM ','BOM '),
 (22,'BOM ','BOM ');
/*!40000 ALTER TABLE `bom001mb` ENABLE KEYS */;


--
-- Definition of table `bomtype001mb`
--

DROP TABLE IF EXISTS `bomtype001mb`;
CREATE TABLE `bomtype001mb` (
  `bomId` int(11) NOT NULL AUTO_INCREMENT,
  `bomName` varchar(100) NOT NULL,
  `bomType` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`bomId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bomtype001mb`
--

/*!40000 ALTER TABLE `bomtype001mb` DISABLE KEYS */;
INSERT INTO `bomtype001mb` (`bomId`,`bomName`,`bomType`) VALUES 
 (3,'',''),
 (4,'',''),
 (5,'',''),
 (6,'',''),
 (25,'aaa12311','qqqqq456');
/*!40000 ALTER TABLE `bomtype001mb` ENABLE KEYS */;


--
-- Definition of table `branch001mb`
--

DROP TABLE IF EXISTS `branch001mb`;
CREATE TABLE `branch001mb` (
  `branchId` int(11) NOT NULL AUTO_INCREMENT,
  `branchName` varchar(30) NOT NULL,
  PRIMARY KEY (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch001mb`
--

/*!40000 ALTER TABLE `branch001mb` DISABLE KEYS */;
INSERT INTO `branch001mb` (`branchId`,`branchName`) VALUES 
 (3,'Checker'),
 (4,'dfgdfd'),
 (5,'svwsgvwsgv'),
 (8,'CS111'),
 (11,'qqqq111222');
/*!40000 ALTER TABLE `branch001mb` ENABLE KEYS */;


--
-- Definition of table `brand001mb`
--

DROP TABLE IF EXISTS `brand001mb`;
CREATE TABLE `brand001mb` (
  `brandId` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand001mb`
--

/*!40000 ALTER TABLE `brand001mb` DISABLE KEYS */;
INSERT INTO `brand001mb` (`brandId`,`brandName`,`description`) VALUES 
 (1,'Top','Too Expense'),
 (2,'Normal','Still rate is too high'),
 (3,'Normal','Still rate is too high');
/*!40000 ALTER TABLE `brand001mb` ENABLE KEYS */;


--
-- Definition of table `budget001mb`
--

DROP TABLE IF EXISTS `budget001mb`;
CREATE TABLE `budget001mb` (
  `bgId` int(11) NOT NULL AUTO_INCREMENT,
  `budgetName` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  `centerName` varchar(50) NOT NULL,
  `actifannualbgexceed` varchar(50) NOT NULL,
  `actifmonthbgexceed` varchar(50) NOT NULL,
  `fiscalYear` varchar(20) NOT NULL,
  `company` varchar(50) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `bgAmount` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`bgId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budget001mb`
--

/*!40000 ALTER TABLE `budget001mb` DISABLE KEYS */;
INSERT INTO `budget001mb` (`bgId`,`budgetName`,`docStatus`,`centerName`,`actifannualbgexceed`,`actifmonthbgexceed`,`fiscalYear`,`company`,`bgaccountType`,`bgAmount`) VALUES 
 (5,'sfgsfgv','','','','','','dfg','','3456.0000'),
 (6,'sfgsfgv','','','','','','dfg','','3456.0000'),
 (7,'sfgsfgv','','','','','','dfg','','3456.0000'),
 (8,'dfvsv','Dummy1','Dummy2','Dummy3','Dummy1','Dummy2','sdf','Dummy3','3456.0000'),
 (9,'dfvsv','Dummy1','Dummy2','Dummy3','Dummy1','Dummy2','sdf','Dummy3','3456.0000'),
 (11,'dfvsv','Dummy1','Dummy2','Dummy3','Dummy1','Dummy2','sdf','Dummy3','3456.0000'),
 (12,'dfvsv','Dummy1','Dummy2','Dummy3','Dummy1','Dummy2','sdf','Dummy3','3456.0000');
/*!40000 ALTER TABLE `budget001mb` ENABLE KEYS */;


--
-- Definition of table `budgetaccounttype001mb`
--

DROP TABLE IF EXISTS `budgetaccounttype001mb`;
CREATE TABLE `budgetaccounttype001mb` (
  `bgaccId` int(11) NOT NULL AUTO_INCREMENT,
  `bgaccountType` varchar(60) NOT NULL,
  PRIMARY KEY (`bgaccId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetaccounttype001mb`
--

/*!40000 ALTER TABLE `budgetaccounttype001mb` DISABLE KEYS */;
INSERT INTO `budgetaccounttype001mb` (`bgaccId`,`bgaccountType`) VALUES 
 (14,''),
 (15,''),
 (16,'sdf'),
 (17,'sdf'),
 (18,'ssss'),
 (19,'sfss123');
/*!40000 ALTER TABLE `budgetaccounttype001mb` ENABLE KEYS */;


--
-- Definition of table `budgetmonthdist001mb`
--

DROP TABLE IF EXISTS `budgetmonthdist001mb`;
CREATE TABLE `budgetmonthdist001mb` (
  `bmdId` int(11) NOT NULL AUTO_INCREMENT,
  `distName` varchar(50) NOT NULL,
  `fiscalYear` varchar(20) NOT NULL,
  `respMonth` varchar(50) NOT NULL,
  `percentAllocate` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`bmdId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetmonthdist001mb`
--

/*!40000 ALTER TABLE `budgetmonthdist001mb` DISABLE KEYS */;
INSERT INTO `budgetmonthdist001mb` (`bmdId`,`distName`,`fiscalYear`,`respMonth`,`percentAllocate`) VALUES 
 (3,'fgvvsg','','','35465.0000'),
 (4,'fgvvsg','Dummy1','January','1234.0000'),
 (5,'fgvvsg','Dummy2','May','2345.0000'),
 (6,'fgvvsg','Dummy1','March','435345.0000');
/*!40000 ALTER TABLE `budgetmonthdist001mb` ENABLE KEYS */;


--
-- Definition of table `budgetvarreport001mb`
--

DROP TABLE IF EXISTS `budgetvarreport001mb`;
CREATE TABLE `budgetvarreport001mb` (
  `varId` int(11) NOT NULL AUTO_INCREMENT,
  `fiscalYear` varchar(20) NOT NULL,
  `period` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  `centerName` varchar(60) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `actualjan` decimal(12,4) DEFAULT NULL,
  `variancejan` decimal(12,4) DEFAULT NULL,
  `targetjan` decimal(12,4) DEFAULT NULL,
  `actualfeb` decimal(12,4) DEFAULT NULL,
  `variancefeb` decimal(12,4) DEFAULT NULL,
  `targetfeb` decimal(12,4) DEFAULT NULL,
  `actualmar` decimal(12,4) DEFAULT NULL,
  `variancemar` decimal(12,4) DEFAULT NULL,
  `targetmar` decimal(12,4) DEFAULT NULL,
  `actualapr` decimal(12,4) DEFAULT NULL,
  `varianceapr` decimal(12,4) DEFAULT NULL,
  `targetapr` decimal(12,4) DEFAULT NULL,
  `actualmay` decimal(12,4) DEFAULT NULL,
  `variancemay` decimal(12,4) DEFAULT NULL,
  `targetmay` decimal(12,4) DEFAULT NULL,
  `actualjun` decimal(12,4) DEFAULT NULL,
  `variancejun` decimal(12,4) DEFAULT NULL,
  `targetjun` decimal(12,4) DEFAULT NULL,
  `actualjul` decimal(12,4) DEFAULT NULL,
  `variancejul` decimal(12,4) DEFAULT NULL,
  `targetjul` decimal(12,4) DEFAULT NULL,
  `actualaug` decimal(12,4) DEFAULT NULL,
  `varianceaug` decimal(12,4) DEFAULT NULL,
  `targetaug` decimal(12,4) DEFAULT NULL,
  `actualsep` decimal(12,4) DEFAULT NULL,
  `variancesep` decimal(12,4) DEFAULT NULL,
  `targetsep` decimal(12,4) DEFAULT NULL,
  `actualoct` decimal(12,4) DEFAULT NULL,
  `varianceoct` decimal(12,4) DEFAULT NULL,
  `targetoct` decimal(12,4) DEFAULT NULL,
  `actualnov` decimal(12,4) DEFAULT NULL,
  `variancenov` decimal(12,4) DEFAULT NULL,
  `targetnov` decimal(12,4) DEFAULT NULL,
  `actualdec` decimal(12,4) DEFAULT NULL,
  `variancedec` decimal(12,4) DEFAULT NULL,
  `targetdec` decimal(12,4) DEFAULT NULL,
  `totalTarget` decimal(12,4) DEFAULT NULL,
  `totalActual` decimal(12,4) DEFAULT NULL,
  `totalVariance` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`varId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetvarreport001mb`
--

/*!40000 ALTER TABLE `budgetvarreport001mb` DISABLE KEYS */;
INSERT INTO `budgetvarreport001mb` (`varId`,`fiscalYear`,`period`,`company`,`centerName`,`bgaccountType`,`actualjan`,`variancejan`,`targetjan`,`actualfeb`,`variancefeb`,`targetfeb`,`actualmar`,`variancemar`,`targetmar`,`actualapr`,`varianceapr`,`targetapr`,`actualmay`,`variancemay`,`targetmay`,`actualjun`,`variancejun`,`targetjun`,`actualjul`,`variancejul`,`targetjul`,`actualaug`,`varianceaug`,`targetaug`,`actualsep`,`variancesep`,`targetsep`,`actualoct`,`varianceoct`,`targetoct`,`actualnov`,`variancenov`,`targetnov`,`actualdec`,`variancedec`,`targetdec`,`totalTarget`,`totalActual`,`totalVariance`) VALUES 
 (8,'Dummy1','Dummy1','sdf','Dummy1','Dummy1','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (9,'Dummy1','Dummy1','sdf','Dummy1','Dummy1','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (10,'Dummy1','Dummy1','sdf','Dummy1','Dummy1','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (11,'Dummy2','Dummy1','sdf','Dummy1','Dummy2','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000'),
 (12,'Dummy3','Dummy1','sdf','Dummy1','Dummy2','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000','12.0000');
/*!40000 ALTER TABLE `budgetvarreport001mb` ENABLE KEYS */;


--
-- Definition of table `chequetemplate001mb`
--

DROP TABLE IF EXISTS `chequetemplate001mb`;
CREATE TABLE `chequetemplate001mb` (
  `cheqId` int(11) NOT NULL AUTO_INCREMENT,
  `prmaccountName` varchar(60) NOT NULL,
  `prmisaccPay` varchar(20) DEFAULT NULL,
  `prmcheqSize` decimal(12,4) DEFAULT NULL,
  `prmdistfromTop` decimal(12,4) DEFAULT NULL,
  `prmcheqWidth` decimal(12,4) DEFAULT NULL,
  `prmdistfromLeft` decimal(12,4) DEFAULT NULL,
  `prmcheqHeight` decimal(12,4) DEFAULT NULL,
  `prmmesgtoShow` varchar(100) NOT NULL,
  `scanCheq` varchar(50) DEFAULT NULL,
  `dtdistfromTop` decimal(12,4) DEFAULT NULL,
  `dtdistfromLeft` decimal(12,4) DEFAULT NULL,
  `paydistfromTop` decimal(12,4) DEFAULT NULL,
  `paydistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtwdistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwWidth` decimal(12,4) DEFAULT NULL,
  `amtwlineSpace` decimal(12,4) DEFAULT NULL,
  `amtfdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtfdistfromLeft` decimal(12,4) DEFAULT NULL,
  `accnodistfromTop` decimal(12,4) DEFAULT NULL,
  `accnodistfromLeft` decimal(12,4) DEFAULT NULL,
  `signposdistfromTop` decimal(12,4) DEFAULT NULL,
  `signposdistfromLeft` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`cheqId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chequetemplate001mb`
--

/*!40000 ALTER TABLE `chequetemplate001mb` DISABLE KEYS */;
INSERT INTO `chequetemplate001mb` (`cheqId`,`prmaccountName`,`prmisaccPay`,`prmcheqSize`,`prmdistfromTop`,`prmcheqWidth`,`prmdistfromLeft`,`prmcheqHeight`,`prmmesgtoShow`,`scanCheq`,`dtdistfromTop`,`dtdistfromLeft`,`paydistfromTop`,`paydistfromLeft`,`amtwdistfromTop`,`amtwdistfromLeft`,`amtwWidth`,`amtwlineSpace`,`amtfdistfromTop`,`amtfdistfromLeft`,`accnodistfromTop`,`accnodistfromLeft`,`signposdistfromTop`,`signposdistfromLeft`) VALUES 
 (4,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (7,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (8,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (9,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (11,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (12,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (16,'undefined','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (17,'Dummy1','undefined','2.0000','2.0000','2.0000','2.0000','2.0000','tfjtdh','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (18,'undefined','true','2.0000','2.0000','2.0000','2.0000','2.0000','fthth','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (19,'undefined','true','2.0000','2.0000','2.0000','2.0000','2.0000','fthth','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (20,'undefined','true','2.0000','2.0000','2.0000','2.0000','2.0000','fthth','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (21,'','true','2.0000','2.0000','2.0000','2.0000','2.0000','fgyjfgj','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000'),
 (22,'','false','2.0000','2.0000','2.0000','2.0000','2.0000','fgyjfgj','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000','2.0000');
/*!40000 ALTER TABLE `chequetemplate001mb` ENABLE KEYS */;


--
-- Definition of table `communication001mb`
--

DROP TABLE IF EXISTS `communication001mb`;
CREATE TABLE `communication001mb` (
  `commId` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `sentrec` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`commId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `communication001mb`
--

/*!40000 ALTER TABLE `communication001mb` DISABLE KEYS */;
INSERT INTO `communication001mb` (`commId`,`subject`,`status`,`sentrec`) VALUES 
 (1,'Sample','Open','Sent'),
 (8,'huiluilqwe','Dummy2','Dummy3');
/*!40000 ALTER TABLE `communication001mb` ENABLE KEYS */;


--
-- Definition of table `companyaccount001mb`
--

DROP TABLE IF EXISTS `companyaccount001mb`;
CREATE TABLE `companyaccount001mb` (
  `caId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(100) NOT NULL,
  `country` varchar(60) NOT NULL,
  `abbreviation` varchar(50) NOT NULL,
  `companyDomain` varchar(60) NOT NULL,
  `defholList` varchar(50) NOT NULL,
  `defCurrency` varchar(50) NOT NULL,
  `accchartType` varchar(50) NOT NULL,
  `defbankAccount` varchar(50) NOT NULL,
  `defcashAccount` varchar(50) NOT NULL,
  `defpayAccount` varchar(50) NOT NULL,
  `defincomeAccount` varchar(50) NOT NULL,
  `rndoffCenter` varchar(50) NOT NULL,
  PRIMARY KEY (`caId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companyaccount001mb`
--

/*!40000 ALTER TABLE `companyaccount001mb` DISABLE KEYS */;
INSERT INTO `companyaccount001mb` (`caId`,`companyName`,`country`,`abbreviation`,`companyDomain`,`defholList`,`defCurrency`,`accchartType`,`defbankAccount`,`defcashAccount`,`defpayAccount`,`defincomeAccount`,`rndoffCenter`) VALUES 
 (3,'','','','','','','','','','','',''),
 (4,'','','','','','','','','','','',''),
 (5,'','','','','','','','','','','',''),
 (6,'','','','','','','','','','','',''),
 (7,'','','','','','','','','','','',''),
 (8,'','','','','','','','','','','',''),
 (9,'','','','','','','','','','','',''),
 (10,'','','','','','','','','','','',''),
 (11,'dfg','dfg','sdg','','','','','','','','','dfgd'),
 (12,'drg','dfg','dfg','','','','','','','','','gfd'),
 (13,'df','dfg','fg','','','','','','','','','dfg'),
 (14,'','','','','','','','','','','','');
/*!40000 ALTER TABLE `companyaccount001mb` ENABLE KEYS */;


--
-- Definition of table `compprodorder001mb`
--

DROP TABLE IF EXISTS `compprodorder001mb`;
CREATE TABLE `compprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compprodorder001mb`
--

/*!40000 ALTER TABLE `compprodorder001mb` DISABLE KEYS */;
INSERT INTO `compprodorder001mb` (`prodId`,`prorderCode`,`date`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`) VALUES 
 (9,'','','','sf','sffd','sf'),
 (11,'','','','sfsdfsdf','sffdsdfs','sfsdfsdf'),
 (12,'Dummy1','2021-06-11','Dummy2','jbhb','ihbjbjb','hvyvyb'),
 (14,'','','','','',''),
 (15,'','','','','',''),
 (16,'Dummy1','2021-06-11','Dummy3','sf','sss','asaaa'),
 (17,'','','','','','123'),
 (19,'Dummy2','2021-06-19','Dummy2','sf','ad','asaaa1111223');
/*!40000 ALTER TABLE `compprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `costcenter001mb`
--

DROP TABLE IF EXISTS `costcenter001mb`;
CREATE TABLE `costcenter001mb` (
  `centId` int(11) NOT NULL AUTO_INCREMENT,
  `centerName` varchar(50) NOT NULL,
  PRIMARY KEY (`centId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `costcenter001mb`
--

/*!40000 ALTER TABLE `costcenter001mb` DISABLE KEYS */;
INSERT INTO `costcenter001mb` (`centId`,`centerName`) VALUES 
 (2,'Doosan'),
 (3,'sdfc'),
 (4,'sdfcsdfsfd'),
 (5,'sdfcsdfsfdsdfsf'),
 (6,'sdfcsdfsfdsdfsfsdf'),
 (7,'dsf'),
 (8,'sfsf'),
 (9,'sdf'),
 (10,'dfgdgf'),
 (11,'fbdxbd'),
 (12,'fbdhbhnhhdgf'),
 (13,'afwawfa'),
 (14,'cbfcfgbfg'),
 (15,'sfewsfws'),
 (16,''),
 (17,'null'),
 (18,'null'),
 (19,'sssss'),
 (20,'sssss'),
 (21,'fewfwfe'),
 (22,'fewfwfe');
/*!40000 ALTER TABLE `costcenter001mb` ENABLE KEYS */;


--
-- Definition of table `creditcontrol001mb`
--

DROP TABLE IF EXISTS `creditcontrol001mb`;
CREATE TABLE `creditcontrol001mb` (
  `credId` int(11) NOT NULL AUTO_INCREMENT,
  `creditName` varchar(60) NOT NULL,
  PRIMARY KEY (`credId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `creditcontrol001mb`
--

/*!40000 ALTER TABLE `creditcontrol001mb` DISABLE KEYS */;
INSERT INTO `creditcontrol001mb` (`credId`,`creditName`) VALUES 
 (1,'Analytics'),
 (2,'Student'),
 (3,'Customer'),
 (4,'Supplier'),
 (5,'Support Team'),
 (6,'Leave Appreover'),
 (7,'Expense Approver'),
 (8,'HR Manager'),
 (9,'Item Manager'),
 (10,'Maintainance Manager'),
 (11,'Project User');
/*!40000 ALTER TABLE `creditcontrol001mb` ENABLE KEYS */;


--
-- Definition of table `crmmintoresp001mb`
--

DROP TABLE IF EXISTS `crmmintoresp001mb`;
CREATE TABLE `crmmintoresp001mb` (
  `mrpId` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(30) NOT NULL,
  `mintoresp` varchar(20) NOT NULL,
  PRIMARY KEY (`mrpId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmmintoresp001mb`
--

/*!40000 ALTER TABLE `crmmintoresp001mb` DISABLE KEYS */;
INSERT INTO `crmmintoresp001mb` (`mrpId`,`date`,`mintoresp`) VALUES 
 (2,'10/10/2014','10'),
 (3,'10/12/2016','20'),
 (8,'10/11/2016','35'),
 (9,'','sdgvs'),
 (10,'',''),
 (12,'',''),
 (14,'','');
/*!40000 ALTER TABLE `crmmintoresp001mb` ENABLE KEYS */;


--
-- Definition of table `crmspcontact001mb`
--

DROP TABLE IF EXISTS `crmspcontact001mb`;
CREATE TABLE `crmspcontact001mb` (
  `contId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(50) NOT NULL,
  `status` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`contId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcontact001mb`
--

/*!40000 ALTER TABLE `crmspcontact001mb` DISABLE KEYS */;
INSERT INTO `crmspcontact001mb` (`contId`,`leadName`,`status`) VALUES 
 (1,'Rodriguez','Passive'),
 (2,'Jenson','Open'),
 (3,'Benzema','Replied'),
 (4,'',''),
 (5,'',''),
 (6,'',''),
 (7,'drgdsgb','Open'),
 (8,'drgdsgb','Open');
/*!40000 ALTER TABLE `crmspcontact001mb` ENABLE KEYS */;


--
-- Definition of table `crmspcust001mb`
--

DROP TABLE IF EXISTS `crmspcust001mb`;
CREATE TABLE `crmspcust001mb` (
  `custId` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `customergroup` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`custId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcust001mb`
--

/*!40000 ALTER TABLE `crmspcust001mb` DISABLE KEYS */;
INSERT INTO `crmspcust001mb` (`custId`,`customername`,`status`,`customergroup`) VALUES 
 (1,'Mithra','Open','QAS'),
 (8,'','',''),
 (9,'Dummy1','Replied','Dummy2');
/*!40000 ALTER TABLE `crmspcust001mb` ENABLE KEYS */;


--
-- Definition of table `crmsplead001mb`
--

DROP TABLE IF EXISTS `crmsplead001mb`;
CREATE TABLE `crmsplead001mb` (
  `slineId` int(11) NOT NULL AUTO_INCREMENT,
  `personName` varchar(50) NOT NULL,
  `orgName` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`slineId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmsplead001mb`
--

/*!40000 ALTER TABLE `crmsplead001mb` DISABLE KEYS */;
INSERT INTO `crmsplead001mb` (`slineId`,`personName`,`orgName`,`status`) VALUES 
 (1,'Shankar','Rhodes Furniture','Lead'),
 (8,'','',''),
 (9,'','',''),
 (10,'','',''),
 (11,'xdvsv','fvbdf','Open');
/*!40000 ALTER TABLE `crmsplead001mb` ENABLE KEYS */;


--
-- Definition of table `crmspoppo001mb`
--

DROP TABLE IF EXISTS `crmspoppo001mb`;
CREATE TABLE `crmspoppo001mb` (
  `oppId` int(11) NOT NULL AUTO_INCREMENT,
  `oppSeries` varchar(50) NOT NULL,
  `oppType` varchar(40) DEFAULT NULL,
  `oppFrom` varchar(40) DEFAULT NULL,
  `status` varchar(40) DEFAULT NULL,
  `withitems` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`oppId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspoppo001mb`
--

/*!40000 ALTER TABLE `crmspoppo001mb` DISABLE KEYS */;
INSERT INTO `crmspoppo001mb` (`oppId`,`oppSeries`,`oppType`,`oppFrom`,`status`,`withitems`) VALUES 
 (1,'OPSER-001','Sales','Lead','Open','1'),
 (2,'OPSER-002','Maintainance','Customer','Converted','0'),
 (4,'','','','','true'),
 (5,'','','','',''),
 (6,'hhh','Sales','Customer','Quotation',''),
 (7,'','','','',''),
 (8,'','','','',''),
 (9,'','','','','true'),
 (10,'','','','','false'),
 (11,'','','','','false'),
 (12,'','','','',''),
 (19,'','','','',''),
 (20,'','','','','');
/*!40000 ALTER TABLE `crmspoppo001mb` ENABLE KEYS */;


--
-- Definition of table `currency001mb`
--

DROP TABLE IF EXISTS `currency001mb`;
CREATE TABLE `currency001mb` (
  `currId` int(11) NOT NULL AUTO_INCREMENT,
  `currencyName` varchar(30) NOT NULL,
  `currencyAbbr` varchar(60) DEFAULT NULL,
  `fractionName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`currId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currency001mb`
--

/*!40000 ALTER TABLE `currency001mb` DISABLE KEYS */;
INSERT INTO `currency001mb` (`currId`,`currencyName`,`currencyAbbr`,`fractionName`) VALUES 
 (1,'USD','United States Dollar','Cent'),
 (2,'INR','Indian Rupee','Paisa'),
 (3,'CHF','Confoederatio Helvetica Franc','Rappen'),
 (4,'CNY','',''),
 (5,'JPY','Japanese Yen','Sen[G]'),
 (6,'AUD','Australian Dollar','Cent'),
 (7,'AED','United Arab Emirates Dirham','Fils'),
 (8,'EUR','euro ','Cent'),
 (9,'GBP','Great Britain Pound','Penny');
/*!40000 ALTER TABLE `currency001mb` ENABLE KEYS */;


--
-- Definition of table `currencyexchange001mb`
--

DROP TABLE IF EXISTS `currencyexchange001mb`;
CREATE TABLE `currencyexchange001mb` (
  `cuexId` int(11) NOT NULL AUTO_INCREMENT,
  `cuexName` varchar(50) NOT NULL,
  `fromCurrency` varchar(30) NOT NULL,
  `toCurrency` varchar(30) NOT NULL,
  PRIMARY KEY (`cuexId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currencyexchange001mb`
--

/*!40000 ALTER TABLE `currencyexchange001mb` DISABLE KEYS */;
INSERT INTO `currencyexchange001mb` (`cuexId`,`cuexName`,`fromCurrency`,`toCurrency`) VALUES 
 (1,'CNY-USD','CNY','USD');
/*!40000 ALTER TABLE `currencyexchange001mb` ENABLE KEYS */;


--
-- Definition of table `customeracquisition001mb`
--

DROP TABLE IF EXISTS `customeracquisition001mb`;
CREATE TABLE `customeracquisition001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `year` int(10) unsigned NOT NULL,
  `month` varchar(45) NOT NULL,
  `newcustomers` int(10) unsigned NOT NULL,
  `repeatcustomers` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  `newcustomersrevenue` mediumtext NOT NULL,
  `repeatcustomersrevenue` mediumtext NOT NULL,
  `totalrevenue` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customeracquisition001mb`
--

/*!40000 ALTER TABLE `customeracquisition001mb` DISABLE KEYS */;
INSERT INTO `customeracquisition001mb` (`id`,`year`,`month`,`newcustomers`,`repeatcustomers`,`total`,`newcustomersrevenue`,`repeatcustomersrevenue`,`totalrevenue`) VALUES 
 (5,2019,'jan',1,19,299,'800','200','100'),
 (7,2010,'JJ',8,8,8,'8','8','22'),
 (8,2019,'jan',1,19,213,'800','200','100');
/*!40000 ALTER TABLE `customeracquisition001mb` ENABLE KEYS */;


--
-- Definition of table `customercreditbalance001mb`
--

DROP TABLE IF EXISTS `customercreditbalance001mb`;
CREATE TABLE `customercreditbalance001mb` (
  `ccid` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(45) DEFAULT NULL,
  `creditlimit` mediumtext NOT NULL,
  `outstandingamount` mediumtext NOT NULL,
  `creditbalance` mediumtext NOT NULL,
  `id` int(11) NOT NULL,
  `Customername` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`ccid`),
  KEY `id` (`id`),
  CONSTRAINT `customercreditbalance001mb_ibfk_1` FOREIGN KEY (`id`) REFERENCES `customerdetails001mb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customercreditbalance001mb`
--

/*!40000 ALTER TABLE `customercreditbalance001mb` DISABLE KEYS */;
INSERT INTO `customercreditbalance001mb` (`ccid`,`customer`,`creditlimit`,`outstandingamount`,`creditbalance`,`id`,`Customername`) VALUES 
 (10,NULL,'1000','200','100',4,'irin');
/*!40000 ALTER TABLE `customercreditbalance001mb` ENABLE KEYS */;


--
-- Definition of table `customerdetails001mb`
--

DROP TABLE IF EXISTS `customerdetails001mb`;
CREATE TABLE `customerdetails001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerid` varchar(45) NOT NULL,
  `customername` varchar(45) NOT NULL,
  `customergroup` varchar(45) NOT NULL,
  `addressline1` varchar(45) NOT NULL,
  `addressline2` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `postalcode` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `isprimaryaddress` tinyint(1) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `mobilenumber` varchar(45) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `isprimarycontact` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerdetails001mb`
--

/*!40000 ALTER TABLE `customerdetails001mb` DISABLE KEYS */;
INSERT INTO `customerdetails001mb` (`id`,`customerid`,`customername`,`customergroup`,`addressline1`,`addressline2`,`city`,`state`,`postalcode`,`country`,`isprimaryaddress`,`firstname`,`lastname`,`phone`,`mobilenumber`,`emailid`,`isprimarycontact`) VALUES 
 (4,'KT04','irin','Dummy1','chenai','chennai','chennai','tn','4000','india',1,'jj','jj','15421','9943212345-','gmail',0),
 (48,'','','','','','','','','',1,'','','','','',1),
 (49,'','','','','','','','','',1,'','','','','',0),
 (50,'','','','','','','','','',0,'','','','','',0),
 (51,'11','irin','Dummy1','chenai','chennai','chennai','tn','4000','India',1,'sfd','irin','9990','9876543210','bhbj',0);
/*!40000 ALTER TABLE `customerdetails001mb` ENABLE KEYS */;


--
-- Definition of table `dailytimesheet001mb`
--

DROP TABLE IF EXISTS `dailytimesheet001mb`;
CREATE TABLE `dailytimesheet001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timesheet` varchar(45) NOT NULL,
  `employee` varchar(45) NOT NULL,
  `employeename` varchar(45) NOT NULL,
  `fromdatetime` varchar(50) NOT NULL,
  `todatetime` varchar(50) NOT NULL,
  `hours` varchar(50) NOT NULL,
  `activitytype` varchar(50) NOT NULL,
  `task` varchar(50) NOT NULL,
  `project` varchar(45) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dailytimesheet001mb`
--

/*!40000 ALTER TABLE `dailytimesheet001mb` DISABLE KEYS */;
INSERT INTO `dailytimesheet001mb` (`id`,`timesheet`,`employee`,`employeename`,`fromdatetime`,`todatetime`,`hours`,`activitytype`,`task`,`project`,`status`) VALUES 
 (2,'timesheet','EMP_06,2','Harish','10/07/2016','10/12/2016','8hrs','testing','Intellor Testing','veriato','open'),
 (3,'timesheet','EMP_06,2','Harish','10/12/2016','10/13/2016','8 hrs','testing','Intellor Testing','Intellor','initated'),
 (4,'te','EMP_08,11','naresh','10/13/2016','10/13/2016','2 hrs','act','Intellor Dev','Intellor','initated'),
 (5,'task','EMP_07,7','Vakhita Ryzaev','10/07/2016','10/14/2016','2 hrs','activity','Intellor Testing','Intellor','initated');
/*!40000 ALTER TABLE `dailytimesheet001mb` ENABLE KEYS */;


--
-- Definition of table `delnotetrends001mb`
--

DROP TABLE IF EXISTS `delnotetrends001mb`;
CREATE TABLE `delnotetrends001mb` (
  `dntrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `fiscalYear` varchar(30) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dntrendId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delnotetrends001mb`
--

/*!40000 ALTER TABLE `delnotetrends001mb` DISABLE KEYS */;
INSERT INTO `delnotetrends001mb` (`dntrendId`,`period`,`basedOn`,`fiscalYear`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`) VALUES 
 (1,'Monthly','Item','2015','Dell','Table','12','3400.0000','10','2450.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','6','4500.0000','7','5600.0000','','0.0000','14','16000.0000','100','1000000.0000',NULL),
 (2,'Weekly','Supplier Type','2011','Dell','Internal Disc','2','200.0000','1','100.0000','3','300.0000','4','400.0000','1','100.0000','1','100.0000',NULL,'600.0000',NULL,'700.0000','4','400.0000','3','300.0000','3','300.0000','2','200.0000','16','16000.0000','2');
/*!40000 ALTER TABLE `delnotetrends001mb` ENABLE KEYS */;


--
-- Definition of table `department001mb`
--

DROP TABLE IF EXISTS `department001mb`;
CREATE TABLE `department001mb` (
  `deptid` int(11) NOT NULL AUTO_INCREMENT,
  `deptName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`deptid`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department001mb`
--

/*!40000 ALTER TABLE `department001mb` DISABLE KEYS */;
INSERT INTO `department001mb` (`deptid`,`deptName`) VALUES 
 (6,'Management1123456'),
 (7,'Human Resources'),
 (8,'Customer Service'),
 (10,'Production'),
 (11,'Operations'),
 (13,''),
 (14,''),
 (15,''),
 (17,''),
 (18,''),
 (19,'sdcscs'),
 (20,'sdfcsvcs'),
 (21,''),
 (22,'sdgvsgbvs'),
 (23,'sdvsvsv'),
 (24,'sdcscs'),
 (25,''),
 (26,'Customer Servicegggg'),
 (27,'dfvsdv'),
 (28,'dfvsdvdfvb'),
 (29,'dfvsdvdfvbvdsdfv'),
 (30,'xd csd'),
 (31,'12345678912345');
/*!40000 ALTER TABLE `department001mb` ENABLE KEYS */;


--
-- Definition of table `designation001mb`
--

DROP TABLE IF EXISTS `designation001mb`;
CREATE TABLE `designation001mb` (
  `designId` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(30) NOT NULL,
  PRIMARY KEY (`designId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designation001mb`
--

/*!40000 ALTER TABLE `designation001mb` DISABLE KEYS */;
INSERT INTO `designation001mb` (`designId`,`designation`) VALUES 
 (1,'Project Manager11'),
 (2,'Researcher'),
 (5,'');
/*!40000 ALTER TABLE `designation001mb` ENABLE KEYS */;


--
-- Definition of table `email001mb`
--

DROP TABLE IF EXISTS `email001mb`;
CREATE TABLE `email001mb` (
  `emailId` int(11) NOT NULL AUTO_INCREMENT,
  `emailFrom` varchar(50) NOT NULL,
  `emailTo` varchar(50) NOT NULL,
  `emailCC` text NOT NULL,
  `emailBCC` text NOT NULL,
  `emailDate` varchar(30) DEFAULT NULL,
  `emailSubject` varchar(100) DEFAULT NULL,
  `emailBody` text,
  `emailCurrentPlace` varchar(30) DEFAULT NULL,
  `isEmailViewed` varchar(30) DEFAULT NULL,
  `isEmailAttachmentExists` varchar(10) DEFAULT NULL,
  `multipleEmailId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email001mb`
--

/*!40000 ALTER TABLE `email001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `email001mb` ENABLE KEYS */;


--
-- Definition of table `emailattachment001mb`
--

DROP TABLE IF EXISTS `emailattachment001mb`;
CREATE TABLE `emailattachment001mb` (
  `emailattachmentid` int(11) NOT NULL AUTO_INCREMENT,
  `content` tinyblob,
  `contenttype` varchar(255) DEFAULT NULL,
  `emailId` int(11) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `filesize` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`emailattachmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailattachment001mb`
--

/*!40000 ALTER TABLE `emailattachment001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailattachment001mb` ENABLE KEYS */;


--
-- Definition of table `emailsignature001mb`
--

DROP TABLE IF EXISTS `emailsignature001mb`;
CREATE TABLE `emailsignature001mb` (
  `emailSignatureId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) DEFAULT NULL,
  `companyWebsite` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `employeeDesignation` varchar(255) DEFAULT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `employeeName` varchar(255) DEFAULT NULL,
  `employeeNamePrefix` varchar(255) DEFAULT NULL,
  `logoLink` varchar(255) DEFAULT NULL,
  `mobileNumber` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`emailSignatureId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailsignature001mb`
--

/*!40000 ALTER TABLE `emailsignature001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailsignature001mb` ENABLE KEYS */;


--
-- Definition of table `empattendance001mb`
--

DROP TABLE IF EXISTS `empattendance001mb`;
CREATE TABLE `empattendance001mb` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `clBalance` varchar(255) DEFAULT NULL,
  `clTaken` varchar(255) DEFAULT NULL,
  `compoffBalance` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `lwtoutpBalance` varchar(255) DEFAULT NULL,
  `lwtoutpTaken` varchar(255) DEFAULT NULL,
  `mtlvBalance` varchar(255) DEFAULT NULL,
  `mtlvTaken` varchar(255) DEFAULT NULL,
  `ptyBalance` varchar(255) DEFAULT NULL,
  `ptyTaken` varchar(255) DEFAULT NULL,
  `pvglvBalance` varchar(255) DEFAULT NULL,
  `pvglvTaken` varchar(255) DEFAULT NULL,
  `sklvBalance` varchar(255) DEFAULT NULL,
  `sklvTaken` varchar(255) DEFAULT NULL,
  `vcBalance` varchar(255) DEFAULT NULL,
  `vcTaken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empattendance001mb`
--

/*!40000 ALTER TABLE `empattendance001mb` DISABLE KEYS */;
INSERT INTO `empattendance001mb` (`Id`,`clBalance`,`clTaken`,`compoffBalance`,`compoffTaken`,`deptName`,`empName`,`empNumber`,`lwtoutpBalance`,`lwtoutpTaken`,`mtlvBalance`,`mtlvTaken`,`ptyBalance`,`ptyTaken`,`pvglvBalance`,`pvglvTaken`,`sklvBalance`,`sklvTaken`,`vcBalance`,`vcTaken`) VALUES 
 (2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (8,'dfss','sfs','fsdfcs','sdfsfs','','','','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','sdfsf','fsdfsdf','fss','sdfsf',NULL,'fsdfs'),
 (9,'dfss','sfs','fsdfcs','sdfsfs','','','','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','sdfsf','fsdfsdf','fss','sdfsf',NULL,'fsdfs'),
 (11,'dfss','sfs','fsdfcs','sdfsfs','','','','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','sdfsf','fsdfsdf','fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (12,'dfss','sfs','fsdfcs','sdfsfs','Dummy3','','Dummy3','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','fsdfsdf','fsdfsdf','fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (13,'','','','','','','','','','','','','','','','','','',''),
 (15,'','','','','','','','','','','','','','','','','','',''),
 (16,'dfvd','dfv','sdc','dfv','','','','dfv','dfv','dfv','vdv','sdc','dv','sdc','sdc','scd','sdc','scd','sdc'),
 (17,'','','','','','','Dummy1','','','','','','','','','','','',''),
 (18,'','ss','','','','','','','','','','','','','','','','',''),
 (19,'','','','','','','','','','','','','','','','','','',''),
 (20,'','','','','','','','','','','','','','','','','','',''),
 (21,'','','','','','','','','','','','','','','','','','',''),
 (22,'dfss','sfs','fsdfcs','sdfsfs','Dummy2','sdfsf','Dummy1','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','fsdfsdf',NULL,'fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (23,'dfss','sfs','fsdfcs','sdfsfs','Dummy1','sdfsf','Dummy1','svd','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','fsdfsdf',NULL,'svd','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (24,'dfss','sfs','sv','sdfsfs','Dummy1','sdv','Dummy1','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','fsdfsdf',NULL,'fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (25,'dfss','sfs','fsdfcs','sdfsfs','Dummy1','dfgbdgbee','Dummy1','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','dfgbdgbee','sfvwsfws','fss','sdfsf','sv','fsdfs'),
 (26,'sd','sfd','fsdfcs','sfd','Dummy1','sdfsf','Dummy2','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf',NULL,'fsdfsdf','fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (27,'dfss','sfs','fsdfcs','sdfsfs','Dummy1','sdfsf','Dummy2','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf',NULL,'fsdfsdf','fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (28,'dfss','sfs','fsdfcs','sdfsfs','Dummy2','sdfsf','Dummy2','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf',NULL,'fsdfsdf','fss','sdfsf','rrrrrrrrrrrr','fsdfs'),
 (29,'dfss','fs','fsdfcs112','sdfsfs','Dummy2','Dummy2','Dummy1','sdcfss','sdfcs','sdss','ssdfsd','fdsfcs','dfsfsf','sdfsf','fsdfsdf','fss','sdfsf','rrrrrrrrrrrr111','fsdfs');
/*!40000 ALTER TABLE `empattendance001mb` ENABLE KEYS */;


--
-- Definition of table `empleavebalance001mb`
--

DROP TABLE IF EXISTS `empleavebalance001mb`;
CREATE TABLE `empleavebalance001mb` (
  `elbId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `clBalance` varchar(255) DEFAULT NULL,
  `clTaken` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `compoffBalance` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `fromDate` varchar(255) DEFAULT NULL,
  `lvwoutpayBalance` varchar(255) DEFAULT NULL,
  `lvwoutpayTaken` varchar(255) DEFAULT NULL,
  `plBalance` varchar(255) DEFAULT NULL,
  `plTaken` varchar(255) DEFAULT NULL,
  `slBalance` varchar(255) DEFAULT NULL,
  `slTaken` varchar(255) DEFAULT NULL,
  `toDate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`elbId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleavebalance001mb`
--

/*!40000 ALTER TABLE `empleavebalance001mb` DISABLE KEYS */;
INSERT INTO `empleavebalance001mb` (`elbId`,`branch`,`clBalance`,`clTaken`,`company`,`compoffBalance`,`compoffTaken`,`deptName`,`empName`,`empNumber`,`fromDate`,`lvwoutpayBalance`,`lvwoutpayTaken`,`plBalance`,`plTaken`,`slBalance`,`slTaken`,`toDate`) VALUES 
 (1,'','','','','','','','','','','','','','','','',''),
 (2,'','','','','','','','','','','','','','','','',''),
 (3,'','','','','','','','','','','','','','','','','');
/*!40000 ALTER TABLE `empleavebalance001mb` ENABLE KEYS */;


--
-- Definition of table `employbirthday001mb`
--

DROP TABLE IF EXISTS `employbirthday001mb`;
CREATE TABLE `employbirthday001mb` (
  `empbirthId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `ebmonth` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empDob` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`empbirthId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employbirthday001mb`
--

/*!40000 ALTER TABLE `employbirthday001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `employbirthday001mb` ENABLE KEYS */;


--
-- Definition of table `employee001mb`
--

DROP TABLE IF EXISTS `employee001mb`;
CREATE TABLE `employee001mb` (
  `sNo` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empDob` varchar(255) DEFAULT NULL,
  `empDoj` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `deptId` int(11) DEFAULT NULL,
  PRIMARY KEY (`sNo`),
  KEY `FK_lfpkw0qe0ooeudqb515f7mer5` (`deptId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee001mb`
--

/*!40000 ALTER TABLE `employee001mb` DISABLE KEYS */;
INSERT INTO `employee001mb` (`sNo`,`branch`,`deptName`,`empCompany`,`empDesign`,`empDob`,`empDoj`,`empGender`,`empName`,`empNumber`,`empStatus`,`deptId`) VALUES 
 (5,'ssd','Dummy1','dwd','sss','22','22','Female','selvam','222','Inactive',NULL),
 (7,'afasfadvsv','Dummy1','asaaa','afa','32','23','Male','SELVAM','23334','Inactive',NULL),
 (33,'afasfa','Dummy2','sfjhk','afa','32','23','Male','sdf333','3423331233333','Inactive',NULL),
 (34,'','','','','','','','','','Active',NULL),
 (35,'afasfa','Dummy1','sf','afa','32','23','Male','sdf','222','Active',NULL),
 (36,'afasfa','Dummy2','sf','afa','32','23','Male','sdf','222','Active',NULL);
/*!40000 ALTER TABLE `employee001mb` ENABLE KEYS */;


--
-- Definition of table `employmenttype001mb`
--

DROP TABLE IF EXISTS `employmenttype001mb`;
CREATE TABLE `employmenttype001mb` (
  `etypeId` int(11) NOT NULL AUTO_INCREMENT,
  `employmentType` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`etypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employmenttype001mb`
--

/*!40000 ALTER TABLE `employmenttype001mb` DISABLE KEYS */;
INSERT INTO `employmenttype001mb` (`etypeId`,`employmentType`) VALUES 
 (1,''),
 (2,'dgdf'),
 (3,'dfdx dff'),
 (6,'sdffwsvw'),
 (7,'ssssss'),
 (10,'1234'),
 (13,'fthrfh'),
 (14,'11'),
 (15,'dbffdbd123');
/*!40000 ALTER TABLE `employmenttype001mb` ENABLE KEYS */;


--
-- Definition of table `empsalaryregister001mb`
--

DROP TABLE IF EXISTS `empsalaryregister001mb`;
CREATE TABLE `empsalaryregister001mb` (
  `esregId` int(11) NOT NULL AUTO_INCREMENT,
  `arrearAmt` varchar(255) DEFAULT NULL,
  `basic` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `grossPay` varchar(255) DEFAULT NULL,
  `incomeTax` varchar(255) DEFAULT NULL,
  `lvencashAmt` varchar(255) DEFAULT NULL,
  `lvwoutPay` varchar(255) DEFAULT NULL,
  `netPay` varchar(255) DEFAULT NULL,
  `paymentDays` varchar(255) DEFAULT NULL,
  `salYear` varchar(255) DEFAULT NULL,
  `salarymonth` varchar(255) DEFAULT NULL,
  `salslipCode` varchar(255) DEFAULT NULL,
  `totalDeduct` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`esregId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empsalaryregister001mb`
--

/*!40000 ALTER TABLE `empsalaryregister001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empsalaryregister001mb` ENABLE KEYS */;


--
-- Definition of table `empworkonholiday001mb`
--

DROP TABLE IF EXISTS `empworkonholiday001mb`;
CREATE TABLE `empworkonholiday001mb` (
  `empwhId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `fromDate` varchar(255) DEFAULT NULL,
  `holiday` varchar(255) DEFAULT NULL,
  `holidayList` varchar(255) DEFAULT NULL,
  `toDate` varchar(255) DEFAULT NULL,
  `whDate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`empwhId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empworkonholiday001mb`
--

/*!40000 ALTER TABLE `empworkonholiday001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empworkonholiday001mb` ENABLE KEYS */;


--
-- Definition of table `expensesclm001mb`
--

DROP TABLE IF EXISTS `expensesclm001mb`;
CREATE TABLE `expensesclm001mb` (
  `expclmId` int(11) NOT NULL AUTO_INCREMENT,
  `expCode` varchar(255) DEFAULT NULL,
  `expType` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `totalclmAmt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`expclmId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expensesclm001mb`
--

/*!40000 ALTER TABLE `expensesclm001mb` DISABLE KEYS */;
INSERT INTO `expensesclm001mb` (`expclmId`,`expCode`,`expType`,`status`,`totalclmAmt`) VALUES 
 (1,'','','',''),
 (3,'123131','Food','Dummy1','21313'),
 (4,'','','',''),
 (5,'','','',''),
 (6,'','','',''),
 (7,'','','',''),
 (8,'','','Dummy1','');
/*!40000 ALTER TABLE `expensesclm001mb` ENABLE KEYS */;


--
-- Definition of table `filemanager001mb`
--

DROP TABLE IF EXISTS `filemanager001mb`;
CREATE TABLE `filemanager001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `content` tinyblob,
  `contenttype` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `loginuser` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filemanager001mb`
--

/*!40000 ALTER TABLE `filemanager001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `filemanager001mb` ENABLE KEYS */;


--
-- Definition of table `fiscalyear001mb`
--

DROP TABLE IF EXISTS `fiscalyear001mb`;
CREATE TABLE `fiscalyear001mb` (
  `yearId` int(11) NOT NULL AUTO_INCREMENT,
  `yearName` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`yearId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fiscalyear001mb`
--

/*!40000 ALTER TABLE `fiscalyear001mb` DISABLE KEYS */;
INSERT INTO `fiscalyear001mb` (`yearId`,`yearName`,`status`) VALUES 
 (1,'2015','Enabled'),
 (2,'2014','Disabled'),
 (3,'2016','Enabled'),
 (4,'2012','Enabled'),
 (5,'2016','Enabled');
/*!40000 ALTER TABLE `fiscalyear001mb` ENABLE KEYS */;


--
-- Definition of table `grossprofit001mb`
--

DROP TABLE IF EXISTS `grossprofit001mb`;
CREATE TABLE `grossprofit001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `salesinvoice` varchar(45) NOT NULL,
  `customer` varchar(45) NOT NULL,
  `postingdate` varchar(45) NOT NULL,
  `itemname` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `warehouse` varchar(45) NOT NULL,
  `project` varchar(45) NOT NULL,
  `currency` varchar(45) NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `averagesellingrate` int(10) unsigned NOT NULL,
  `averagebuyingrate` int(10) unsigned NOT NULL,
  `sellingamount` int(10) unsigned NOT NULL,
  `buyingamount` int(10) unsigned NOT NULL,
  `grossprofit` int(10) unsigned NOT NULL,
  `grosspercentage` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grossprofit001mb`
--

/*!40000 ALTER TABLE `grossprofit001mb` DISABLE KEYS */;
INSERT INTO `grossprofit001mb` (`id`,`salesinvoice`,`customer`,`postingdate`,`itemname`,`description`,`warehouse`,`project`,`currency`,`quantity`,`averagesellingrate`,`averagebuyingrate`,`sellingamount`,`buyingamount`,`grossprofit`,`grosspercentage`) VALUES 
 (40,'dfg','','','','34234','234234','23234','432',243,243,243,243,243,243,432),
 (41,'','','','','','','','',0,0,0,0,0,0,0),
 (42,'dfg','Dummy2','2021-07-18','Dummy3','123','12','234','123',243,234,12,243,243,12,22),
 (43,'SSS','Dummy3','2021-07-10','Dummy3','223','12','234','123',24322,23411112,12,243,243,12,22);
/*!40000 ALTER TABLE `grossprofit001mb` ENABLE KEYS */;


--
-- Definition of table `holidaylist001mb`
--

DROP TABLE IF EXISTS `holidaylist001mb`;
CREATE TABLE `holidaylist001mb` (
  `hlistId` int(11) NOT NULL AUTO_INCREMENT,
  `holidayName` varchar(30) NOT NULL,
  `weeklyOff` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`hlistId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `holidaylist001mb`
--

/*!40000 ALTER TABLE `holidaylist001mb` DISABLE KEYS */;
INSERT INTO `holidaylist001mb` (`hlistId`,`holidayName`,`weeklyOff`) VALUES 
 (3,'Republic_Day','Saturday'),
 (10,'Republic_Day','Dummy2'),
 (11,'Republic_Day2222222','Dummy1');
/*!40000 ALTER TABLE `holidaylist001mb` ENABLE KEYS */;


--
-- Definition of table `inactivecust001mb`
--

DROP TABLE IF EXISTS `inactivecust001mb`;
CREATE TABLE `inactivecust001mb` (
  `inactcustId` int(11) NOT NULL AUTO_INCREMENT,
  `custType` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `numoforder` varchar(20) NOT NULL,
  `totalordval` varchar(30) DEFAULT NULL,
  `totalordcons` varchar(40) DEFAULT NULL,
  `lastordamt` decimal(12,4) DEFAULT NULL,
  `lastorddate` varchar(40) DEFAULT NULL,
  `daysinlstord` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`inactcustId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inactivecust001mb`
--

/*!40000 ALTER TABLE `inactivecust001mb` DISABLE KEYS */;
INSERT INTO `inactivecust001mb` (`inactcustId`,`custType`,`customername`,`terName`,`customergroup`,`numoforder`,`totalordval`,`totalordcons`,`lastordamt`,`lastorddate`,`daysinlstord`) VALUES 
 (2,'','','','','10','3 Lakhs','4','60.0000','','60');
/*!40000 ALTER TABLE `inactivecust001mb` ENABLE KEYS */;


--
-- Definition of table `instalnote001mb`
--

DROP TABLE IF EXISTS `instalnote001mb`;
CREATE TABLE `instalnote001mb` (
  `instId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `remark` varchar(100) NOT NULL,
  `instCode` varchar(40) NOT NULL,
  PRIMARY KEY (`instId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instalnote001mb`
--

/*!40000 ALTER TABLE `instalnote001mb` DISABLE KEYS */;
INSERT INTO `instalnote001mb` (`instId`,`name`,`status`,`remark`,`instCode`) VALUES 
 (1,'Faber','Draft','No Remarks','IN-0098'),
 (3,'jjj','Submitted','dd','IN-0098');
/*!40000 ALTER TABLE `instalnote001mb` ENABLE KEYS */;


--
-- Definition of table `issueditem001mb`
--

DROP TABLE IF EXISTS `issueditem001mb`;
CREATE TABLE `issueditem001mb` (
  `issueId` int(11) NOT NULL AUTO_INCREMENT,
  `porderCode` varchar(50) NOT NULL,
  `issueDate` varchar(50) NOT NULL,
  `Itemcode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(30) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `serialNo` varchar(50) NOT NULL,
  `sourceWH` varchar(50) NOT NULL,
  `targetWH` varchar(50) NOT NULL,
  `stockEntry` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  PRIMARY KEY (`issueId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issueditem001mb`
--

/*!40000 ALTER TABLE `issueditem001mb` DISABLE KEYS */;
INSERT INTO `issueditem001mb` (`issueId`,`porderCode`,`issueDate`,`Itemcode`,`description`,`quantity`,`uom`,`amount`,`serialNo`,`sourceWH`,`targetWH`,`stockEntry`,`company`) VALUES 
 (9,'','','','','','','4345345.0000','','','','',''),
 (10,'','','','','','','4345345.0000','','','','',''),
 (12,'Dummy1','2021-06-11','Dummy3','fgnf','243','szf','24000.0000','sfe','awrgesdthsrth','dfgbrg','waefdw','sdf'),
 (14,'Dummy1','2021-06-12','Dummy1','dfg','dfgv','dfgdg','24000.0000','sfe','awrgesdthsrth','dfth','waefdw','sdvd'),
 (15,'Dummy1','2021-06-12','Dummy1','dfg','dfgv','dfgdg','24000.0000','sfe','awrgesdthsrth','dfth','waefdw','sdvd'),
 (16,'Dummy1','2021-06-12','Dummy1','dfg','dfgv','dfgdg','24000.0000','sfe','awrgesdthsrth','dfth','waefdw','sdvd'),
 (17,'Dummy2','2021-06-18','Dummy2','dssvvggggfgbfdgh','12','dfgdg','24000.0000','sfe','awrgesdthsrth','dfth','waefdwqq','sdf');
/*!40000 ALTER TABLE `issueditem001mb` ENABLE KEYS */;


--
-- Definition of table `itemdt001mb`
--

DROP TABLE IF EXISTS `itemdt001mb`;
CREATE TABLE `itemdt001mb` (
  `Itemid` int(11) NOT NULL AUTO_INCREMENT,
  `Itemcode` varchar(50) DEFAULT NULL,
  `Quantity` smallint(6) NOT NULL,
  `Rate` decimal(12,4) DEFAULT NULL,
  `Amount` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`Itemid`),
  UNIQUE KEY `Itemcode` (`Itemcode`),
  UNIQUE KEY `IDX_edae62f88dd06a0f27b760ad00` (`Itemcode`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemdt001mb`
--

/*!40000 ALTER TABLE `itemdt001mb` DISABLE KEYS */;
INSERT INTO `itemdt001mb` (`Itemid`,`Itemcode`,`Quantity`,`Rate`,`Amount`) VALUES 
 (21,'Wind Mill A Series',10,'100.0000','100.0000'),
 (43,'gggg',243,'24.0000','24000.0000'),
 (45,'www',243,'460000.0000','24000.0000'),
 (51,'Internal Disc',14,'45.2300','454.1120'),
 (87,'cccc',243,'24.0000','24000.0000'),
 (88,'cccc777',243,'24.0000','24000.0000'),
 (89,'hjujbj',777,'460000.0000','24000.0000'),
 (90,'qqqqqqqq',12,'460000.0000','24000.0000'),
 (91,'AAAAAA',243,'460000.0000','11000.0000'),
 (92,'kk',243,'460000.0000','24000.0000'),
 (94,'ewfw',243,'460000.0000','24000.0000'),
 (96,'sam',12,'460000.0000','24000.0000');
/*!40000 ALTER TABLE `itemdt001mb` ENABLE KEYS */;


--
-- Definition of table `itemgroup001mb`
--

DROP TABLE IF EXISTS `itemgroup001mb`;
CREATE TABLE `itemgroup001mb` (
  `igId` int(11) NOT NULL AUTO_INCREMENT,
  `itemGroup` varchar(50) NOT NULL,
  PRIMARY KEY (`igId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemgroup001mb`
--

/*!40000 ALTER TABLE `itemgroup001mb` DISABLE KEYS */;
INSERT INTO `itemgroup001mb` (`igId`,`itemGroup`) VALUES 
 (7,'ghghhdfgvsg'),
 (8,'ghghh'),
 (9,'ghghh'),
 (11,'fgd123'),
 (15,'jjj'),
 (17,'dfgerdrrr'),
 (18,'ghghh');
/*!40000 ALTER TABLE `itemgroup001mb` ENABLE KEYS */;


--
-- Definition of table `itemprice001mb`
--

DROP TABLE IF EXISTS `itemprice001mb`;
CREATE TABLE `itemprice001mb` (
  `ipId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  PRIMARY KEY (`ipId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemprice001mb`
--

/*!40000 ALTER TABLE `itemprice001mb` DISABLE KEYS */;
INSERT INTO `itemprice001mb` (`ipId`,`itemCode`,`status`,`itemGroup`) VALUES 
 (3,'Shaft','Variant','Sub-assemblies'),
 (6,'Dummy2','Template','Raw Materials'),
 (12,'Dummy1','Template','Products');
/*!40000 ALTER TABLE `itemprice001mb` ENABLE KEYS */;


--
-- Definition of table `itempricereport001mb`
--

DROP TABLE IF EXISTS `itempricereport001mb`;
CREATE TABLE `itempricereport001mb` (
  `itpricesId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `UOM` varchar(30) NOT NULL,
  `lstPurchase` varchar(40) NOT NULL,
  `valuationRate` decimal(12,4) DEFAULT NULL,
  `spList` varchar(50) NOT NULL,
  `ppList` varchar(50) NOT NULL,
  `bomRate` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`itpricesId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempricereport001mb`
--

/*!40000 ALTER TABLE `itempricereport001mb` DISABLE KEYS */;
INSERT INTO `itempricereport001mb` (`itpricesId`,`itemCode`,`itemGroup`,`description`,`UOM`,`lstPurchase`,`valuationRate`,`spList`,`ppList`,`bomRate`) VALUES 
 (2,'Dummy2','Dummy2','fgjhfgyjhfgjhfgyyjhfghfhfhhgf','dfgdg','ertgetge','1234.0000','gnhnfghnfgh','fghhfhf','1200000.0000'),
 (3,'Dummy3','Dummy3','ddfghtfhrtfhrthtfgghjh','dfgdgfd','dfgdg','1234.0000','gnhn','fghhfhf','1200000.0000');
/*!40000 ALTER TABLE `itempricereport001mb` ENABLE KEYS */;


--
-- Definition of table `itempuhist001mb`
--

DROP TABLE IF EXISTS `itempuhist001mb`;
CREATE TABLE `itempuhist001mb` (
  `histId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `itemGroup` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `uom` varchar(20) NOT NULL,
  `date` varchar(40) DEFAULT NULL,
  `amount` varchar(40) NOT NULL,
  `poSeries` varchar(40) DEFAULT NULL,
  `transDate` varchar(50) DEFAULT NULL,
  `supplier` varchar(40) DEFAULT NULL,
  `receivedqty` varchar(40) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  PRIMARY KEY (`histId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempuhist001mb`
--

/*!40000 ALTER TABLE `itempuhist001mb` DISABLE KEYS */;
INSERT INTO `itempuhist001mb` (`histId`,`itemCode`,`itemGroup`,`description`,`quantity`,`uom`,`date`,`amount`,`poSeries`,`transDate`,`supplier`,`receivedqty`,`company`) VALUES 
 (1,'Table','Raw Material','3.4.in l and 4.5.in w','4','Nos','10/10/2016','amount','Material Transfer','11/11/2016','Asiatic Solution','3','Dell'),
 (3,'Dummy1','Raw Materials','Good','4','Nos','10/18/2016','20000','Material Issue','10/29/2016','Asiatic Solution','1000','Dell'),
 (4,'Dummy1','Products','sedgrs','156757','szf','iiik','24000.000033','Manufacture','10/29/2016','KSMerchandise','10','sdf');
/*!40000 ALTER TABLE `itempuhist001mb` ENABLE KEYS */;


--
-- Definition of table `itemshortagerep001mb`
--

DROP TABLE IF EXISTS `itemshortagerep001mb`;
CREATE TABLE `itemshortagerep001mb` (
  `shrepId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `actualQty` decimal(12,4) DEFAULT NULL,
  `orderedQty` decimal(12,4) DEFAULT NULL,
  `plannedQty` decimal(12,4) DEFAULT NULL,
  `reservedQty` decimal(12,4) DEFAULT NULL,
  `projectedQty` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`shrepId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemshortagerep001mb`
--

/*!40000 ALTER TABLE `itemshortagerep001mb` DISABLE KEYS */;
INSERT INTO `itemshortagerep001mb` (`shrepId`,`warehouseName`,`itemCode`,`actualQty`,`orderedQty`,`plannedQty`,`reservedQty`,`projectedQty`) VALUES 
 (1,'SPL','Table','12.0000','10.0000','15.0000','5.0000','13.0000'),
 (2,'SSPDL','Internal Disc','45.0000','12.0000','30.0000','24.0000','25.0000'),
 (3,'Dummy2','Dummy3','45.0000','12.0000','15.0000','12.0000','1234.0000');
/*!40000 ALTER TABLE `itemshortagerep001mb` ENABLE KEYS */;


--
-- Definition of table `itemst001mb`
--

DROP TABLE IF EXISTS `itemst001mb`;
CREATE TABLE `itemst001mb` (
  `itemstId` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  `itemGroup` varchar(40) NOT NULL,
  PRIMARY KEY (`itemstId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemst001mb`
--

/*!40000 ALTER TABLE `itemst001mb` DISABLE KEYS */;
INSERT INTO `itemst001mb` (`itemstId`,`itemcode`,`status`,`itemGroup`) VALUES 
 (7,'','',''),
 (8,'','',''),
 (9,'','Disabled','Sub Assemblies'),
 (10,'','',''),
 (11,'','',''),
 (12,'','Enabled','Sub Assemblies'),
 (13,'','',''),
 (14,'','',''),
 (15,'','',''),
 (16,'Dummy2','Disabled','Raw Materials'),
 (18,'','',''),
 (19,'','',''),
 (22,'Dummy1','Variant','Products'),
 (23,'undefined','Variant','Products'),
 (24,'Dummy2','Enabled','Products'),
 (25,'Dummy1','Enabled','Products');
/*!40000 ALTER TABLE `itemst001mb` ENABLE KEYS */;


--
-- Definition of table `itemwiselevel001mb`
--

DROP TABLE IF EXISTS `itemwiselevel001mb`;
CREATE TABLE `itemwiselevel001mb` (
  `iwlId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `safetyStk` varchar(50) NOT NULL,
  `leadtimeDays` decimal(12,4) DEFAULT NULL,
  `consumed` decimal(12,4) DEFAULT NULL,
  `delivered` decimal(12,4) DEFAULT NULL,
  `totalOutgoing` decimal(12,4) DEFAULT NULL,
  `avgdailyOutgoing` decimal(12,4) DEFAULT NULL,
  `reorderLevel` varchar(50) NOT NULL,
  PRIMARY KEY (`iwlId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwiselevel001mb`
--

/*!40000 ALTER TABLE `itemwiselevel001mb` DISABLE KEYS */;
INSERT INTO `itemwiselevel001mb` (`iwlId`,`itemCode`,`description`,`safetyStk`,`leadtimeDays`,`consumed`,`delivered`,`totalOutgoing`,`avgdailyOutgoing`,`reorderLevel`) VALUES 
 (1,'Table','Badhghjjggy','12','25.0000','12.0000','10.0000','50.0000','10.0000','normal'),
 (2,'Dummy1','dfgdgdddddddddd','fdgdgdg','25.0000','25.0000','25.0000','25.0000','25.0000','dfgdg');
/*!40000 ALTER TABLE `itemwiselevel001mb` ENABLE KEYS */;


--
-- Definition of table `itemwisepurregister001mb`
--

DROP TABLE IF EXISTS `itemwisepurregister001mb`;
CREATE TABLE `itemwisepurregister001mb` (
  `iwprId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `inVoice` varchar(50) NOT NULL,
  `postingDate` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `payAccount` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purtName` varchar(50) NOT NULL,
  `expenseAccount` varchar(50) DEFAULT NULL,
  `quantity` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  `currency` varchar(50) NOT NULL,
  PRIMARY KEY (`iwprId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwisepurregister001mb`
--

/*!40000 ALTER TABLE `itemwisepurregister001mb` DISABLE KEYS */;
INSERT INTO `itemwisepurregister001mb` (`iwprId`,`itemCode`,`itemGroup`,`inVoice`,`postingDate`,`supName`,`payAccount`,`paymentMode`,`projectname`,`company`,`poSeries`,`purtName`,`expenseAccount`,`quantity`,`rate`,`amount`,`totalTax`,`total`,`currency`) VALUES 
 (10,'','','','','','','','','','','','','','460000.0000','1243213.0000','13.0000','1233.0000',''),
 (13,'Dummy1','Distributor','11','2','Electrical','23','Cash','Dummy1','sdf','Dummy1','Dummy2','132','243','460.0000','24000.0000','1235.0000','25235.0000','Dummy3');
/*!40000 ALTER TABLE `itemwisepurregister001mb` ENABLE KEYS */;


--
-- Definition of table `jounalentry001mb`
--

DROP TABLE IF EXISTS `jounalentry001mb`;
CREATE TABLE `jounalentry001mb` (
  `jeId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `status` varchar(50) NOT NULL,
  `referenceNumber` varchar(50) NOT NULL,
  `jeSeries` varchar(50) NOT NULL,
  `postingDate` varchar(50) NOT NULL,
  `referenceDate` varchar(50) NOT NULL,
  `accountName` varchar(50) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `credit` varchar(50) NOT NULL,
  `debit` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  PRIMARY KEY (`jeId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jounalentry001mb`
--

/*!40000 ALTER TABLE `jounalentry001mb` DISABLE KEYS */;
INSERT INTO `jounalentry001mb` (`jeId`,`title`,`status`,`referenceNumber`,`jeSeries`,`postingDate`,`referenceDate`,`accountName`,`partyName`,`credit`,`debit`,`docStatus`) VALUES 
 (6,'','','','','','','','','','',''),
 (10,'','','','','','','','','','',''),
 (11,'','','','','','','','','','',''),
 (12,'sdf','Credit Card Entry','dfvd','dfv','2','2332','','','131','2314',''),
 (13,'sdf','Credit Card Entry','77777','dfv','2','2332','','','131','2314',''),
 (14,'sdf','Credit Card Entry','77777','dfv','2','2332','Savings','Dummy2','131','2314','Dummy2');
/*!40000 ALTER TABLE `jounalentry001mb` ENABLE KEYS */;


--
-- Definition of table `landcostvouch001mb`
--

DROP TABLE IF EXISTS `landcostvouch001mb`;
CREATE TABLE `landcostvouch001mb` (
  `vouchId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(40) NOT NULL,
  `recptdocType` varchar(50) NOT NULL,
  `recptdoc` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `grandTotal` varchar(50) NOT NULL,
  PRIMARY KEY (`vouchId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `landcostvouch001mb`
--

/*!40000 ALTER TABLE `landcostvouch001mb` DISABLE KEYS */;
INSERT INTO `landcostvouch001mb` (`vouchId`,`series`,`company`,`recptdocType`,`recptdoc`,`supName`,`grandTotal`) VALUES 
 (1,'LCV-001','Dell','Purchase Invoice','RC-001','Asiatic Solution','12000');
/*!40000 ALTER TABLE `landcostvouch001mb` ENABLE KEYS */;


--
-- Definition of table `lead001mb`
--

DROP TABLE IF EXISTS `lead001mb`;
CREATE TABLE `lead001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personname` varchar(30) NOT NULL,
  `organisationname` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `source` varchar(30) NOT NULL,
  `leadowner` varchar(50) NOT NULL,
  `nextcontactby` varchar(50) DEFAULT NULL,
  `leadtype` varchar(50) DEFAULT NULL,
  `marketsegment` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lead001mb`
--

/*!40000 ALTER TABLE `lead001mb` DISABLE KEYS */;
INSERT INTO `lead001mb` (`id`,`personname`,`organisationname`,`status`,`source`,`leadowner`,`nextcontactby`,`leadtype`,`marketsegment`) VALUES 
 (16,'dhiyakumar','karyatechnologies','initated','calling','lead','xyz@gmail.com','consultant','incomelow'),
 (20,'','','','','','','',''),
 (21,'','','','','','','',''),
 (22,'','','','','','','',''),
 (23,'adada','asd','ads','ads','ads','ads','das','das'),
 (24,'','','','','','','','');
/*!40000 ALTER TABLE `lead001mb` ENABLE KEYS */;


--
-- Definition of table `leaddetail001mb`
--

DROP TABLE IF EXISTS `leaddetail001mb`;
CREATE TABLE `leaddetail001mb` (
  `leadId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(40) NOT NULL,
  `companyName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `state` varchar(40) NOT NULL,
  `pinCode` varchar(30) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `mobileNo` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `leadOwner` varchar(50) NOT NULL,
  `terName` varchar(40) NOT NULL,
  PRIMARY KEY (`leadId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaddetail001mb`
--

/*!40000 ALTER TABLE `leaddetail001mb` DISABLE KEYS */;
INSERT INTO `leaddetail001mb` (`leadId`,`leadName`,`companyName`,`status`,`address`,`state`,`pinCode`,`country`,`phone`,`mobileNo`,`email`,`leadOwner`,`terName`) VALUES 
 (2,'','','','','','','','','','','',''),
 (3,'fdth','fd','','fjd','dddfj','fd','fjd','fdj','fdj','dfj','dfj','');
/*!40000 ALTER TABLE `leaddetail001mb` ENABLE KEYS */;


--
-- Definition of table `leaveapp001mb`
--

DROP TABLE IF EXISTS `leaveapp001mb`;
CREATE TABLE `leaveapp001mb` (
  `lvappId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `leaveType` varchar(30) NOT NULL,
  `reason` varchar(30) NOT NULL,
  `fromDate` varchar(30) NOT NULL,
  `toDate` varchar(30) NOT NULL,
  `leaveApprover` varchar(30) NOT NULL,
  `postingDate` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`lvappId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaveapp001mb`
--

/*!40000 ALTER TABLE `leaveapp001mb` DISABLE KEYS */;
INSERT INTO `leaveapp001mb` (`lvappId`,`series`,`leaveType`,`reason`,`fromDate`,`toDate`,`leaveApprover`,`postingDate`,`sNo`,`company`,`empNumber`,`deptName`) VALUES 
 (5,'LEV/007','Approved','Personal Reason','10/19/2016','10/11/2016','HRM','10/19/2016',NULL,'Hyundai pvt Ltd','EMP_06',NULL),
 (6,'','','','','','','',NULL,'','',''),
 (7,'','','','','','','',NULL,'','',''),
 (8,'','','','','','','',NULL,'','',''),
 (10,'','','','','','','',NULL,'','',''),
 (11,'','','','','','','',NULL,'','',''),
 (12,'','','','','','','',NULL,'','',''),
 (13,'','','','','','','',NULL,'','',''),
 (14,'asc','Dummy2','sdvsvds','3223','232','','2322',NULL,'','Dummy3',''),
 (15,'dvfd','Dummy3','sdfvd','232','232','','2',NULL,'','Dummy2',''),
 (16,'','','','','','','',NULL,'','',''),
 (17,'','','','','','Dummy3','',NULL,'','',''),
 (18,'sdcs','Dummy1','sdvsdv','2323','232','Dummy2','2',NULL,'','Dummy3',''),
 (19,'dcsd','Dummy1','dgsgvb','434','343','Dummy3','343',NULL,'','Dummy1',''),
 (20,'','','','','','','',NULL,'dgbd','',''),
 (21,'vfsv','Dummy2','fgbdfb','423423','3424','Dummy3','34535',NULL,'dfh','Dummy2',''),
 (22,'','','','','','','',NULL,'','',''),
 (23,'LEV/007','Dummy1','Personal Reason','10/19/2016','10/11/2016','Dummy1','10/19/2016',NULL,'Hyundai pvt Ltd','Dummy1',''),
 (24,'','','','','','','',NULL,'','',''),
 (25,'dvfd','Dummy3','sdfvd','232','232','','2',NULL,'','Dummy2',''),
 (26,'','','','','','','',NULL,'','',''),
 (27,'','','','','','','',NULL,'','',''),
 (28,'','','','','','','',NULL,'','',''),
 (35,'vfsvccgh1135','Dummy1','ftgfhvghfyyyyyrrree','322355','232','Dummy2','2',NULL,'sdffhf','Dummy3','');
/*!40000 ALTER TABLE `leaveapp001mb` ENABLE KEYS */;


--
-- Definition of table `leavetype001mb`
--

DROP TABLE IF EXISTS `leavetype001mb`;
CREATE TABLE `leavetype001mb` (
  `lvtypeId` int(11) NOT NULL AUTO_INCREMENT,
  `lvtypeName` varchar(30) NOT NULL,
  `maxdaysAllowed` int(11) NOT NULL,
  PRIMARY KEY (`lvtypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leavetype001mb`
--

/*!40000 ALTER TABLE `leavetype001mb` DISABLE KEYS */;
INSERT INTO `leavetype001mb` (`lvtypeId`,`lvtypeName`,`maxdaysAllowed`) VALUES 
 (3,'Maternity',10),
 (5,'Paternity',25),
 (6,'',878787),
 (8,'',0),
 (9,'',0),
 (10,'Dummy2',878787),
 (11,'Dummy2',878787),
 (12,'',0),
 (14,'Dummy3',878787),
 (15,'Dummy1',12345678),
 (16,'Dummy1',878787123);
/*!40000 ALTER TABLE `leavetype001mb` ENABLE KEYS */;


--
-- Definition of table `login001mb`
--

DROP TABLE IF EXISTS `login001mb`;
CREATE TABLE `login001mb` (
  `loginid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `domain` varchar(30) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT '1',
  `securityquestion` varchar(45) NOT NULL,
  `securityanswer` varchar(45) NOT NULL,
  `message` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`loginid`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login001mb`
--

/*!40000 ALTER TABLE `login001mb` DISABLE KEYS */;
INSERT INTO `login001mb` (`loginid`,`firstname`,`lastname`,`domain`,`username`,`password`,`enabled`,`securityquestion`,`securityanswer`,`message`) VALUES 
 (6,'sivakumar','karunamoorthy','Manufacturing','siva','$2a$11$XaR4NsoCw/Uw5IRWX.7gpenfdrPOv8886So3B02IcnL7VVE/J0i7m',0,'What was your childhood nickname ?','tiger123','testing'),
 (7,'kannan','mathiyalagan','Manufacturing','kannan','$2a$11$2N69AGoLLDfv0p1Hgrx3YeAw/d7phkAXdXMsyH539L9jaQmOFxUV6',0,'What was your childhood nickname ?','testing123','testing'),
 (8,'karya Tech','karya Tech','Manufacturing','karya','$2a$11$IRaX57IBLbMiRpxvd/PYpuqfGGemBg7e4kNKNfpNhPMMMWANi3NYS',0,'What was your childhood nickname ?','testing123','testing'),
 (43,'girija','kumari','School','girija','$2a$11$WL.BLgqXSmaLZ/DmGxKffuuZxOT8xWfgUnG6wDItnn8BKRVydxq8C',0,'What was your childhood nickname ?','testing123456','testing456'),
 (44,'naresh','naresh','Buying House','naresh','$2a$11$Il8WVsibPf8nHuGYplrimuf/uerDdSYIIk4sGZr05BwhvoFjOo.j.',0,'What was your childhood nickname ?','testing123','testing123'),
 (45,'Iswarya','ravikumar','Calibration Labs','iswarya','$2a$11$p59HJTAlHslvqWSIBFG/Pu7yWveJkNjUdyYzCxJWZXRvgDV2l8KJm',0,'What was your childhood nickname ?','testing','test');
/*!40000 ALTER TABLE `login001mb` ENABLE KEYS */;


--
-- Definition of table `lvblocklist001mb`
--

DROP TABLE IF EXISTS `lvblocklist001mb`;
CREATE TABLE `lvblocklist001mb` (
  `lvblockId` int(11) NOT NULL AUTO_INCREMENT,
  `blockName` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`lvblockId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lvblocklist001mb`
--

/*!40000 ALTER TABLE `lvblocklist001mb` DISABLE KEYS */;
INSERT INTO `lvblocklist001mb` (`lvblockId`,`blockName`,`sNo`,`company`) VALUES 
 (16,'dtgb12345',NULL,'Dummy3'),
 (17,'dtgb',NULL,'Dummy1');
/*!40000 ALTER TABLE `lvblocklist001mb` ENABLE KEYS */;


--
-- Definition of table `manufactureset001mb`
--

DROP TABLE IF EXISTS `manufactureset001mb`;
CREATE TABLE `manufactureset001mb` (
  `mansetId` int(11) NOT NULL AUTO_INCREMENT,
  `disableCPandTT` varchar(20) NOT NULL,
  `allowOT` varchar(20) NOT NULL,
  `allowProdinholy` varchar(20) NOT NULL,
  `prodPercent` decimal(12,4) NOT NULL,
  `backflushRM` varchar(40) NOT NULL,
  `capacityPlan` varchar(30) NOT NULL,
  `timebwOpern` varchar(30) DEFAULT NULL,
  `defworkinProgWH` varchar(50) NOT NULL,
  `defFingoodsWH` varchar(50) NOT NULL,
  PRIMARY KEY (`mansetId`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufactureset001mb`
--

/*!40000 ALTER TABLE `manufactureset001mb` DISABLE KEYS */;
INSERT INTO `manufactureset001mb` (`mansetId`,`disableCPandTT`,`allowOT`,`allowProdinholy`,`prodPercent`,`backflushRM`,`capacityPlan`,`timebwOpern`,`defworkinProgWH`,`defFingoodsWH`) VALUES 
 (18,'1','0','1','342.0000','drg','sdg','serg','All Warehouses-WPL','Supplier-WPL'),
 (20,'0','1','0','66.0000','sdrg','df','sdfg','Work-in Progress-WPL','Supplier-WPL'),
 (21,'1','1','1','666.0000','','','','',''),
 (22,'0','0','0','342.0000','','','','',''),
 (23,'0','0','0','667.0000','null','null','null','null','null'),
 (24,'1','1','0','342.0000','sd','ds','ds','Sales-WPL','Supplier-WPL'),
 (25,'1','1','1','342.0000','sf','test','sf','Supplier-WPL','Supplier-WPL'),
 (26,'1','1','1','342.0000','sf','test','sef','Supplier-WPL','Sales-WPL'),
 (27,'1','1','1','24.0000','sf','sf','sef','Sales-WPL','Sales-WPL'),
 (28,'1','1','0','24.0000','zsdvfa','adsva','asdvas','Sales-WPL','Sales-WPL'),
 (29,'1','1','0','24.0000','sf','test','sef','Work-in Progress-WPL','Supplier-WPL');
/*!40000 ALTER TABLE `manufactureset001mb` ENABLE KEYS */;


--
-- Definition of table `matchpayment001mb`
--

DROP TABLE IF EXISTS `matchpayment001mb`;
CREATE TABLE `matchpayment001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(45) NOT NULL,
  `partytype` varchar(45) NOT NULL,
  `party` varchar(45) NOT NULL,
  `receivableorpayableaccount` varchar(45) NOT NULL,
  `fromdate` varchar(45) NOT NULL,
  `todate` varchar(45) NOT NULL,
  `bankorcashaccount` varchar(45) NOT NULL,
  `minimuminvoiceamount` int(10) unsigned NOT NULL,
  `maximuminvoiceamount` int(10) unsigned NOT NULL,
  `refName` varchar(50) NOT NULL,
  `invoiceNumber` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `allocatedamount` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matchpayment001mb`
--

/*!40000 ALTER TABLE `matchpayment001mb` DISABLE KEYS */;
INSERT INTO `matchpayment001mb` (`id`,`company`,`partytype`,`party`,`receivableorpayableaccount`,`fromdate`,`todate`,`bankorcashaccount`,`minimuminvoiceamount`,`maximuminvoiceamount`,`refName`,`invoiceNumber`,`amount`,`allocatedamount`) VALUES 
 (4,'IBM','Supplier','Mithra','Payable','11/17/2016','11/10/2016','Bank',123,12345,'John','12876','120988.0000','12345.0000'),
 (5,'sdfsfg','','','','','','',252,253235,'sdhd','23442','2324.0000','24234.0000'),
 (8,'sdfsfg','','','','','','',252,253235,'sdhd','23442','2324.0000','24234.0000'),
 (9,'sdfsfg','','','','','','',252,253235,'sdhd','23442','2324.0000','24234.0000'),
 (10,'','','','','','','',24324,235,'243','234','234.0000','423.0000'),
 (11,'','','','','','','',24324,235,'243','234','234.0000','423.0000'),
 (12,'','','','','','','',24324,235,'243','234','234.0000','423.0000');
/*!40000 ALTER TABLE `matchpayment001mb` ENABLE KEYS */;


--
-- Definition of table `materialrequest001mb`
--

DROP TABLE IF EXISTS `materialrequest001mb`;
CREATE TABLE `materialrequest001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `actual` int(30) NOT NULL,
  `requested` int(30) NOT NULL,
  `reserved` int(30) NOT NULL,
  `ordered` int(30) NOT NULL,
  `projected` int(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materialrequest001mb`
--

/*!40000 ALTER TABLE `materialrequest001mb` DISABLE KEYS */;
INSERT INTO `materialrequest001mb` (`id`,`item`,`warehouse`,`actual`,`requested`,`reserved`,`ordered`,`projected`) VALUES 
 (1,'material','spl',12,20,10,25,15),
 (3,'shaft','spl-warehouse',45,45,93,70,60);
/*!40000 ALTER TABLE `materialrequest001mb` ENABLE KEYS */;


--
-- Definition of table `matreqsunotcreate001mb`
--

DROP TABLE IF EXISTS `matreqsunotcreate001mb`;
CREATE TABLE `matreqsunotcreate001mb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `date` varchar(40) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matreqsunotcreate001mb`
--

/*!40000 ALTER TABLE `matreqsunotcreate001mb` DISABLE KEYS */;
INSERT INTO `matreqsunotcreate001mb` (`mrsId`,`mrSeries`,`date`,`itemCode`,`quantity`,`description`,`company`) VALUES 
 (2,'MRSER-001','12/10/2016','Table','10','3/4in.*2ft*4ft plywood','dell663');
/*!40000 ALTER TABLE `matreqsunotcreate001mb` ENABLE KEYS */;


--
-- Definition of table `menu001mb`
--

DROP TABLE IF EXISTS `menu001mb`;
CREATE TABLE `menu001mb` (
  `menuid` int(10) NOT NULL AUTO_INCREMENT,
  `menuname` varchar(25) NOT NULL,
  `menulink` varchar(75) DEFAULT NULL,
  `menutype` enum('Main-Menu','Child-Menu','Page-Main-Menu','Page-Child-Menu') DEFAULT NULL,
  `parentid` int(10) DEFAULT '0',
  `parentname` varchar(25) DEFAULT NULL,
  `domain` varchar(25) NOT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu001mb`
--

/*!40000 ALTER TABLE `menu001mb` DISABLE KEYS */;
INSERT INTO `menu001mb` (`menuid`,`menuname`,`menulink`,`menutype`,`parentid`,`parentname`,`domain`) VALUES 
 (1,'Manufacturing',NULL,'Main-Menu',0,NULL,'Manufacturing'),
 (2,'Production','/TestAndReportStudio/ProdOrderDetails/prodorder','Child-Menu',1,'Manufacturing','Manufacturing'),
 (3,'Bill of Materials','/TestAndReportStudio/BomDetails/billofmaterial?menulink=manufacturing','Child-Menu',1,'Manufacturing','Manufacturing'),
 (4,'Tools','/TestAndReportStudio/BomDetails/manufacturetools','Child-Menu',1,'Manufacturing','Manufacturing'),
 (5,'SetUp','/TestAndReportStudio/ManufactureDetails/manufacture','Child-Menu',1,'Manufacturing','Manufacturing'),
 (6,'Reports','/TestAndReportStudio/ProductionReportDetails/openprorder','Child-Menu',1,'Manufacturing','Manufacturing'),
 (7,'Help',NULL,'Child-Menu',1,'Manufacturing','Manufacturing'),
 (8,'Accounts',NULL,'Main-Menu',0,NULL,'Manufacturing'),
 (9,'Billing','/TestAndReportStudio/Billing/accountsreceivable','Child-Menu',8,'Accounts','Manufacturing'),
 (10,'Company and Accounts','/TestAndReportStudio/CompanyAndAccounts/generalledger','Child-Menu',8,'Accounts','Manufacturing'),
 (11,'Masters','/TestAndReportStudio/Masters/asset','Child-Menu',8,'Accounts','Manufacturing'),
 (12,'Accounting Statements','/TestAndReportStudio/AccountingStatements/trialbalance','Child-Menu',8,'Accounts','Manufacturing'),
 (13,'Banking Payments','/TestAndReportStudio/BankingAndPayments/updatebank','Child-Menu',8,'Accounts','Manufacturing'),
 (14,'Taxes','/TestAndReportStudio/Taxes/salestaxes','Child-Menu',8,'Accounts','Manufacturing'),
 (15,'Budget and Cost Center','/TestAndReportStudio/BudgetAndCostCenter/budgetvariancereport','Child-Menu',8,'Accounts','Manufacturing'),
 (16,'Tools','/TestAndReportStudio/Tools/periodclosingvoucher','Child-Menu',8,'Accounts','Manufacturing'),
 (17,'SetUp','/TestAndReportStudio/SetUp/setup','Child-Menu',8,'Accounts','Manufacturing'),
 (18,'To Bill','/TestAndReportStudio/ToBill/ordereditemstobebilled?menulink=ToBill','Child-Menu',8,'Accounts','Manufacturing'),
 (19,'Analytics','/TestAndReportStudio/GrossProfit/grossprofit?menulink=Analytics','Child-Menu',8,'Accounts','Manufacturing'),
 (20,'Other Reports',NULL,'Child-Menu',8,'Accounts','Manufacturing'),
 (21,'Help',NULL,'Child-Menu',8,'Accounts','Manufacturing');
/*!40000 ALTER TABLE `menu001mb` ENABLE KEYS */;


--
-- Definition of table `monthlyattendsheet001mb`
--

DROP TABLE IF EXISTS `monthlyattendsheet001mb`;
CREATE TABLE `monthlyattendsheet001mb` (
  `atsId` int(11) NOT NULL AUTO_INCREMENT,
  `attYear` varchar(50) NOT NULL,
  `empNumber` varchar(50) NOT NULL,
  `empName` varchar(50) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `deptName` varchar(50) NOT NULL,
  `empDesign` varchar(50) NOT NULL,
  `empCompany` varchar(50) NOT NULL,
  `one1` varchar(10) DEFAULT NULL,
  `two2` varchar(10) DEFAULT NULL,
  `three3` varchar(10) DEFAULT NULL,
  `four4` varchar(10) DEFAULT NULL,
  `five5` varchar(10) DEFAULT NULL,
  `six6` varchar(10) DEFAULT NULL,
  `seven7` varchar(10) DEFAULT NULL,
  `eight8` varchar(10) DEFAULT NULL,
  `nine9` varchar(10) DEFAULT NULL,
  `ten10` varchar(10) DEFAULT NULL,
  `eleven11` varchar(10) DEFAULT NULL,
  `twelve12` varchar(10) DEFAULT NULL,
  `thirteen13` varchar(10) DEFAULT NULL,
  `fourteen14` varchar(10) DEFAULT NULL,
  `fifteen15` varchar(10) DEFAULT NULL,
  `sixteen16` varchar(10) DEFAULT NULL,
  `seventeen17` varchar(10) DEFAULT NULL,
  `eighteen18` varchar(10) DEFAULT NULL,
  `nineteen19` varchar(10) DEFAULT NULL,
  `twenty20` varchar(10) DEFAULT NULL,
  `twentyone21` varchar(10) DEFAULT NULL,
  `twentytwo22` varchar(10) DEFAULT NULL,
  `twentythree23` varchar(10) DEFAULT NULL,
  `twentyfour24` varchar(10) DEFAULT NULL,
  `twentyfive25` varchar(10) DEFAULT NULL,
  `twentysix26` varchar(10) DEFAULT NULL,
  `twentyseven27` varchar(10) DEFAULT NULL,
  `twentyeight28` varchar(10) DEFAULT NULL,
  `twentynine29` varchar(10) DEFAULT NULL,
  `thirty30` varchar(10) DEFAULT NULL,
  `totalPresent` decimal(12,4) DEFAULT NULL,
  `totalAbsent` decimal(12,4) DEFAULT NULL,
  `months` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`atsId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthlyattendsheet001mb`
--

/*!40000 ALTER TABLE `monthlyattendsheet001mb` DISABLE KEYS */;
INSERT INTO `monthlyattendsheet001mb` (`atsId`,`attYear`,`empNumber`,`empName`,`branch`,`deptName`,`empDesign`,`empCompany`,`one1`,`two2`,`three3`,`four4`,`five5`,`six6`,`seven7`,`eight8`,`nine9`,`ten10`,`eleven11`,`twelve12`,`thirteen13`,`fourteen14`,`fifteen15`,`sixteen16`,`seventeen17`,`eighteen18`,`nineteen19`,`twenty20`,`twentyone21`,`twentytwo22`,`twentythree23`,`twentyfour24`,`twentyfive25`,`twentysix26`,`twentyseven27`,`twentyeight28`,`twentynine29`,`thirty30`,`totalPresent`,`totalAbsent`,`months`) VALUES 
 (1,'2015','EMP_011','Zukutakitoteka','Production','Research & Development','Android Developer','IBM','PRE','ABS','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','29.0000','1.0000','November'),
 (3,'2014','EMP_07','Hatsue Kashiwagi','Testing','Quality Management','Junior Engineer','Wheels India','ABS','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','ABS','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','PRE','ABS','27.0000','3.0000','November');
/*!40000 ALTER TABLE `monthlyattendsheet001mb` ENABLE KEYS */;


--
-- Definition of table `openprodorder001mb`
--

DROP TABLE IF EXISTS `openprodorder001mb`;
CREATE TABLE `openprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `openprodorder001mb`
--

/*!40000 ALTER TABLE `openprodorder001mb` DISABLE KEYS */;
INSERT INTO `openprodorder001mb` (`prodId`,`prorderCode`,`date`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`) VALUES 
 (65,'Dummy2','07/31/2021','Dummy2','sf','ad','sf'),
 (66,'Dummy2','08/02/2021','Dummy3','sf','ad','sf'),
 (67,'Dummy2','07/28/2021','Dummy1','sf','ad','sf'),
 (68,'Dummy2','07/28/2021','Dummy1','sf','ad','sf');
/*!40000 ALTER TABLE `openprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `operationbom001mb`
--

DROP TABLE IF EXISTS `operationbom001mb`;
CREATE TABLE `operationbom001mb` (
  `opId` int(11) NOT NULL AUTO_INCREMENT,
  `opName` varchar(50) NOT NULL,
  `workstName` varchar(50) NOT NULL,
  PRIMARY KEY (`opId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operationbom001mb`
--

/*!40000 ALTER TABLE `operationbom001mb` DISABLE KEYS */;
INSERT INTO `operationbom001mb` (`opId`,`opName`,`workstName`) VALUES 
 (7,'',''),
 (8,'',''),
 (9,'null','null'),
 (10,'null','null'),
 (12,'',''),
 (13,'',''),
 (15,'cgbfdb','Dummy1'),
 (16,'cvbdbd','Dummy1'),
 (17,'fhgdht','Dummy1'),
 (18,'cgbfdb','Dummy2'),
 (19,'',''),
 (20,'null','null'),
 (21,'null','null'),
 (22,'null','null');
/*!40000 ALTER TABLE `operationbom001mb` ENABLE KEYS */;


--
-- Definition of table `order001mb`
--

DROP TABLE IF EXISTS `order001mb`;
CREATE TABLE `order001mb` (
  `Orderid` int(11) NOT NULL AUTO_INCREMENT,
  `Ordername` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Orderid`),
  UNIQUE KEY `Ordername` (`Ordername`),
  UNIQUE KEY `IDX_3568b8d6f99a332cda5e2e2fdb` (`Ordername`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order001mb`
--

/*!40000 ALTER TABLE `order001mb` DISABLE KEYS */;
INSERT INTO `order001mb` (`Orderid`,`Ordername`) VALUES 
 (16,''),
 (29,'123'),
 (9,'aaa'),
 (15,'aaaa'),
 (6,'adwfw'),
 (4,'Choice'),
 (7,'fgbrnrn'),
 (17,'hioli'),
 (8,'kk'),
 (1,'Landskip Yard Care'),
 (11,'sdcfsdfcfs'),
 (10,'sdfw'),
 (13,'sefwsvws'),
 (30,'sss'),
 (3,'Two Pesos'),
 (14,'zzz');
/*!40000 ALTER TABLE `order001mb` ENABLE KEYS */;


--
-- Definition of table `orditemsdeliver001mb`
--

DROP TABLE IF EXISTS `orditemsdeliver001mb`;
CREATE TABLE `orditemsdeliver001mb` (
  `orditemsId` int(11) NOT NULL AUTO_INCREMENT,
  `sorderName` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `date` varchar(40) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `quantity` varchar(40) NOT NULL,
  `deliverQty` varchar(40) NOT NULL,
  `qtytoDeliver` varchar(40) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `amttoDeliver` decimal(12,4) DEFAULT NULL,
  `availableQty` varchar(50) NOT NULL,
  `projectedQty` varchar(40) DEFAULT NULL,
  `expectedQty` varchar(40) DEFAULT NULL,
  `itemCode` varchar(60) NOT NULL,
  `description` varchar(100) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  PRIMARY KEY (`orditemsId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orditemsdeliver001mb`
--

/*!40000 ALTER TABLE `orditemsdeliver001mb` DISABLE KEYS */;
INSERT INTO `orditemsdeliver001mb` (`orditemsId`,`sorderName`,`customername`,`date`,`projectName`,`quantity`,`deliverQty`,`qtytoDeliver`,`rate`,`amount`,`amttoDeliver`,`availableQty`,`projectedQty`,`expectedQty`,`itemCode`,`description`,`itemGroup`,`warehouseName`) VALUES 
 (1,'SO-001','Mithra','12/12/2015','Intellor','10','12','2','10000.0000','12000.0000','2000.0000','6','3','5','Mobile','Badthrfhrf','Services','SPL');
/*!40000 ALTER TABLE `orditemsdeliver001mb` ENABLE KEYS */;


--
-- Definition of table `packingslip001mb`
--

DROP TABLE IF EXISTS `packingslip001mb`;
CREATE TABLE `packingslip001mb` (
  `psId` int(11) NOT NULL AUTO_INCREMENT,
  `slipName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `delName` varchar(50) NOT NULL,
  PRIMARY KEY (`psId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packingslip001mb`
--

/*!40000 ALTER TABLE `packingslip001mb` DISABLE KEYS */;
INSERT INTO `packingslip001mb` (`psId`,`slipName`,`status`,`delName`) VALUES 
 (1,'PS0001','Draft','DN-0007');
/*!40000 ALTER TABLE `packingslip001mb` ENABLE KEYS */;


--
-- Definition of table `paygateaccount001mb`
--

DROP TABLE IF EXISTS `paygateaccount001mb`;
CREATE TABLE `paygateaccount001mb` (
  `paygateId` int(11) NOT NULL AUTO_INCREMENT,
  `accountName` varchar(50) NOT NULL,
  `defMessage` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`paygateId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paygateaccount001mb`
--

/*!40000 ALTER TABLE `paygateaccount001mb` DISABLE KEYS */;
INSERT INTO `paygateaccount001mb` (`paygateId`,`accountName`,`defMessage`) VALUES 
 (1,'Debtors','Payment in Process');
/*!40000 ALTER TABLE `paygateaccount001mb` ENABLE KEYS */;


--
-- Definition of table `paymententry001mb`
--

DROP TABLE IF EXISTS `paymententry001mb`;
CREATE TABLE `paymententry001mb` (
  `payentId` int(11) NOT NULL AUTO_INCREMENT,
  `entrySeries` varchar(50) NOT NULL,
  `postingDate` varchar(50) NOT NULL,
  `paymentType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `accpaidTo` varchar(50) NOT NULL,
  PRIMARY KEY (`payentId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymententry001mb`
--

/*!40000 ALTER TABLE `paymententry001mb` DISABLE KEYS */;
INSERT INTO `paymententry001mb` (`payentId`,`entrySeries`,`postingDate`,`paymentType`,`paymentMode`,`partyType`,`partyName`,`accpaidTo`) VALUES 
 (6,'122','22','Pay','Check','Supplier','HomeBase','sdc'),
 (7,'','','','','','',''),
 (8,'','','Pay','','','',''),
 (9,'null','null','null','null','null','null','null'),
 (10,'null','null','Internal Transfer','Check','Supplier','HomeBase','11'),
 (11,'','','','','','',''),
 (12,'','','','','','',''),
 (13,'null','null','null','null','null','null','null'),
 (14,'','','','','','',''),
 (15,'bjbjb','','Receive','Check','Supplier','Asiatic Solution','null'),
 (16,'rtgetge','2','Internal Transfer','Wire Transfer','Supplier','Asiatic Solution','11345123');
/*!40000 ALTER TABLE `paymententry001mb` ENABLE KEYS */;


--
-- Definition of table `paymentmode001mb`
--

DROP TABLE IF EXISTS `paymentmode001mb`;
CREATE TABLE `paymentmode001mb` (
  `payId` int(11) NOT NULL AUTO_INCREMENT,
  `modeName` varchar(60) NOT NULL,
  PRIMARY KEY (`payId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentmode001mb`
--

/*!40000 ALTER TABLE `paymentmode001mb` DISABLE KEYS */;
INSERT INTO `paymentmode001mb` (`payId`,`modeName`) VALUES 
 (1,'Check'),
 (2,'Cash'),
 (3,'Credit Card'),
 (4,'Wire Transfer'),
 (5,'Bank Draft');
/*!40000 ALTER TABLE `paymentmode001mb` ENABLE KEYS */;


--
-- Definition of table `paymentrequest001mb`
--

DROP TABLE IF EXISTS `paymentrequest001mb`;
CREATE TABLE `paymentrequest001mb` (
  `payreqId` int(11) NOT NULL AUTO_INCREMENT,
  `prName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`payreqId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentrequest001mb`
--

/*!40000 ALTER TABLE `paymentrequest001mb` DISABLE KEYS */;
INSERT INTO `paymentrequest001mb` (`payreqId`,`prName`,`status`) VALUES 
 (12,'qqq',''),
 (16,'english',''),
 (17,'tamil',''),
 (18,'tamil','Cancelled'),
 (19,'english','Initiated'),
 (20,'bhvghv','Initiated'),
 (21,'',''),
 (22,'',''),
 (23,'',''),
 (24,'tamil','Failed'),
 (25,'English','Paid'),
 (29,'1234',''),
 (30,'dfgv','Paid');
/*!40000 ALTER TABLE `paymentrequest001mb` ENABLE KEYS */;


--
-- Definition of table `payroll001mb`
--

DROP TABLE IF EXISTS `payroll001mb`;
CREATE TABLE `payroll001mb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `fiscalYear` int(11) NOT NULL,
  `salarySlip` varchar(50) NOT NULL,
  `empName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`prId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll001mb`
--

/*!40000 ALTER TABLE `payroll001mb` DISABLE KEYS */;
INSERT INTO `payroll001mb` (`prId`,`sNo`,`status`,`fiscalYear`,`salarySlip`,`empName`) VALUES 
 (1,NULL,'Draft',2016,'20000','Manikandan'),
 (2,NULL,'Dummy2',2022,'hvbh','Dummy3'),
 (3,NULL,'Dummy1',2020,'hvbh','Dummy1'),
 (4,NULL,'Dummy1',2022,'bn','Dummy1');
/*!40000 ALTER TABLE `payroll001mb` ENABLE KEYS */;


--
-- Definition of table `periodclosingvoucher001mb`
--

DROP TABLE IF EXISTS `periodclosingvoucher001mb`;
CREATE TABLE `periodclosingvoucher001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `transactiondate` varchar(45) NOT NULL,
  `closingaccounthead` varchar(45) NOT NULL,
  `postingdate` varchar(45) NOT NULL,
  `closingfiscalyear` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodclosingvoucher001mb`
--

/*!40000 ALTER TABLE `periodclosingvoucher001mb` DISABLE KEYS */;
INSERT INTO `periodclosingvoucher001mb` (`id`,`transactiondate`,`closingaccounthead`,`postingdate`,`closingfiscalyear`,`company`,`remarks`) VALUES 
 (2,'10/07/2016','SIVA','10/21/2016','2016 OCT','KARYA','Good11123'),
 (3,'','sdrg','','rdtyht','th','thd');
/*!40000 ALTER TABLE `periodclosingvoucher001mb` ENABLE KEYS */;


--
-- Definition of table `posprofile001mb`
--

DROP TABLE IF EXISTS `posprofile001mb`;
CREATE TABLE `posprofile001mb` (
  `profileId` int(11) NOT NULL AUTO_INCREMENT,
  `appforUser` varchar(60) NOT NULL,
  `series` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  PRIMARY KEY (`profileId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posprofile001mb`
--

/*!40000 ALTER TABLE `posprofile001mb` DISABLE KEYS */;
INSERT INTO `posprofile001mb` (`profileId`,`appforUser`,`series`,`company`) VALUES 
 (1,'Main User','SINV-001','Dell');
/*!40000 ALTER TABLE `posprofile001mb` ENABLE KEYS */;


--
-- Definition of table `pricingrule001mb`
--

DROP TABLE IF EXISTS `pricingrule001mb`;
CREATE TABLE `pricingrule001mb` (
  `priceruleid` int(11) NOT NULL AUTO_INCREMENT,
  `priceTitle` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `selling` varchar(50) NOT NULL,
  `buying` varchar(50) NOT NULL,
  `minQty` varchar(20) NOT NULL,
  `maxQty` varchar(30) NOT NULL,
  `validFrom` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `validUpto` varchar(50) NOT NULL,
  `prordisc` varchar(50) NOT NULL,
  `discprlist` varchar(50) DEFAULT NULL,
  `forprlist` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`priceruleid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pricingrule001mb`
--

/*!40000 ALTER TABLE `pricingrule001mb` DISABLE KEYS */;
INSERT INTO `pricingrule001mb` (`priceruleid`,`priceTitle`,`itemCode`,`selling`,`buying`,`minQty`,`maxQty`,`validFrom`,`company`,`validUpto`,`prordisc`,`discprlist`,`forprlist`) VALUES 
 (3,'Top Most','Internal Disc','0','1','2','2','10/27/2016','Dell','10/20/2016','Price','','35%'),
 (5,'PR-005','Wind Turbine-L','1','1','3','8','10/26/2016','Dell','10/20/2016','Discount','10%',''),
 (6,'','','0','0','','','','','','','',''),
 (7,'','','0','0','','','','','','','',''),
 (8,'jjjj','Dummy1','true','true','88','true','2021-07-22','sdf','88','8881111','881234455','8888'),
 (9,'jjjj','Dummy1','','','88','true','2021-07-14','knjn','88','888999','88','8888'),
 (10,'jjjj','Dummy1','','1','88','true','888','sdf','88','888','88','8888'),
 (11,'jjjj','Dummy2','','','88','true','234','knjn','88','888','88','8888');
/*!40000 ALTER TABLE `pricingrule001mb` ENABLE KEYS */;


--
-- Definition of table `prmatreq001mb`
--

DROP TABLE IF EXISTS `prmatreq001mb`;
CREATE TABLE `prmatreq001mb` (
  `pmrId` int(11) NOT NULL AUTO_INCREMENT,
  `mrType` varchar(30) NOT NULL,
  `mrSeries` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `forWarehouse` varchar(40) NOT NULL,
  `requiredDate` varchar(40) NOT NULL,
  PRIMARY KEY (`pmrId`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prmatreq001mb`
--

/*!40000 ALTER TABLE `prmatreq001mb` DISABLE KEYS */;
INSERT INTO `prmatreq001mb` (`pmrId`,`mrType`,`mrSeries`,`itemCode`,`quantity`,`forWarehouse`,`requiredDate`) VALUES 
 (33,'','','','','',''),
 (41,'null','null','null','null','null','null'),
 (42,'','','','','',''),
 (43,'Material Issue','njj','Dummy2','12','hhhj',''),
 (44,'Purchase','sd','Dummy2','sdcs','sdcsc','');
/*!40000 ALTER TABLE `prmatreq001mb` ENABLE KEYS */;


--
-- Definition of table `processpr001mb`
--

DROP TABLE IF EXISTS `processpr001mb`;
CREATE TABLE `processpr001mb` (
  `processId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `postingDate` varchar(30) NOT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`processId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processpr001mb`
--

/*!40000 ALTER TABLE `processpr001mb` DISABLE KEYS */;
INSERT INTO `processpr001mb` (`processId`,`sNo`,`year`,`month`,`postingDate`,`deptName`,`empCompany`) VALUES 
 (1,NULL,2016,1,'10/01/2016','Legal','Dell'),
 (2,NULL,2020,2,'2','Dummy1','Dummy3'),
 (3,NULL,2020,4,'2','Dummy2','Dummy1');
/*!40000 ALTER TABLE `processpr001mb` ENABLE KEYS */;


--
-- Definition of table `prodbundle001mb`
--

DROP TABLE IF EXISTS `prodbundle001mb`;
CREATE TABLE `prodbundle001mb` (
  `pbundId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `childItem` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`pbundId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodbundle001mb`
--

/*!40000 ALTER TABLE `prodbundle001mb` DISABLE KEYS */;
INSERT INTO `prodbundle001mb` (`pbundId`,`itemCode`,`childItem`,`quantity`,`description`) VALUES 
 (1,'Table','Wood','4','Poor Quality'),
 (3,'Dummy1','kkk','88','kkkk'),
 (4,'Dummy3','kkk123','8855','kkkk1234123'),
 (5,'Dummy1','kkk','243','dgegssss'),
 (6,'Dummy2','kkk','243890','fffff123'),
 (7,'Dummy1','rge','rg','rr123'),
 (8,'Dummy1','kkk','243','fghrht123');
/*!40000 ALTER TABLE `prodbundle001mb` ENABLE KEYS */;


--
-- Definition of table `prodorder001mb`
--

DROP TABLE IF EXISTS `prodorder001mb`;
CREATE TABLE `prodorder001mb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `itemtoManufacture` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `prorderCode` varchar(30) NOT NULL,
  PRIMARY KEY (`prId`)
) ENGINE=InnoDB AUTO_INCREMENT=834 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodorder001mb`
--

/*!40000 ALTER TABLE `prodorder001mb` DISABLE KEYS */;
INSERT INTO `prodorder001mb` (`prId`,`itemtoManufacture`,`status`,`prorderCode`) VALUES 
 (785,'kkk','In-Process','nkmkm'),
 (786,'rgesrg','Submitted','rgseryymmm'),
 (787,'acsac','Draft','acs'),
 (833,'qq','Notstarted','qqq');
/*!40000 ALTER TABLE `prodorder001mb` ENABLE KEYS */;


--
-- Definition of table `prodplan001mb`
--

DROP TABLE IF EXISTS `prodplan001mb`;
CREATE TABLE `prodplan001mb` (
  `prplanId` int(11) NOT NULL AUTO_INCREMENT,
  `getItems` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `bomNo` varchar(30) NOT NULL,
  `plannedQty` varchar(40) NOT NULL,
  `pendingQty` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`prplanId`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodplan001mb`
--

/*!40000 ALTER TABLE `prodplan001mb` DISABLE KEYS */;
INSERT INTO `prodplan001mb` (`prplanId`,`getItems`,`itemCode`,`bomNo`,`plannedQty`,`pendingQty`,`description`) VALUES 
 (43,'Sales Order','Dummy2','fdgbdfgeeeee','ad123','ad456','vbbbbvv789');
/*!40000 ALTER TABLE `prodplan001mb` ENABLE KEYS */;


--
-- Definition of table `prodstockentry001mb`
--

DROP TABLE IF EXISTS `prodstockentry001mb`;
CREATE TABLE `prodstockentry001mb` (
  `prstockId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stockEntry` varchar(30) NOT NULL,
  PRIMARY KEY (`prstockId`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodstockentry001mb`
--

/*!40000 ALTER TABLE `prodstockentry001mb` DISABLE KEYS */;
INSERT INTO `prodstockentry001mb` (`prstockId`,`title`,`status`,`purpose`,`stockEntry`) VALUES 
 (52,'null','null','null','null'),
 (53,'','','',''),
 (54,'','Notstarted','',''),
 (55,'','','',''),
 (56,'','','',''),
 (57,'dfv','Submitted','dfv','dfd'),
 (58,'','','',''),
 (59,'bhbh','Draft','vhvhv','jbhjbudd'),
 (60,'hvhvh33','Notstarted','hghg1111111133','1fgtft333'),
 (61,'','','',''),
 (62,'sdf','Submitted','vhvhv','waefdw'),
 (64,'sdf','Draft','vhvhv','waefdw');
/*!40000 ALTER TABLE `prodstockentry001mb` ENABLE KEYS */;


--
-- Definition of table `prodtimesheet001mb`
--

DROP TABLE IF EXISTS `prodtimesheet001mb`;
CREATE TABLE `prodtimesheet001mb` (
  `prtId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(40) NOT NULL,
  `tsName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `empCompany` varchar(40) NOT NULL,
  `twhrs` varchar(40) NOT NULL,
  PRIMARY KEY (`prtId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodtimesheet001mb`
--

/*!40000 ALTER TABLE `prodtimesheet001mb` DISABLE KEYS */;
INSERT INTO `prodtimesheet001mb` (`prtId`,`empName`,`tsName`,`status`,`empCompany`,`twhrs`) VALUES 
 (19,'','','','',''),
 (21,'','','','',''),
 (22,'Dummy1','','','',''),
 (23,'Dummy3','sxfdv','Stopped','Dummy1','szfecqqqqqqqqq'),
 (24,'','','','',''),
 (25,'Dummy2','sdc888888822','Stopped','Dummy2','szfec111211111'),
 (27,'','','','',''),
 (28,'','','','',''),
 (29,'','','','',''),
 (30,'Dummy1','sdc','Draft','Dummy2','1111'),
 (31,'Dummy1','sdc','Submitted','Dummy3','szfec'),
 (32,'','','','',''),
 (33,'Dummy1','sxfdv333','Notstarted','Dummy1','2333333'),
 (34,'Dummy1','sdc','Draft','Dummy1','szfec');
/*!40000 ALTER TABLE `prodtimesheet001mb` ENABLE KEYS */;


--
-- Definition of table `productbundle001mb`
--

DROP TABLE IF EXISTS `productbundle001mb`;
CREATE TABLE `productbundle001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `parentitem` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productbundle001mb`
--

/*!40000 ALTER TABLE `productbundle001mb` DISABLE KEYS */;
INSERT INTO `productbundle001mb` (`id`,`description`,`item`,`parentitem`,`quantity`) VALUES 
 (1,'desc','bat','bat','2'),
 (2,'desc','ball','ball','5'),
 (3,'dexs','Wing Sheet','parent','5');
/*!40000 ALTER TABLE `productbundle001mb` ENABLE KEYS */;


--
-- Definition of table `progprodorder001mb`
--

DROP TABLE IF EXISTS `progprodorder001mb`;
CREATE TABLE `progprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progprodorder001mb`
--

/*!40000 ALTER TABLE `progprodorder001mb` DISABLE KEYS */;
INSERT INTO `progprodorder001mb` (`prodId`,`prorderCode`,`date`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`) VALUES 
 (1,'PRO_00084','10/20/2016','Balleett','10','6','Dell'),
 (2,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (3,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (4,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (5,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (6,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (7,'undefined','sfvsvf','undefined','azfcsdzc','dfgvsdfv','sxfvsxvqqqqq'),
 (8,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (9,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (10,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (11,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (12,'','','','','',''),
 (13,'','','','','',''),
 (14,'','wdq','','asd','ad','ad'),
 (15,'','as','','sd','sss','asaaa'),
 (16,'','','','','',''),
 (17,'','sfd','','awed','awfe','af'),
 (18,'','','','','',''),
 (19,'','','','','',''),
 (20,'null','null','null','null','null','null'),
 (21,'Dummy1','2021-06-13','Dummy2','null','null','null'),
 (22,'Dummy1','2021-07-10','Dummy3','sf','sss','sfqqq'),
 (23,'Dummy1','2021-07-30T18:30:00.000Z','Dummy1','asd','ad','sf');
/*!40000 ALTER TABLE `progprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `project001mb`
--

DROP TABLE IF EXISTS `project001mb`;
CREATE TABLE `project001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectname` varchar(30) NOT NULL,
  `estimatedcost` int(11) NOT NULL,
  `enddate` varchar(50) NOT NULL,
  `startdate` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project001mb`
--

/*!40000 ALTER TABLE `project001mb` DISABLE KEYS */;
INSERT INTO `project001mb` (`id`,`projectname`,`estimatedcost`,`enddate`,`startdate`,`status`) VALUES 
 (1,'Intellor',200,'10/03/2016','10/01/2016','initated'),
 (9,'kapa',45,'09/27/2016','09/27/2016','opened'),
 (10,'entitywageting',96,'10/20/2016','10/15/2016','opened'),
 (11,'Intellor',200,'10/03/2016','','initated'),
 (14,'Intellor',200,'','','dethte');
/*!40000 ALTER TABLE `project001mb` ENABLE KEYS */;


--
-- Definition of table `prpurchaseord001mb`
--

DROP TABLE IF EXISTS `prpurchaseord001mb`;
CREATE TABLE `prpurchaseord001mb` (
  `proId` int(11) NOT NULL AUTO_INCREMENT,
  `poSeries` varchar(40) NOT NULL,
  `date` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `supplyrawmat` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `quantity` varchar(40) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `prtype` varchar(40) NOT NULL,
  `accountHead` varchar(50) DEFAULT NULL,
  `quotrate` decimal(12,4) NOT NULL,
  `taxandChg` varchar(40) NOT NULL,
  PRIMARY KEY (`proId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prpurchaseord001mb`
--

/*!40000 ALTER TABLE `prpurchaseord001mb` DISABLE KEYS */;
INSERT INTO `prpurchaseord001mb` (`proId`,`poSeries`,`date`,`supplier`,`supplyrawmat`,`itemCode`,`quantity`,`rate`,`amount`,`prtype`,`accountHead`,`quotrate`,`taxandChg`) VALUES 
 (8,'','','','','','243','24.0000','24000.0000','','4543','88888.8880','8888'),
 (11,'','','','','','243','460000.0000','24000.0000','hhh',NULL,'88888.8880','99'),
 (12,'Dummy1','','Dummy1','Yes','Dummy1','243','24.0000','24000.0000','hhh','4543','88888.8880','8888'),
 (13,'Dummy2','','Dummy1','No','Dummy2','243','460000.0000','24000.0000','hhh','4543','88888.8880','8888'),
 (14,'Dummy1','','Dummy3','No','Dummy1','243','460000.0000','24000.0000','hhh','4543','88888.8880','8888'),
 (15,'Dummy1','sd','Dummy2','No','Dummy1','243','460000.0000','24000.0000','hhh','4543','88888.8880','99'),
 (18,'Dummy1','iiik','Dummy1','Yes','Dummy1','243','460000.0000','24000.0000','hhh','4543','88888.8880','8888');
/*!40000 ALTER TABLE `prpurchaseord001mb` ENABLE KEYS */;


--
-- Definition of table `prreqquot001mb`
--

DROP TABLE IF EXISTS `prreqquot001mb`;
CREATE TABLE `prreqquot001mb` (
  `prqId` int(11) NOT NULL AUTO_INCREMENT,
  `rqSeries` varchar(40) NOT NULL,
  `date` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `emailId` varchar(60) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `requiredDate` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `warehouse` varchar(50) NOT NULL,
  PRIMARY KEY (`prqId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prreqquot001mb`
--

/*!40000 ALTER TABLE `prreqquot001mb` DISABLE KEYS */;
INSERT INTO `prreqquot001mb` (`prqId`,`rqSeries`,`date`,`supplier`,`emailId`,`contact`,`itemCode`,`requiredDate`,`quantity`,`warehouse`) VALUES 
 (24,'sdfsd','','','','','','','',''),
 (26,'sdfsd','','','','','','','',''),
 (27,'','','','','','','','',''),
 (28,'','','','','','','','',''),
 (29,'','','','','','','','',''),
 (30,'kkkk','iiik','Dummy1','mm','mm','Dummy2','n','243','123');
/*!40000 ALTER TABLE `prreqquot001mb` ENABLE KEYS */;


--
-- Definition of table `prsureq001mb`
--

DROP TABLE IF EXISTS `prsureq001mb`;
CREATE TABLE `prsureq001mb` (
  `prsrId` int(11) NOT NULL AUTO_INCREMENT,
  `suSeries` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `quantity` varchar(30) NOT NULL,
  `stockUOM` varchar(20) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `taxandChg` decimal(12,4) DEFAULT NULL,
  `accountHead` varchar(40) NOT NULL,
  `squotrate` decimal(12,4) DEFAULT NULL,
  `sutype` varchar(40) NOT NULL,
  PRIMARY KEY (`prsrId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prsureq001mb`
--

/*!40000 ALTER TABLE `prsureq001mb` DISABLE KEYS */;
INSERT INTO `prsureq001mb` (`prsrId`,`suSeries`,`date`,`supplier`,`itemCode`,`quantity`,`stockUOM`,`rate`,`taxandChg`,`accountHead`,`squotrate`,`sutype`) VALUES 
 (3,'Material Transfer','10/13/2016','Eagle Hardware','Internal Disc','2','Nos','300.0000','550.0000','Manager','500.0000','Premium'),
 (12,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (13,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (15,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (16,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (17,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (18,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (19,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (20,'','','','','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (21,'Dummy1','iiik','Dummy1','Dummy2','243','','460000.0000','99.0000','4543','67.0000','kjj'),
 (22,'','','','','243','','460000.0000','99.0000','4543','67.0000','kjj'),
 (23,'','','','','243','','460000.0000','99.0000','4543','55.0000','kjj'),
 (24,'','','','','243','','460000.0000','99.0000','4543','55.0000','kjj'),
 (25,'','','','','243','','460000.0000','99.0000','4543','55.0000','kjj'),
 (26,'Dummy2','k kmk','Dummy1','Dummy3','777','kk','460000.0000','77777.0000','444','55.0000','hh'),
 (27,'Dummy2','k kmk','Dummy1','Dummy3','777','oooo','460000.0000','77777.0000','444','55.0000','hh'),
 (28,'Dummy2','k kmk','Dummy1','Dummy3','777','','460000.0000','77777.0000','444','55.0000','hh'),
 (29,'','','','','243','','460000.0000','99.0000','4543','55.0000','kjj'),
 (30,'Dummy1','iiik','Dummy2','Dummy2','243','kk','460000.0000','8888.0000','4543','67.0000','kjj');
/*!40000 ALTER TABLE `prsureq001mb` ENABLE KEYS */;


--
-- Definition of table `puordtrends001mb`
--

DROP TABLE IF EXISTS `puordtrends001mb`;
CREATE TABLE `puordtrends001mb` (
  `ptrId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `fiscalYear` varchar(30) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ptrId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puordtrends001mb`
--

/*!40000 ALTER TABLE `puordtrends001mb` DISABLE KEYS */;
INSERT INTO `puordtrends001mb` (`ptrId`,`period`,`basedOn`,`fiscalYear`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`) VALUES 
 (1,'Monthly','Item','2015','Dell','Table','12','3400.0000','10','2450.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','6','4500.0000','7','5600.0000','','0.0000','14','16000.0000','100','1000000.0000',NULL),
 (2,'Weekly','Supplier Type','2011','Dell','Wind Mill A Series','2','200.0000','1','100.0000','3','300.0000','4','400.0000','1','100.0000','1','100.0000',NULL,'600.0000',NULL,'700.0000','4','400.0000','3','300.0000','3','300.0000','2','200.0000','16','16000.0000','7');
/*!40000 ALTER TABLE `puordtrends001mb` ENABLE KEYS */;


--
-- Definition of table `puranalytics001mb`
--

DROP TABLE IF EXISTS `puranalytics001mb`;
CREATE TABLE `puranalytics001mb` (
  `puansId` int(11) NOT NULL AUTO_INCREMENT,
  `treeType` varchar(50) NOT NULL,
  `basedOn` varchar(50) NOT NULL,
  `valueorqty` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `fromDate` varchar(50) NOT NULL,
  `toDate` varchar(50) NOT NULL,
  `anRange` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`puansId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puranalytics001mb`
--

/*!40000 ALTER TABLE `puranalytics001mb` DISABLE KEYS */;
INSERT INTO `puranalytics001mb` (`puansId`,`treeType`,`basedOn`,`valueorqty`,`company`,`fromDate`,`toDate`,`anRange`) VALUES 
 (17,'','','','','','',''),
 (18,'','','','','','',''),
 (19,'Supplier Type','Purchase Invoice','Quantity','sdf','3223','232','Monthly');
/*!40000 ALTER TABLE `puranalytics001mb` ENABLE KEYS */;


--
-- Definition of table `purchase001mb`
--

DROP TABLE IF EXISTS `purchase001mb`;
CREATE TABLE `purchase001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` varchar(255) DEFAULT NULL,
  `grandtotal` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `supplieraddress` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase001mb`
--

/*!40000 ALTER TABLE `purchase001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase001mb` ENABLE KEYS */;


--
-- Definition of table `purchasereceipt001mb`
--

DROP TABLE IF EXISTS `purchasereceipt001mb`;
CREATE TABLE `purchasereceipt001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier` varchar(30) NOT NULL,
  `Date` varchar(30) NOT NULL,
  `supplieraddress` varchar(30) NOT NULL,
  `grandtotal` varchar(30) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchasereceipt001mb`
--

/*!40000 ALTER TABLE `purchasereceipt001mb` DISABLE KEYS */;
INSERT INTO `purchasereceipt001mb` (`id`,`supplier`,`Date`,`supplieraddress`,`grandtotal`,`status`) VALUES 
 (1,'solutions','12-08-2016','solutions','100','tobill'),
 (2,'solutions','12-08-2016','solutions','100','tobill');
/*!40000 ALTER TABLE `purchasereceipt001mb` ENABLE KEYS */;


--
-- Definition of table `purchaseregister001mb`
--

DROP TABLE IF EXISTS `purchaseregister001mb`;
CREATE TABLE `purchaseregister001mb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `invoice` varchar(50) NOT NULL,
  `postingDate` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `supType` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `billNo` varchar(30) NOT NULL,
  `billDate` varchar(50) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purecpt` varchar(50) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `furnituresCount` decimal(12,4) DEFAULT NULL,
  `softwaresCount` decimal(12,4) DEFAULT NULL,
  `stkrecBalance` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundTotal` decimal(12,4) DEFAULT NULL,
  `oustandAmt` decimal(12,4) DEFAULT NULL,
  `outstandAmt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchaseregister001mb`
--

/*!40000 ALTER TABLE `purchaseregister001mb` DISABLE KEYS */;
INSERT INTO `purchaseregister001mb` (`regId`,`invoice`,`postingDate`,`supName`,`supType`,`accountType`,`paymentMode`,`projectname`,`billNo`,`billDate`,`remarks`,`poSeries`,`purecpt`,`currency`,`furnituresCount`,`softwaresCount`,`stkrecBalance`,`netTotal`,`totalTax`,`grandTotal`,`roundTotal`,`oustandAmt`,`outstandAmt`) VALUES 
 (3,'dg','2323','','','','','','32','','dvsvs','','23','','2324.0000','24323.0000','2344.0000','2344.0000','34432.0000','13000.0000','13000.0000','0.0000',NULL),
 (4,'dg','2323','','','','','','32','','dvsvs','','23','','2324.0000','24323.0000','2344.0000','2344.0000','34432.0000','13000.0000','13000.0000','0.0000',NULL),
 (7,'gdsfg','','','','','','','23443','','124','','23423','','23423.0000','2342.0000','2342.0000','2342.0000','23424.0000','1300.0000','144.0000','3124.0000',NULL),
 (8,'gdsfg','','','','','','','23443','','124','','23423','','23423.0000','2342.0000','2342.0000','2342.0000','23424.0000','1300.0000','144.0000','3124.0000',NULL),
 (9,'gdsfg','','','','','','','23443','fghh','124dsgsdgf','','23423','','23423.0000','2342.0000','2342.0000','2342.0000','23424.0000','1300.0000','144.0000','3124.0000',NULL);
/*!40000 ALTER TABLE `purchaseregister001mb` ENABLE KEYS */;


--
-- Definition of table `purecpttrend001mb`
--

DROP TABLE IF EXISTS `purecpttrend001mb`;
CREATE TABLE `purecpttrend001mb` (
  `putrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `fiscalYear` varchar(30) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`putrendId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purecpttrend001mb`
--

/*!40000 ALTER TABLE `purecpttrend001mb` DISABLE KEYS */;
INSERT INTO `purecpttrend001mb` (`putrendId`,`period`,`basedOn`,`fiscalYear`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`) VALUES 
 (1,'Monthly','Item','2015','Dell','Table','12','3400.0000','10','2450.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','6','4500.0000','7','5600.0000','','0.0000','14','16000.0000','100','1000000.0000',NULL),
 (2,'Weekly','Supplier Type','2011','Dell','Wind Mill A Series','2','200.0000','1','100.0000','3','300.0000','4','400.0000','1','100.0000','1','100.0000',NULL,'600.0000',NULL,'700.0000','4','400.0000','3','300.0000','3','300.0000','2','200.0000','16','16000.0000',NULL);
/*!40000 ALTER TABLE `purecpttrend001mb` ENABLE KEYS */;


--
-- Definition of table `purorditemreceive001mb`
--

DROP TABLE IF EXISTS `purorditemreceive001mb`;
CREATE TABLE `purorditemreceive001mb` (
  `poitrecId` int(11) NOT NULL AUTO_INCREMENT,
  `puOrder` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `reqbyDate` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `quantity` varchar(30) NOT NULL,
  `receivedQty` decimal(12,4) DEFAULT NULL,
  `qtytoReceive` decimal(12,4) DEFAULT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `brandName` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  PRIMARY KEY (`poitrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purorditemreceive001mb`
--

/*!40000 ALTER TABLE `purorditemreceive001mb` DISABLE KEYS */;
INSERT INTO `purorditemreceive001mb` (`poitrecId`,`puOrder`,`date`,`reqbyDate`,`supName`,`projectName`,`quantity`,`receivedQty`,`qtytoReceive`,`warehouseName`,`itemCode`,`description`,`brandName`,`company`) VALUES 
 (1,'PO-001','12/12/2016','10','Asiatic Solution','Intellor','22','13.0000','10.0000','SPL','Table','Goodyhg','Top','Dell');
/*!40000 ALTER TABLE `purorditemreceive001mb` ENABLE KEYS */;


--
-- Definition of table `purtaxcharges001mb`
--

DROP TABLE IF EXISTS `purtaxcharges001mb`;
CREATE TABLE `purtaxcharges001mb` (
  `putaxId` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `taxchgType` varchar(50) NOT NULL,
  `accountHead` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`putaxId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purtaxcharges001mb`
--

/*!40000 ALTER TABLE `purtaxcharges001mb` DISABLE KEYS */;
INSERT INTO `purtaxcharges001mb` (`putaxId`,`status`,`company`,`taxchgType`,`accountHead`,`rate`,`amount`,`total`) VALUES 
 (7,'','sdf','sdf','4543','5443.0000','43.0000','43344.0000'),
 (8,'','sdf','sdf','4543','5443.0000','43.0000','43344.0000'),
 (9,'','sdf','sdf','4543','5443.0000','43.0000','43344.0000'),
 (10,'','dgdg','dfgbdg','3434','460000.0000','24000.0000','25235.0000'),
 (11,'Dummy1','sdf','sdf','4543','460000.0000','24000.0000','25235.0000'),
 (12,'Dummy1','sdf','sdf','4543','460000.0000','24000.0000','25235.0000'),
 (13,'Dummy1','sdf','sdf','4543','460000.0000','24000.0000','25235.0000'),
 (14,'Dummy1','sdf','sdf','4543','460000.0000','24000.0000','25235.0000'),
 (15,'Dummy1','sdf','sdf','4543','460000.0000','24000.0000','25235.0000');
/*!40000 ALTER TABLE `purtaxcharges001mb` ENABLE KEYS */;


--
-- Definition of table `recruitapplicant001mb`
--

DROP TABLE IF EXISTS `recruitapplicant001mb`;
CREATE TABLE `recruitapplicant001mb` (
  `appId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `jobId` int(11) DEFAULT NULL,
  `jobName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`appId`),
  KEY `jobId` (`jobId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitapplicant001mb`
--

/*!40000 ALTER TABLE `recruitapplicant001mb` DISABLE KEYS */;
INSERT INTO `recruitapplicant001mb` (`appId`,`applicantName`,`status`,`jobId`,`jobName`) VALUES 
 (1,'sanjay','replied',1,NULL),
 (2,'rohit','hold',1,'development'),
 (3,'yogesh','open',2,'testing'),
 (4,'','',NULL,''),
 (5,'','',NULL,''),
 (6,'','',NULL,'');
/*!40000 ALTER TABLE `recruitapplicant001mb` ENABLE KEYS */;


--
-- Definition of table `recruitoffer001mb`
--

DROP TABLE IF EXISTS `recruitoffer001mb`;
CREATE TABLE `recruitoffer001mb` (
  `offerId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `offer` varchar(30) NOT NULL,
  `refer` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `ctc` varchar(30) NOT NULL,
  `dateOfJoin` varchar(30) NOT NULL,
  `line1` varchar(45) NOT NULL,
  `line2` varchar(45) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `postalCode` varchar(30) NOT NULL,
  `phoneNo` varchar(20) NOT NULL,
  `alternativePhoneNo` varchar(20) NOT NULL,
  `offerLetter` varchar(30) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`offerId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitoffer001mb`
--

/*!40000 ALTER TABLE `recruitoffer001mb` DISABLE KEYS */;
INSERT INTO `recruitoffer001mb` (`offerId`,`applicantNamePrefix`,`applicantName`,`companyName`,`offer`,`refer`,`position`,`grade`,`ctc`,`dateOfJoin`,`line1`,`line2`,`cityOrVillage`,`stateOrTerritory`,`country`,`postalCode`,`phoneNo`,`alternativePhoneNo`,`offerLetter`,`status`) VALUES 
 (8,'Mr','Kabirul Islam','Karya Technologies','Software Development','KARYA|2016|RR','Associate Software Developer','R','360000','10/18/2016','Housing Board','Old Pallavaram','Chennai','TN','India','600117','9962626836','','offer_08712',NULL),
 (9,'Mr','Kabirul Islam','Karya Technologies','Software Development','KARYA|2016|RR','Associate Software Developer','R','360000','10/18/2016','Housing Board','Old Pallavaram','Chennai','TN','India','600117','9962626836','jnjnj','offer_08712',NULL);
/*!40000 ALTER TABLE `recruitoffer001mb` ENABLE KEYS */;


--
-- Definition of table `recruitopening001mb`
--

DROP TABLE IF EXISTS `recruitopening001mb`;
CREATE TABLE `recruitopening001mb` (
  `jobId` int(11) NOT NULL AUTO_INCREMENT,
  `jobName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`jobId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitopening001mb`
--

/*!40000 ALTER TABLE `recruitopening001mb` DISABLE KEYS */;
INSERT INTO `recruitopening001mb` (`jobId`,`jobName`,`status`) VALUES 
 (1,'development','open'),
 (2,'testing','closed'),
 (4,'Business Analyst','closed'),
 (5,'dfgbdb',''),
 (6,'dfgbdb','');
/*!40000 ALTER TABLE `recruitopening001mb` ENABLE KEYS */;


--
-- Definition of table `recruitrelieving001mb`
--

DROP TABLE IF EXISTS `recruitrelieving001mb`;
CREATE TABLE `recruitrelieving001mb` (
  `relievingId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `dateOfJoin` varchar(20) NOT NULL,
  `dateOfRelieve` varchar(20) NOT NULL,
  `line1` varchar(30) NOT NULL,
  `line2` varchar(30) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `postalCode` varchar(30) NOT NULL,
  `phoneNo` varchar(20) NOT NULL,
  `alternativePhoneNo` varchar(20) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `relievingLetter` varchar(45) NOT NULL,
  PRIMARY KEY (`relievingId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitrelieving001mb`
--

/*!40000 ALTER TABLE `recruitrelieving001mb` DISABLE KEYS */;
INSERT INTO `recruitrelieving001mb` (`relievingId`,`applicantNamePrefix`,`applicantName`,`companyName`,`position`,`grade`,`dateOfJoin`,`dateOfRelieve`,`line1`,`line2`,`cityOrVillage`,`stateOrTerritory`,`country`,`postalCode`,`phoneNo`,`alternativePhoneNo`,`relievingLetter`) VALUES 
 (9,'Mr','Kabirul Islam','Karya Technologies','Associate Software Developer','R','10/04/2016','10/04/2016','Housing Board','Old Pallavaram','Chennai','TN','India','600117','9962626836','26836','rel1001');
/*!40000 ALTER TABLE `recruitrelieving001mb` ENABLE KEYS */;


--
-- Definition of table `recruitworkingexperience001mb`
--

DROP TABLE IF EXISTS `recruitworkingexperience001mb`;
CREATE TABLE `recruitworkingexperience001mb` (
  `workingexperienceId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(10) NOT NULL,
  `applicantName` varchar(45) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `dateOfJoin` varchar(20) NOT NULL,
  `dateOfRelieve` varchar(20) NOT NULL,
  `workingexperienceLetter` varchar(30) NOT NULL,
  PRIMARY KEY (`workingexperienceId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitworkingexperience001mb`
--

/*!40000 ALTER TABLE `recruitworkingexperience001mb` DISABLE KEYS */;
INSERT INTO `recruitworkingexperience001mb` (`workingexperienceId`,`applicantNamePrefix`,`applicantName`,`companyName`,`position`,`grade`,`dateOfJoin`,`dateOfRelieve`,`workingexperienceLetter`) VALUES 
 (12,'Mr','Kabirul Islam','Karya Technologies','Associate Software Developer','R','10/04/2016','10/18/2016','exp101'),
 (13,'','','','','','','','');
/*!40000 ALTER TABLE `recruitworkingexperience001mb` ENABLE KEYS */;


--
-- Definition of table `reqitemorder001mb`
--

DROP TABLE IF EXISTS `reqitemorder001mb`;
CREATE TABLE `reqitemorder001mb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `date` varchar(40) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `orderedqty` varchar(20) DEFAULT NULL,
  `qtyrtoorder` varchar(20) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `qtytoorder` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemorder001mb`
--

/*!40000 ALTER TABLE `reqitemorder001mb` DISABLE KEYS */;
INSERT INTO `reqitemorder001mb` (`mrsId`,`mrSeries`,`date`,`itemCode`,`quantity`,`orderedqty`,`qtyrtoorder`,`description`,`company`,`qtytoorder`) VALUES 
 (1,'MRSER-001','12/10/2016','Table','10','8','2','','dell','10'),
 (2,'jnjnj','','Dummy1','19','8','','njnj','knjn',''),
 (3,'jnjnj','','Dummy1','19','8','','njnj','knjn',''),
 (4,'','jnjnj','','','','','','',''),
 (5,'jnjnj','iiik','Dummy1','19','8','','njnj','knjn',''),
 (6,'jnjnj','iiik','Dummy1','19','8','','njnj','knjn',''),
 (7,'jnjnj','iiik','Dummy1','19','8','','njnj','knjn',''),
 (8,'jnjnj','iiik','Dummy1','19','8',NULL,'njnj','knjn',NULL),
 (9,'jnjnj','iiik','Dummy1','19','8',NULL,'njnj','knjn',NULL),
 (10,'jnjnj','iiik','Dummy1','19','8',NULL,'njnj','knjn','11'),
 (11,'jnjnj','iiik','Dummy1','19','8','','njnj','knjn','qq'),
 (12,'jnjnj','iiik','Dummy1','19','8','','njnjffff','knjn','11'),
 (13,'jnjnj','iiik','Dummy1','19','8','','njnjcbcb','knjn','11');
/*!40000 ALTER TABLE `reqitemorder001mb` ENABLE KEYS */;


--
-- Definition of table `reqitemtransfer001mb`
--

DROP TABLE IF EXISTS `reqitemtransfer001mb`;
CREATE TABLE `reqitemtransfer001mb` (
  `ittransId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `quantity` varchar(40) NOT NULL,
  `transferQty` decimal(12,4) DEFAULT NULL,
  `qtytoTransfer` decimal(12,4) DEFAULT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `company` varchar(50) NOT NULL,
  PRIMARY KEY (`ittransId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemtransfer001mb`
--

/*!40000 ALTER TABLE `reqitemtransfer001mb` DISABLE KEYS */;
INSERT INTO `reqitemtransfer001mb` (`ittransId`,`mrSeries`,`date`,`quantity`,`transferQty`,`qtytoTransfer`,`itemCode`,`description`,`company`) VALUES 
 (2,'Dummy2','12/10/2016','12','10.0000','3.0000','Dummy2','sxfvdgfgdg','sdfdtgretgg'),
 (3,'Dummy1','iiik','124444','10.0000','3.0000','Dummy2','cghfd','sdf');
/*!40000 ALTER TABLE `reqitemtransfer001mb` ENABLE KEYS */;


--
-- Definition of table `requestitembuy001mb`
--

DROP TABLE IF EXISTS `requestitembuy001mb`;
CREATE TABLE `requestitembuy001mb` (
  `riId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `warehouse` varchar(40) NOT NULL,
  `actual` varchar(30) NOT NULL,
  `requested` varchar(30) DEFAULT NULL,
  `reserved` varchar(30) DEFAULT NULL,
  `ordered` varchar(30) DEFAULT NULL,
  `projected` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`riId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requestitembuy001mb`
--

/*!40000 ALTER TABLE `requestitembuy001mb` DISABLE KEYS */;
INSERT INTO `requestitembuy001mb` (`riId`,`itemCode`,`warehouse`,`actual`,`requested`,`reserved`,`ordered`,`projected`) VALUES 
 (1,'Table','SSPDL','10','8','8','12','7');
/*!40000 ALTER TABLE `requestitembuy001mb` ENABLE KEYS */;


--
-- Definition of table `role001mb`
--

DROP TABLE IF EXISTS `role001mb`;
CREATE TABLE `role001mb` (
  `roleid` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(45) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role001mb`
--

/*!40000 ALTER TABLE `role001mb` DISABLE KEYS */;
INSERT INTO `role001mb` (`roleid`,`rolename`,`status`) VALUES 
 (1,'ROLE_ADMIN',1),
 (2,'ROLE_SUPER_USER',1),
 (3,'ROLE_USER',1),
 (4,'ROLE_GUEST',1);
/*!40000 ALTER TABLE `role001mb` ENABLE KEYS */;


--
-- Definition of table `salarycomponent001mb`
--

DROP TABLE IF EXISTS `salarycomponent001mb`;
CREATE TABLE `salarycomponent001mb` (
  `salcompId` int(11) NOT NULL AUTO_INCREMENT,
  `comName` varchar(50) DEFAULT NULL,
  `abbr` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`salcompId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarycomponent001mb`
--

/*!40000 ALTER TABLE `salarycomponent001mb` DISABLE KEYS */;
INSERT INTO `salarycomponent001mb` (`salcompId`,`comName`,`abbr`) VALUES 
 (1,'PAY AS YOU EARN','PAYE'),
 (2,'Income Tax','IT'),
 (3,'HRA-LOL','HRA'),
 (4,'Basic Earning','BE'),
 (5,'My Basic Salary','M'),
 (6,'Lon dod','LD'),
 (8,'Overtime','OT'),
 (9,'Basic','ANC'),
 (10,'ds','sdv');
/*!40000 ALTER TABLE `salarycomponent001mb` ENABLE KEYS */;


--
-- Definition of table `salarystructure001mb`
--

DROP TABLE IF EXISTS `salarystructure001mb`;
CREATE TABLE `salarystructure001mb` (
  `strId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(30) DEFAULT NULL,
  `isActive` varchar(20) NOT NULL,
  `fromDate` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`strId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarystructure001mb`
--

/*!40000 ALTER TABLE `salarystructure001mb` DISABLE KEYS */;
INSERT INTO `salarystructure001mb` (`strId`,`empName`,`isActive`,`fromDate`) VALUES 
 (1,'Bala','Yes','12/12/2014'),
 (2,'Bala','Yes','10/22/2016'),
 (3,'Manikandan','Yes','10/05/2016'),
 (4,'Dummy1','No','3223');
/*!40000 ALTER TABLE `salarystructure001mb` ENABLE KEYS */;


--
-- Definition of table `salesorder001mb`
--

DROP TABLE IF EXISTS `salesorder001mb`;
CREATE TABLE `salesorder001mb` (
  `Sorder` int(11) NOT NULL AUTO_INCREMENT,
  `Customername` varchar(50) NOT NULL,
  `Cpurchaseorder` varchar(60) DEFAULT NULL,
  `Statusname` varchar(255) DEFAULT NULL,
  `Itemid` int(11) DEFAULT NULL,
  `Orderid` int(11) DEFAULT NULL,
  `Itemcode` varchar(40) DEFAULT NULL,
  `Ordername` varchar(255) DEFAULT NULL,
  `Statusid` int(11) DEFAULT NULL,
  `Sdeliverydate` varchar(40) DEFAULT NULL,
  `Sorderdate` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`Sorder`),
  KEY `Itemid` (`Itemid`),
  KEY `Orderid` (`Orderid`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesorder001mb`
--

/*!40000 ALTER TABLE `salesorder001mb` DISABLE KEYS */;
INSERT INTO `salesorder001mb` (`Sorder`,`Customername`,`Cpurchaseorder`,`Statusname`,`Itemid`,`Orderid`,`Itemcode`,`Ordername`,`Statusid`,`Sdeliverydate`,`Sorderdate`) VALUES 
 (82,'Prasad','order4','Completed',21,3,'Wind Mill A Series','Two Pesos',NULL,'11/04/2016','09/25/2016'),
 (97,'Sanjay','order13','Closed',NULL,NULL,'Wind Turbine-L','Landskip Yard Care',NULL,'10/19/2016','10/21/2016'),
 (102,'selvam',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (103,'xvc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (114,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (115,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (116,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (117,'','','',NULL,NULL,'','',NULL,'',''),
 (118,'','','',NULL,NULL,'Dummy2','',NULL,'',''),
 (119,'','','',NULL,NULL,'Dummy3','',NULL,'',''),
 (120,'','','',NULL,NULL,'Dummy3','',NULL,'',''),
 (121,'jbjb','order4','',NULL,NULL,'Dummy3','Dummy2',NULL,'11/04/2016','11/04/2016'),
 (122,'','','',NULL,NULL,'','',NULL,'',''),
 (123,'','','',NULL,NULL,'','',NULL,'',''),
 (124,'','','',NULL,NULL,'','',NULL,'',''),
 (125,'','','',NULL,NULL,'','',NULL,'',''),
 (126,'','','',NULL,NULL,'','',NULL,'',''),
 (127,'','','',NULL,NULL,'','',NULL,'',''),
 (128,'','','To Bill',NULL,NULL,'','',NULL,'',''),
 (129,'tamil','order4','To Bill',NULL,NULL,'Dummy1','Dummy1',NULL,'11/04/2016','11/04/2016'),
 (130,'jbjb','order7','Cancelled',NULL,NULL,'Dummy1','Dummy2',NULL,'11/04/2016','11/04/2016'),
 (131,'','','',NULL,NULL,'Dummy2','',NULL,'',''),
 (132,'','','',NULL,NULL,NULL,'',NULL,'',''),
 (133,'','','',NULL,NULL,NULL,'',NULL,'',''),
 (134,'','','Cancelled',NULL,NULL,NULL,'',NULL,'',''),
 (135,'','','Cancelled',NULL,NULL,NULL,'Dummy2',NULL,'',''),
 (136,'wed','1','Queued for Saving',NULL,NULL,NULL,'Dummy1',NULL,'',''),
 (137,'tamil','order3','Submitted',NULL,NULL,NULL,'Dummy1',NULL,'11/04/2016','11/04/2016'),
 (138,'','','Cancelled',NULL,NULL,NULL,'Dummy2',NULL,'',''),
 (139,'tamil','order7','Cancelled',NULL,NULL,'Dummy1','Dummy2',NULL,'',''),
 (140,'xvc','order7','To Deliver',NULL,NULL,'Dummy1','Dummy2',NULL,'11/04/2016','11/04/2016'),
 (141,'xvc','order7','Draft',NULL,NULL,'Dummy1','Dummy2',NULL,'11/04/2016','11/04/2016'),
 (142,'xvc','order7','Draft',NULL,NULL,'Dummy1','Dummy2',NULL,'11/04/2016','11/04/2016'),
 (144,'','','Draft',NULL,NULL,'Dummy1','Dummy3',NULL,'',''),
 (145,'','','',NULL,NULL,'','Two Pesos',NULL,'',''),
 (146,'null','null','null',NULL,NULL,'null','null',NULL,'null','null'),
 (147,'null','null','null',NULL,NULL,'null','null',NULL,'null','null'),
 (148,'null','null','null',NULL,NULL,'null','null',NULL,'null','null'),
 (149,'null','null','null',NULL,NULL,'null','null',NULL,'null','null'),
 (150,'null','null','null',NULL,NULL,'null','null',NULL,'null','null'),
 (151,'Prasad','order4','Submitted',NULL,NULL,'Dummy1','Dummy1',NULL,'11/04/2016','09/25/2016'),
 (152,'Prasad','order4','Submitted',NULL,NULL,'Dummy1','Dummy1',NULL,'11/04/2016','09/25/2016');
/*!40000 ALTER TABLE `salesorder001mb` ENABLE KEYS */;


--
-- Definition of table `salesregister001mb`
--

DROP TABLE IF EXISTS `salesregister001mb`;
CREATE TABLE `salesregister001mb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `postingDate` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `salesCode` varchar(50) NOT NULL,
  `delNote` varchar(50) NOT NULL,
  `currency` varchar(50) NOT NULL,
  `gainloss` decimal(12,4) DEFAULT NULL,
  `saleswpl` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundedTotal` decimal(12,4) DEFAULT NULL,
  `outstandAmt` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesregister001mb`
--

/*!40000 ALTER TABLE `salesregister001mb` DISABLE KEYS */;
INSERT INTO `salesregister001mb` (`regId`,`postingDate`,`customername`,`customergroup`,`terName`,`accountType`,`paymentMode`,`projectname`,`remarks`,`salesCode`,`delNote`,`currency`,`gainloss`,`saleswpl`,`netTotal`,`totalTax`,`grandTotal`,`roundedTotal`,`outstandAmt`) VALUES 
 (2,'','','','','','','','xfbgd','qq','qq','','12233.0000','2432432.0000','4231.0000','12342344.0000','23424.0000','42342.0000','243.0000'),
 (3,'','','','','','','','xfbgd','qq','qq','','12233.0000','2432432.0000','4231.0000','12342344.0000','23424.0000','42342.0000','243.0000'),
 (4,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (5,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (7,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (8,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (9,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (10,'','','','','','','','sdff','sdfs','fas','','1231212.0000','232324.0000','123123.0000','121123.0000','12312.0000','123131.0000','12313.0000'),
 (12,'22131','Dummy1','Dummy2','Dummy3','Cost of Goods Sold','Wire Transfer','Dummy2','sfvwsf','qq','qq','INR','1.0000','33232.0000','4231.0000','1235.0000','13000.0000','42342.0000','243.0000');
/*!40000 ALTER TABLE `salesregister001mb` ENABLE KEYS */;


--
-- Definition of table `salestaxesandtemplates001mb`
--

DROP TABLE IF EXISTS `salestaxesandtemplates001mb`;
CREATE TABLE `salestaxesandtemplates001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `accounthead` varchar(45) NOT NULL,
  `rate` int(10) unsigned NOT NULL,
  `amount` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salestaxesandtemplates001mb`
--

/*!40000 ALTER TABLE `salestaxesandtemplates001mb` DISABLE KEYS */;
INSERT INTO `salestaxesandtemplates001mb` (`id`,`title`,`company`,`type`,`accounthead`,`rate`,`amount`,`total`) VALUES 
 (3,'dsfg','dg','gd','545',544,3435,534343),
 (4,'dsfg','dg','gd','545',544,3435,534343),
 (5,'dsfg','dg','gd','545',544,3435,534343),
 (6,'dsfg','dg','gd','545',544,3435,534343),
 (7,'dsfg','dg','gd','545',544,3435,534343),
 (8,'sds','sdgvsv','dsvss','23424324',23423424,252232,2352525),
 (9,'dsfg','dg','gd','545',544,3435,534343),
 (10,'dsfg','dg','gd','545',544,3435,534343);
/*!40000 ALTER TABLE `salestaxesandtemplates001mb` ENABLE KEYS */;


--
-- Definition of table `setupcugrp001mb`
--

DROP TABLE IF EXISTS `setupcugrp001mb`;
CREATE TABLE `setupcugrp001mb` (
  `cugrpId` int(11) NOT NULL AUTO_INCREMENT,
  `customergroup` varchar(40) NOT NULL,
  `salesPerson` varchar(40) NOT NULL,
  PRIMARY KEY (`cugrpId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setupcugrp001mb`
--

/*!40000 ALTER TABLE `setupcugrp001mb` DISABLE KEYS */;
INSERT INTO `setupcugrp001mb` (`cugrpId`,`customergroup`,`salesPerson`) VALUES 
 (1,'Group Name','Expand'),
 (3,'Individual','Expand');
/*!40000 ALTER TABLE `setupcugrp001mb` ENABLE KEYS */;


--
-- Definition of table `shippingrule001mb`
--

DROP TABLE IF EXISTS `shippingrule001mb`;
CREATE TABLE `shippingrule001mb` (
  `sruleId` int(11) NOT NULL AUTO_INCREMENT,
  `sruleName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `sruleLabel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sruleId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shippingrule001mb`
--

/*!40000 ALTER TABLE `shippingrule001mb` DISABLE KEYS */;
INSERT INTO `shippingrule001mb` (`sruleId`,`sruleName`,`status`,`sruleLabel`) VALUES 
 (2,'Fox','Disabled','FOX'),
 (6,'Fox111','Disabled','FOX'),
 (9,'Fox','Enabled','FOX'),
 (10,'Fox','Variant','FOX1212223333');
/*!40000 ALTER TABLE `shippingrule001mb` ENABLE KEYS */;


--
-- Definition of table `status001mb`
--

DROP TABLE IF EXISTS `status001mb`;
CREATE TABLE `status001mb` (
  `Statusid` int(11) NOT NULL AUTO_INCREMENT,
  `Statusname` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`Statusid`),
  UNIQUE KEY `Statusname` (`Statusname`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status001mb`
--

/*!40000 ALTER TABLE `status001mb` DISABLE KEYS */;
INSERT INTO `status001mb` (`Statusid`,`Statusname`) VALUES 
 (6,'Cancelled'),
 (5,'Closed'),
 (3,'Completed'),
 (2,'Draft'),
 (4,'To Bill'),
 (1,'To Deliver');
/*!40000 ALTER TABLE `status001mb` ENABLE KEYS */;


--
-- Definition of table `stkreconcile001mb`
--

DROP TABLE IF EXISTS `stkreconcile001mb`;
CREATE TABLE `stkreconcile001mb` (
  `stkrecId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `postingDate` varchar(40) NOT NULL,
  `postingTime` varchar(20) NOT NULL,
  `diffAcc` varchar(50) DEFAULT NULL,
  `costCenter` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`stkrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkreconcile001mb`
--

/*!40000 ALTER TABLE `stkreconcile001mb` DISABLE KEYS */;
INSERT INTO `stkreconcile001mb` (`stkrecId`,`series`,`company`,`postingDate`,`postingTime`,`diffAcc`,`costCenter`) VALUES 
 (1,'STREC-001','Dell','12/12/2015','14.20.00','Stock Adjustment','Main');
/*!40000 ALTER TABLE `stkreconcile001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepageing001mb`
--

DROP TABLE IF EXISTS `stkrepageing001mb`;
CREATE TABLE `stkrepageing001mb` (
  `stageId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `averageAge` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `earliest` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `latest` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stageId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepageing001mb`
--

/*!40000 ALTER TABLE `stkrepageing001mb` DISABLE KEYS */;
INSERT INTO `stkrepageing001mb` (`stageId`,`UOM`,`averageAge`,`brand`,`description`,`earliest`,`itemCode`,`itemGroup`,`latest`) VALUES 
 (1,'Nos','45','Normal','Aging Rapidly','12','Table','Services','12'),
 (2,'Nos','45','Normal','Aging Rapidly','12','Dummy1','Dummy3','12'),
 (3,'','','','','','','',''),
 (4,'','','','','','','',''),
 (5,'','','','','','','','');
/*!40000 ALTER TABLE `stkrepageing001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepbalance001mb`
--

DROP TABLE IF EXISTS `stkrepbalance001mb`;
CREATE TABLE `stkrepbalance001mb` (
  `stbalId` int(11) NOT NULL AUTO_INCREMENT,
  `balanceQty` varchar(255) DEFAULT NULL,
  `balanceValue` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `inQty` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `openingQty` varchar(255) DEFAULT NULL,
  `openingValue` varchar(255) DEFAULT NULL,
  `outQty` varchar(255) DEFAULT NULL,
  `outValue` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `valuationRate` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stbalId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepbalance001mb`
--

/*!40000 ALTER TABLE `stkrepbalance001mb` DISABLE KEYS */;
INSERT INTO `stkrepbalance001mb` (`stbalId`,`balanceQty`,`balanceValue`,`brand`,`company`,`description`,`inQty`,`itemCode`,`itemGroup`,`openingQty`,`openingValue`,`outQty`,`outValue`,`stkUOM`,`valuationRate`,`wareHouse`) VALUES 
 (1,'12','12','Normal','Dell','Worst','12','Wind Mill A Series','Services','12','1234','12','12','Nos','1234','SPL'),
 (2,'','','','','','','','','','','',NULL,'','',''),
 (3,'','','','','','','','','','','',NULL,'','',''),
 (4,'','','','','','','','','','','',NULL,'','',''),
 (5,'','','ssdc','','','','Dummy1','Dummy2','','','',NULL,'','','ad'),
 (6,'222','22','','','','','','','','','22',NULL,'','',''),
 (7,'','','','','','','','','','','','22','','',''),
 (8,'','','','','','','','','','','','2222','','',''),
 (9,'','','','','','','','','','','12','','','','');
/*!40000 ALTER TABLE `stkrepbalance001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepledger001mb`
--

DROP TABLE IF EXISTS `stkrepledger001mb`;
CREATE TABLE `stkrepledger001mb` (
  `stledId` int(11) NOT NULL AUTO_INCREMENT,
  `balanceQty` varchar(255) DEFAULT NULL,
  `balanceValue` varchar(255) DEFAULT NULL,
  `batch` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `incomingRate` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `serialNo` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `valuationRate` varchar(255) DEFAULT NULL,
  `voucherCode` varchar(255) DEFAULT NULL,
  `voucherType` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stledId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepledger001mb`
--

/*!40000 ALTER TABLE `stkrepledger001mb` DISABLE KEYS */;
INSERT INTO `stkrepledger001mb` (`stledId`,`balanceQty`,`balanceValue`,`batch`,`brand`,`company`,`date`,`description`,`incomingRate`,`itemCode`,`itemGroup`,`quantity`,`serialNo`,`stkUOM`,`valuationRate`,`voucherCode`,`voucherType`,`wareHouse`) VALUES 
 (1,'5','12','12','Normal','Dell','10/13/2016','Bad','1234','Table','Sub-assemblies','2','LED-001','Nos','1234','VC-001','Stock Entry','SPL'),
 (2,'5','12','12','Normal','Dell','10/13/2016','Bad','1234','Dummy3','Products','2','LED-001','Nos','1234','VC-001','Stock Entry','SPL');
/*!40000 ALTER TABLE `stkrepledger001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepproject001mb`
--

DROP TABLE IF EXISTS `stkrepproject001mb`;
CREATE TABLE `stkrepproject001mb` (
  `stprojId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `actualQty` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `orderedQty` varchar(255) DEFAULT NULL,
  `plannedQty` varchar(255) DEFAULT NULL,
  `reorderQty` varchar(255) DEFAULT NULL,
  `reorderValue` varchar(255) DEFAULT NULL,
  `requestedQty` varchar(255) DEFAULT NULL,
  `reservedQty` varchar(255) DEFAULT NULL,
  `shortageQty` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stprojId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepproject001mb`
--

/*!40000 ALTER TABLE `stkrepproject001mb` DISABLE KEYS */;
INSERT INTO `stkrepproject001mb` (`stprojId`,`UOM`,`actualQty`,`brand`,`description`,`itemCode`,`itemGroup`,`orderedQty`,`plannedQty`,`reorderQty`,`reorderValue`,`requestedQty`,`reservedQty`,`shortageQty`,`wareHouse`) VALUES 
 (1,'Nos','45','Normal','Casual','Wind Turbine-L','Services','12','30','12','12','12','12','12','SPL'),
 (2,'Nos','45','Normal','Casual','Dummy1','Dummy1','12','30','12','12','12','12','12','SPL');
/*!40000 ALTER TABLE `stkrepproject001mb` ENABLE KEYS */;


--
-- Definition of table `stksettings001mb`
--

DROP TABLE IF EXISTS `stksettings001mb`;
CREATE TABLE `stksettings001mb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `itemnameBy` varchar(30) NOT NULL,
  `defaultValue` varchar(40) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `allowancePercent` decimal(12,4) DEFAULT NULL,
  `defaultUOM` varchar(20) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `showbarcodeField` varchar(20) DEFAULT NULL,
  `autoinsertPricelist` varchar(20) DEFAULT NULL,
  `autosetSerialno` varchar(20) DEFAULT NULL,
  `allownegativeStock` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stksettings001mb`
--

/*!40000 ALTER TABLE `stksettings001mb` DISABLE KEYS */;
INSERT INTO `stksettings001mb` (`setId`,`itemnameBy`,`defaultValue`,`itemGroup`,`allowancePercent`,`defaultUOM`,`warehouseName`,`showbarcodeField`,`autoinsertPricelist`,`autosetSerialno`,`allownegativeStock`) VALUES 
 (1,'ItemCode','FIFO','Services','0.0000','Nos','SPL','1','0','0','1'),
 (2,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','0','0','1'),
 (3,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','0','0','1'),
 (4,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','0','0','1'),
 (5,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','','','1'),
 (6,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','','','1'),
 (7,'Dummy1','FIFO','Services','0.0000','Nos','Dummy2','1','true','true','1'),
 (8,'Dummy2','Moving Average','Electrical','6.9999','Nos','Dummy1','1','true','true','1'),
 (9,'Dummy2','Moving Average','Hardware','0.0000','Nos','Dummy2','true','true','true','true'),
 (10,'Dummy3','Moving Average','Distributor','0.0000','Nos','Dummy1','true','true','true','true'),
 (11,'Dummy3','Moving Average','Distributor','0.0000','Nos','Dummy1','','true','true','true'),
 (12,'Dummy3','Moving Average','Distributor','0.0000','Nos','Dummy1','false','true','true','true');
/*!40000 ALTER TABLE `stksettings001mb` ENABLE KEYS */;


--
-- Definition of table `stktransdeliver001mb`
--

DROP TABLE IF EXISTS `stktransdeliver001mb`;
CREATE TABLE `stktransdeliver001mb` (
  `stdelId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `grandTotal` varchar(30) NOT NULL,
  `delName` varchar(30) NOT NULL,
  PRIMARY KEY (`stdelId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransdeliver001mb`
--

/*!40000 ALTER TABLE `stktransdeliver001mb` DISABLE KEYS */;
INSERT INTO `stktransdeliver001mb` (`stdelId`,`title`,`status`,`grandTotal`,`delName`) VALUES 
 (1,'DustBin','Draft','12000','DN-0007'),
 (2,'Ceramics','Cancelled','10000','DNCN-009'),
 (5,'','','',''),
 (6,'','','',''),
 (7,'','','','');
/*!40000 ALTER TABLE `stktransdeliver001mb` ENABLE KEYS */;


--
-- Definition of table `stktransentry001mb`
--

DROP TABLE IF EXISTS `stktransentry001mb`;
CREATE TABLE `stktransentry001mb` (
  `stentId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stName` varchar(30) NOT NULL,
  PRIMARY KEY (`stentId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransentry001mb`
--

/*!40000 ALTER TABLE `stktransentry001mb` DISABLE KEYS */;
INSERT INTO `stktransentry001mb` (`stentId`,`title`,`status`,`purpose`,`stName`) VALUES 
 (1,'Materialissue','Draft','Material issue','STE-00019'),
 (2,'Replace','Submitted','Replace','STE-0098'),
 (4,'Material Transfer for Manufacture','Cancelled','Material Transfer for Manufacture','STE-0076'),
 (5,'Material Receipt','Submitted','Material Receipt','STE-00020'),
 (6,'Material Transfer','Submitted','Material Transfer','cssa'),
 (8,'','','',''),
 (9,'','','',''),
 (10,'','','',''),
 (11,'','','',''),
 (12,'Material Receipt','Notstarted','Material Transfer for Manufacture','cssa');
/*!40000 ALTER TABLE `stktransentry001mb` ENABLE KEYS */;


--
-- Definition of table `stktranspurecpt001mb`
--

DROP TABLE IF EXISTS `stktranspurecpt001mb`;
CREATE TABLE `stktranspurecpt001mb` (
  `stpurtId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `grandTotal` varchar(40) NOT NULL,
  `purtName` varchar(40) NOT NULL,
  PRIMARY KEY (`stpurtId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktranspurecpt001mb`
--

/*!40000 ALTER TABLE `stktranspurecpt001mb` DISABLE KEYS */;
INSERT INTO `stktranspurecpt001mb` (`stpurtId`,`title`,`status`,`grandTotal`,`purtName`) VALUES 
 (1,'Eagle hardware','To Bill','80000','PREC-00013'),
 (2,'Ks Merchandise','Completed','3000','PREC-0033'),
 (3,'sdzc','Dummy2','13000.0000','asvcsa'),
 (5,'sdf','Dummy1','13000.0000','asvcsa'),
 (6,'','','','');
/*!40000 ALTER TABLE `stktranspurecpt001mb` ENABLE KEYS */;


--
-- Definition of table `stockageing001mb`
--

DROP TABLE IF EXISTS `stockageing001mb`;
CREATE TABLE `stockageing001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `averageage` int(30) NOT NULL,
  `earliest` tinyint(1) NOT NULL,
  `latest` tinyint(1) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `actual` int(11) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `projected` int(11) DEFAULT NULL,
  `requested` int(11) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockageing001mb`
--

/*!40000 ALTER TABLE `stockageing001mb` DISABLE KEYS */;
INSERT INTO `stockageing001mb` (`id`,`itemcode`,`itemname`,`description`,`itemgroup`,`brand`,`averageage`,`earliest`,`latest`,`uom`,`actual`,`item`,`ordered`,`projected`,`requested`,`reserved`,`warehouse`) VALUES 
 (1,'material','shaft','rawmaetrial','billing','good',5,1,0,'nos',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
 (2,'table','rawmaterial','rawmatrrialbilling','table','good',7,0,0,'numbersss',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `stockageing001mb` ENABLE KEYS */;


--
-- Definition of table `stockbalance001mb`
--

DROP TABLE IF EXISTS `stockbalance001mb`;
CREATE TABLE `stockbalance001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `openingqty` decimal(3,1) NOT NULL,
  `openingvalue` decimal(3,1) NOT NULL,
  `inqty` decimal(3,1) NOT NULL,
  `invalue` decimal(3,1) NOT NULL,
  `outqty` decimal(3,1) NOT NULL,
  `outvalue` decimal(3,1) NOT NULL,
  `balqty` decimal(3,1) NOT NULL,
  `balvalue` decimal(3,1) NOT NULL,
  `validationrate` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockbalance001mb`
--

/*!40000 ALTER TABLE `stockbalance001mb` DISABLE KEYS */;
INSERT INTO `stockbalance001mb` (`id`,`item`,`itemname`,`itemgroup`,`brand`,`description`,`warehouse`,`stockuom`,`openingqty`,`openingvalue`,`inqty`,`invalue`,`outqty`,`outvalue`,`balqty`,`balvalue`,`validationrate`,`company`) VALUES 
 (1,'shaft','blade','rawmaterial','nice','good materail','spl','nos','1.0','10.0','2.0','5.0','10.0','45.0','58.0','12.0','14','xyz');
/*!40000 ALTER TABLE `stockbalance001mb` ENABLE KEYS */;


--
-- Definition of table `stockentry001mb`
--

DROP TABLE IF EXISTS `stockentry001mb`;
CREATE TABLE `stockentry001mb` (
  `stockid` int(11) NOT NULL AUTO_INCREMENT,
  `materialrequest` varchar(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `TransferedQty` decimal(3,1) NOT NULL,
  `Qtytotransfer` decimal(3,1) NOT NULL,
  `description` varchar(30) NOT NULL,
  `company` varchar(40) NOT NULL,
  `itemid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`stockid`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockentry001mb`
--

/*!40000 ALTER TABLE `stockentry001mb` DISABLE KEYS */;
INSERT INTO `stockentry001mb` (`stockid`,`materialrequest`,`date`,`Quantity`,`TransferedQty`,`Qtytotransfer`,`description`,`company`,`itemid`) VALUES 
 (1,'MRE-001','2015-02-06',88,'40.0','98.0','sportitems','LLC',1),
 (2,'MRE-002','2014-02-06',78,'50.0','68.0','sportitems','ABC',1),
 (9,'MRE-009','2015-02-09',0,'21.9','78.3','sports','sportscompany',1),
 (14,'MRE-006','2019-02-03',0,'0.0','0.0','metal','sportscompany',21),
 (15,'MRE-007','2019-02-03',45,'45.8','45.3','metal','sportscompany',2),
 (18,'MRE-0061','2019-02-03',23,'45.3','23.3','sports369','sportscompany369',22),
 (25,'MRE-0019','10/05/2016',36,'23.6','45.6','metal123','metalcompany123',22),
 (71,'MR_002','10/03/2016',78,'25.3','58.3','material','xyz',22),
 (72,'','',0,'40.0','98.0','','',0),
 (73,'','',0,'40.0','98.0','','',0);
/*!40000 ALTER TABLE `stockentry001mb` ENABLE KEYS */;


--
-- Definition of table `stockledger001mb`
--

DROP TABLE IF EXISTS `stockledger001mb`;
CREATE TABLE `stockledger001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(30) NOT NULL,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `qty` int(30) NOT NULL,
  `balanceqty` int(30) NOT NULL,
  `incomingrate` int(30) NOT NULL,
  `valuationrate` int(30) NOT NULL,
  `balancevalue` int(30) NOT NULL,
  `vouchertype` varchar(30) NOT NULL,
  `voucherno` int(30) NOT NULL,
  `batch` int(30) NOT NULL,
  `serialno` int(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockledger001mb`
--

/*!40000 ALTER TABLE `stockledger001mb` DISABLE KEYS */;
INSERT INTO `stockledger001mb` (`id`,`date`,`item`,`itemname`,`itemgroup`,`brand`,`description`,`warehouse`,`stockuom`,`qty`,`balanceqty`,`incomingrate`,`valuationrate`,`balancevalue`,`vouchertype`,`voucherno`,`batch`,`serialno`,`company`) VALUES 
 (1,'20-08-1990','stock','shaft','rawmaterial','good','nice','spl','nos',10,12,25,45,85,'materialtype',10,2,5,'xyz');
/*!40000 ALTER TABLE `stockledger001mb` ENABLE KEYS */;


--
-- Definition of table `stockprojected001mb`
--

DROP TABLE IF EXISTS `stockprojected001mb`;
CREATE TABLE `stockprojected001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actualqty` int(11) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemcode` varchar(255) DEFAULT NULL,
  `itemgroup` varchar(255) DEFAULT NULL,
  `itemname` varchar(255) DEFAULT NULL,
  `orderedqty` int(11) DEFAULT NULL,
  `plannedqty` int(11) DEFAULT NULL,
  `projectedqty` int(11) DEFAULT NULL,
  `reorderlevel` int(11) DEFAULT NULL,
  `reorderqty` int(11) DEFAULT NULL,
  `requestedqty` int(11) DEFAULT NULL,
  `reservedqty` int(11) DEFAULT NULL,
  `shortageqty` int(11) DEFAULT NULL,
  `stockuom` varchar(255) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockprojected001mb`
--

/*!40000 ALTER TABLE `stockprojected001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockprojected001mb` ENABLE KEYS */;


--
-- Definition of table `supplier001mb`
--

DROP TABLE IF EXISTS `supplier001mb`;
CREATE TABLE `supplier001mb` (
  `supId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `addType` varchar(50) NOT NULL,
  `supCity` varchar(50) NOT NULL,
  `supAddress` varchar(100) NOT NULL,
  `supPhone` varchar(50) NOT NULL,
  `supCountry` varchar(50) NOT NULL,
  `supState` varchar(50) NOT NULL,
  PRIMARY KEY (`supId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier001mb`
--

/*!40000 ALTER TABLE `supplier001mb` DISABLE KEYS */;
INSERT INTO `supplier001mb` (`supId`,`supName`,`addType`,`supCity`,`supAddress`,`supPhone`,`supCountry`,`supState`) VALUES 
 (4,'','','','','','',''),
 (13,'','','','','','',''),
 (14,'','','','','','',''),
 (15,'','','','','','',''),
 (16,'','','','','','',''),
 (17,'sdfs','Billing','wef','wef','wfew','wfewf','wf'),
 (18,'sdfcsdcs','Personal','sdvssdv','sdvsdvs','sdvsv','sdvsv','sdvsv'),
 (19,'sdf','Shipping','sdf','sfd','sfd','sdf','sfds'),
 (20,'','','','','','',''),
 (21,'sdfs','Billing','wef','wef','wfew','wfewf','wf');
/*!40000 ALTER TABLE `supplier001mb` ENABLE KEYS */;


--
-- Definition of table `supptype001mb`
--

DROP TABLE IF EXISTS `supptype001mb`;
CREATE TABLE `supptype001mb` (
  `sutypeId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `suType` varchar(50) NOT NULL,
  PRIMARY KEY (`sutypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supptype001mb`
--

/*!40000 ALTER TABLE `supptype001mb` DISABLE KEYS */;
INSERT INTO `supptype001mb` (`sutypeId`,`supName`,`suType`) VALUES 
 (2,'Eagle hardware','Electrical'),
 (3,'undefined','undefined'),
 (5,'undefined','undefined'),
 (6,'','');
/*!40000 ALTER TABLE `supptype001mb` ENABLE KEYS */;


--
-- Definition of table `supstatus001mb`
--

DROP TABLE IF EXISTS `supstatus001mb`;
CREATE TABLE `supstatus001mb` (
  `sustatusId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `sustatus` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY (`sustatusId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supstatus001mb`
--

/*!40000 ALTER TABLE `supstatus001mb` DISABLE KEYS */;
INSERT INTO `supstatus001mb` (`sustatusId`,`supName`,`sustatus`,`phone`) VALUES 
 (1,'Asiatic Solution','Enabled','95666789'),
 (2,'Asiatic Solution','Open','9790790208'),
 (3,'','',''),
 (4,'','',''),
 (5,'','',''),
 (6,'','',''),
 (7,'','',''),
 (8,'','',''),
 (9,'','',''),
 (10,'','',''),
 (11,'','',''),
 (12,'','','5454554'),
 (13,'','',''),
 (14,'','',''),
 (15,'','',''),
 (16,'','',''),
 (17,'','','');
/*!40000 ALTER TABLE `supstatus001mb` ENABLE KEYS */;


--
-- Definition of table `swsanalytics001mb`
--

DROP TABLE IF EXISTS `swsanalytics001mb`;
CREATE TABLE `swsanalytics001mb` (
  `swsId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `swsUOM` varchar(20) NOT NULL,
  `consQty` varchar(20) NOT NULL,
  `consAmt` decimal(12,4) DEFAULT NULL,
  `delQty` varchar(20) NOT NULL,
  `delAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) NOT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  PRIMARY KEY (`swsId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `swsanalytics001mb`
--

/*!40000 ALTER TABLE `swsanalytics001mb` DISABLE KEYS */;
INSERT INTO `swsanalytics001mb` (`swsId`,`itemCode`,`description`,`swsUOM`,`consQty`,`consAmt`,`delQty`,`delAmt`,`totalQty`,`totalAmt`) VALUES 
 (1,'Table','Neat and Clean','Nos','12','10000.0000','10','8000.0000','10','8000.0000'),
 (3,'','','aaa','12','10000.0000','10','8000.0000','10','8000.0000'),
 (5,'','','aaa','12','10000.0000','10','8000.0000','10','8000.0000'),
 (6,'','','aaa','12','10000.0000','10','8000.0000','10','8000.0000'),
 (7,'Dummy1','','aaa','12','12.0000','10','8000.0000','10','8000.0000');
/*!40000 ALTER TABLE `swsanalytics001mb` ENABLE KEYS */;


--
-- Definition of table `systemproperties001mb`
--

DROP TABLE IF EXISTS `systemproperties001mb`;
CREATE TABLE `systemproperties001mb` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(60) NOT NULL,
  `type` varchar(20) NOT NULL,
  `status` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemproperties001mb`
--

/*!40000 ALTER TABLE `systemproperties001mb` DISABLE KEYS */;
INSERT INTO `systemproperties001mb` (`ID`,`name`,`description`,`type`,`status`) VALUES 
 (1,'Login.Domain','Manufacturing','Domain','Y'),
 (2,'Login.Domain','Construction','Domain','Y'),
 (3,'Login.Domain','Buying House','Domain','Y'),
 (4,'Login.Domain','Calibration Labs','Domain','Y'),
 (5,'Login.Domain','School','Domain','Y'),
 (6,'Registration.SecurityQuestion','What was your childhood nickname ?','SecurityQuestion','Y'),
 (7,'Registration.SecurityQuestion','In what city did you meet your spouse/significant other ?','SecurityQuestion','Y'),
 (8,'Registration.SecurityQuestion','What is the name of your favorite childhood friend ?','SecurityQuestion','Y'),
 (9,'Registration.SecurityQuestion','What street did you live on in third grade ?','SecurityQuestion','Y'),
 (10,'Registration.SecurityQuestion','What is your oldest sibling\'s middle name ?','SecurityQuestion','Y'),
 (11,'Registration.SecurityQuestion','What school did you attend for sixth grade ?','SecurityQuestion','Y'),
 (12,'Item.Status','To Deliver','Status','Y'),
 (13,'Item.Status','To Bill','Status','Y'),
 (14,'Item.Status','Draft','Status','Y'),
 (15,'Item.Status','Completed','Status','Y'),
 (16,'Item.Status','Closed','Status','Y'),
 (17,'Item.Status','Cancelled','Status','Y'),
 (18,'EmpStatus.status','Active','status','Y'),
 (19,'EmpStatus.status','Inactive','status','Y'),
 (20,'EmpGender.gender','Male','gender','Y'),
 (21,'EmpGender.gender','Female','gender','Y'),
 (22,'Recruit.JobOpening','open','JobOpening','Y'),
 (23,'Recruit.JobOpening','closed','JobOpening','Y'),
 (24,'Recruit.JobApplicant','open','JobApplicant','Y'),
 (25,'Recruit.JobApplicant','replied','JobApplicant','Y'),
 (26,'Recruit.JobApplicant','rejected','JobApplicant','Y'),
 (27,'Recruit.JobApplicant','hold','JobApplicant','Y'),
 (28,'Recruit.OfferLetter','Draft','OfferLetter','Y'),
 (29,'Recruit.OfferLetter','Submitted','OfferLetter','Y'),
 (30,'Recruit.OfferLetter','Cancelled','OfferLetter','Y'),
 (31,'Recruit.OfferLetter','Queued for Saving','OfferLetter','Y'),
 (32,'Recruit.OfferLetter','Queued for Submission','OfferLetter','Y'),
 (33,'Recruit.OfferLetter','Queued for Cancellation','OfferLetter','Y'),
 (34,'Name.Prefix','Mr','Prefix','Y'),
 (35,'Name.Prefix','Mrs','Prefix','Y'),
 (36,'Name.Prefix','Ms','Prefix','Y'),
 (37,'Name.Prefix','Other','Prefix','Y'),
 (38,'Leave.leaveApp','Open','leaveApp','Y'),
 (39,'Leave.leaveApp','Approved','leaveApp','Y'),
 (40,'Leave.leaveApp','Rejected','leaveApp','Y'),
 (41,'Leave.leaveType','Sick','leaveType','Y'),
 (42,'Leave.leaveType','Casual','leaveType','Y'),
 (43,'Leave.leaveType','Vacation','leaveType','Y'),
 (44,'Leave.leaveType','Paternity','leaveType','Y'),
 (45,'Leave.leaveType','Maternity','leaveType','Y'),
 (46,'Leave.leaveType','Privilege','leaveType','Y'),
 (47,'Leave.leaveType','Compensetory','leaveType','Y'),
 (48,'Holiday.Week','Monday','Week','Y'),
 (49,'Holiday.Week','Tuesday','Week','Y'),
 (50,'Holiday.Week','Wednesday','Week','Y'),
 (51,'Holiday.Week','Thursday','Week','Y'),
 (52,'Holiday.Week','Friday','Week','Y'),
 (53,'Holiday.Week','Saturday','Week','Y'),
 (54,'Holiday.Week','Sunday','Week','Y'),
 (55,'processpr.Month','1','Month','Y'),
 (56,'processpr.Month','2','Month','Y'),
 (57,'processpr.Month','3','Month','Y'),
 (58,'processpr.Month','4','Month','Y'),
 (59,'processpr.Month','5','Month','Y'),
 (60,'processpr.Month','6','Month','Y'),
 (61,'processpr.Month','7','Month','Y'),
 (62,'processpr.Month','8','Month','Y'),
 (63,'processpr.Month','9','Month','Y'),
 (64,'processpr.Month','10','Month','Y'),
 (65,'processpr.Month','11','Month','Y'),
 (66,'processpr.Month','12','Month','Y'),
 (67,'Salary.Mode','Yes','Mode','Y'),
 (68,'Salary.Mode','No','Mode','Y'),
 (69,'Expense.Type','Food','Type','Y'),
 (70,'Expense.Type','Medical','Type','Y'),
 (71,'Expense.Type','Travel','Type','Y'),
 (72,'Expense.Type','Calls','Type','Y'),
 (73,'Expense.Type','Others','Type','Y'),
 (74,'Product.Planning','Sales Order','Planning','Y'),
 (75,'Product.Planning','Material Request','Planning','Y'),
 (76,'Product.Planning','Material Delivery','Planning','Y'),
 (77,'Itembom.status','Enabled','status','Y'),
 (78,'Itembom.status','Variant','status','Y'),
 (79,'Itembom.status','Template','status','Y'),
 (80,'Itembom.status','Disabled','status','Y'),
 (81,'Item.Group','Products','Group','Y'),
 (82,'Item.Group','Raw Materials','Group','Y'),
 (83,'Item.Group','Sub Assemblies','Group','Y'),
 (84,'Item.Group','All ItemGroups','Group','Y'),
 (85,'Manufacture.List','Sales-WPL','List','Y'),
 (86,'Manufacture.List','Supplier-WPL','List','Y'),
 (87,'Manufacture.List','Work-in Progress-WPL','List','Y'),
 (88,'Manufacture.List','Finished Goods-WPL','List','Y'),
 (89,'Manufacture.List','All Warehouses-WPL','List','Y'),
 (90,'PRMatReq.Type','Purchase','Type','Y'),
 (91,'PRMatReq.Type','Material Transfer','Type','Y'),
 (92,'PRMatReq.Type','Material Issue','Type','Y'),
 (93,'PRMatReq.Type','Manufacture','Type','Y'),
 (94,'PRSupp.Type','Asiatic Solution','Type','Y'),
 (95,'PRSupp.Type','Eagle Hardware','Type','Y'),
 (96,'PRSupp.Type','KSMerchandise','Type','Y'),
 (97,'PRSupp.Type','New World Reality','Type','Y'),
 (98,'PRSupp.Type','HomeBase','Type','Y'),
 (99,'PRSupp.Type','Scotier','Type','Y'),
 (100,'PRSupp.Type','HeliosAir','Type','Y'),
 (101,'PRRawmat.List','Yes','List','Y'),
 (102,'PRRawmat.List','No','List','Y'),
 (103,'SuAddress.Type','Billing','Type','Y'),
 (104,'SuAddress.Type','Shipping','Type','Y'),
 (105,'SuAddress.Type','Office','Type','Y'),
 (106,'SuAddress.Type','Personal','Type','Y'),
 (107,'SuAddress.Type','Plant','Type','Y'),
 (108,'SuAddress.Type','Postal','Type','Y'),
 (109,'SuAddress.Type','Shop','Type','Y'),
 (110,'SuAddress.Type','Subsidiary','Type','Y'),
 (111,'SuAddress.Type','Warehouse','Type','Y'),
 (112,'SuAddress.Type','Other','Type','Y'),
 (113,'Supplier.Type','Distributor','Type','Y'),
 (114,'Supplier.Type','Electrical','Type','Y'),
 (115,'Supplier.Type','Hardware','Type','Y'),
 (116,'Supplier.Type','Local','Type','Y'),
 (117,'Supplier.Type','Pharmaceutical','Type','Y'),
 (118,'Supplier.Type','Raw Material','Type','Y'),
 (119,'Supplier.Type','Services','Type','Y'),
 (120,'Supplier.Status','Open','Status','Y'),
 (121,'Supplier.Status','Enabled','Status','Y'),
 (122,'Supplier.Status','Passive','Status','Y'),
 (123,'Supplier.Status','Replied','Status','Y'),
 (124,'Putree.type','Supplier Type','type','Y'),
 (125,'Putree.type','Supplier','type','Y'),
 (126,'Putree.type','Item Group','type','Y'),
 (127,'Putree.type','Item','type','Y'),
 (128,'PuBase.type','Purchase Invoice','type','Y'),
 (129,'PuBase.type','Purchase Order','type','Y'),
 (130,'PuBase.type','Purchase Receipt','type','Y'),
 (131,'valqty.choose','Value','choose','Y'),
 (132,'valqty.choose','Quantity','choose','Y'),
 (133,'range.type','Daily','type','Y'),
 (134,'range.type','Monthly','type','Y'),
 (135,'range.type','Weekly','type','Y'),
 (136,'range.type','Quarterly','type','Y'),
 (137,'range.type','Half-Yearly','type','Y'),
 (138,'range.type','Yearly','type','Y'),
 (139,'crms.status','Lead','status','Y'),
 (140,'crms.status','Replied','status','Y'),
 (141,'crms.status','Open','status','Y'),
 (142,'crms.status','Opportunity','status','Y'),
 (143,'crms.status','Interested','status','Y'),
 (144,'crms.status','Converted','status','Y'),
 (145,'crms.status','Do Not Contact','status','Y'),
 (146,'crmscust.status','Open','status','Y'),
 (147,'crmscust.status','Dormant','status','Y'),
 (148,'crmscust.status','Active','status','Y'),
 (149,'crmcontact.status','Passive','status','Y'),
 (150,'crmcontact.status','Open','status','Y'),
 (151,'crmcontact.status','Replied','status','Y'),
 (152,'crmoppo.type','Sales','type','Y'),
 (153,'crmoppo.type','Maintainence','type','Y'),
 (154,'crmoppo.from','Lead','from','Y'),
 (155,'crmoppo.from','Customer','from','Y'),
 (156,'crmsoppo.status','Open','status','Y'),
 (157,'crmsoppo.status','Quotation','status','Y'),
 (158,'crmsoppo.status','Converted','status','Y'),
 (159,'crmsoppo.status','Lost','status','Y'),
 (160,'crmsoppo.status','Replied','status','Y'),
 (161,'crmsoppo.status','Closed','status','Y'),
 (162,'crmcommunics.status','Open','status','Y'),
 (163,'crmcommunics.status','Replied','status','Y'),
 (164,'crmcommunics.status','Closed','status','Y'),
 (165,'crmcommunics.status','Linked','status','Y'),
 (166,'crmcommunics.sentrec','Sent','sentrec','Y'),
 (167,'crmcommunics.sentrec','Received','sentrec','Y'),
 (168,'inactivecust.type','Sales Person','type','Y'),
 (169,'inactivecust.type','Sales Invoice','type','Y'),
 (170,'stktransent.title','Material issue','title','Y'),
 (171,'stktransent.title','Material Receipt','title','Y'),
 (172,'stktransent.title','Material Transfer','title','Y'),
 (173,'stktransent.title','Material Transfer for Manufacture','title','Y'),
 (174,'stktransent.title','Manufacture','title','Y'),
 (175,'stktransent.title','Replace','title','Y'),
 (176,'stktransent.title','Sub-Contract','title','Y'),
 (177,'stkvoucher.type','Delivery Note','type','Y'),
 (178,'stkvoucher.type','Purchase Receipt','type','Y'),
 (179,'stkvoucher.type','Stock Entry','type','Y'),
 (180,'stkvoucher.type','Sales inVoice','type','Y'),
 (181,'shipping.status','Enabled','status','Y'),
 (182,'shipping.status','Disabled','status','Y'),
 (183,'receiptdoc.type','Purchase Invoice','type','Y'),
 (184,'receiptdoc.type','Purchase Receipt','type','Y'),
 (185,'itemnaming.select','ItemCode','select','Y'),
 (186,'itemnaming.select','NamingServices','select','Y'),
 (187,'defvalue.method','FIFO','method','Y'),
 (188,'defvalue.method','Moving Average','method','Y'),
 (189,'party.type','Customer','type','Y'),
 (190,'party.type','Supplier','type','Y'),
 (191,'letterhead.list','Manager','list','Y'),
 (192,'letterhead.list','Human Resource','list','Y'),
 (193,'letterhead.list','Finance head','list','Y'),
 (194,'account.type','Cost of Goods Sold','type','Y'),
 (195,'account.type','Sales','type','Y'),
 (196,'account.type','Debtors','type','Y'),
 (197,'account.type','National Bank','type','Y'),
 (198,'account.type','Cash','type','Y'),
 (199,'account.type','Stores','type','Y'),
 (200,'account.type','Creditors','type','Y'),
 (201,'account.type','Freight and Forwarding','type','Y'),
 (202,'account.type','Changes','type','Y'),
 (203,'account.type','Stock Received','type','Y'),
 (204,'account.type','Not Billed','type','Y'),
 (205,'payment.mode','Cash','mode','Y'),
 (206,'payment.mode','Wire Transfer','mode','Y'),
 (207,'payment.mode','Check','mode','Y'),
 (208,'payment.mode','Credit Card','mode','Y'),
 (209,'payment.mode','Bank Draft','mode','Y'),
 (210,'currency.type','INR','type','Y'),
 (211,'currency.type','USD','type','Y'),
 (212,'currency.type','EUR','type','Y'),
 (213,'currency.type','JPN','type','Y'),
 (214,'payment.type','Receive','type','Y'),
 (215,'payment.type','Pay','type','Y'),
 (216,'payment.type','Internal Transfer','type','Y'),
 (217,'payreq.status','Paid','status','Y'),
 (218,'payreq.status','Initiated','status','Y'),
 (219,'payreq.status','Failed','status','Y'),
 (220,'payreq.status','Cancelled','status','Y'),
 (221,'payreq.status','Draft','status','Y'),
 (222,'journal.satus','Bank Entry','satus','Y'),
 (223,'journal.satus','Cash Entry','satus','Y'),
 (224,'journal.satus','Credit Card Entry','satus','Y'),
 (225,'journal.satus','Debit Note','satus','Y'),
 (226,'journal.satus','Credit Note','satus','Y'),
 (227,'journal.satus','Centre Entry','satus','Y'),
 (228,'journal.satus','Excise Entry','satus','Y'),
 (229,'journal.satus','Wire off Entry','satus','Y'),
 (230,'journal.satus','Opening Entry','satus','Y'),
 (231,'journal.satus','Depreciation Entry','satus','Y'),
 (232,'accounttype.name','Savings','name','Y'),
 (233,'accounttype.name','Current','name','Y'),
 (234,'company.domain','Manufacturing','domain','Y'),
 (235,'company.domain','IT','domain','Y'),
 (236,'company.domain','BPO','domain','Y'),
 (237,'chartacc.type','Standard','type','Y'),
 (238,'chartacc.type','Customized','type','Y'),
 (239,'task.status','Accepted','status','Y'),
 (240,'task.status','Approved','status','Y'),
 (241,'task.status','Assigned','status','Y'),
 (242,'task.status','AutoReject','status','Y'),
 (243,'task.status','Closed','status','Y'),
 (244,'task.status','Completed','status','Y'),
 (245,'task.status','Failed','status','Y'),
 (246,'task.status','In Planning','status','Y'),
 (247,'task.status','In Progress','status','Y'),
 (248,'task.status','Interrupted','status','Y'),
 (249,'task.status','Not Started','status','Y'),
 (250,'task.status','On hold','status','Y'),
 (251,'task.status','Open','status','Y'),
 (252,'task.status','Planned','status','Y'),
 (253,'task.status','Rejected','status','Y'),
 (254,'task.status','Unassigned','status','Y'),
 (255,'task.status','Waiting for Approval','status','Y'),
 (256,'Working','Working','task.status','Y'),
 (257,'Receivable','Receivable','type.account','Y'),
 (258,'type.account','Payable','account','Y'),
 (259,'bc.type','Bank','type','Y'),
 (260,'bc.type','Cash','type','Y'),
 (261,'month.name','January','name','Y'),
 (262,'month.name','February','name','Y'),
 (263,'month.name','March','name','Y'),
 (264,'month.name','April','name','Y'),
 (265,'month.name','May','name','Y'),
 (266,'month.name','June','name','Y'),
 (267,'month.name','July','name','Y'),
 (268,'month.name','August','name','Y'),
 (269,'month.name','September','name','Y'),
 (270,'month.name','October','name','Y'),
 (271,'month.name','November','name','Y'),
 (272,'month.name','December','name','Y'),
 (273,'attend.status','Present','status','Y'),
 (274,'attend.status','Absent','status','Y'),
 (275,'emp.holiday','Sunday','holiday','Y'),
 (276,'emp.holiday','Monday','holiday','Y'),
 (277,'emp.holiday','Tuesday','holiday','Y'),
 (278,'emp.holiday','Wednesday','holiday','Y'),
 (279,'emp.holiday','Thursday','holiday','Y'),
 (280,'emp.holiday','Friday','holiday','Y'),
 (281,'emp.holiday','Saturday','holiday','Y'),
 (282,'purchase.taxstatus','Enabled','taxstatus','Y'),
 (283,'purchase.taxstatus','Disabled','taxstatus','Y'),
 (284,'exceed.type','Warn','type','Y'),
 (285,'exceed.type','Stop','type','Y'),
 (286,'exceed.type','Ignore','type','Y'),
 (287,'ProdOrder.status','Draft','status','Y'),
 (288,'ProdOrder.status','Notstarted','status','Y'),
 (289,'ProdOrder.status','Submitted','status','Y'),
 (290,'ProdOrder.status','Stopped','status','Y'),
 (291,'ProdOrder.status','Unstopped','status','Y'),
 (292,'ProdOrder.status','In-Process','status','Y'),
 (293,'ProdOrder.status','Completed','status','Y'),
 (294,'ProdOrder.status','Cancelled','status','Y'),
 (295,'Dummy.status','Dummy1','dummy','Y'),
 (296,'Dummy.status','Dummy2','dummy','Y'),
 (297,'Dummy.status','Dummy3','dummy','Y'),
 (298,'Year.status','2020','year','Y'),
 (299,'Year.status','2021','year','Y'),
 (300,'Year.status','2022','year','Y'),
 (301,'Year.status','2023','year','Y'),
 (302,'Year.status','2024','year','Y'),
 (303,'Year.status','2025','year','Y');
/*!40000 ALTER TABLE `systemproperties001mb` ENABLE KEYS */;


--
-- Definition of table `task001mb`
--

DROP TABLE IF EXISTS `task001mb`;
CREATE TABLE `task001mb` (
  `taskid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taskdescription` varchar(45) NOT NULL,
  `AssignTo` varchar(45) NOT NULL,
  `AssignBy` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `starton` datetime NOT NULL,
  `endon` datetime NOT NULL,
  `allday` tinyint(1) NOT NULL,
  `sendanemail` tinyint(1) NOT NULL,
  `repeatthisevent` tinyint(1) NOT NULL,
  `projectname` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `projectid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`taskid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task001mb`
--

/*!40000 ALTER TABLE `task001mb` DISABLE KEYS */;
INSERT INTO `task001mb` (`taskid`,`taskdescription`,`AssignTo`,`AssignBy`,`status`,`starton`,`endon`,`allday`,`sendanemail`,`repeatthisevent`,`projectname`,`duration`,`projectid`) VALUES 
 (1,'task01','11','9','AutoReject,','2016-11-07 13:06:00','2016-11-08 13:06:00',0,0,0,'ERP,11','24:00',11),
 (2,'task02','10','12','In Progress,','2016-11-08 16:15:00','2016-11-09 16:15:00',0,0,0,'ERP,11','24:00',11),
 (3,'Task01','17','10','Assigned,','2016-11-10 16:15:00','2016-11-12 16:15:00',0,0,0,'TestAndReportStudio,12','48:00',12),
 (4,'task02','14','11','Completed,','2016-11-08 16:23:00','2016-11-08 18:24:00',0,0,0,'TestAndReportStudio,12','02:01',12),
 (5,'ffnn','','','','2016-11-07 13:06:00','2016-11-08 13:06:00',0,0,0,'','24:00',77),
 (6,'ffnn','','','','2016-11-07 13:06:00','2016-11-08 13:06:00',0,0,0,'','24:00',777),
 (7,'ffnn','','','','2016-11-07 13:06:00','2016-11-08 13:06:00',0,0,0,'','24:00',77),
 (8,'ffnn','','','','2016-11-07 13:06:00','2016-11-08 13:06:00',0,0,0,'','24:00',77),
 (9,'','','','','2021-06-04 20:11:43','2021-06-04 20:11:43',0,0,0,'','24:00',77),
 (10,'','','','','2021-06-04 20:11:46','2021-06-04 20:11:46',0,0,0,'','',0),
 (11,'','','','','2021-06-04 20:11:49','2021-06-04 20:11:49',0,0,0,'','',0),
 (12,'ffnn','','','','2021-06-04 20:13:54','2021-06-04 20:13:54',0,0,0,'','24:00',77),
 (13,'','','','','2021-06-09 17:16:21','2021-06-09 17:16:21',0,0,0,'','',0),
 (14,'','','','','2021-06-09 17:16:32','2021-06-09 17:16:32',0,0,0,'','',0),
 (15,'','','','','2021-06-09 17:16:35','2021-06-09 17:16:35',0,0,0,'','',0),
 (16,'','','','','2021-06-09 17:16:38','2021-06-09 17:16:38',0,0,0,'','',0),
 (17,'','','','','2021-06-09 18:29:25','2021-06-09 18:29:25',0,0,0,'','',0),
 (18,'','','','','2021-06-09 19:27:41','2021-06-09 19:27:41',0,0,0,'','',0),
 (19,'','','','','2021-06-09 19:28:42','2021-06-09 19:28:42',0,0,0,'','',77),
 (20,'','','','','2021-06-09 20:00:11','2021-06-09 20:00:11',1,1,1,'','',0),
 (21,'','','','','2021-06-09 20:00:17','2021-06-09 20:00:17',1,1,1,'','',0),
 (22,'','','','','2021-06-09 20:00:35','2021-06-09 20:00:35',1,1,1,'','',0),
 (23,'','','','','2021-06-09 20:01:24','2021-06-09 20:01:24',1,1,1,'','',0),
 (24,'','','','','2021-06-09 20:02:30','2021-06-09 20:02:30',1,1,1,'','',0),
 (25,'','','','','2021-06-09 20:03:56','2021-06-09 20:03:56',1,1,1,'','',0),
 (26,'','','','','2021-06-09 20:05:42','2021-06-09 20:05:42',1,1,1,'','',0),
 (27,'','','','','2021-06-09 20:23:50','2021-06-09 20:23:50',1,1,1,'','',0),
 (28,'','','','','2021-06-09 20:25:33','2021-06-09 20:25:33',1,1,1,'','',0),
 (29,'','','','','2021-06-09 20:25:36','2021-06-09 20:25:36',1,1,1,'','',0),
 (30,'','','','','2021-06-09 20:26:18','2021-06-09 20:26:18',1,1,1,'','',0),
 (31,'','','','','2021-06-09 20:28:16','2021-06-09 20:28:16',0,1,1,'','',0),
 (32,'','','','','2021-06-09 20:31:17','2021-06-09 20:31:17',1,1,1,'','',0),
 (33,'','','','','2021-06-09 20:32:06','2021-06-09 20:32:06',0,1,1,'','',0),
 (34,'','','','','2021-06-09 20:33:45','2021-06-09 20:33:45',0,1,0,'','',0),
 (35,'','','','','2021-06-09 20:33:54','2021-06-09 20:33:54',0,0,0,'','',0),
 (36,'','','','','2021-06-09 20:48:18','2021-06-09 20:48:18',0,0,0,'','',0),
 (37,'','','','','2021-06-09 20:48:49','2021-06-09 20:48:49',0,0,0,'','',0),
 (38,'ffnn','3','4','Approved','2021-06-04 20:11:46','2021-06-04 20:11:46',1,1,1,'Dummy1','24:00',0),
 (39,'','','','','2021-06-04 20:11:43','2021-06-04 20:11:43',0,0,0,'','24:00',77),
 (40,'knkn','4','3','Approved','2021-06-04 20:11:46','2021-06-04 20:11:46',1,1,1,'Dummy3','24:00',0),
 (41,'m  m ','4','4','AutoReject','2021-06-04 20:11:46','2021-06-26 01:13:35',1,1,0,'Dummy3','24:00',77);
/*!40000 ALTER TABLE `task001mb` ENABLE KEYS */;


--
-- Definition of table `taxrule001mb`
--

DROP TABLE IF EXISTS `taxrule001mb`;
CREATE TABLE `taxrule001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `billingcity` varchar(255) DEFAULT NULL,
  `billingcountry` varchar(255) DEFAULT NULL,
  `billingstate` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `fromdate` varchar(255) DEFAULT NULL,
  `shippingcity` varchar(255) DEFAULT NULL,
  `shippingcountry` varchar(255) DEFAULT NULL,
  `shippingstate` varchar(255) DEFAULT NULL,
  `taxtemplate` varchar(255) DEFAULT NULL,
  `taxtype` varchar(255) DEFAULT NULL,
  `todate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taxrule001mb`
--

/*!40000 ALTER TABLE `taxrule001mb` DISABLE KEYS */;
INSERT INTO `taxrule001mb` (`id`,`billingcity`,`billingcountry`,`billingstate`,`customer`,`fromdate`,`shippingcity`,`shippingcountry`,`shippingstate`,`taxtemplate`,`taxtype`,`todate`) VALUES 
 (6,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','sf','undefined','undefined'),
 (7,'undefined','sfd','sfd','undefined','undefined','sx','sfd','sfd','xcv','ssas','undefined'),
 (9,'azde','sdc','sfd','undefined','undefined','ad','sadf','sddf','sdf','qqqq','undefined'),
 (10,'azde','sdc','sfd','undefined','undefined','ad','sadf','sddf','sdf','qqqq','undefined'),
 (12,'undefined','undefined','undefined','Dummy1','undefined','undefined','undefined','sddf','sf','undefined','undefined'),
 (13,'undefined','undefined','undefined','Dummy1','undefined','undefined','undefined','sddf','sf','undefined','undefined'),
 (14,'undefined','undefined','undefined','Dummy1','undefined','undefined','undefined','sddf','sf','undefined','undefined'),
 (15,'','','','Dummy1','','','','','','','');
/*!40000 ALTER TABLE `taxrule001mb` ENABLE KEYS */;


--
-- Definition of table `termscondition001mb`
--

DROP TABLE IF EXISTS `termscondition001mb`;
CREATE TABLE `termscondition001mb` (
  `tcId` int(11) NOT NULL AUTO_INCREMENT,
  `tcName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `terms` varchar(200) NOT NULL,
  PRIMARY KEY (`tcId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `termscondition001mb`
--

/*!40000 ALTER TABLE `termscondition001mb` DISABLE KEYS */;
INSERT INTO `termscondition001mb` (`tcId`,`tcName`,`status`,`terms`) VALUES 
 (1,'TC-001','Enabled','Account is Secured and Good enough to hold');
/*!40000 ALTER TABLE `termscondition001mb` ENABLE KEYS */;


--
-- Definition of table `territory001mb`
--

DROP TABLE IF EXISTS `territory001mb`;
CREATE TABLE `territory001mb` (
  `terId` int(11) NOT NULL AUTO_INCREMENT,
  `terName` varchar(50) NOT NULL,
  PRIMARY KEY (`terId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `territory001mb`
--

/*!40000 ALTER TABLE `territory001mb` DISABLE KEYS */;
INSERT INTO `territory001mb` (`terId`,`terName`) VALUES 
 (1,'Rest of the World'),
 (2,'United States'),
 (3,'GHNG'),
 (4,'GHNGwwww'),
 (5,'GHNGdgedge');
/*!40000 ALTER TABLE `territory001mb` ENABLE KEYS */;


--
-- Definition of table `testcase001mb`
--

DROP TABLE IF EXISTS `testcase001mb`;
CREATE TABLE `testcase001mb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ASSIGNTO` varchar(255) NOT NULL,
  `AUTOMATED` varchar(255) NOT NULL,
  `DATEUPDATED` datetime NOT NULL,
  `EXECTYPE` varchar(255) NOT NULL,
  `FOLDERNAME` varchar(255) NOT NULL,
  `LSTRNBY` varchar(255) NOT NULL,
  `LSTRNDATE` datetime NOT NULL,
  `LSTRNRELEASE` varchar(255) NOT NULL,
  `LSTRNSTATUS` varchar(255) NOT NULL,
  `LSTRNTESTSET` varchar(255) NOT NULL,
  `ORIGINALID` varchar(255) NOT NULL,
  `OWNER` varchar(255) NOT NULL,
  `PRIORITY` varchar(255) DEFAULT NULL,
  `REVIEWED` varchar(255) NOT NULL,
  `RNBYHOST` varchar(255) NOT NULL,
  `RUNTIME` varchar(255) NOT NULL,
  `STATUS` varchar(255) NOT NULL,
  `TESTTYPE` varchar(255) NOT NULL,
  `TITLE` varchar(255) NOT NULL,
  `VERSION` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testcase001mb`
--

/*!40000 ALTER TABLE `testcase001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `testcase001mb` ENABLE KEYS */;


--
-- Definition of table `treenode001mb`
--

DROP TABLE IF EXISTS `treenode001mb`;
CREATE TABLE `treenode001mb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ISPARENT` varchar(255) NOT NULL,
  `PID` varchar(255) NOT NULL,
  `PARENTNAME` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `treenode001mb`
--

/*!40000 ALTER TABLE `treenode001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `treenode001mb` ENABLE KEYS */;


--
-- Definition of table `trialbalance001mb`
--

DROP TABLE IF EXISTS `trialbalance001mb`;
CREATE TABLE `trialbalance001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(45) NOT NULL,
  `openingcr` int(10) unsigned NOT NULL,
  `openingdr` int(10) unsigned NOT NULL,
  `closingcr` int(10) unsigned NOT NULL,
  `closingdr` int(10) unsigned NOT NULL,
  `credit` int(10) unsigned NOT NULL,
  `debit` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trialbalance001mb`
--

/*!40000 ALTER TABLE `trialbalance001mb` DISABLE KEYS */;
INSERT INTO `trialbalance001mb` (`id`,`account`,`openingcr`,`openingdr`,`closingcr`,`closingdr`,`credit`,`debit`) VALUES 
 (2,'32',123,123,123,213,231,231231),
 (4,'123',123,123,123,213,231,231),
 (7,'asd',123,12,123,21,131,2314),
 (9,'32',123,123,123,213,231,231231),
 (10,'123',123,123,123,213,231,231);
/*!40000 ALTER TABLE `trialbalance001mb` ENABLE KEYS */;


--
-- Definition of table `unitofmeasure001mb`
--

DROP TABLE IF EXISTS `unitofmeasure001mb`;
CREATE TABLE `unitofmeasure001mb` (
  `unitId` int(11) NOT NULL AUTO_INCREMENT,
  `unitName` varchar(40) NOT NULL,
  PRIMARY KEY (`unitId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unitofmeasure001mb`
--

/*!40000 ALTER TABLE `unitofmeasure001mb` DISABLE KEYS */;
INSERT INTO `unitofmeasure001mb` (`unitId`,`unitName`) VALUES 
 (1,'Minute'),
 (2,'Hour'),
 (3,'Set'),
 (5,'Nos'),
 (6,'Gram'),
 (7,'Kg'),
 (8,'Meter'),
 (9,'Minute'),
 (10,'');
/*!40000 ALTER TABLE `unitofmeasure001mb` ENABLE KEYS */;


--
-- Definition of table `updatebank001mb`
--

DROP TABLE IF EXISTS `updatebank001mb`;
CREATE TABLE `updatebank001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bankaccount` varchar(45) NOT NULL,
  `fromdate` varchar(45) NOT NULL,
  `todate` varchar(45) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `chqNumber` varchar(50) DEFAULT NULL,
  `clearanceDate` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updatebank001mb`
--

/*!40000 ALTER TABLE `updatebank001mb` DISABLE KEYS */;
INSERT INTO `updatebank001mb` (`id`,`bankaccount`,`fromdate`,`todate`,`customername`,`amount`,`chqNumber`,`clearanceDate`) VALUES 
 (7,'qqqq','','','','8978979.0000','22222332',''),
 (8,'sfsf','','','','243.0000','243234',''),
 (9,'sfsf','','','','243.0000','243234',''),
 (10,'sfsf','','','','243.0000','243234','');
/*!40000 ALTER TABLE `updatebank001mb` ENABLE KEYS */;


--
-- Definition of table `uploadtemplate001mb`
--

DROP TABLE IF EXISTS `uploadtemplate001mb`;
CREATE TABLE `uploadtemplate001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` blob NOT NULL,
  `filename` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uploadtemplate001mb`
--

/*!40000 ALTER TABLE `uploadtemplate001mb` DISABLE KEYS */;
INSERT INTO `uploadtemplate001mb` (`id`,`content`,`filename`) VALUES 
 (1,0x504B03041400080808003C866A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6CAD915D4BC3301486EFFB2B42EEDBD36C3834B41DA20C04C581958977213DB6C5E68324DAF9EFCDBA5951BCF4F2E47DDE87C349B1DEAB81BCA3F3BDD12565594E096A699A5EB7257DAC37E9395D57495248E370EB8C45177AF424B6B42F691782E5005E76A884CF62AC63F2629C12218EAE052BE4AB68111679BE02854134220838D8523BEBE8D1C7A5FD77652367A57D73C3246824E0800A75F0C03206DF6C40A7FC9F852999C9BDEF676A1CC76C5C4E5CDC88C1D3DDEDC3B47CDA6B1F849648AB8490E264E7D2A108D890E8E0E1C36249BF92DDF2EABADED06A91B355CA58CAF29A31CE2EF8D9EAB9805FFD93F3381A575DC6B37448B6F73707747E4E0AF8F97555F209504B0708EBC3DE5304010000F4010000504B03041400080808003C866A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14EC3300C86EF7D8A28F7D5DD9010424D774148BB4D683C4048DC366A13478907E5ED090704430C76E018E7F7E74FB2DBEDE267F18C293B0A4AAEEB460A0C86AC0B83928F87FBD58DDC7655D53EE0ACB964F2E86216A529642547E6780B90CD885EE79A2286F2D353F29ACB330D10B599F480B0699A6B485F19B2AB8438C18A9D5532EDEC5A8AC36BC44BF0D4F7CEE01D99A3C7C03F4CF99628649D06642597195E284D4F44535DA012CEEA6CFE530717C660D1AE622AFD891DE64F274B665FCA19748C7F485D5D2E757E05E091B5D5ACC150C2DF95DE131F4E2D9C5C4357BD01504B070857285E23E300000046020000504B03041400080808003C866A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CAD93CB4EC3301045F7F90ACB5B14BB6581104AD2058F2554A27C80B1278D55BF64BBA5FD7B2629E5255A8AE8CAB2E6DE7B6E467135595B43561093F6AEA66336A2049CF44ABB794D9F6677E5259D344551CD36011241B14B35ED720E579C27D9811589F9000E27AD8F5664BCC6390F422EC41CF8F96874C1A577195C2E739F419B8290EA065AB13499DCAE71B26547308992EBADB6C7D5548460B41419E77CE5D43750F90661E81C34A9D3219DA180F27D907EB89FF1617DC09544AD804C45CCF7C2A2902B2FA7D187C4D1C20E07FD50D6B7AD9680194B8B16067D2705AA0C1809316BF8DCFC205EFA087FE7EF96D5BB8F87AE0D4F9D88A01E73C45F22FDFBBB53882054EA00B235EC4BF61155F2C6C0C93B0CA1BFC35F7C5C3C7BBF38F90AF0645668775C85419FF8708C4FDCE53D7F57A5E2C3BB6F8A57504B070825E008CE3801000028040000504B03041400080808003C866A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B03041400080808003C866A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D92C14E03211086EF26BEC386BB65DB831AC3D283894FA00F40D96977121828336BECDB4BA3B1C9D27A9CEF2333C30F66FB1543F7098531D1A0D6AB5E75403E8D4887417DBCBF3D3CABADBDBF33CCD2F93493D4434FAA9B098F33BC5E406D433CA84924BF68CD7E82E87895325035FB54A2935A9683E65CC08D3C01480C7AD3F78F3A3A24650DA3356271345AACD1E7EA87F899254528B70DB908B7DCA1A4392FA51BC702CC0109D6FFB84DD314E5B4642C4E9AE939551C6A8EED5EE7CC4AD3056B2E185D39FD8E5FFA3D16966BF70CEE3ACF53A206C6B4C30034C71D94A5AB0F86A1CDF86F319F489C978BD7F54FD86F504B0708BAF98E31F100000041020000504B03041400080808003C866A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD544D6FD43010BD23F11F2CDFA9B3A1A0AA4A5241D5453DB448EC22B87A6327B1F047647BAB0DBF9EB19D6C7657F4838A4B3C7E79EFCD78324E71B553123D70EB84D1255E9C6518715D1B26745BE2EFEBE5BB0B7C55BD7D53383F48BEEA38F70814DA95B8F3BEBF24C4D51D57D49D999E6B78D318ABA887AD6D89EB2DA7CC05919224CFB28F4451A17155E8AD5A2AEF506DB6DA9738C3A42A1AA36724C709A80AF71B3D5009A585DA80561B692C129AF11D6725BE0898A68A27D63595626345F4A34AC821C1790062A5234F096D6C0049CA929EB3CFFAF6EE6685EE6F7EA06F5FEF3EDD47F95448960AD9A4ADB75BFE585DA3795C1C241152EE4F788E1350153DF59E5BBD840D1AE3F5D0F3126BA379B289BC67D88CDA5F5F2C1D9E5200D45E1F179AC7DE9023D2CB123A2305C3FF66191768C5C65806433735E3039EA0AA90BCF120B7A2EDC2EA4D1F9A6DBC370A0226686B349521C1A498D740427154E1C374306A7FA381E329E785CA58D329EBF576E1A4A7A4FF94620CA0D335977215583F9B7DBB17D0EE5D83D22DBC65E102A230A35308DF680C934DDA04FF43B7E47D609BBFCA16ED9ABDFF63EAC5AC7E7FA83E9FD588F6BD1CC2B08D7732019F23F7085A9A50EC746FC9780888E67F5CF507504B0708E92B0617D001000018050000504B03041400080808003C866A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B03041400080808003C866A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91C14EC3300C40EFFD8AC8779A769310424D774148BBB2F10151EA36D5DA24B20DDBFE9E8004AC12080E3B59B6E3E797A4D99CE649BD22F1188381BAAC406170B11BC360E079FF7873079BB6289A279CACE433ECC7C42A0F0536E045D2BDD6EC3CCE96CB9830E44E1F69B692531A74B2EE6007D4ABAABAD574C980B6506A8155DBCE006DBB1AD4FE9CF03FF8D8F7A3C387E85E660CF2C316CDDE12763BA17C21CE604B038A8145B9CC54D0BFFAACAEEA23E7092F453EF23F0CD6D73438463AB047946F89AFD2FB7BE5507FFA347AF1EF6DF106504B0708F0CE5886D400000030020000504B03041400080808003C866A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD96CB729B301486F79DE93B68B42F485C4507C8B44DDD246DDAF4BEC646364C007924D9E4F12B301773D9C0746310FECEAFA3C3AF23FC9B973C0367CA45CA8A00620D41408B1D8BD3E210C0DFBF366F08BC095FBFF24BC69F4542A9042AA010014CA43CBED575B14B681E098D1D69A1FED9339E47520DF94117474EA3B80ECA33DD40C8D1F3282D60E8C7694E8B6A46C0E93E80EF30D443BF06FFA4B41457F7A09A77CBD87335B88F03A8F293D1F627CDE84E523596FC44AB687D12BEA95379E220A6FBE894C91FACBCA3E921916A99B65AA70ADAB14CD4BF204FABD54390472FF5B54C639904D0D06CDB72886B43B03B09C9F2BF97E7F5AC604B85DCA4B24FA253321A25A353C248B390632C15321B21B317329590615AE6E2A4AC46CBBAD62296EBD8CBF3B21B2DBBD7C29A8D4C6FC51A9D46CBF90F5A6EA3E5765AA6E639C85B5E2DD228914EC95A5B2CAF91F23A294F236B568751EB50D449B99A8D57E4843BB3F76E57DB8210C7C5CBFD8E5BC363E36A8D8818C8C4CB536B4D8F7BD713B511914B5688B5AEC7BDED1D0D63D35823D6DA1EDBC3FDB8A2FEADEBB173F52AB1EBADE836B8753D76AFDFE592CEA55F5A61DD386F2319853E6725E0552F54135537AA49031520201097A7E710F9FAB90A6D88F753020F890F53C21812B753C21C121FA78435243653C21E129FA6843324EEA6843B24EEA70419120F53C21B129F672A362AEA97196454D5C7196454D6AF33C8A8AEDF669051619F66905165BFCF207D697565AAF6A8BEB8EC181DE863C40F6921C09649E55375C46B956BF78C49CAAB91EA0289FA90E80619DDCB9A82805FCEF3FA5EB263135BF9B9FB5E09FF01504B07088849CD9261020000E3080000504B010214001400080808003C866A49EBC3DE5304010000F4010000110000000000000000000000000000000000646F6350726F70732F636F72652E786D6C504B010214001400080808003C866A4957285E23E3000000460200000B00000000000000000000000000430100005F72656C732F2E72656C73504B010214001400080808003C866A4925E008CE380100002804000013000000000000000000000000005F0200005B436F6E74656E745F54797065735D2E786D6C504B010214001400080808003C866A49366E832193000000B80000001000000000000000000000000000D8030000646F6350726F70732F6170702E786D6C504B010214001400080808003C866A49BAF98E31F1000000410200001400000000000000000000000000A9040000786C2F736861726564537472696E67732E786D6C504B010214001400080808003C866A49E92B0617D0010000180500000D00000000000000000000000000DC050000786C2F7374796C65732E786D6C504B010214001400080808003C866A49E4105EEADD000000620100000F00000000000000000000000000E7070000786C2F776F726B626F6F6B2E786D6C504B010214001400080808003C866A49F0CE5886D4000000300200001A0000000000000000000000000001090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B010214001400080808003C866A498849CD9261020000E308000018000000000000000000000000001D0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000C40C00000000,'customerdetails001mb.xls'),
 (2,0x504B03041400080808003C866A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6CAD915D4BC3301486EFFB2B42EEDBD36C3834B41DA20C04C581958977213DB6C5E68324DAF9EFCDBA5951BCF4F2E47DDE87C349B1DEAB81BCA3F3BDD12565594E096A699A5EB7257DAC37E9395D57495248E370EB8C45177AF424B6B42F691782E5005E76A884CF62AC63F2629C12218EAE052BE4AB68111679BE02854134220838D8523BEBE8D1C7A5FD77652367A57D73C3246824E0800A75F0C03206DF6C40A7FC9F852999C9BDEF676A1CC76C5C4E5CDC88C1D3DDEDC3B47CDA6B1F849648AB8490E264E7D2A108D890E8E0E1C36249BF92DDF2EABADED06A91B355CA58CAF29A31CE2EF8D9EAB9805FFD93F3381A575DC6B37448B6F73707747E4E0AF8F97555F209504B0708EBC3DE5304010000F4010000504B03041400080808003C866A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14EC3300C86EF7D8A28F7D5DD9010424D774148BB4D683C4048DC366A13478907E5ED090704430C76E018E7F7E74FB2DBEDE267F18C293B0A4AAEEB460A0C86AC0B83928F87FBD58DDC7655D53EE0ACB964F2E86216A529642547E6780B90CD885EE79A2286F2D353F29ACB330D10B599F480B0699A6B485F19B2AB8438C18A9D5532EDEC5A8AC36BC44BF0D4F7CEE01D99A3C7C03F4CF99628649D06642597195E284D4F44535DA012CEEA6CFE530717C660D1AE622AFD891DE64F274B665FCA19748C7F485D5D2E757E05E091B5D5ACC150C2DF95DE131F4E2D9C5C4357BD01504B070857285E23E300000046020000504B03041400080808003C866A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CAD93CB4EC3301045F7F90ACB5B14BB6581104AD2058F2554A27C80B1278D55BF64BBA5FD7B2629E5255A8AE8CAB2E6DE7B6E467135595B43561093F6AEA66336A2049CF44ABB794D9F6677E5259D344551CD36011241B14B35ED720E579C27D9811589F9000E27AD8F5664BCC6390F422EC41CF8F96874C1A577195C2E739F419B8290EA065AB13499DCAE71B26547308992EBADB6C7D5548460B41419E77CE5D43750F90661E81C34A9D3219DA180F27D907EB89FF1617DC09544AD804C45CCF7C2A2902B2FA7D187C4D1C20E07FD50D6B7AD9680194B8B16067D2705AA0C1809316BF8DCFC205EFA087FE7EF96D5BB8F87AE0D4F9D88A01E73C45F22FDFBBB53882054EA00B235EC4BF61155F2C6C0C93B0CA1BFC35F7C5C3C7BBF38F90AF0645668775C85419FF8708C4FDCE53D7F57A5E2C3BB6F8A57504B070825E008CE3801000028040000504B03041400080808003C866A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B03041400080808003C866A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D92C14E03211086EF26BEC386BB65DB831AC3D283894FA00F40D96977121828336BECDB4BA3B1C9D27A9CEF2333C30F66FB1543F7098531D1A0D6AB5E75403E8D4887417DBCBF3D3CABADBDBF33CCD2F93493D4434FAA9B098F33BC5E406D433CA84924BF68CD7E82E87895325035FB54A2935A9683E65CC08D3C01480C7AD3F78F3A3A24650DA3356271345AACD1E7EA87F899254528B70DB908B7DCA1A4392FA51BC702CC0109D6FFB84DD314E5B4642C4E9AE939551C6A8EED5EE7CC4AD3056B2E185D39FD8E5FFA3D16966BF70CEE3ACF53A206C6B4C30034C71D94A5AB0F86A1CDF86F319F489C978BD7F54FD86F504B0708BAF98E31F100000041020000504B03041400080808003C866A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD544D6FD43010BD23F11F2CDFA9B3A1A0AA4A5241D5453DB448EC22B87A6327B1F047647BAB0DBF9EB19D6C7657F4838A4B3C7E79EFCD78324E71B553123D70EB84D1255E9C6518715D1B26745BE2EFEBE5BB0B7C55BD7D53383F48BEEA38F70814DA95B8F3BEBF24C4D51D57D49D999E6B78D318ABA887AD6D89EB2DA7CC05919224CFB28F4451A17155E8AD5A2AEF506DB6DA9738C3A42A1AA36724C709A80AF71B3D5009A585DA80561B692C129AF11D6725BE0898A68A27D63595626345F4A34AC821C1790062A5234F096D6C0049CA929EB3CFFAF6EE6685EE6F7EA06F5FEF3EDD47F95448960AD9A4ADB75BFE585DA3795C1C241152EE4F788E1350153DF59E5BBD840D1AE3F5D0F3126BA379B289BC67D88CDA5F5F2C1D9E5200D45E1F179AC7DE9023D2CB123A2305C3FF66191768C5C65806433735E3039EA0AA90BCF120B7A2EDC2EA4D1F9A6DBC370A0226686B349521C1A498D740427154E1C374306A7FA381E329E785CA58D329EBF576E1A4A7A4FF94620CA0D335977215583F9B7DBB17D0EE5D83D22DBC65E102A230A35308DF680C934DDA04FF43B7E47D609BBFCA16ED9ABDFF63EAC5AC7E7FA83E9FD588F6BD1CC2B08D7732019F23F7085A9A50EC746FC9780888E67F5CF507504B0708E92B0617D001000018050000504B03041400080808003C866A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B03041400080808003C866A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91C14EC3300C40EFFD8AC8779A769310424D774148BBB2F10151EA36D5DA24B20DDBFE9E8004AC12080E3B59B6E3E797A4D99CE649BD22F1188381BAAC406170B11BC360E079FF7873079BB6289A279CACE433ECC7C42A0F0536E045D2BDD6EC3CCE96CB9830E44E1F69B692531A74B2EE6007D4ABAABAD574C980B6506A8155DBCE006DBB1AD4FE9CF03FF8D8F7A3C387E85E660CF2C316CDDE12763BA17C21CE604B038A8145B9CC54D0BFFAACAEEA23E7092F453EF23F0CD6D73438463AB047946F89AFD2FB7BE5507FFA347AF1EF6DF106504B0708F0CE5886D400000030020000504B03041400080808003C866A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD96CB729B301486F79DE93B68B42F485C4507C8B44DDD246DDAF4BEC646364C007924D9E4F12B301773D9C0746310FECEAFA3C3AF23FC9B973C0367CA45CA8A00620D41408B1D8BD3E210C0DFBF366F08BC095FBFF24BC69F4542A9042AA010014CA43CBED575B14B681E098D1D69A1FED9339E47520DF94117474EA3B80ECA33DD40C8D1F3282D60E8C7694E8B6A46C0E93E80EF30D443BF06FFA4B41457F7A09A77CBD87335B88F03A8F293D1F627CDE84E523596FC44AB687D12BEA95379E220A6FBE894C91FACBCA3E921916A99B65AA70ADAB14CD4BF204FABD54390472FF5B54C639904D0D06CDB72886B43B03B09C9F2BF97E7F5AC604B85DCA4B24FA253321A25A353C248B390632C15321B21B317329590615AE6E2A4AC46CBBAD62296EBD8CBF3B21B2DBBD7C29A8D4C6FC51A9D46CBF90F5A6EA3E5765AA6E639C85B5E2DD228914EC95A5B2CAF91F23A294F236B568751EB50D449B99A8D57E4843BB3F76E57DB8210C7C5CBFD8E5BC363E36A8D8818C8C4CB536B4D8F7BD713B511914B5688B5AEC7BDED1D0D63D35823D6DA1EDBC3FDB8A2FEADEBB173F52AB1EBADE836B8753D76AFDFE592CEA55F5A61DD386F2319853E6725E0552F54135537AA49031520201097A7E710F9FAB90A6D88F753020F890F53C21812B753C21C121FA78435243653C21E129FA6843324EEA6843B24EEA70419120F53C21B129F672A362AEA97196454D5C7196454D6AF33C8A8AEDF669051619F66905165BFCF207D697565AAF6A8BEB8EC181DE863C40F6921C09649E55375C46B956BF78C49CAAB91EA0289FA90E80619DDCB9A82805FCEF3FA5EB263135BF9B9FB5E09FF01504B07088849CD9261020000E3080000504B010214001400080808003C866A49EBC3DE5304010000F4010000110000000000000000000000000000000000646F6350726F70732F636F72652E786D6C504B010214001400080808003C866A4957285E23E3000000460200000B00000000000000000000000000430100005F72656C732F2E72656C73504B010214001400080808003C866A4925E008CE380100002804000013000000000000000000000000005F0200005B436F6E74656E745F54797065735D2E786D6C504B010214001400080808003C866A49366E832193000000B80000001000000000000000000000000000D8030000646F6350726F70732F6170702E786D6C504B010214001400080808003C866A49BAF98E31F1000000410200001400000000000000000000000000A9040000786C2F736861726564537472696E67732E786D6C504B010214001400080808003C866A49E92B0617D0010000180500000D00000000000000000000000000DC050000786C2F7374796C65732E786D6C504B010214001400080808003C866A49E4105EEADD000000620100000F00000000000000000000000000E7070000786C2F776F726B626F6F6B2E786D6C504B010214001400080808003C866A49F0CE5886D4000000300200001A0000000000000000000000000001090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B010214001400080808003C866A498849CD9261020000E308000018000000000000000000000000001D0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000C40C00000000,'customerdetails001mb.xls'),
 (3,0x504B0304140008080800A88B6A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14A04310C86EF82EF5072DFE9EC0A22B2752F22EC4D647D80D86666CA4C9BD2461DDFDEE2455D7740C16392E6FB3F48B7BB394CEA8572F11C0DAC9B161445CBCEC7DEC0E3E16E7505AA08468713473210197637E767DB079A50EA4E197C2AAA4262313088A46BAD8B1D2860693851AC938E7340A965EE75423B624F7AD3B6973A7F65C03155ED9D81BC776B5007CC3D898179D2AF9CC727E6B1A9E03A784BF49B58EE3A6FE996ED73A02827D28F5E805EB2D97CDA38B6F799EB2EA6F4DF3A340B45476E956A0265F154969D2E4E3859CEF437A9E5D3E840820E053FA83F94F4B7BF503BEF504B0708E241A2ECE700000055020000504B0304140008080800A88B6A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CB5534D4F023110BD9BF81F36BD9A6DC183318695831F4725117F406D67D9867EA51D10FEBDD3056344483084D374F2DEBCF73A6947E395B3D5125236C1376CC807AC02AF82367ED6B0F7E9737DCBAA8CD26B69838786F9C0C6F79717A3E93A42AE68D8E7867588F14E88AC3A7032F310C113D286E424529B66224A35973310D783C18D50C12378ACB168B0A2F608AD5C58AC1E3648116F988CD11A25919289A5D73BB2F5569227B03D277726E62B22B0EA69452A9B1B119A9938CA6377B4F4FDE42BED27190DFF8A17DAD628D0412D1C8D7028BA1A741D1311131AD8669DC8842FD291A020F284D02C489A9FE6FEBD1C15121C655988277AEEDC38C70452E70E009DE5B99309F41B267A587F63ACACF845386B125CDB3D9B28117AE4BC5BA0CA9D347E9FFF6748F38F10E6E74C503CFAF3A1003D98455F863F4944FFE1E9F405504B0708A46383984001000032040000504B0304140008080800A88B6A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B0304140008080800A88B6A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6C6D906F4BC3301087DF0B7E8792F7ED351B1B1ADA0E510682E2C00EC5772139DB62F38724DAF9ED4DBB59417D7977CF3DDCFD8ACD41F5C9073ADF195D129AE524412D8CEC7453927DBD4D2F48E203D792F7466349B4219BEAFCAC109609E370E78C45173AF4491469CF842D491B8265005EB4A8B8CF22A1E3F0D538C5432C5D03968B37DE202CF27C0D0A03973C701885A99D8DE4A4946256DA77D74F0229007B54A883079A51F861033AE5FF5D98263379F0DD4C0DC3900DCB898B175178BEBF7B9C8E4F3B3D3E2F908C3F9FE44C38E4016512152C7CDA98CAF7E469797D536F49B5C8E93AA534A5794D295B5D32BA7A29E0D7FE5179AC8CABAE62282D26BB87DB919CDB11823F61C7EE17504B070847139F740B010000BA010000504B0304140008080800A88B6A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D924D4EC4300C85F748DCA1CA9E49618100B5990512278003A46D682D1A3BC44E35DC9E54B318896458FA7DFE794EDC1D4F7E6D361719087B757F6855E370A40970EED5C7FBDBDD933A9ADB9B8E599A91124A4E7A564D42F84EEEF522E436C8BD5A44C28BD63C2ECE5B3E507098C927456F258771D61CA2B3132FCE895FF543DB3E6A6F0195E9184C2706A64E8BE9F41E9D95402CD9CE64C5FD459C4258C1C56BBAFC84A266A394DDFD8730F9A1EC392557B330C0BA22D5D45A36E04630E6467E7FBA62530B57082561B1B87F4B3DC1CEC5AC14846481BC698D309CEA00015D49CEAA1D682BE68C29C67C334549CC2710BFF822EB7C44E617504B0708C69E8351F900000072020000504B0304140008080800A88B6A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD54CB6EDB3010BC17E83F10BC3794D5B4080A49411AC4450E4981DA4572A5454A22CA8740D281D5AFEF92942CC7685037C845DC1DCD0C97ABA58ACB9D92E8895B278C2EF1E22CC388EBDA30A1DB12FF5C2F3F5CE0CBEAFDBBC2F941F255C7B947A0D0AEC49DF7FD17425CDD7145DD99E9B986378DB18A7A486D4B5C6F39652E88942479967D268A0A8DAB426FD55279876AB3D5BEC4192655D1183D23394E4055B8DFE8894A282DD406B4DA486391D08CEF382BF145C034553CB1AEA9141B2BA21F55420E09CE03102B1D794A68630348D22EE939FBAC6FEF6E56E8FEE601FDF87E77751FE55321592A6493526FB7FCA5BA46F3B838D84448B93FE1394E4055F4D47B6EF5121234C6EBA1E725D646F3641379FF60336A7F7DB374385D11FD81D55E3FAF3D8FED2207BA531D9D9182FDA7655CA03B1B6319CCE1D49F4F7882AA42F2C683DC8AB60BAB377DE8BFF1DE280898A0ADD154860D26C5BC06128AD30BDFAA83E9FB1B0D1C8F39272A634DC7ACD7DB85931E93DE688B31804ED75CCA55603D36FB762FA0DDBB06A58B79CBC29D44616CA710BED118269B9404FF43B7E47D609BBFCA16ED9ABDFF4BEAC5ACFE78A83E9FD588F6BD1CC2B08DD734015F23F719B434A1D8E92A93F11010CDBFBDEA0F504B07084C451B5DD10100002B050000504B0304140008080800A88B6A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B0304140008080800A88B6A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91CF4A03410C87EF82EF30E4EECE6E0511E9D88B08BD6A7D806126BBB37437334CE29FBEBD51415BB1E0A1A790847CBF0FB25CBDCD9379C1CA6326075DD382410A398E343878DADC5F5C8361F114FD94091D5086D5EDF9D9F201272F7AC3692C6C1442EC2089941B6B39249C3D37B920E9A6CF75F6A26D1D6CF161EB07B48BB6BDB2759F01BFA9661D1DD475ECC06C7C1D501C70F215E3A354B5E346D1BADA15FC4F70EEFB31E05D0ECF3392FC916F0FE0608FE92CF6746437E1E93D3EA9C7052E7F045E73DD7242940F7B2DDDA95DBE03BE74ECC1D775F20E504B0708A896A78DDA0000003F020000504B0304140008080800A88B6A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD964B739B301485F79DE97FD0685FE0F2A60364DAA66E92366D9AF4B1C646364C0CF248B29D9F5F8179C3A2D06E6C84BF7BB83A3AC8F2AF5EB23D3A11C6539A0718140D23926F689CE6BB00FFFCB17AE3E2ABF0F52BFF4CD9334F08114816E43CC0891087B7AACA3709C922AED003C9E52F5BCAB248C821DBA9FCC048149745D95ED535CD56B328CD71E8C76946F2E28988916D80DF015643BF047FA5E4CC3BD7A878EE9AD2E762701B0758F627A2F513D9938D20722CD89114D5EAA87C55B6F2C0504CB6D1712F1EE9F986A4BB44C8695A729EB26843F7BCFC44595ACC1EA32C7A29BFCF692C9200EB8AE5198E85D1E6C805CD7E5FEE96CF446BC2C52A156D0B8D8E5EE9E88D0E688A0BB6A9D9FA5C2DA3D2321A2D47F174CF76677765564A66DB152C9A9E5509595D21D3D5CC054DD99596DD6A998B9A722A21A7E393A31930DB70B712721B216BE9DA799594D7E9C970405B303DD0EA6C6AFFEA14343187EE02EA3638307F01A10E3B74D2EEC8C61CDB9AEF18D4718736EF86B47FBE509D7668E3EE2D0B04D4798736F0EED248401D78B0BB9B0358BA612E58CA3AF5E0FC8FA5ACA30F6E67A296EBB94B5AABC30F5E470C4CD3FAFB25502FFB73B99B5F47220A7D46CF88151BB47C527121FF39902CE018F1CBDD53A8F9EAA928AD88F76302FAC48731A1F789EB3161F4898F63C2EC13AB3161F5894F63C2EE133763C2E913B763C2ED137763C2EB139F271C1B98FA650219B87A3F810C6CFD3A810C7CFD36810C8C7D984006CE7E9F4006D63E4E20036F9F2690D65C5546B33E855CB27A8876E43E62BB34E7684D854CBB3CBD28C58BB4A55410568CE42E97C8335233D893AD28298CD8E5A8525E0B7AA86A8BB7A2398A857F00504B07085CAEDDF476020000BE090000504B01021400140008080800A88B6A49E241A2ECE7000000550200000B00000000000000000000000000000000005F72656C732F2E72656C73504B01021400140008080800A88B6A49A463839840010000320400001300000000000000000000000000200100005B436F6E74656E745F54797065735D2E786D6C504B01021400140008080800A88B6A49366E832193000000B80000001000000000000000000000000000A1020000646F6350726F70732F6170702E786D6C504B01021400140008080800A88B6A4947139F740B010000BA010000110000000000000000000000000072030000646F6350726F70732F636F72652E786D6C504B01021400140008080800A88B6A49C69E8351F9000000720200001400000000000000000000000000BC040000786C2F736861726564537472696E67732E786D6C504B01021400140008080800A88B6A494C451B5DD10100002B0500000D00000000000000000000000000F7050000786C2F7374796C65732E786D6C504B01021400140008080800A88B6A49E4105EEADD000000620100000F0000000000000000000000000003080000786C2F776F726B626F6F6B2E786D6C504B01021400140008080800A88B6A49A896A78DDA0000003F0200001A000000000000000000000000001D090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B01021400140008080800A88B6A495CAEDDF476020000BE09000018000000000000000000000000003F0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000FB0C00000000,'accountspayable001mb.xls');
/*!40000 ALTER TABLE `uploadtemplate001mb` ENABLE KEYS */;


--
-- Definition of table `user001mb`
--

DROP TABLE IF EXISTS `user001mb`;
CREATE TABLE `user001mb` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `userroleid` int(11) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `zipcode` int(11) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `confirmemail` varchar(30) NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `address1` varchar(50) NOT NULL,
  `address2` varchar(50) NOT NULL,
  `address3` varchar(50) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `mobile` int(10) NOT NULL,
  `landline` int(11) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user001mb`
--

/*!40000 ALTER TABLE `user001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `user001mb` ENABLE KEYS */;


--
-- Definition of table `userrole001mb`
--

DROP TABLE IF EXISTS `userrole001mb`;
CREATE TABLE `userrole001mb` (
  `userroleid` int(11) NOT NULL AUTO_INCREMENT,
  `loginid` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`userroleid`),
  KEY `fk_login_idx` (`loginid`),
  CONSTRAINT `fk_loginid` FOREIGN KEY (`loginid`) REFERENCES `login001mb` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userrole001mb`
--

/*!40000 ALTER TABLE `userrole001mb` DISABLE KEYS */;
INSERT INTO `userrole001mb` (`userroleid`,`loginid`,`role`,`username`) VALUES 
 (1,6,'ROLE_ADMIN','siva'),
 (33,7,'ROLE_ADMIN','kannan'),
 (34,8,'ROLE_USER','karya'),
 (36,43,'ROLE_USER','girija'),
 (38,45,'ROLE_USER','iswarya');
/*!40000 ALTER TABLE `userrole001mb` ENABLE KEYS */;


--
-- Definition of table `warehouse001mb`
--

DROP TABLE IF EXISTS `warehouse001mb`;
CREATE TABLE `warehouse001mb` (
  `whId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `isActive` varchar(20) NOT NULL,
  `warehouseCode` varchar(60) NOT NULL,
  PRIMARY KEY (`whId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warehouse001mb`
--

/*!40000 ALTER TABLE `warehouse001mb` DISABLE KEYS */;
INSERT INTO `warehouse001mb` (`whId`,`warehouseName`,`status`,`isActive`,`warehouseCode`) VALUES 
 (1,'SPL','Enabled','Yes','WC-SPL'),
 (2,'SSPDL','Disabled','No','WC-SSPDL'),
 (3,'SSPDL','Disabled','No','WC-SSPDL'),
 (4,'SSPDL','Disabled','No','WC-SSPDL');
/*!40000 ALTER TABLE `warehouse001mb` ENABLE KEYS */;


--
-- Definition of table `workstation001mb`
--

DROP TABLE IF EXISTS `workstation001mb`;
CREATE TABLE `workstation001mb` (
  `workstId` int(11) NOT NULL AUTO_INCREMENT,
  `workstName` varchar(40) NOT NULL,
  PRIMARY KEY (`workstId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workstation001mb`
--

/*!40000 ALTER TABLE `workstation001mb` DISABLE KEYS */;
INSERT INTO `workstation001mb` (`workstId`,`workstName`) VALUES 
 (5,'null'),
 (6,'hghh'),
 (7,''),
 (8,'null'),
 (9,'null'),
 (10,'null'),
 (11,'null'),
 (12,''),
 (13,'null'),
 (14,'szdcsc'),
 (15,'asdfcwac'),
 (16,'fgfygfkjkh'),
 (17,'lnjhhgf'),
 (18,''),
 (19,'null'),
 (20,'null');
/*!40000 ALTER TABLE `workstation001mb` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
