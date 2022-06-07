import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AccbalancesheetModule } from './module/accbalancesheet.module';
import { AcccashflowtModule } from './module/acccashflow.module';
import { AccountChartModule } from './module/account-chart.module';
import { AccountsPayableModule } from './module/accounts-payable.module';
import { AccountsReceivableModule } from './module/accounts-receivable.module';
import { AccountsPayableSummaryModule } from './module/accountspay-summary.module';
import { AccountsrecSummaryModule } from './module/accountsrec-summary.module';
import { AccprofitlossModule } from './module/accprofitloss.module';
import { ApplicationSettingsModule } from './module/applicationsettings.module';
import { AppraisalTemplateModule } from './module/appraisal-template.module';
import { AppraisalModule } from './module/appraisal.module';
import { AssetMovementModule } from './module/asset-movement.module';
import { AssetModule } from './module/asset.module';
import { BankClearenceModule } from './module/bankclearence.moduel';
import { BankreconcileModule } from './module/bankreconcile.moduel';
import { BillOfMaterialModule } from './module/bill-of-material.module';
import { BomTypeModule } from './module/bom-type.module';
import { BranchModule } from './module/branch.module';
import { BrandModule } from './module/brand.module';
import { BudgetAccountModule } from './module/budget-account.module';
import { BudgetMonthlyDistModule } from './module/budget-monthdist.module';
import { BudgetVarReportModule } from './module/budget-varreport.module';
import { BudgetModule } from './module/budget.module';
import { BuyingItemPriceModule } from './module/buying-item-price.module';
import { ChequeprintTemplateModule } from './module/chequeprint-template.module';
import { ComAccountModule } from './module/com-account.module';
import { CompleteOrderModule } from './module/complete-order.module';
import { CostCenterModule } from './module/costcenter.module';
import { CrmCommunicationModule } from './module/crm-communication.module';
import { CrmContactModule } from './module/crm-contact.module';
import { CrmCustGroupModule } from './module/crm-cust-group.module';
import { CrmOpportunityModule } from './module/crm-opportunity.module';
import { CrmRepInactiveCustomerModule } from './module/crm-rep-inactivecus.module';
import { CrmRepMiniTimeModule } from './module/crm-rep-minitime.module';
import { CrmRepLeadDetailsModule } from './module/crm-reports-lead-details.module';
import { CrmSalesCustomerModule } from './module/crm-sales-customer.module';
import { CrmSalesPipelineModule } from './module/crm-sales-pipeline.module';
import { CrmTerritoryModule } from './module/crm-territory.module';
import { CustomerLoyaltyModule } from './module/customer-acqustion-loyalty.module';
import { CustomerCreditBalanceModule } from './module/customer-credit-balance.module';
import { CustomerDetailModule } from './module/customer-detail.module';
import { CustomerModule } from './module/customer.module';
import { DelNoteTrendModule } from './module/del-note-trend.module';
import { DeliveryNoteModule } from './module/delivery-note.module';
import { DepartmentModule } from './module/department.module';
import { DesignationModule } from './module/designation.module';
import { EmpAttendanceModule } from './module/emp-attendance.module';
import { EmployeeBirthdayModule } from './module/emp-birthday.module';
import { EmpDeptModule } from './module/emp-dept.module';
import { EmployeeHolidayWorkModule } from './module/emp-holiday-work.module';
import { EmployeeLeaveBalanceModule } from './module/emp-leave-balance.module';
import { EmployeeSalesRegisterModule } from './module/emp-sales-register.module';
import { EmployeeModule } from './module/employee.module';
import { EmploymentTypeModule } from './module/employment-type.module';
import { ExpensesClaimsModule } from './module/expenses-claim.module';
import { ExperienceLetterModule } from './module/experience-letter.module';
import { FavouritesModule } from './module/favourites.module';
import { FileManagerModule } from './module/file-manager.module';
import { GeneralLedgerModule } from './module/general-ledger.module';
import { GrossProfitModule } from './module/gross-profit.module';
import { HolidayListModule } from './module/holiday-list.module';
import { HrProcessPrModule } from './module/hr-processpr.module';
import { HrSalaryComponentModule } from './module/hr-sal-component.module';
import { HrSalStructureModule } from './module/hr-sal-structure.module';
import { IssueItemModule } from './module/issue-item.module';
import { ItemGroupModule } from './module/item-group.module';
import { ItemOrderedModule } from './module/item-ordered.module';
import { ItemPriceReportModule } from './module/item-price-report.module';
import { ItemPuhistoryModule } from './module/item-puhistory.module';
import { ItemRequestModule } from './module/item-request.module';
import { ItemShortageModule } from './module/item-shortage.module';
import { ItemStatusModule } from './module/item-status.module';
import { ItemWiseLevelModule } from './module/item-wise-level.module';
import { ItemModule } from './module/item.module';
import { ItemWisePurchaseModule } from './module/itemwisepurchase.module';
import { JobApplicantModule } from './module/job-applicant.module';
import { JobOpeningModule } from './module/job-opening.module';
import { JournalEntryModule } from './module/journal-entry.module';
import { LeadDetailModule } from './module/lead-detail.module';
import { LeaveApplicationModule } from './module/leave-application.module';
import { LeaveBlockModule } from './module/leave-block.module';
import { LeaveTypeModule } from './module/leave-type.module';
import { ToolsModule } from './module/manu-tool.module';
import { ManufacturesetModule } from './module/manufactureset.module';
import { MatchPaymentModule } from './module/matchpayment.module';
import { MaterialModule } from './module/material.module';
import { MatreqSupwiseModule } from './module/matreq-supwise.module';
import { MonthlyAttendSheetModule } from './module/month-attend-sheet.module';
import { OfferLetterModule } from './module/offer-letter.module';
import { OpenProdOrderModule } from './module/open-prod-order.module';
import { OperationModule } from './module/operation.module';
import { OrderDetailsModule } from './module/order-details.module';
import { OrderItemDeliverModule } from './module/order-item-deliver.module';
import { OrderTrendModule } from './module/order-trend.module';
import { PayementEntryModule } from './module/payement-entry.module';
import { PayementRequestModule } from './module/payement-request.module';
import { PayRollsModule } from './module/payrolls.module';
import { PeriodclosingVoucherModule } from './module/periodclosing-voucher.module';
import { PersonModule } from './module/person.module';
import { PricingRuleModule } from './module/pricing-rule.module';
import { PrmatReqtModule } from './module/prmat-req.module';
import { ProdOrderModule } from './module/prod-order.module';
import { ProdPlanModule } from './module/prod-plan.module';
import { ProdStockModule } from './module/prod-stock.module';
import { ProdTimeSheetModule } from './module/prod-time-sheet.module';
import { ProdBundleModule } from './module/product-bundle.module';
import { ProgProdOrderModule } from './module/prog-prod-order.module';
import { ProjectQuantityModule } from './module/projected-quantity.module';
import { ProjecttModule } from './module/projectt.module';
import { PrreqQuotModule } from './module/prreq-quot.module';
import { PuAnalyticModule } from './module/pu-analytic.module';
import { PurRecptTrendModule } from './module/pur-recpt-trend.module';
import { PurchaseInvoiceModule } from './module/purchase-invoice.module';
import { PurchaseItemDeliverModule } from './module/purchase-item-deliver.module';
import { PurchaseOrderModule } from './module/purchase-order.module';
import { PurchaseReceiptModule } from './module/purchase-receipt.module';
import { PurchaseRegisterModule } from './module/purchase-register.module';
import { PurTaxChangesModule } from './module/purtax-changes.module';
import { RelievingLetterModule } from './module/relieving-letter.module';
import { RequestItemTransferModule } from './module/request-item-transfer.module';
import { RoleModule } from './module/role.module';
import { SalesRegisterModule } from './module/sale-register.module';
import { SalesInvoiceModule } from './module/sales-invoice.module';
import { SalesItemModule } from './module/sales-item.module';
import { SalesTaxModule } from './module/sales-taxes.module';
import { SalseOrderModule } from './module/salse-order.module';
import { ShippingRuleModule } from './module/shipping-rule.module';
import { StockSettingModule } from './module/stk-setting.module';
import { StockAgeingModule } from './module/stock-ageing.module';
import { StockBalanceModule } from './module/stock-balance.module';
import { StockEntryModule } from './module/stock-entry.module';
import { StockEntrysModule } from './module/stock-entrys.module';
import { StockLedgerModule } from './module/stock-ledger.module';
import { SupplierQuotModule } from './module/supplier-quot.module';
import { SupplierWiseAnalyticModule } from './module/supplier-wise-analytic.module';
import { SupplierModule } from './module/supplier.module';
import { SuppTypeModule } from './module/supptype.module';
import { SupStatusModule } from './module/supstatus.module';
import { SystemPropertiesModule } from './module/system-properties.module';
import { TaskModule } from './module/task.module';
import { TaxRuleModule } from './module/tax-rule.module';
import { TimeSheetModule } from './module/time-sheet.module';
import { ToolsInstallNoteModule } from './module/tool-installnote.module';
import { ToolsLandCostVoutureModule } from './module/tools-landcost.module';
import { ToolsPackingSlipModule } from './module/tools-packingslip.module';
import { ToolsStkReconcileModule } from './module/tools-stkreconcile.module';
import { TrailbalanceModule } from './module/trailbalance.module';
import { UnitofMeasureModule } from './module/unit-of-measure.module';
import { UpdateBankModule } from './module/updatebank.module';
import { UserModule } from './module/user.module';
import { WareHouseModule } from './module/ware-house.module';
import { WorkStationModule } from './module/work-station.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
            envFilePath: ['.env.configuration.dev'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
            ({
                type: 'mysql',
                synchronize: false,
                host: configService.get<string>('DATABASE_HOST'),
                port: Number(configService.get<string>('DATABASE_PORT')),
                username: configService.get<string>('DATABASE_USER_NAME'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                autoLoadEntities: true,
                entities: ['../dist/entity/*.entity.{ts,js}'],
                subscribers: ['../dist/entity/*.entity.{ts,js}'],
                migrations: ['../dist/entity/*.entity.{ts,js}'],
                namingStrategy: new SnakeNamingStrategy(),
            } as TypeOrmModuleOptions),
        }),
        AuthModule,
        FileManagerModule,
        ApplicationSettingsModule,
        MailModule,
        SystemPropertiesModule,
        ProdOrderModule,
        ProdPlanModule,
        ProdStockModule,
        ProdTimeSheetModule,
        ManufacturesetModule,
        AccbalancesheetModule,
        AcccashflowtModule,
        ProdTimeSheetModule,
        BomTypeModule,
        CompleteOrderModule,
        IssueItemModule,
        ProgProdOrderModule,
        OpenProdOrderModule,
        AssetMovementModule,
        ChequeprintTemplateModule,
        PeriodclosingVoucherModule,
        AssetModule,
        CustomerModule,
        SupplierModule,
        SalesTaxModule,
        PurTaxChangesModule,
        TaxRuleModule,
        SalesRegisterModule,
        PurchaseRegisterModule,
        ItemGroupModule,
        ItemStatusModule,
        WorkStationModule,
        OperationModule,
        CostCenterModule,
        BudgetAccountModule,
        BudgetModule,
        BudgetMonthlyDistModule,
        BudgetVarReportModule,
        PurchaseInvoiceModule,
        SalesInvoiceModule,
        SalseOrderModule,
        ComAccountModule,
        GeneralLedgerModule,
        JournalEntryModule,
        AccountChartModule,
        ItemOrderedModule,
        BuyingItemPriceModule,
        ProdBundleModule,
        ItemOrderedModule,
        TrailbalanceModule,
        AccbalancesheetModule,
        AcccashflowtModule,
        AccprofitlossModule,
        UpdateBankModule,
        MatchPaymentModule,
        BankreconcileModule,
        BankClearenceModule,
        SupplierModule,
        SupStatusModule,
        ExperienceLetterModule,
        JobApplicantModule,
        PuAnalyticModule,
        SupplierWiseAnalyticModule,
        LeadDetailModule,
        CustomerDetailModule,
        AccountsPayableModule,
        AccountsReceivableModule,
        PayementRequestModule,
        ItemWisePurchaseModule,
        AccountsPayableSummaryModule,
        AccountsrecSummaryModule,
        GrossProfitModule,
        PayementEntryModule,
        PrmatReqtModule,
        PurchaseOrderModule,
        SupplierQuotModule,
        PrreqQuotModule,
        AppraisalModule,
        AppraisalTemplateModule,
        PricingRuleModule,
        ShippingRuleModule,
        SalesItemModule,
        CustomerLoyaltyModule,
        HolidayListModule,
        LeaveApplicationModule,
        LeaveBlockModule,
        LeaveTypeModule,
        CrmSalesPipelineModule,
        CrmContactModule,
        CrmSalesCustomerModule,
        CrmOpportunityModule,
        JobOpeningModule,
        OfferLetterModule,
        RelievingLetterModule,
        EmployeeHolidayWorkModule,
        EmployeeBirthdayModule,
        ItemRequestModule,
        MatreqSupwiseModule,
        ItemPuhistoryModule,
        ProjecttModule,
        TaskModule,
        DelNoteTrendModule,
        PurRecptTrendModule,
        SuppTypeModule,
        PayRollsModule,
        HrProcessPrModule,
        HrSalStructureModule,
        HrSalaryComponentModule,
        CrmRepMiniTimeModule,
        CrmRepLeadDetailsModule,
        CrmRepInactiveCustomerModule,
        ToolsInstallNoteModule,
        ToolsStkReconcileModule,
        ToolsPackingSlipModule,
        ToolsLandCostVoutureModule,
        EmployeeLeaveBalanceModule,
        EmployeeSalesRegisterModule,
        MonthlyAttendSheetModule,
        BrandModule,
        StockSettingModule,
        UnitofMeasureModule,
        WareHouseModule,
        EmploymentTypeModule,
        BranchModule,
        DesignationModule,
        DepartmentModule,
        EmployeeModule,
        CrmCommunicationModule,
        CrmCustGroupModule,
        CrmTerritoryModule,
        TimeSheetModule,
        ItemPriceReportModule,
        ItemShortageModule,
        ItemWiseLevelModule,
        OrderItemDeliverModule,
        PurchaseItemDeliverModule,
        RequestItemTransferModule,
        ExpensesClaimsModule,
        StockLedgerModule,
        StockBalanceModule,
        ProjectQuantityModule,
        StockAgeingModule,
        StockEntrysModule,
        StockEntryModule,
        DeliveryNoteModule,
        PurchaseReceiptModule,
        OrderDetailsModule,
        EmpAttendanceModule,
        EmpDeptModule,
        MaterialModule,
        ToolsModule,
        ItemModule,
        OrderTrendModule,
        BillOfMaterialModule,
        CustomerCreditBalanceModule,
        FavouritesModule,
        PersonModule,
        RoleModule,
        UserModule
    ],
    
      
})
export class AppModule { }
