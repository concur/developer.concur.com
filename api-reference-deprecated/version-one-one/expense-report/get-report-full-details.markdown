---
title: Report Full Details v1.1
layout: reference
---

# Report Full Details (v.1.1) - Deprecated

Retrieves the full set of information for the report. Includes the Report Header, Entry, Attendee, Itemization and Allocation details.

## Request

### HTTP Request Type: 
GET

### URI: 
`https://www.concursolutions.com/api/expense/expensereport/v1.1/reportfulldetails/_{reportKey}_`

### URI Source: 
This URI is returned in the `Report-Full-Details-Url` element by the [Get Reports List](/api-reference-deprecated/version-one-one/expense-report/get-list-of-reports.html) function. The report key is the encrypted database key for the report.

### Request Media Type: 
application/xml

## Response

### Response Media Type: 
application/xml

### Return Value: 
This request will return a  <ReportDetails  parent element with an xmlns version attribute and the following child elements:

| Element | Description |
| ----- | ----------
| `X-UserID`| The user ID of the report owner. 
| `ReportId` | The unique identifier for the report, which appears in the Concur Expense UI.
| `ReportName` | The name of the report.
| `Purpose` | The information from the Business Purpose field.
|  `CrnCode` | The [3-letter ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217) for the expense report currency. The expense report currency is defined as the report creator's default reimbursement currency.
| `ApsKey`  | The approval status code for the report. |
| `ReportDate`  | The date from the report header.  Format: YYYY-MM-DDThh:mm:ss  |
| `CreationDate`  | The date the report was created.  Format: YYYY-MM-DDThh:mm:ss  |
|  `ReceiptImageUrl`  | The URL to access the image associated with the report. This URL is only valid for 30 minutes after the web service call. |
|  `HasException`  | Whether the report has exceptions.  Format: Y/N  |
|  `EverSentBack`  | Whether the report has ever been sent back to the employee.  Format: Y/N  
|  `EmployeeName`  | The name of the employee who created the report. |
|  `ApvStatusName`  | The approval status name for the report. |
|  `PayKey`  |  The unique identifier for the payment status of the report.  |
|  `PayStatusName`  | The payment status of the report. |
|  `PaidDate`  |  The date the report was extracted for payment. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss  |
|  `SubmitDate`  | The date the report was submitted. |
|  `EntryCount`  | The number of expense entries in the report. This count includes itemized entries. |
|  `LedgerName`  | The name of the expense report ledger. |
|  `OrgUnit1` through `OrgUnit6`  | The details from the Org Unit custom fields. These may not have data, depending on configuration. |
|  `Custom1` through `Custom20`  | The details from the Custom fields. These may not have data, depending on configuration.  If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1  |
|  `PolKey`  | The unique identifier of the policy that applies to this report. |
|  `RptKey`  | The encrypted database key for the report, which is used as the unique identifier in other web service requests. |
|  `ReportTotal`  | The total amount of the report. |
|  `PersonalExpenses`  | The total amount of expenses marked as personal. |
|  `AmountDueEmployee`  | The total amount due to the employee for the report. |
|  `AmountDueCompanyCard`  | The total amount due to the company card for the report. |
|  `TotalClaimedAmount`  | The total amount of all non-personal expenses in the report. |
|  `TotalApprovedAmount`  | The total amount of approved expenses in the report. |
| `WorkflowActionURL` | The URL to post a workflow action to the report using the [Post Report Workflow Action](https://developer.concur.com/node/168) endpoint. |
|  `Entries`  | This parent element has a Count attribute indicating the number of entries (not including itemization entries) that are included in the report. It has an  `ExpenseEntry`  child element for each entry. Refer to the [Expense Entry Child Elements](#expentrychild) table for more information. |

####<a name="expentrychild" id="expentrychild"></a>Expense Entry Child Elements

| Element | Description |
| ------- | ------------
|  `ReceiptRequired` | Whether the original receipt is required for the entry.
|  `ImageRequired`  | Whether a receipt image is required for the entry. |
|  `EreceiptId`  | The ID for the attached e-receipt, if available. |
|  `Custom1` through `Custom40`  | The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1 |
|  `RpeKey`  | The ID of the report entry. |
|  `RptKey`  | The encrypted database key of the report. |
|  `ExpKey`  | The expense type key for the expense entry. Expense Type Keys are returned in the ExpKey element by the [Get Expense Group Configuration](/api-reference-deprecated/version-one-one/expense-group/expense-group-configuration-resource-get.html) endpoint. |
| `FormKey`  | The key for the expense entry form. |
| `ReceiptImageId`  | The unique identifier for the image associated with the entry. |
| `ExpName`  | The expense type name. |
| `SpendCategory` | The spend category specified for this expense type. Varies by client, used in reporting. 
| `BusinessPurpose` | The text from the Business Purpose field of the entry. |
|  `HasVat`  | Whether the entry contains VAT data. |
|  `ExchangeRate`  | The exchange rate that applies to the entry. |
|  `TransactionAmount`  | The amount of the expense entry in the original transaction currency. |
|  `PostedAmount`  | The amount of the expense entry in the user's reimbursement currency.  The user's reimbursement currency is returned in the <CrnCode element for the report.  |
|  `ApprovedAmount`  | The approved amount of the expense entry in the user's reimbursement currency. The user's reimbursement currency is returned in the <CrnCode element for the report.  |
|  `TransactionCurrencyName`  | The name of the transaction currency. |
|  `VendorDescription`  | The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field. |
|  `LocationName`  | The location for the expense entry, usually the city name. |
| `LocationSubdivision` | The location's State, Province, or Country Subdivision. |
| `LocationCountry` | The location's Country. |
| `OrgUnit1` through `OrgUnit6` | The details from the Org Unit custom fields. These may not have data, depending on configuration. |
|  `HasComments`  | Whether the expense entry has comments. |
|  `CommentCount`  | The number of comments associated with the expense entry. |
|  `PaymentTypeKey`  | The key for the payment type. |
|  `IsItemized`  | Whether the expense entry is itemized. |
|  `HasExceptions`  | Whether the expense entry has exceptions. |
|  `IsPersonal`  | Whether the expense entry is marked as personal. |
|  `HasAttendees`  | Whether the expense entry has attendees. |
|  `HasAllocation`  | Defines the amount of allocations for the expense. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation. |
|  `IsCreditCardCharge`  | Whether the expense came from a credit card feed. |
|  `AttendeeCount`  | The number of attendees associated with the expense entry. |
|  `IsPersonalCardCharge`  | Whether the expense came from a personal card feed. |
|  `TransactionDate`  | The date of the expense entry. |
|  `LastModifiedDate`  | The date the expense entry was last changed. |
| `ItemizationList` | The list of itemizations for the expense entry. This parent element is empty if there are no itemizations. When the report has itemizations, this element contains an `ItemizationEntry` Details element for each itemization. Refer to the [Itemization Entry Details Child Elements](#itementrychild) table for more information. |
 
 
#### <a name="itementrychild" id="itementrychild"></a>Itemization Entry Details Child Elements
 
| Element | Description |
| ------ | ---------------
| `Custom1` through `Custom40` | The custom fields associated with the itemization. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234 </Custom1>
| `ItemizationKey` | The unique identifier for the itemization. |
| `ExpenseKey` | The expense type key for the itemization. |
| `ExpenseName` | The expense type for the itemization. |
| `BusinessPurpose` | The business purpose field from the report header. |
| `TransactionAmount` | The amount for the itemization in the expense currency. |
| `TransactionDate` | The date of the transaction. |
| `PostedAmount` | The amount for the itemization in the user's reimbursement currency.  The user's reimbursement currency is returned in the <CrnCode element for the report.  |
| `ApprovedAmount` | The approved amount of the itemization in the user's reimbursement currency.  The user's reimbursement currency is returned in the <CrnCode element for the report.  |
| `HasComments` | Whether the itemization has comments. |
| `IsPersonal` | Whether the itemization is personal. |
| `LastModified` | The UTC date when the itemization was last modified. |
| `AllocationsList` | This parent element contains one `Allocations` element for each associated allocation. This element will be empty if there are no allocations. The <Allocations> parent element contains [child elements](#allocchild)
| `Allocations` | This element appears once for each allocation associated with the expense entry if the entry is **not** itemized. This element will be empty if there are no allocations, or if the `ItemizationList` element contains the allocation data. This element contains [child elements](#alochild).
|  `AttendeeDetails`  | This parent element appears once for each associated attendee, and contains [child elements](#attchild).

#### <a name="allocchild" id="allocchild"></a>Allocations List Child Elements

| Element | Description |
| ------ | ---------------
| `Custom1` through `Custom20` | The custom fields associated with the allocation. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1>
| `AllocationKey`  | The unique alphanumeric identifier for the allocation.
|`Percentage` | The percentage of the expense that is included in this allocation.
|`AccountCode1`  | The account code for the allocation.
| `AccountCode2`  | The second account code for the allocation. This is only populated in rare cases, such as when using travel allowance, where one expense might have an account code for the allowed amount, and a second account code for the overage.

#### <a name="alochild" id="alochild"></a>Allocations Child Elements

| Element | Description |
| ------ | ---------------
|  `Custom1` through `Custom20` | The custom fields associated with the allocation. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1>
| `AccountCode1` | The account code for the allocation.
| `AccountCode2`  | The second account code for the allocation. This is only populated in rare cases, such as when using travel allowance, where one expense might have an account code for the allowed amount, and a second account code for the overage.
| `allocKey`  | The unique alphanumeric identifier for the allocation.
| `percentage` | The percentage of the expense that is included in this allocation.
 

#### <a name="attchild" id="attchild"></a>Attendee Details Child Elements

| Element | Description |
| ------ | ---------------
| `Custom1` through `Custom20` | The details from the Custom fields. These may not have data, depending on configuration.  If the custom field is a list field, the data will be returned as| (list item short code) list item name. List Field Example| <Custom1>(1234) Project 1234</Custom1>
| `AttendeeType` | The type of attendee.
| `FirstName` | The attendee's first name.
| `LastName` | The attendee's last name.
| `Company` | The attendee's company name.
| `ExternalId` | The unique identifier for the attendee, managed outside Concur.
| `HasExceptionsPrevYear` | Whether the attendee has exceptions in the previous year, based on yearly total limits for attendees.
| `HasExceptionsYtd` | Whether the attendee has exceptions in the current year, based on yearly total limits for attendees.
| `IsDeleted` | Whether the attendee is marked as deleted.
| `OwnerEmpName` | The name of the employee that owns the attendee record.
| `Title` | The attendee's title.
| `TotalAmountPrevYear` | The total amount spent on the attendee in the previous calendar year.
| `TotalAmountYtd` | The total amount spent on the attendee in the current calendar year.
| `VersionNumber` | The attendee's version number.
| `AttendeeKey` | Attendee unique identifier within Concur.
 
 
### Example
 
#### Request
 
	GET http://www.concursolutions.com/api/expense/expensereport/v1.1/reportfulldetails/n6ujbuLd1Arwe45lT7As3ThJYJf2dAsrrEW HTTPS 1.1
	Host: www.concursolutions.com
	Authentication: OAuth ...</pre>
 
#### Response

	200 OK
	Content-Type: application/xml

	<ReportDetails xmlns:ns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <X_UserID>cmiller@example.com</X_UserID> 
    <ReportId>4681D8C33A284E91A46E</ReportId>
    <ReportName>Client Meeting </ReportName>
    <Purpose>Sales meeting</Purpose>
    <CrnCode>USD</CrnCode>
    <ApsKey>A_NOTF</ApsKey>
    <ReportDate>2011-05-12T00:00:00</ReportDate>
    <CreationDate>2011-05-12T14:15:36</CreationDate>
    <ReceiptImageUrl>http://www.concursolutions.com/getImage?cid=p0000002tcnl&amp;val=D9EC86BB902B8D48</ReceiptImageUrl>
    <HasException>N</HasException>
    <EverSentBack>N</EverSentBack>
    <EmployeeName>Miller, Chris </EmployeeName>
    <ApvStatusName>Not Submitted</ApvStatusName>
    <PayKey>P_NOTP</PayKey>
    <PayStatusName>Not Paid</PayStatusName>
    <PaidDate i:nil="true"/>
    <SubmitDate>0001-01-01T00:00:00</SubmitDate>
    <EntryCount>2</EntryCount>
    <LedgerName>DEFAULT</LedgerName>
    <OrgUnit1 />
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1 />
    <Custom2 />
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
    <PolKey>n3VIbuLd1AU4tlT7As3ThJYJf2dADsJ1V</PolKey>
    <RptKey>n6ujbuLd1Arwe45lT7As3ThJYJf2dAsrrEW</RptKey>
    <ReportTotal>129.00000000</ReportTotal>
    <PersonalExpenses>0.00000000</PersonalExpenses>
    <AmountDueEmployee>129.00000000</AmountDueEmployee>
    <AmountDueCompanyCard>0.00000000</AmountDueCompanyCard>
    <TotalClaimedAmount>129.00000000</TotalClaimedAmount>
    <TotalApprovedAmount>129.00000000</TotalApprovedAmount>
    <WorkflowActionURL>http://www.concursolutions.com/api/expense/expensereport/v1.1/report/Ko9%t8GHpERQVpk$pS2EL6EDHRwi9r$paQS1UqyL6a454QitqQ/WorkFlowAction</WorkflowActionURL>
    <Entries Count="2">
        <ExpenseEntry>
            <ReceiptRequired>N</ReceiptRequired>
            <ImageRequired>Y</ImageRequired>
            <EreceiptId />
            <OrgUnit1 />
            <OrgUnit2 />
            <OrgUnit3 />
            <OrgUnit4 />
            <OrgUnit5 />
            <OrgUnit6 />
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8 />
            <Custom9 />
            <Custom10 />
            <Custom11 />
            <Custom12 />
            <Custom13 />
            <Custom14 />
            <Custom15 />
            <Custom16 />
            <Custom17 />
            <Custom18 />
            <Custom19 />
            <Custom20 />
            <Custom21 />
            <Custom22 />
            <Custom23 />
            <Custom24 />
            <Custom25 />
            <Custom26 />
            <Custom27 />
            <Custom28 />
            <Custom29 />
            <Custom30 />
            <Custom31 />
            <Custom32 />
            <Custom33 />
            <Custom34 />
            <Custom35 />
            <Custom36 />
            <Custom37 />
            <Custom38 />
            <Custom39 />
            <Custom40 />
            <RpeKey>nfUEGTNhWxbXkeT26XlVm9Gdqvbi8hlDa</RpeKey>
            <RptKey>nbe1LDA99RdTx0fUEuZiYd5WW8afkjew$p</RptKey>
            <X_UserID>cmiller@example.com</X_UserID>
            <ExpKey>BUSMEAL</ExpKey>
            <FormKey>nnamf5z0cLe4MHs53YwSIjwY0uP8kby5p</FormKey>
            <ReceiptImageId />
            <ExpName>BUSMEAL</ExpName>
            <BusinessPurpose />
            <HasVat>N</HasVat>
            <ExchangeRate>1.00000000000000</ExchangeRate>
            <TransactionAmount>115.00000000</TransactionAmount>
            <PostedAmount>115.00000000</PostedAmount>
            <ApprovedAmount>115.00000000</ApprovedAmount>
            <TransactionCurrencyName>Dollar, United States</TransactionCurrencyName>
            <VendorDescription>Mel's Diner </VendorDescription>
            <LocationName>Seattle</LocationName>
            <LocationSubdivision>WA</LocationSubdivision>
            <LocationCountry>US</LocationCountry>
            <SpendCategory>Meals and Entertainment</SpendCategory>
            <HasComments>N</HasComments>
            <CommentCount>0</CommentCount>
            <PaymentTypeKey>CASH</PaymentTypeKey>
            <IsItemized>Y</IsItemized>
            <HasExceptions>N</HasExceptions>
            <IsPersonal>N</IsPersonal>
            <HasAttendees>Y</HasAttendees>
            <HasAllocation>Y</HasAllocation>
            <IsCreditCardCharge>N</IsCreditCardCharge>
            <AttendeeCount>2</AttendeeCount>
            <IsPersonalCardCharge>N</IsPersonalCardCharge>
            <TransactionDate>2011-05-19T00:00:00</TransactionDate>
            <LastModifiedDate>2011-05-19T14:44:50</LastModifiedDate>
            <ItemizationsList>
                <ItemizationEntryDetails>
                    <Custom1 />
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5 />
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom11 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                    <Custom21 />
                    <Custom22 />
                    <Custom23 />
                    <Custom24 />
                    <Custom25 />
                    <Custom26 />
                    <Custom27 />
                    <Custom28 />
                    <Custom29 />
                    <Custom30 />
                    <Custom31 />
                    <Custom32 />
                    <Custom33 />
                    <Custom34 />
                    <Custom35 />
                    <Custom36 />
                    <Custom37 />
                    <Custom38 />
                    <Custom39 />
                    <Custom40 />
                    <ItemizationKey>nE0avYnILN6vKNUGsh5lCg6vt$sqc9qB$sq</ItemizationKey>
                    <ExpenseKey>MISCL</ExpenseKey>
                    <ExpenseName>Miscellaneous</ExpenseName>
                    <BusinessPurpose>Promo T-shirt</BusinessPurpose>
                    <TransactionAmount>8.00000000</TransactionAmount>
                    <TransactionDate>2011-05-19T00:00:00</TransactionDate>
                    <PostedAmount>8.00000000</PostedAmount>
                    <ApprovedAmount>8.00000000</ApprovedAmount>
                    <HasComments>Y</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2011-05-19T14:06:53</LastModified>
                    <AllocationsList>
                        <Allocations>
                            <Custom1>North America</Custom1>
                            <Custom2>West</Custom2>
                            <Custom3 />
                            <Custom4 />
                            <Custom5 />
                            <Custom6 />
                            <Custom7 />
                            <Custom8 />
                            <Custom9 />
                            <Custom10 />
                            <Custom11 />
                            <Custom12 />
                            <Custom13 />
                            <Custom14 />
                            <Custom15 />
                            <Custom16 />
                            <Custom17 />
                            <Custom18 />
                            <Custom19 />
                            <Custom20 />
                            <AllocationKey>ngYn5SB4OUXwHnBjh8$pBIT8oPxe9G$shCi</AllocationKey>
                            <Percentage>100.00000000%</Percentage>
                            <AccountCode1>MISC_EXP</AccountCode1>
                            <AccountCode2 />
                        </Allocations>
                    </AllocationsList>
                </ItemizationEntryDetails>
                <ItemizationEntryDetails>
                    <Custom1 />
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5 />
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom11 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                    <Custom21 />
                    <Custom22 />
                    <Custom23 />
                    <Custom24 />
                    <Custom25 />
                    <Custom26 />
                    <Custom27 />
                    <Custom28 />
                    <Custom29 />
                    <Custom30 />
                    <Custom31 />
                    <Custom32 />
                    <Custom33 />
                    <Custom34 />
                    <Custom35 />
                    <Custom36 />
                    <Custom37 />
                    <Custom38 />
                    <Custom39 />
                    <Custom40 />
                    <ItemizationKey>nE0avYnILN6hfJ8LSXF8Qd9WkOkwSp83G</ItemizationKey>
                    <ExpenseKey>BRKFT</ExpenseKey>
                    <ExpenseName>Breakfast</ExpenseName>
                    <BusinessPurpose>Client Meeting</BusinessPurpose>
                    <TransactionAmount>107.00000000</TransactionAmount>
                    <TransactionDate>2011-05-19T00:00:00</TransactionDate>
                    <PostedAmount>107.00000000</PostedAmount>
                    <ApprovedAmount>107.00000000</ApprovedAmount>
                    <HasComments>Y</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2011-05-19T14:06:33</LastModified>
                    <AllocationsList>
                        <Allocations>
                            <Custom1>North America</Custom1>
                            <Custom2>West</Custom2>
                            <Custom3>Oregon</Custom3>
                            <Custom4 />
                            <Custom5 />
                            <Custom6 />
                            <Custom7 />
                            <Custom8 />
                            <Custom9 />
                            <Custom10 />
                            <Custom11 />
                            <Custom12 />
                            <Custom13 />
                            <Custom14 />
                            <Custom15 />
                            <Custom16 />
                            <Custom17 />
                            <Custom18 />
                            <Custom19 />
                            <Custom20 />
                            <AllocationKey>ngYn5SB4OUQfJtTrUBq94qWUuDk8g6fo$s</AllocationKey>
                            <Percentage>50.00000000%</Percentage>
                            <AccountCode1>MEAL_BRKFST</AccountCode1>
                            <AccountCode2 />
                        </Allocations>
                        <Allocations>
                            <Custom1>North America</Custom1>
                            <Custom2>West</Custom2>
                            <Custom3>Washington</Custom3>
                            <Custom4 />
                            <Custom5 />
                            <Custom6 />
                            <Custom7 />
                            <Custom8 />
                            <Custom9 />
                            <Custom10 />
                            <Custom12 />
                            <Custom13 />
                            <Custom14 />
                            <Custom15 />
                            <Custom16 />
                            <Custom17 />
                            <Custom18 />
                            <Custom19 />
                            <Custom20 />
                            <AllocationKey>ngYn5SB4OUX$pWN0Y6bkzFZZhdQ2PJ$pc6b</AllocationKey>
                            <Percentage>50.00000000%</Percentage>
                            <AccountCode1>MEAL_BRKFST</AccountCode1>
                            <AccountCode />
                        </Allocations>
                    </AllocationsList>
                </ItemizationEntryDetails>
            </ItemizationsList>
            <Allocations />
            <AttendeeDetails>
                <Custom1 />
                <Custom2 />
                <Custom3 />
                <Custom4 />
                <Custom5 />
                <Custom6 />
                <Custom7 />
                <Custom8 />
                <Custom9 />
                <Custom10 />
                <Custom11 />
                <Custom12 />
                <Custom13 />
                <Custom14 />
                <Custom15 />
                <Custom16 />
                <Custom17 />
                <Custom18 />
                <Custom19 />
                <Custom20 />
                <AttendeeType>SYSEMP</AttendeeType>
                <FirstName>Chris</FirstName>
                <LastName>Miller</LastName>
                <Company />
                <ExternalId />
                <HasExceptionsPrevYear>N</HasExceptionsPrevYear>
                <HasExceptionsYtd>N</HasExceptionsYtd>
                <IsDeleted>N</IsDeleted>
                <OwnerEmpName>Miller, Chris</OwnerEmpName>
                <Title />
                <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
                <TotalAmountYtd>0.00000000</TotalAmountYtd>
                <VersionNumber>1</VersionNumber>
                <AttendeeKey>njxM6iDZutaiGWiqbak$sEciMQPevMSInD</AttendeeKey>
            </AttendeeDetails>
            <AttendeeDetails>
                <Custom1 />
                <Custom2 />
                <Custom3 />
                <Custom4 />
                <Custom5 />
                <Custom6 />
                <Custom7 />
                <Custom8 />
                <Custom9 />
                <Custom10 />
                <Custom11 />
                <Custom12 />
                <Custom13 />
                <Custom14 />
                <Custom15 />
                <Custom16 />
                <Custom17 />
                <Custom18 />
                <Custom19 />
                <Custom20 />
                <AttendeeType>BUSGUEST</AttendeeType>
                <FirstName>Pat</FirstName>
                <LastName>Davis</LastName>
                <Company>Medico</Company>
                <ExternalId />
                <HasExceptionsPrevYear>N</HasExceptionsPrevYear>
                <HasExceptionsYtd>N</HasExceptionsYtd>
                <IsDeleted>N</IsDeleted>
                <OwnerEmpName>Miller, Chris</OwnerEmpName>
                <Title>Finance Manager</Title>
                <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
                <TotalAmountYtd>0.00000000</TotalAmountYtd>
                <VersionNumber>1</VersionNumber>
                <AttendeeKey>njxM6iDZpwahAX2jt$pdRQ1etD1lNzfW83</AttendeeKey>
            </AttendeeDetails>
        </ExpenseEntry>
        <ExpenseEntry>
            <ReceiptRequired>N</ReceiptRequired>
            <ImageRequired>Y</ImageRequired>
            <EreceiptId />
            <OrgUnit1 />
            <OrgUnit2 />
            <OrgUnit3 />
            <OrgUnit4 />
            <OrgUnit5 />
            <OrgUnit6 />
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8 />
            <Custom9 />
            <Custom10 />
            <Custom11 />
            <Custom12 />
            <Custom13 />
            <Custom14 />
            <Custom15 />
            <Custom16 />
            <Custom17 />
            <Custom18 />
            <Custom19 />
            <Custom20 />
            <Custom21 />
            <Custom22 />
            <Custom23 />
            <Custom24 />
            <Custom25 />
            <Custom26 />
            <Custom27 />
            <Custom28 />
            <Custom29 />
            <Custom30 />
            <Custom31 />
            <Custom32 />
            <Custom33 />
            <Custom34 />
            <Custom35 />
            <Custom36 />
            <Custom37 />
            <Custom38 />
            <Custom39 />
            <Custom40 />
            <RpeKey>nfUEGTNhWxbQmRXziCxZr2FNJmJWOcx0G</RpeKey>
            <RptKey>nbe1LDA99RdTx0fUEuZiYd5WW8afkjew$p</RptKey>
            <ExpKey>TRDSH</ExpKey>
            <FormKey>nnamf5z0cLe4MHs53YwSIjwY0uP8kby5p</FormKey>
            <ReceiptImageId>6EA8D791D82231349763EFCBC1822318</ReceiptImageId>
            <ExpName>PARKING</ExpName>
            <HasVat>N</HasVat>
            <ExchangeRate>1.00000000000000</ExchangeRate>
            <TransactionAmount>14.00000000</TransactionAmount>
            <PostedAmount>14.00000000</PostedAmount>
            <ApprovedAmount>14.00000000</ApprovedAmount>
            <TransactionCurrencyName>US, Dollar</TransactionCurrencyName>
            <VendorDescription>Saf-T-Park</VendorDescription>
            <LocationName />
            <LocationSubdivision />
            <LocationCountry />
            <SpendCategory>Transportation</SpendCategory>
            <HasComments>N</HasComments>
            <CommentCount>0</CommentCount>
            <PaymentTypeKey>CASH</PaymentTypeKey>
            <IsItemized>N</IsItemized>
            <HasExceptions>N</HasExceptions>
            <IsPersonal>N</IsPersonal>
            <HasAttendees>N</HasAttendees>
            <HasAllocation>N</HasAllocation>
            <IsCreditCardCharge>N</IsCreditCardCharge>
            <AttendeeCount>0</AttendeeCount>
            <IsPersonalCardCharge>N</IsPersonalCardCharge>
            <TransactionDate>2011-05-19T00:00:00</TransactionDate>
            <LastModifiedDate>2011-05-26T20:22:03</LastModifiedDate>
            <ItemizationList />
            <Allocations>
                <Custom1 />
                <Custom2 />
                <Custom3 />
                <Custom4 />
                <Custom5 />
                <Custom6 />
                <Custom7 />
                <Custom8 />
                <Custom9 />
                <Custom10 />
                <Custom11 />
                <Custom12 />
                <Custom13 />
                <Custom14 />
                <Custom15 />
                <Custom16 />
                <Custom17 />
                <Custom18 />
                <Custom19 />
                <Custom20 />
                <AccountCode1>PARKING</AccountCode1>
                <AccountCode2 />
                <allocKey>ki7UU3hd447dlKuCVH6D7Sla83Di4kl</allocKey>
                <Percentage>100.00000000%</Percentage>
            </Allocations>
        </ExpenseEntry>
    </Entries>
	</ReportDetails>
	</sample>
	
Last Modified: 3/21/2014 1:16 AM PST
