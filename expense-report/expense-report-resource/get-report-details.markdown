
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Resource: GET Report Details</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Resource: GET Report Details
                    <div class="section">
                    <div id="node-487" class="node clear-block">


    
    <div class="content clear-block">
                ## 
    Description
Retrieves the full set of information for the report. Includes the Report Header, Entry, Attendee, Itemization and Allocation details.
Some elements will appear only if the OAuth consumer has the Web Services Admin role. These include: The **ReportKey** element, the employee's credit card information, and the employee's bank account information, VAT information, Journal entries. Connectors that utilize this information go through a review process with Concur that includes verification of secure data handling.
## 
    <a id="reportdetails" name="reportdetails"></a>GET Report Details Request

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Supported Accept Types</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **{<em>reportId</em>}**<br />
                        The identifier for the desired report.
                
                Example: <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v2.0/report/<em>{reportId}</em><br />
                <br />
                **URI Source**: The ReportId is returned in the **ReportId** element of the <a href="https://developer.concur.com/node/694">Get List of Reports</a> function.</td>
            <td valign="top">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
                These roles allow the user to manage data for the entire company.
            </td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/n6ujbuLd1Arwe45lT7As3ThJYJf2dAsrrEW HTTP/1.1
Authorization: OAuth {access token} 
...
</pre>
## 
    GET Report Details Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr>
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
            </td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return a **ReportDetails** parent element with the following child elements:<br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                UserLoginID</td>
                            <td valign="top">
                                <span class="codeexample">The user ID of the report owner. Maximum 128 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmployeeName</td>
                            <td valign="top">
                                The name of the employee who created the report. Maximum 66 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportID</td>
                            <td valign="top">
                                The unique identifier for the report, which appears in the Concur Expense UI. Maximum 32 character varchar.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportKey</td>
                            <td valign="top">
                                The unencrypted unique identifier for the report, that appears on the report header. The element appears only if the OAuth consumer has the Web Services Admin role in Concur. Maximum 48 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportName</td>
                            <td valign="top">
                                The name of the report. Maximum 40 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Purpose</td>
                            <td valign="top">
                                The information from the Business Purpose field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportDate</td>
                            <td valign="top">
                                The date from the report header. <span class="codeexample">Format: YYYY-MM-DDThh:mm:ss</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CreationDate</td>
                            <td valign="top">
                                The date the report was created. <span class="codeexample">Format: YYYY-MM-DDThh:mm:ss</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SubmitDate</td>
                            <td valign="top">
                                The date the report was submitted. Maximum 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaidDate</td>
                            <td valign="top">
                                <span class="codeexample">The date the report was extracted for payment. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CurrencyCode</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the expense report currency. The expense report currency is defined as the report creator's default reimbursement currency.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportTotal</td>
                            <td valign="top">
                                The total amount of the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PersonalExpenses</td>
                            <td valign="top">
                                The total amount of expenses marked as personal. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AmountDueEmployee</td>
                            <td valign="top">
                                The total amount due to the employee for the report. Maximum 23 characters.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AmountDueCompanyCard</td>
                            <td valign="top">
                                The total amount due to the company card for the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TotalClaimedAmount</td>
                            <td valign="top">
                                The total amount of all non-personal expenses in the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TotalApprovedAmount</td>
                            <td valign="top">
                                The total amount of approved expenses in the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ApprovalStatusCode</td>
                            <td valign="top">
                                The approval status code for the report.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ApprovalStatusName</td>
                            <td valign="top">
                                The approval status name for the report.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentStatusCode</td>
                            <td valign="top">
                                <span class="codeexample">The unique identifier for the payment status of the report.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentStatusName</td>
                            <td valign="top">
                                The payment status of the report.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom20</td>
                            <td valign="top">
                                The details from the Custom fields. These may not have data, depending on configuration. If report owner information is stored in these fields, it may be outdated. Refer to the **ReportOwner** parent element for the current owner information. The custom fields may have the following child elements:<br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Type</td>
                                            <td>
                                                The custom field type. Will be one of the following:<br />
                                                Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Value</td>
                                            <td>
                                                The value in the custom field. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Code</td>
                                            <td>
                                                Custom list fields will include the list item code in this element.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LedgerName</td>
                            <td valign="top">
                                The name of the expense report ledger. Maximum 20 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PolicyID</td>
                            <td valign="top">
                                The unique identifier of the policy that applies to this report. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EverSentBack</td>
                            <td valign="top">
                                Whether the report has ever been sent back to the employee.<span class="codeexample"> Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasException</td>
                            <td valign="top">
                                Whether the report has exceptions.<span class="codeexample"> Format: Y/N </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                WorkflowActionURL</td>
                            <td valign="top">
                                The URL to post a workflow action to the report using the <a href="https://developer.concur.com/node/490">Post Report Workflow Action</a> function.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseEntriesList</td>
                            <td valign="top">
                                This parent element has an <span class="codeexample">**ExpenseEntry** child element for each entry. Refer to the <a href="#expentrychild">Expense Entry Child Elements</a> table for more information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportImageURL</td>
                            <td valign="top">
                                The URL to access the image associated with the report. This URL is valid for 30 minutes after the web service call.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Country</td>
                            <td valign="top">
                                The report country. Maximum 2 characters. Format: <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">The ISO 3166-1 alpha-2 country code</a>. Example: United States is US.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CountrySubdivision</td>
                            <td valign="top">
                                The report country subdivision. Format: <a href="http://en.wikipedia.org/wiki/ISO_3166-2">ISO 3166-2:2007 country subdivision</a>.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ProcessingPaymentDate</td>
                            <td valign="top">
                                The date that the report completed all approvals and was ready to be extracted for payment<br />
                                Format: YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReceiptsReceived</td>
                            <td valign="top">
                                If Y, then this report has its receipt receipt confirmed by the Expense Processor. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportOwner</td>
                            <td valign="top">
                                This parent element includes details about the employee who is the report owner. It saves the caller from calling the <a href="https://developer.concur.com/node/406">Get User Information</a> function to get employee information commonly used in accounting integration. The **ReportOwner** element includes the most recent information about the report owner, at the time the report is requested. The **ReportOwner** parent element includes the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                EmployeeCustom21</td>
                                            <td>
                                                The report owner's group ID. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                EmployeeID</td>
                                            <td>
                                                Employee ID often also serves as the employee's **Vendor ID** for AP system integrations or **Payroll ID** for Payroll integrations. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                EmployeeOrgUnit1 through EmployeeOrgUnit6</td>
                                            <td>
                                                The report owner's organizational unit information. Maximum 48 characters for each field.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FirstName</td>
                                            <td>
                                                The report owner's first name. Maximum 32 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                LastName</td>
                                            <td>
                                                The report owner's last name. Maximum 32 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                MiddleInitial</td>
                                            <td>
                                                The report owner's middle initial. Maximum 1 character.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ReimbursementMethodCode</td>
                                            <td>
                                                The report owner's reimbursement method code, as defined in the employee's Profile.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmployeeBankAccount</td>
                            <td valign="top">
                                This parent element includes the bank account data found on the **Bank Information** page in Profile. This data is used in **Payment System** integrations where the payment system reimburses the employee via this bank account. The **EmployeeBankAccount** parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                BankNumber</td>
                                            <td>
                                                The bank identification number entered on the Bank Information page. Maximum 11 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                BankName</td>
                                            <td>
                                                The bank name entered on the Bank Information page. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                BranchLocation</td>
                                            <td>
                                                The branch location entered on the Bank Information page. Maximum 30 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                AccountNumber</td>
                                            <td>
                                                The bank account number entered on the Bank Information page. Maximum 100 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                AccountName</td>
                                            <td>
                                                The name on the account entered on the Bank Information page.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressLine1</td>
                                            <td>
                                                The postal address line 1 entered on the Bank Information page. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressLine2</td>
                                            <td>
                                                The postal address line 2 entered on the Bank Information page. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressCity</td>
                                            <td>
                                                The postal address city entered on the Bank Information page. Maximum 24 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressRegion</td>
                                            <td>
                                                The postal address region entered on the Bank Information page. Maximum 24 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressCode</td>
                                            <td>
                                                The postal address code entered on the Bank Information page. Maximum 20 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalAddressCountry</td>
                                            <td>
                                                The postal address country entered on the Bank Information page. Maximum 2 characters. Format: The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">The ISO 3166-1 alpha-2 country code</a>. Example: United States is US.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="expentrychild" name="expentrychild"></a>Expense Entry Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportEntryID</td>
                            <td valign="top">
                                The ID of the report entry. Maximum 13 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeID</td>
                            <td valign="top">
                                The expense type ID for the expense entry. Expense Type IDs are returned in the **ExpKey** element by the <a href="https://developer.concur.com/node/473">Get Expense Group Configuration</a> endpoint.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeName</td>
                            <td valign="top">
                                The expense type name. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SpendCategory</td>
                            <td valign="top">
                                The spend category specified for this expense type. Varies by client, used in reporting.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentTypeCode</td>
                            <td valign="top">
                                The code for the payment type. Maximum 4 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentTypeName</td>
                            <td valign="top">
                                The name for the payment type. Maximum 80 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionDate</td>
                            <td valign="top">
                                The date of the expense entry. Maximum 10 characters. <span class="codeexample">Format: YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionCurrencyName</td>
                            <td valign="top">
                                The name of the transaction currency. Example: US, Dollar</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExchangeRate</td>
                            <td valign="top">
                                The exchange rate that applies to the entry. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAmount</td>
                            <td valign="top">
                                The amount of the expense entry in the original transaction currency. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedAmount</td>
                            <td valign="top">
                                The amount of the expense entry in the user's reimbursement currency. The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ApprovedAmount</td>
                            <td valign="top">
                                The approved amount of the expense entry in the user's reimbursement currency.The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BusinessPurpose</td>
                            <td valign="top">
                                The text from the Business Purpose field of the entry. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VendorDescription</td>
                            <td valign="top">
                                The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">LocationNa<span class="codeexample">me</td>
                            <td valign="top">
                                The location for the expense entry, usually the city name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LocationSubdivision</td>
                            <td valign="top">
                                The location's State, Province, or Country Subdivision. <span class="codeexample">Maximum 6 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LocationCountry</td>
                            <td valign="top">
                                The location's Country. <span class="codeexample">Maximum 2 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit</td>
                            <td valign="top">
                                The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom40</td>
                            <td valign="top">
                                The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements:<br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Type</td>
                                            <td>
                                                The custom field type. Will be one of the following:<br />
                                                Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Value</td>
                                            <td>
                                                The value in the custom field. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Code</td>
                                            <td>
                                                Custom list fields will include the list item code in this element.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FormID</td>
                            <td valign="top">
                                The ID for the expense entry form.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EntryImageID</td>
                            <td valign="top">
                                The unique identifier for the image associated with the entry.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasVat</td>
                            <td valign="top">
                                Whether the entry contains VAT data. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasComments</td>
                            <td valign="top">
                                Whether the expense entry has comments. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CommentCount</td>
                            <td valign="top">
                                The number of comments associated with the expense entry.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsItemized</td>
                            <td valign="top">
                                Whether the expense entry is itemized. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasExceptions</td>
                            <td valign="top">
                                Whether the expense entry has exceptions. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsPersonal</td>
                            <td valign="top">
                                Whether the expense entry is marked as personal. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasAttendees</td>
                            <td valign="top">
                                Whether the expense entry has attendees. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasAllocation</td>
                            <td valign="top">
                                Defines the amount of allocations for the expense. Maximum 1 character. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsCreditCardCharge</td>
                            <td valign="top">
                                Whether the expense came from a credit card feed. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsPersonalCardCharge</td>
                            <td valign="top">
                                Whether the expense came from a personal card feed. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReceiptRequired
                            </td>
                            <td valign="top">
                                Whether the original receipt is required for the entry. Maximum 1 character. Format: Y/N
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ImageRequired</td>
                            <td valign="top">
                                Whether a receipt image is required for the entry. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                E-ReceiptID</td>
                            <td valign="top">
                                The ID for the attached e-receipt, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LastModifiedDate</td>
                            <td valign="top">
                                The date the expense entry was last changed. <span class="codeexample">Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ItemizationsList</td>
                            <td valign="top">
                                The list of itemizations for the expense entry. This parent element will have at least one **Itemization** child element. If the expense entry is not itemized, the **Itemization** will contain the same values as the entry. If the expense entry has itemizations, there will be one **Itemization** child element for each itemization. Refer to the <a href="#itementrychild">Itemization Entry Details Child Elements</a> table for more information.
                                **NOTE**: There are a few rare cases where the **ItemizationsList** will be null. This happens when a report entry has a payment type code that is not **IBCP with offsets** or **CBCP** and there is a Regular or Child expense entry with an Approved Amount equal to zero. The expense entry will have a Null **ItemizationsList**.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportEntryVendorName</td>
                            <td valign="top">
                                Vendor name the employee selected from the Vendor list field. <span class="codeexample">Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportEntryReceiptReceived</td>
                            <td valign="top">
                                If Y, then this entry has been marked as reviewed by a processor.<span class="codeexample"> Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReportEntryReceiptType</td>
                            <td valign="top">
                                <span class="codeexample">Maximum 1 character. One of these:<br />
                                T = tax receipt<br />
                                R= regular receipt<br />
                                N = no receipt</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CardTransaction</td>
                            <td valign="top">
                                This parent element includes the card transaction data found in the card transaction associated to this expense entry. This data is used in **Payment System** integrations where the payment system reimburses the card issuer for the indicated card account. Refer to the <a href="#cardtrans">Card Transaction Child Elements</a> field.</td>
                        </tr>
                        <tr bordercolor="#CCCCCC">
                            <td>
                                ExpensePay</td>
                            <td>
                                Whether the entry was paid using the Expense Pay service. This element have a value if the report has reached the Processing Payment workflow step. Format: Yes/No</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="itementrychild" name="itementrychild"></a>Itemization Entry Details Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ItemType</td>
                            <td valign="top">
                                The type of itemization. If the expense entry does not have any itemizations, this will be set to Regular. If the expense entry contains itemizations, each one will be set to Child.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ItemizationID</td>
                            <td valign="top">
                                The unique identifier for the itemization.<span class="codeexample"> Maximum 19 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeID</td>
                            <td valign="top">
                                The expense type ID for the itemization.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeName</td>
                            <td valign="top">
                                The expense type for the itemization. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionDate</td>
                            <td valign="top">
                                The date of the transaction. Maximum 10 characters. <span class="codeexample">Format: YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAmount</td>
                            <td valign="top">
                                The amount for the itemization in the expense currency. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedAmount</td>
                            <td valign="top">
                                The amount for the itemization in the user's reimbursement currency.<span class="codeexample"> The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ApprovedAmount</td>
                            <td valign="top">
                                The approved amount of the itemization in the user's reimbursement currency. <span class="codeexample">The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BusinessPurpose</td>
                            <td valign="top">
                                The business purpose field from the report header.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom40</td>
                            <td valign="top">
                                The custom fields associated with the itemization. These may not have data, depending on your configuration. The custom fields may have the following child elements:<br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Type</td>
                                            <td>
                                                The custom field type. Will be one of the following:<br />
                                                Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Value</td>
                                            <td>
                                                The value in the custom field. Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Code</td>
                                            <td>
                                                Custom list fields will include the list item code in this element.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HasComments</td>
                            <td valign="top">
                                Whether the itemization has comments. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CommentCount</td>
                            <td valign="top">
                                The number of comments associated with the itemization.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsPersonal</td>
                            <td valign="top">
                                Whether the itemization is personal. Maximum 1 character. Format: Y/N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LastModified</td>
                            <td valign="top">
                                The UTC date when the itemization was last modified. <span class="codeexample">Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AttendeesList</td>
                            <td valign="top">
                                This parent element contains one **Attendee** element for each associated attendee. The **Attendee** element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="codeexample">AttendeeType</td>
                                            <td>
                                                The type of attendee. <span class="codeexample">Maximum 40 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">FirstName</td>
                                            <td>
                                                The attendee's first name. <span class="codeexample">Maximum 50 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">LastName</td>
                                            <td>
                                                The attendee's last name. <span class="codeexample">Maximum 132 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">Company</td>
                                            <td>
                                                The attendee's company name. <span class="codeexample">Maximum 150 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">Title</td>
                                            <td>
                                                The attendee's title. <span class="codeexample">Maximum 32 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">ExternalID</td>
                                            <td>
                                                The unique identifier for the attendee, managed outside Concur. <span class="codeexample">Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">Custom1 through Custom20</td>
                                            <td>
                                                The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements:<br />
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Type</td>
                                                            <td>
                                                                The custom field type. Will be one of the following:<br />
                                                                Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Value</td>
                                                            <td>
                                                                The value in the custom field. <span class="codeexample">Maximum 100 characters.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Code</td>
                                                            <td>
                                                                Custom list fields will include the list item code in this element.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">HasExceptionsPrevYear</td>
                                            <td>
                                                Whether the attendee has exceptions in the previous year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">HasExceptionsYTD</td>
                                            <td>
                                                Whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">IsDeleted</td>
                                            <td>
                                                Whether the attendee is marked as deleted. Maximum 1 character. Format: Y/N</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">OwnerName</td>
                                            <td>
                                                The name of the employee that owns the attendee record.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">TotalAmountPrevYear</td>
                                            <td>
                                                The total amount spent on the attendee in the previous calendar year.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">TotalAmountYTD</td>
                                            <td>
                                                The total amount spent on the attendee in the current calendar year.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">VersionNumber</td>
                                            <td>
                                                The attendee's version number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">AttendeeID</td>
                                            <td>
                                                Attendee unique identifier within Concur.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                AttendeeTypeCode</td>
                                            <td>
                                                The unique identifier for the attendee type.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                AttendeeOwnerID</td>
                                            <td>
                                                The unique identifier for the person or system that owns the attendee.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CurrencyCode</td>
                                            <td>
                                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for attendee related amounts.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AllocationsList</td>
                            <td valign="top">
                                This parent element contains at least one **Allocation** element. It will contain multiple **Allocation** elements if there are multiple allocations for the itemization. Refer to the <a href="#allocationchild">Allocations List Child Element</a>s table.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="allocationchild" name="allocationchild"></a>Allocations List Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AllocationID</td>
                            <td valign="top">
                                The unique alphanumeric identifier for the allocation. <span class="codeexample">Maximum 13 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Percentage</td>
                            <td valign="top">
                                The percentage of the expense that is included in this allocation. <span class="codeexample">Maximum 11 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountCode1</td>
                            <td valign="top">
                                The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only this primary account code.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountCode2</td>
                            <td valign="top">
                                The secondary or alternative accounting code assigned to the expense type associated with this allocation.In rare cases some expense types include this accounting code to handle special cases. One example of these special cases is when using travel allowance, where one expense would use the primary account code for the allowed amount, and the alternative account code for the overage. Another example is personal use of a company car.
                                Refer to the <em>Expense</em><em>: Account Codes Setup Guide</em> for more information on how Concur Expense determines which accounting codes to use.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Custom1 through Custom20</td>
                            <td valign="top">
                                The custom fields associated with the allocation. These may not have data, depending on your configuration. The custom fields may have the following child elements:<br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Type</td>
                                            <td>
                                                The custom field type. Will be one of the following:<br />
                                                Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Value</td>
                                            <td>
                                                The value in the custom field. <span class="codeexample">Maximum 48 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Code</td>
                                            <td>
                                                Custom list fields will include the list item code in this element.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                JournalEntriesList</td>
                            <td valign="top">
                                This parent element contains at least one **JournalEntry** child element. It contains multiple **JournalEntry** elements if the allocation has multiple journal entries. The **JournalEntry** element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                JournalID</td>
                                            <td>
                                                Unique identifier for the journal entry.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PayerPaymentTypeName</td>
                                            <td>
                                                Payer payment type. <span class="codeexample">Maximum 64 characters.<br />
                                                    One of these:<br />
                                                    Company = Company<br />
                                                    Employee = Employee<br />
                                                    Payment Type for the Credit Card Payment Type
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PayerPaymentTypeCode</td>
                                            <td>
                                                Payment code name for the payer. <span class="codeexample">Maximum 80 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PayeePaymentTypeName</td>
                                            <td>
                                                Payee payment type. <span class="codeexample">Maximum 64 characters.<br />
                                                One of these:<br />
                                                Company = Company<br />
                                                Employee = Employee<br />
                                                Payment Type for the Credit Card Payment Type</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PayeePaymentCode</td>
                                            <td>
                                                Payment code name for the payee. <span class="codeexample">Maximum 80 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                AccountCode</td>
                                            <td>
                                                The account code Concur Expense determines should apply to this journal entry. For journal entries associated to an allocation, Concur Expense uses the business logic described in the <em>Expense: Account Codes Setup Guide</em> to determine whether the primary or secondary account code should apply. When there is no allocation associated to the journal entry, Concur Expense uses clearing account codes for Credit Card and Cash Advance for personal use of a company paid expense or a cash advance issued to an employee respectively. <span class="codeexample">Maximum 48 characters.<br />
                                                <br />
                                                **NOTE**: The developer should almost always use this accounting code when creating financial transactions in financial systems. In some situations a developer may need to use the accounting codes in the Allocation parent element.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                DebitOrCredit</td>
                                            <td>
                                                <span class="codeexample">Maximum 2 characters. Either:<br />
                                                DR = Debit<br />
                                                CR = credit</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Amount</td>
                                            <td>
                                                Value, as credit or debit, of the amount to be exchanged between the payer and payee for this expense account code (not an absolute value) <span class="codeexample">Maximum 23 characters.<br />
                                                EXAMPLES: Value of zero, credit, or debit, as the following:<br />
                                                0 (Zero) &quot;0&quot;<br />
                                                + (Plus / Debit) &quot;+50.00&quot;<br />
                                                - (Minus / Credit) &quot;-50.00&quot;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                JobRunKey</td>
                                            <td>
                                                Either the unique identifier for job run for the accounting extract that processed this journal, or a static value indicating the journal was processed by Manual Pay, Expense Pay, or some other system.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VATDataList</td>
                            <td valign="top">
                                This parent element contains one **VATData** element for each VAT line item. This element will be empty if there are no VAT line items. The **VATData** parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                TaxName</td>
                                            <td>
                                                Tax authority name. <span class="codeexample">Maximum 50 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TaxAuthorityLabel</td>
                                            <td>
                                                5-digit code that appears on the expense entry pages. <span class="codeexample">Maximum 5 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TaxTransactionAmount</td>
                                            <td>
                                                Calculated tax amount for this expense in the spend currency. <span class="codeexample">Maximum 23 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TaxPostedAmount</td>
                                            <td>
                                                Calculated tax amount for this expense entry in the reimbursement currency. <span class="codeexample">Maximum 23 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Source</td>
                                            <td>
                                                Specifies how the tax data was derived. <span class="codeexample">Maximum 4 characters. One of these:<br />
                                                CARD= Provided from company card<br />
                                                USER = Entered by employee<br />
                                                SYST = Calculated by system<br />
                                                PROC = Entered by processor</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TaxReclaimTransactionAmount</td>
                                            <td>
                                                Calculated amount of tax eligible for reclaim in the spend currency. <span class="codeexample">Maximum 23 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TaxReclaimPostedAmount</td>
                                            <td>
                                                Calculated amount of tax eligible for reclaim in the reimbursement currency. <span class="codeexample">Maximum 23 characters.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="cardtrans" name="cardtrans"></a>Card Transaction Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountNumber</td>
                            <td valign="top">
                                Credit card number used for this expense. <span class="codeexample">Maximum 255 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CardDescription</td>
                            <td valign="top">
                                The name on the credit card used for this expense. <span class="codeexample">Maximum 255 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CardTypeCode</td>
                            <td valign="top">
                                Type of credit card.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionReferenceNumber</td>
                            <td valign="top">
                                Reference number from the credit card vendor. <span class="codeexample">Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionCCTType</td>
                            <td valign="top">
                                Transaction type supplied by card vendor. <span class="codeexample">Maximum 3 characters. One of these:<br />
                                ANF = Annual Fees<br />
                                CAV = Cash Advance<br />
                                CCF = Cash and Check Fees<br />
                                CHG = Other Bank Charges and Fees<br />
                                FNC = Finance Charges<br />
                                LAF = Late Fees<br />
                                NSF = Insufficient Funds Check Fees<br />
                                PAY = Payment<br />
                                RPE = Credit Card Transaction</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionID</td>
                            <td valign="top">
                                Calculated value assigned to this card entry during the import process. <span class="codeexample">Maximum 32 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAmount</td>
                            <td valign="top">
                                Amount of the charge in the spend currency. <span class="codeexample">Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TaxAmount</td>
                            <td valign="top">
                                Amount of tax on the transaction amount (if provided by card vendor). <span class="codeexample">Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAlphaCode</td>
                            <td valign="top">
                                Currency code for the spend currency.<span class="codeexample"> Maximum 3 characters. Format: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 3 digit alpha code</a></td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedAmount</td>
                            <td valign="top">
                                Amount of the charge in the billing currency of the card. <span class="codeexample">Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedAlphaCode</td>
                            <td valign="top">
                                Currency code for the card billing currency. <span class="codeexample">Maximum 3 characters. Format: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 3 digit alpha code</a></td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionDate</td>
                            <td valign="top">
                                Date the charge was made at the merchant. <span class="codeexample">Maximum 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedDate</td>
                            <td valign="top">
                                Date the charge was posted to the credit card account. <span class="codeexample">Maximum 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Description</td>
                            <td valign="top">
                                Description of the charge from the merchant. <span class="codeexample">Maximum 42 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MasterCardCode</td>
                            <td valign="top">
                                Merchant code sent from the credit card vendor. <span class="codeexample">Maximum 5 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionMerchantName</td>
                            <td valign="top">
                                Name of the merchant. <span class="codeexample">Maximum 50 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MerchantCity</td>
                            <td valign="top">
                                Merchant city. <span class="codeexample">Maximum 40 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MerchantState</td>
                            <td valign="top">
                                Merchant State/Province. <span class="codeexample">Maximum 32 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MerchantCountryCode</td>
                            <td valign="top">
                                Merchant country location code. Format: 2 digit alpha code</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MerchantReferenceNumber</td>
                            <td valign="top">
                                Merchant reference number passed from the merchant to the card. <span class="codeexample">Maximum 15 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExchangeRateFromBillingToEmployeeCurrency</td>
                            <td valign="top">
                                Currency exchange rate used between the credit card billing currency and the employee's reimbursement currency. <span class="codeexample">Maximum 23 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BillingAmount</td>
                            <td valign="top">
                                Amount due to the company card from the employee or company (depending on who is responsible for the bill) for this detail row. <span class="codeexample">Maximum 23 characters.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
Content-Type: application/xml

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<ReportDetails <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2012/07<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <UserLoginID>cm@example.com</UserLoginID>
    <EmployeeName>Miller, Chris</EmployeeName>
    <ReportID>425FE2ADB4954FCA90CD</ReportID>
    <ReportName>Client Meeting</ReportName>
    <Purpose>Sales meeting</Purpose>
    <ReportDate>2013-01-10T00:00:00</ReportDate>
    <CreationDate>2013-01-11T01:58:20</CreationDate>
    <SubmitDate>0001-01-01T00:00:00</SubmitDate>
    <PaidDate <span class="xml-attribute">i:nil=<span class="xml-value">&quot;true&quot; />
    <CurrencyCode>USD</CurrencyCode>
    <ReportTotal>50.00000000</ReportTotal>
    <PersonalExpenses>0.00000000</PersonalExpenses>
    <AmountDueEmployee>50.00000000</AmountDueEmployee>
    <AmountDueCompanyCard>0.00000000</AmountDueCompanyCard>
    <TotalClaimedAmount>50.00000000</TotalClaimedAmount>
    <TotalApprovedAmount>50.00000000</TotalApprovedAmount>
    <ApprovalStatusCode>A_NOTF</ApprovalStatusCode>
    <ApprovalStatusName>Not Submitted</ApprovalStatusName>
    <PaymentStatusCode>P_NOTP</PaymentStatusCode>
    <PaymentStatusName>Not Paid</PaymentStatusName>
    <OrgUnit1>Sales</OrgUnit1>
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
    <LedgerName>Corporate</LedgerName>
    <PolicyID>ndrF8hjzl9FtFUdfaBwVvXP$sD1vDpRKNf</PolicyID>
    <EverSentBack>N</EverSentBack>
    <HasException>N</HasException>
    <WorkflowActionURL />
    <ExpenseEntriesList>
        <ExpenseEntry>
            <ReportEntryID>nE0avYnILN9mHdTErNSd2pH45udFoNQ$po</ReportEntryID>
            <ExpenseTypeID>BUSML</ExpenseTypeID>
            <ExpenseTypeName>Business Meal (attendees)</ExpenseTypeName>
            <SpendCategory>Entertainment</SpendCategory>
            <PaymentTypeCode>CASH</PaymentTypeCode>
            <PaymentTypeName>Cash</PaymentTypeName>
            <TransactionDate>2013-01-10T00:00:00</TransactionDate>
            <TransactionCurrencyName>US, Dollar</TransactionCurrencyName>
            <ExchangeRate>1.00000000000000</ExchangeRate>
            <TransactionAmount>50.00000000</TransactionAmount>
            <PostedAmount>50.00000000</PostedAmount>
            <ApprovedAmount />
            <BusinessPurpose />
            <VendorDescription />
            <LocationName>Washington</LocationName>
            <LocationSubdivision>US-DC</LocationSubdivision>
            <LocationCountry>US</LocationCountry>
            <OrgUnit1>Sales</OrgUnit1>
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
            <FormID>nAaT8$puKKOhs7h2wespCW7vyyxJAJcyb5</FormID>
            <EntryImageID />
            <HasVat>N</HasVat>
            <HasComments>N</HasComments>
            <CommentCount>0</CommentCount>
            <IsItemized>Y</IsItemized>
            <HasExceptions>N</HasExceptions>
            <IsPersonal>N</IsPersonal>
            <HasAttendees>Y</HasAttendees>
            <HasAllocation>N</HasAllocation>
            <IsCreditCardCharge>N</IsCreditCardCharge>
            <IsPersonalCardCharge>N</IsPersonalCardCharge>
            <ReceiptRequired>N</ReceiptRequired>
            <ImageRequired>N</ImageRequired>
            <E-ReceiptID />
            <LastModified>2013-01-11T01:59:52</LastModified>
            <ItemizationsList>
                <Itemization>
                    <ItemType>Regular</ItemType>
                    <ItemizationID>nE0avYnILN9mHdTErNSd2pH45udFoNQ$po</ItemizationID>
                    <ExpenseTypeID>BUSML</ExpenseTypeID>
                    <ExpenseTypeName>Business Meal (attendees)</ExpenseTypeName>
                    <TransactionDate>2013-01-10T00:00:00</TransactionDate>
                    <TransactionAmount>50.00000000</TransactionAmount>
                    <PostedAmount>50.00000000</PostedAmount>
                    <ApprovedAmount />
                    <BusinessPurpose />
                    <OrgUnit1>Sales</OrgUnit1>
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
                    <HasComments>N</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2013-01-11T01:59:52</LastModified>
                    <AllocationsList />
                    <AttendeesList>
                        <Attendee>
                            <AttendeeType>BUSGUEST</AttendeeType>
                            <FirstName>Pat</FirstName>
                            <LastName>Davis</LastName>
                            <Company />
                            <Title />
                            <ExternalID />
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
                            <HasExceptionsPrevYear>N</HasExceptionsPrevYear>
                            <HasExceptionsYTD>N</HasExceptionsYTD>
                            <IsDeleted>N</IsDeleted>
                            <OwnerEmpName>Miller, Chris</OwnerEmpName>
                            <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
                            <TotalAmountYTD>0.00000000</TotalAmountYTD>
                            <VersionNumber>1</VersionNumber>
                            <AttendeeID>nFaAj038Hw$plfUD8be0I45wTx8$sMlTd$pP</AttendeeID>
                            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
                            <AttendeeOwnerID>cm@example.com</AttendeeOwnerID>
                            <CurrencyCode>USD</CurrencyCode>
                        </Attendee>
                    </AttendeesList>
                </Itemization>
                <Itemization>
                    <ItemType>Child</ItemType>
                    <ItemizationID>nE0avYnILN9g$s6lCFX0jFBWmHAiTYYf9C</ItemizationID>
                    <ExpenseTypeID>BRKFT</ExpenseTypeID>
                    <ExpenseTypeName>Breakfast</ExpenseTypeName>
                    <TransactionDate>2013-01-10T00:00:00</TransactionDate>
                    <TransactionAmount>50.00000000</TransactionAmount>
                    <PostedAmount>50.00000000</PostedAmount>
                    <ApprovedAmount>50.00000000</ApprovedAmount>
                    <BusinessPurpose />
                    <OrgUnit1>Sales</OrgUnit1>
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
                    <HasComments>N</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2013-01-11T01:59:52</LastModified>
                    <AllocationsList>
                        <Allocation>
                            <AllocationID>ngYn5SB4OUXgRV6P8VgsQQr88SaKYvbqz</AllocationID>
                            <Percentage>100.00000000%</Percentage>
                            <AccountCode1>AC_BRKFT1</AccountCode1>
                            <AccountCode2>AC_BRKFT2</AccountCode2>
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
                            <VATDataList />
                        </Allocation>
                    </AllocationsList>
                    <AttendeesList />
                </Itemization>
            </ItemizationsList>
            <UserLoginID>cm@example.com</UserLoginID>
        </ExpenseEntry>
    </ExpenseEntriesList>
    <Country>US</Country>
    <CountrySubdivision></CountrySubdivision>
    <ProcessingPaymentDate></ProcessingPaymentDate>
    <ReceiptsReceived>Y</ReceiptsReceived>
    <ReportOwner>
        <EmployeeID>cm@example.com</EmployeeID>
        <LastName>Chris</LastName>
        <FirstName>Miller</FirstName>
        <MiddleInitial></MiddleInitial>
        <EmployeeCustom21></EmployeeCustom21>
        <EmployeeOrgUnit1></EmployeeOrgUnit1>
        <EmployeeOrgUnit2></EmployeeOrgUnit2>
        <EmployeeOrgUnit3></EmployeeOrgUnit3>
        <EmployeeOrgUnit4></EmployeeOrgUnit4>
        <EmployeeOrgUnit5></EmployeeOrgUnit5>
        <EmployeeOrgUnit6></EmployeeOrgUnit6>
        <ReimbursementMethodCode>CNQRPAY</ReimbursementMethodCode>
    </ReportOwner>
</ReportDetails>
</pre>
<br />
