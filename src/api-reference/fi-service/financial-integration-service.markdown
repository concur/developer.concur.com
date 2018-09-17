<h1>Financial Integration Service</h1>
<ul> 
<li><a href="#FIS">Financial Integration API</a></li>
	<ul>
    <li><a href="#getTransactions">GET a List of Financial Transactions based on a search criteria</a></li>
    <li><a href="#postAcknowledgements">POST Financial Transactions acknowledgements</a></li>
    <li><a href="#postConfirmations">POST Financial Transactions confirmations</a></li>
	</ul>
<li><a href="#responseCodes">Response Codes</a></li>
<li><a href="#examples">Financial Integration sample documents</a></li>
	<ul>
    <li><a href="#expense">Expense sample document</a></li>
    <li><a href="#invoice">Invoice sample document</a></li>
    <li><a href="#cashAdvance">Cash Advance sample document</a></li>
	</ul>

</ul>

<h2>
	<a name="FIS"></a>
	Financial Integration API 
</h2>
<p> The Financial Integration API allows an external system to interact with financial documents generated from Concur, for financial posting into an ERP.</p>
<p> This Web Service provides an automated solution to request available data objects such as approved expense reports, cash advance requests and invoices, to import to the client internal system, with an opportunity to send posting confirmation back into Concur before the object is locked down and cannot be altered in Concur.</p>
<p> Below are some benefits for using the Financial Integration service:</p>
<ul>
	<li>Using a modern method, no more handling of flat files.</li>
    <li>Close to real time experience VS SAP Concur over night processing.</li>
    <li>1 to 1 Concur to ERP reconciliation VS the extract batch processing.</li>
    <li>Opportunity to modify and retry before the object is locked in Concur.</li>
    <li>Insures data sync between systems.</li>
</ul>

<h3> Version </h3>
<p>1.0</p>

<h3> Authorization </h3>
<p>The Financial Integration API works only with the new <a href="https://developer.concur.com/api-reference/authentication/apidoc.html"> Authentication API</a>.</p>
<div class="highlighter-rouge">
	<pre class="highlight">
    	<code>HEADER:   "Authorization: Bearer {YOUR ACCESS TOKEN}" </code>
	</pre>
</div>
<h2>
	<a name="getTransactions"></a>
	GET a list of Financial Transactions based on a search criteria
</h2>
<p>Making a GET request to the financial transactions API will return a list of available financial documents, ready to be processed.</p>
<div class="highlighter-rouge">
	<pre class="highlight">
    	<code>GET   /financialintegration/fi/v1/companies/{companyId}/transactiontypes/{docType}/transactions </code>
	</pre>
</div>
<h3> Parameters </h3>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">companyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong>Company Outtask Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docType</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong> The financial document type to return. VALUES: expense; invoice; cashadvance. Only one type of transactions can be retrieved at a time</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">OuttaskCompanyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">header</code></td>
            <td><strong>Required </strong> Outtask Company Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">entityid</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">header</code></td>
            <td>Concur unique code for the entity</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">offset</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">query</code></td>
            <td>Starting page offset</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">limit</code></td>
            <td><code class="highlighter-rouge">int32</code></td>
            <td><code class="highlighter-rouge">query</code></td>
            <td>Number of records to return per page (default 100)</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">query</code></td>
            <td>The transaction unique identifier, it could be expense report ID, payment request ID or Cash Advance ID. If specified, a single document which matches docId is returned.</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">ignoreDocumentStatus</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">query</code></td>
            <td>Ignores the financial documents status. FORMAT: yes or no. if yes, a document is returned regardless of status. If no, only documents that have not been acknowledged/confirmed are returned</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">systemId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">query</code></td>
            <td>The external system ID that processed the document</td>
    	</tr>
    </tbody>
</table>

<h3>Response schema </h3>

<h4>Financial Documents</h4>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">fIDocuments</code></td>
            <td><code class="highlighter-rouge">Array</code></td>
            <td><a href="#fiDocument"> Financial document</a></td>
            <td>The result collection</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">nextPage</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The URI of the next page of results</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">numberReturned</code></td>
            <td><code class="highlighter-rouge">int32</code></td>
            <td>-</td>
            <td>Number of documents returned in current page</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">offset</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Next page offset</td>
    	</tr>
    </tbody>
</table>

<h4><a name="fiDocument"></a>Financial Document</h4>

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">id</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">-</code></td>
            <td>The unique identifier for the document</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docType</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Transaction type. Expense, invoice or cashadvance</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">companyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Unique identifier for the company in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">entityId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Unique Identifier for the entity in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">companyUuid</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">UUID</code></td>
            <td>Unique UUID for the company in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">erpSystemId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The external System ID that processed the document</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">document</code></td>
            <td><code class="highlighter-rouge">Array</code></td>
            <td>-</td>
            <td>The JSON financial document. Review the <a href="#examples">FI sample documents</a> below</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docStatus</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The financial document status. VALUES: READY, ACKNOWLEDGED, POSTING_CONFIRMED_SUCCESS, POSTING_CONFIRMED_FAILURE.</td>
    	</tr>
    </tbody>
</table>
<p>
<em>Example Request:</em>
</p>
<p>cURL:</p>
<div class="language-shell highlighter-rouge">
	<pre class="highlight">
    	<code>curl -H "OuttaskCompanyId: {YOUR COMPANY ID}" -H "Authorization: Bearer {YOUR ACCESS TOKEN}" -X GET
        https://us.api.concursolutions.com/financialintegration/fi/v1/companies/{CompanyID}/transactiontypes/expense/transactions?limit=15</code>
	</pre>
</div>
<p>
<em>Example Response:</em>
</p>
<div class="language-json highlighter-rouge">
	<pre class="highlight">
    	<code>
{
    "fIDocuments": [
        {
            "id": "1234507145154c6b9a1e562cc6b12345",
            "docType": "expense",
            "companyId": "YOUR_COMPANY_ID",
            "entityId": "YOUR ENTITY CODE",
            "companyUuid": "YOUR_COMPANY_UUID",
            "erpSystemId": null,
            "document": "{THE_FINANCIAL_DOCUMENT}",
            "docStatus": "READY"
        }
    ],
     "offset": "231234",
    "nextPage": "/fi/v1/companies/{YOUR_COMPANY_ID}/transactiontypes/expense/transactions?offset=231234&limit=100",
    "numberReturned": 1
}
        </code>
	</pre>
</div>
<h2>
	<a name="postAcknowledgements"></a>
	POST a Financial transaction aknowledgement
</h2>
<p>This API allows an external system to acknowledge that it has successfully retrieved one or more financial transactions out of Concur and will begin processing those transactions. The transactions in the POST request are then taken out of the ready queue.</p>
<div class="highlighter-rouge">
	<pre class="highlight">
    	<code>POST   /financialintegration/fi/v1/companies/{companyId}/transactiontypes/{docType}/transactions/acknowledgements </code>
	</pre>
</div>
<h3> Parameters </h3>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">companyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong>Company Outtask Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docType</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong> The financial document type to return. VALUES: expense; invoice; cashadvance. Only one type of transactions can be retrieved at a time</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">OuttaskCompanyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">header</code></td>
            <td><strong>Required </strong> Outtask Company Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">entityId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Unique Identifier for the entity in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">acknowledgeRequest</code></td>
            <td><code class="highlighter-rouge">Array</code></td>
            <td><a href="#acknowledgeRequest">body </a></td>
            <td><strong>Required </strong> The JSON request to be posted</td>
    	</tr>
    </tbody>
</table>

<h4><a name="acknowledgeRequest"></a>Post body</h4> 

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">ids</code></td>
            <td><code class="highlighter-rouge">Array</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>The unique identifiers list for the financial documents</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">systemId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The external System ID that acknowledged the documents</td>
            </tr>
    </tbody>
</table>

<h3>Response schema </h3>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">AcknowledgeResponse </code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td><a href="#acknowledgeResponse">Acknowledge Response item</a></td>
            <td>The JSON response</td>
    	</tr>
    </tbody>
</table>

<h4><a name="acknowledgeResponse"></a>Acknowledge Response Item</h4>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">acknowledgeResult</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Acknowledge processing result. VALUES: SUCCESS or FAILURE</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">code</code></td>
            <td><code class="highlighter-rouge">Int32</code></td>
            <td>-</td>
            <td>The Financial Service return code. This is a particular code based on the success and failure of individual records for Acknowledging documents</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The financial document unique identifier</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">errorMessage</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The error message, if any.</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">systemId </code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The External system Id that acknowledged the documents</td>
    	</tr>
    </tbody>
</table>

<p>
<em>Example Request:</em>
</p>
<p>cURL:</p>
<div class="language-shell highlighter-rouge">
	<pre class="highlight">
    	<code>curl -H "OuttaskCompanyId: {YOUR COMPANY ID}" -H "Authorization: Bearer {YOUR ACCESS TOKEN}" -H "Content-Type: application/json" 
        -d "{\"ids\": [\"5ab9224e02e840148e7cd7d9e8e72968\", \"2ac9224e02e840148e7cd7d9e8e12345\"]}"
       -X POST  https://us.api.concursolutions.com/financialintegration/fi/v1/companies/{CompanyID}/transactiontypes/expense/transactions/acknowledgements</code>
	</pre>
</div>
<p>
<em>Example Response with Sucsess and Failure</em>
</p>

<div class="language-json highlighter-rouge">
	<pre class="highlight">
 <code>[
    {
        "code": 0,
        "docId": "5ab9224e02e840148e7cd7d9e8e72968",
        "systemId": null,
        "acknowledgeResult": "SUCCESS",
        "errorMessage": ""
    },
    {
        "code": 101,
        "docId": "2ac9224e02e840148e7cd7d9e8e12345",
        "systemId": null,
        "acknowledgeResult": "FAILURE",
        "errorMessage": "This document was previously acknowledged by SystemId: null."
    }
]</code>
	</pre>
</div>


<h2>
	<a name="postConfirmations"></a>
	POST Financial transactions confirmations
</h2>
<p>This API allows financial posting results to be sent to Concur.</p>
<div class="highlighter-rouge">
	<pre class="highlight">
    	<code>POST   /financialintegration/fi/v1/companies/{companyId}/transactiontypes/{docType}/transactions/postingconfirmations </code>
	</pre>
</div>
<h3> Parameters </h3>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">companyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong>Company Outtask Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docType</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">path</code></td>
            <td><strong>Required </strong> The financial document type to return. VALUES: expense; invoice; cashadvance. Only one type of transactions can be retrieved at a time</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">OuttaskCompanyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">header</code></td>
            <td><strong>Required </strong> Outtask Company Id in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">entityid</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td><code class="highlighter-rouge">header</code></td>
            <td><strong>Required </strong>Entity unique code in Concur</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">confirmationRequest</code></td>
            <td></td>
            <td><a href="#confirmationRequest">body </a></td>
            <td><strong>Required </strong> The JSON request to be posted</td>
    	</tr>
    </tbody>
</table>

<h4><a name="confirmationRequest"></a>Post body</h4> 

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">systemId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td><strong>Required </strong> The external System ID that acknowledged the documents, it can be an empty String.</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">postingConfirmations</code></td>
            <td><code class="highlighter-rouge">Array</code></td>
            <td><a href="#postingRequest">Posting Confirmation request item</a></td>
            <td>Posting confirmations JSON request</td>
    	</tr>
    </tbody>
</table>
<h4><a name="postingRequest"></a>Posting Confirmation Request item</h4>

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">docId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The financial document Id to confirm</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">overallPostingStatusCode</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Posting status. VALUES: error or success</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">postingDocs</code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td><a href="#postingDocs">Posting Documents details</a></td>
            <td>Posting documents details, if any.</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">systemMessages</code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td><a href="#systemMsg">System Messages</a></td>
            <td>Messages to post into Concur, if any.</td>
    	</tr>
    </tbody>
</table>

<h4><a name="postingDocs"></a>Posting Documents details</h4>

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">companyId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td><strong>Required </strong> External system organizational Unit ID</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">documentNumber</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>External system document identifier</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">fiscalYear</code></td>
            <td><code class="highlighter-rouge">int32</code></td>
            <td>-</td>
            <td>External system fiscal year</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">paymentRelevantLineItems</code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td><a href="#paymentLI">Payment Relevant Line Items</a></td>
            <td>Line items details, if any.</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">postingDate</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>YYYY-MM-DD</td>
            <td>External system posting date</td>
    	</tr>
    </tbody>
</table>
<h4><a name="paymentLI"></a>Payment Relevant Line Items</h4>

<h4><a name="systemMsg"></a>System Messages</h4>

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">concurTransactionLineItemId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td></td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">messageId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>External System message identifier</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">messageLanguage</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Message Language code, example EN, FR...</td>
    	</tr>
         <tr>
        	<td><code class="highlighter-rouge">messageLongText</code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td>-</td>
            <td>Message text, will be posted on the audit trail</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">messageShortText</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Message text, will be posted on the audit trail</td>
    	</tr>
    </tbody>
</table>

<h3>Response schema </h3>

<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">PostingConfirmationResponse</code></td>
            <td><code class="highlighter-rouge">array</code></td>
            <td><a href="#postingResponse">Posting Confirmation Response Item</a></td>
            <td>The JSON response body</td>
    	</tr>
    </tbody>
</table>

<h4><a name="confirmationResponse"></a>Posting Confirmation Response Item</h4>
<table>
	<thead>
    	<tr>
        	<th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td><code class="highlighter-rouge">postingConfirmationResult</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Posting confirmation result. VALUES: SUCCESS, SYSTEM_ERROR_OCCURRED, NOT_YET_ACKNOWLEDGED, DOCUMENT_NOT_FOUND, FAILURE, WAS_RECALLED</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">detailMessage  </code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>Posting confirmation message</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">code</code></td>
            <td><code class="highlighter-rouge">Int32</code></td>
            <td>-</td>
            <td>The Financial Service return code</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">docId</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The document Id</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">errorMessage</code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The error message, if any.</td>
    	</tr>
        <tr>
        	<td><code class="highlighter-rouge">systemId </code></td>
            <td><code class="highlighter-rouge">string</code></td>
            <td>-</td>
            <td>The External system Id that acknowledged the document</td>
    	</tr>
    </tbody>
</table>

<p>
<em>Example Request:</em>
</p>
<p>cURL:</p>
<div class="language-shell highlighter-rouge">
	<pre class="highlight">
    	<code>curl -H "OuttaskCompanyId: {YOUR COMPANY ID}" -H "entityid: {YOUR ENTITY ID}" -H "Authorization: Bearer {YOUR ACCESS TOKEN}" -H "Content-Type: application/json" -X POST
        https://us.api.concursolutions.com/financialintegration/fi/v1/companies/{CompanyID}/transactiontypes/expense/transactions/postingconfirmations
        POST body
        {
			"systemId\":"",
			"postingConfirmations":
							[
								{
									"docId":"0c06ab044834454d91f83cbd7b6431d2",
									"overallPostingStatusCode":"error",
									"postingDocs":[],
									"systemMessages":
												[
                                                    {
                                                        "concurTransactionLineItemId":"",	
                                                        "messageId":"010-CTE-POSTING",
                                                        "messageLanguage":"EN",
                                                        "messageLongText":"",
                                                        "messageShortText":"Expense Report {ReportKey} of system CONCUR could not be posted."
                                                    },				
                                                    {
                                                        "concurTransactionLineItemId":"",
                                                        "messageId":"003-CC",
                                                        "messageLanguage":"EN",
                                                        "messageLongText":"",
                                                        "messageShortText":"Profit centre /company code assignment is not correct. Check the entry."
                                                    }
                                                ]
                              },
                              {
                                  "docId":"3331dbeb8e2240ffad7ab5b69492722a",
                                  "overallPostingStatusCode":"success",
                                  "postingDocs":
                                      [
                                          {
                                              "companyId":"0100",
                                              "documentNumber":"0123456",
                                              "fiscalYear":"2018",
                                              "paymentRelevantLineItems":[],
                                              "postingDate":"2018-03-02"
                                          },
                                          {
                                              "companyId":"0800",
                                              "documentNumber":"0123478",
                                              "fiscalYear":"2018",
                                              "paymentRelevantLineItems":[],
                                              "postingDate":"2018-03-02"
                                          }
                                      ],
                                  "systemMessages":[]
                              }
                          ]
		}</code>
	</pre>
</div>
<p>
<em>Example Response with Sucsess and Failure</em>
</p>

<div class="language-json highlighter-rouge">
	<pre class="highlight">
 <code>[
          {
              "code": 0,
              "docId": "0c06ab044834454d91f83cbd7b6431d2",
              "systemId": null,
              "postingConfirmationResult": "SUCCESS",
              "errorMessage": "",
              "detailMessage": ""
          },
          {
              "code": 116,
              "docId": "3331dbeb8e2240ffad7ab5b69492722a",
              "systemId": "",
              "postingConfirmationResult": "FAILURE",
              "errorMessage": "This document does not exist.",
              "detailMessage": ""
          }
  ]</code>
	</pre>
</div>

<h2>
	<a name="responseCodes"></a>
	Response Codes 
</h2>
<h3> Success Codes </h3>

<table>
	<thead>
    	<tr>
        	<th>Code</th>
            <th>Message</th>
            <th>Information</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>200</td>
            <td>OK</td>
            <td>Your request has been processed, please refer to the Financial Integration code table below for more details.</td>
    	</tr>
    </tbody>
</table>

<h3> Financial Integration Codes </h3>

<p>
The Financial Integration Service will return particular codes based on the success and failure of individual records for Acknowledging and Posting Confirmation of documents.
</p>

<table>
	<thead>
    	<tr>
        	<th>Code</th>
            <th>Description</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>0</td>
            <td>Successfully processed</td>
            <td>Any</td>
           </tr> 
           <tr>
            <td>99</td>
            <td>System Id in request does not match system id in FI database</td>
            <td>Any</td>
           </tr> 
           <tr>
            <td>101</td>
            <td>This document was previously acknowledged</td>
            <td>Acknowledge</td>
           </tr>
           <tr>
            <td>102</td>
            <td>This document has been recalled</td>
            <td>Acknowledge</td>
          </tr>
          <tr>
            <td>103</td>
            <td>This document is not ready</td>
            <td>Acknowledge</td>
           </tr>
           <tr>
            <td>104</td>
            <td>This document does not exist in FI database</td>
            <td>Acknowledge</td>
           </tr>
           <tr>
            <td>105</td>
            <td>This document is not of type (expense, invoice, cashadvance, payroll)</td>
            <td>Acknowledge</td>
           </tr> 
           <tr>
            <td>111</td>
            <td>This document has not been acknowledged</td>
            <td>Posting</td>
           </tr> 
           <tr>
            <td>112</td>
            <td>This document has been recalled</td>
            <td>Posting</td>
           </tr> 
           <tr>
            <td>113</td>
            <td>Confirmation has been posted for this document</td>
            <td>Posting</td>
           </tr> 
           <tr>
            <td>114</td>
            <td>Document is not in a known state</td>
            <td>Posting</td>
           </tr> 
           <tr>
            <td>115</td>
            <td>This document is not of type (expense, invoice, cashadvance, payroll)</td>
            <td>Posting</td>
           </tr> 
           <tr>
            <td>116</td>
            <td>This document does not exist in FI</td>
            <td>Posting</td>
         </tr>  
         <tr>
            <td>198</td>
            <td>Invalid request - this same request will not work if tried again.</td>
            <td>Posting</td>
          </tr>
          <tr>
            <td>199</td>
            <td>Unknown error - please try again later</td>
            <td>Any</td>
    	</tr>
    </tbody>
</table>

<h3> Failure Codes </h3>

<table>
	<thead>
    	<tr>
        	<th>Code</th>
            <th>Message</th>
            <th>Information</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
        	<td>400</td>
            <td>Invalid Request</td>
            <td></td>
    	</tr>
        <tr>
        	<td>500</td>
            <td>Internal Error</td>
            <td></td>
    	</tr>
    </tbody>
</table>

<h2>
	<a name="examples"></a>
	Financial Integration sample documents 
</h2>

<h3>
	<a name="expense"></a>
	Expense Sample Document 
</h3>
<div class="language-json highlighter-rouge">
	<pre class="highlight">
 <code>{
   "employee": {
      "employeeFirstName": "FirstName",
      "employeeLastName": "LastName",
      "employeeId": "12345AB",
      "employeeMI": null,
      "employeeOrgUnit4Value": null,
      "employeeOrgUnit5Value": null,
      "employeeOrgUnit6Value": null,
      "employeeCustom1Code": null,
      "employeeCustom2Code": null,
      "employeeCustom3Code": null,
      "employeeCustom4Code": "001",
      "employeeCustom5Code": "USPUG",
      "employeeCustom6Code": "1234",
      "employeeCustom7Code": null,
      "employeeCustom8Code": null,
      "employeeCustom9Code": null,
      "employeeCustom10Code": null,
      "employeeCustom11Code": null,
      "employeeCustom12Code": null,
      "employeeCustom13Code": null,
      "employeeCustom14Code": null,
      "employeeCustom15Code": null,
      "employeeCustom16Code": "N",
      "employeeCustom17Code": null,
      "employeeCustom18Code": null,
      "employeeCustom19Code": null,
      "employeeCustom20Code": null,
      "employeeCustom21Code": "US Group",
      "employeeCustom1Value": null,
      "employeeCustom2Value": null,
      "employeeCustom3Value": null,
      "employeeCustom4Value": "US Inc.",
      "employeeCustom5Value": "US Publishing",
      "employeeCustom6Value": "Operations",
      "employeeCustom7Value": null,
      "employeeCustom8Value": null,
      "employeeCustom9Value": null,
      "employeeCustom10Value": null,
      "employeeCustom11Value": null,
      "employeeCustom12Value": null,
      "employeeCustom13Value": null,
      "employeeCustom14Value": null,
      "employeeCustom15Value": null,
      "employeeCustom16Value": null,
      "employeeCustom17Value": null,
      "employeeCustom18Value": null,
      "employeeCustom19Value": null,
      "employeeCustom20Value": null,
      "employeeCustom21Value": "US Group",
      "employeeOrgUnit1Code": null,
      "employeeOrgUnit2Code": null,
      "employeeOrgUnit3Code": null,
      "employeeOrgUnit4Code": null,
      "employeeOrgUnit5Code": null,
      "employeeOrgUnit6Code": null,
      "employeeOrgUnit1Value": null,
      "employeeOrgUnit2Value": null,
      "employeeOrgUnit3Value": null
   },
   "report": {
      "reportKey": 345,
      "ledgerCode": "DEFAULT",
      "reportId": "D0719B539ED64FE612AB",
      "totalApprovedAmount": 200,
      "reportName": "Trip to Minneapolis",
      "isTest": "N",
      "reportStartDate": null,
      "reportEndDate": null,
      "employeeCurrencyAlphaCode": "USD",
      "payrollPayIndicator": "N",
      "payrollPaymentClearingAccountCode": null,
      "cashAdvanceReturnsAmount": 0E-8,
      "revisionNumber": "1",
      "versionId": "4",
      "homeCountryCode": "US",
      "reportCustom20Code": null,
      "reportCustom1Value": null,
      "reportCustom2Value": null,
      "reportCustom3Value": null,
      "reportCustom4Value": null,
      "reportCustom5Value": null,
      "reportCustom6Value": null,
      "reportCustom7Value": null,
      "reportCustom8Value": null,
      "reportCustom9Value": null,
      "reportCustom10Value": null,
      "reportCustom11Value": null,
      "reportCustom12Value": null,
      "reportCustom13Value": null,
      "reportCustom14Value": null,
      "reportCustom15Value": "US Group",
      "reportCustom16Value": null,
      "reportCustom17Value": null,
      "reportCustom18Value": null,
      "reportCustom19Value": null,
      "reportCustom20Value": null,
      "reportOrgUnit1Code": null,
      "reportOrgUnit2Code": null,
      "reportOrgUnit3Code": null,
      "reportOrgUnit4Code": null,
      "reportOrgUnit5Code": null,
      "reportOrgUnit6Code": null,
      "reportOrgUnit1Value": null,
      "reportOrgUnit2Value": null,
      "reportCustom5Code": null,
      "reportCustom6Code": null,
      "reportCustom7Code": null,
      "reportCustom8Code": null,
      "reportCustom9Code": null,
      "reportCustom10Code": null,
      "reportCustom11Code": null,
      "reportCustom12Code": null,
      "reportCustom13Code": null,
      "reportCustom14Code": null,
      "reportCustom15Code": "US Group",
      "reportCustom16Code": "12345AB",
      "reportCustom17Code": null,
      "reportCustom18Code": null,
      "reportCustom19Code": null,
      "reportSubmitDate": "2018-03-02T18:12:03.050Z",
      "reportUserDefinedDate": "2018-03-02T00:00:00.000Z",
      "reportPaymentProcessingDate": "2018-03-02T18:34:30.260Z",
      "reportCreationDate": "2018-03-02T18:08:37.887Z",
      "reportCustom1Code": "12345AB",
      "reportCustom2Code": null,
      "reportCustom3Code": null,
      "reportCustom4Code": null,
      "reportOrgUnit3Value": null,
      "reportOrgUnit4Value": null,
      "reportOrgUnit5Value": null,
      "reportOrgUnit6Value": null
   },
   "expenseEntry": [
      {
         "cardProgramTypeCode": null,
         "entryCustom20Code": null,
         "entryCustom21Code": null,
         "entryCustom22Code": null,
         "entryCustom23Code": null,
         "entryCustom24Code": null,
         "entryCustom25Code": null,
         "entryCustom26Code": null,
         "entryCustom27Code": null,
         "entryCustom28Code": null,
         "entryCustom29Code": null,
         "entryCustom30Code": null,
         "entryCustom31Code": null,
         "entryCustom32Code": null,
         "entryCustom33Code": null,
         "entryCustom34Code": null,
         "entryCustom35Code": "US",
         "entryCustom36Code": null,
         "entryCustom37Code": null,
         "entryCustom38Code": null,
         "entryCustom39Code": "0.00000000",
         "entryCustom40Code": "200.00000000",
         "reportEntryTransactionAmount": 200,
         "entryLocationCityName": "Minneapolis",
         "entryCountrySubCode": "US-MN",
         "entryIsBillable": "N",
         "entryOrgUnit1Code": null,
         "entryOrgUnit2Code": null,
         "entryOrgUnit3Code": null,
         "entryOrgUnit4Code": null,
         "entryOrgUnit5Code": null,
         "entryOrgUnit6Code": null,
         "offsetPayType": "N",
         "entryCountryCode": "US",
         "entryUuid": null,
         "entrySupplierTaxID": null,
         "entryCustom1Code": null,
         "entryCustom2Code": null,
         "entryCustom3Code": null,
         "entryCustom4Code": null,
         "entryCustom5Code": null,
         "entryCustom6Code": null,
         "entryCustom7Code": null,
         "entryCustom8Code": null,
         "entryCustom9Code": null,
         "entryCustom10Code": null,
         "entryCustom11Code": null,
         "entryCustom12Code": null,
         "entryCustom13Code": null,
         "entryCustom14Code": null,
         "entryCustom15Code": null,
         "entryCustom16Code": null,
         "entryCustom17Code": null,
         "entryCustom18Code": null,
         "entryCustom19Code": null,
         "cardAccountID": null,
         "cardTransactionID": null,
         "cardTransactionAmount": null,
         "cardTransactionCurrency": null,
         "cardTransactionPostedAmount": null,
         "cardTransactionPostedCurrency": null,
         "clearingAccountCode": null,
         "entryApprovedAmount": 200,
         "expensePayIndicator": "N",
         "entryId": "A92F3AD820F4E546800515258C3E0893",
         "entryDescription": "",
         "entryVendorCode": "Astron Hotels",
         "entryCustom1Value": null,
         "entryCustom2Value": null,
         "entryCustom3Value": null,
         "entryCustom4Value": null,
         "entryCustom5Value": null,
         "entryCustom6Value": null,
         "entryCustom7Value": null,
         "entryCustom8Value": null,
         "entryCustom9Value": null,
         "entryCustom10Value": null,
         "entryCustom11Value": null,
         "entryCustom12Value": null,
         "entryCustom13Value": null,
         "entryCustom14Value": null,
         "entryCustom15Value": null,
         "entryCustom16Value": null,
         "entryCustom17Value": null,
         "entryCustom18Value": null,
         "entryCustom19Value": null,
         "entryCustom20Value": null,
         "entryCustom21Value": null,
         "entryCustom22Value": null,
         "entryCustom23Value": null,
         "entryCustom24Value": null,
         "entryCustom25Value": null,
         "entryCustom26Value": null,
         "entryCustom27Value": null,
         "entryCustom28Value": null,
         "entryCustom29Value": null,
         "entryCustom30Value": null,
         "entryCustom31Value": null,
         "entryCustom32Value": null,
         "entryCustom33Value": null,
         "entryCustom34Value": null,
         "entryCustom35Value": null,
         "entryCustom36Value": null,
         "entryCustom37Value": null,
         "entryCustom38Value": null,
         "entryCustom39Value": null,
         "entryCustom40Value": null,
         "entryOrgUnit1Value": null,
         "entryOrgUnit2Value": null,
         "entryOrgUnit3Value": null,
         "entryOrgUnit4Value": null,
         "entryOrgUnit5Value": null,
         "entryOrgUnit6Value": null,
         "entryLocationName": "Minneapolis",
         "entryReceiptId": "E921EECCBCBA393EAC5A9212DCE57D9B",
         "entryElectronicReceiptId": null,
         "allocation": [
            {
               "allocationId": "76A1774FEC7D0C4981FBB332AB5671A3",
               "allocationCustom1Code": "",
               "allocationCustom2Code": "",
               "allocationCustom3Code": "",
               "allocationCustom4Code": null,
               "allocationCustom5Code": null,
               "allocationCustom6Code": null,
               "allocationCustom7Code": null,
               "allocationCustom8Code": null,
               "allocationCustom9Code": null,
               "allocationCustom10Code": null,
               "allocationCustom11Code": null,
               "allocationCustom12Code": null,
               "allocationCustom13Code": null,
               "allocationCustom14Code": null,
               "allocationCustom15Code": null,
               "allocationCustom16Code": null,
               "allocationCustom17Code": null,
               "allocationCustom18Code": null,
               "allocationCustom19Code": null,
               "allocationCustom20Code": null,
               "allocationCustom1Value": null,
               "allocationCustom2Value": null,
               "allocationCustom3Value": null,
               "allocationCustom4Value": null,
               "allocationCustom5Value": null,
               "allocationCustom6Value": null,
               "allocationCustom7Value": null,
               "allocationCustom8Value": null,
               "allocationCustom9Value": null,
               "allocationCustom10Value": null,
               "allocationCustom11Value": null,
               "allocationCustom12Value": null,
               "allocationCustom13Value": null,
               "allocationCustom14Value": null,
               "allocationCustom15Value": null,
               "allocationCustom16Value": null,
               "allocationCustom17Value": null,
               "allocationCustom18Value": null,
               "allocationCustom19Value": null,
               "allocationCustom20Value": null,
               "allocationPercentage": 100,
               "journal": [
                  {
                     "amountGrossCard": null,
                     "journalAccountCode": "125ABC",
                     "journalPayee": "EMPL",
                     "journalPayer": "COMP",
                     "cardTransactionReferenceNumber": null,
                     "amountNetOfReclaim": 150,
                     "amountNetOfTax": 150,
                     "amountGross": 150,
                     "taxGuid": [],
                     "accountingTransactionType": null
                  },
                  {
                     "amountGrossCard": null,
                     "journalAccountCode": "12345",
                     "journalPayee": "EMPL",
                     "journalPayer": "COMP",
                     "cardTransactionReferenceNumber": null,
                     "amountNetOfReclaim": 50,
                     "amountNetOfTax": 50,
                     "amountGross": 50,
                     "taxGuid": [],
                     "accountingTransactionType": null
                  }
               ],
               "tax": []
            }
         ],
         "entryReceiptType": "N",
         "entryExchangeRateDirection": "M",
         "entryIsPersonal": "N",
         "entryVendorDescription": "Astron Hotels",
         "legacyEntryId": 294,
         "liabilityAccountCode": null,
         "expenseTypeName": "Hotel",
         "entryDate": "2018-02-17T00:00:00.000Z",
         "entryCurrAlphaCode": "USD",
         "entryExchangeRate": 1,
         "expenseTypeCode": "LODNG",
         "cardStatementPeriodStartDate": null,
         "cardStatementPeriodEndDate": null,
         "reportEntryPatKey": "CASH"
      }
   ],
   "cashAdvanceApplication": [
      {
         "cashAdvanceClearingAccountCode": "12345",
         "cashAdvanceId": "6A107A548D1B4B49BBF370DF02EC890D",
         "cashAdvanceApplicationAmount": -50,
         "cashAdvanceTransactionType": 2
      }
   ]
}</code>
	</pre>
</div>
<h3>
	<a name="invoice"></a>
	Invoice Sample Document 
</h3>

<div class="language-json highlighter-rouge">
	<pre class="highlight">
 <code>{  
   "requestHeader":{  
      "ledgerCode":"DEFAULT",
      "clearingAccountCode":null,
      "invoiceDate":"08/08/2018",
      "reqKey":35,
      "postingDate":null,
      "poNumber":null,
      "isTest":"N",
      "deliverySlipNumber":null,
      "discountPercentage":null,
      "paymentDueDate":"09/07/2018",
      "requestId":"9B1D30723CBF4F86A574",
      "requestOrgUnit4Code":null,
      "requestOrgUnit5Code":null,
      "requestOrgUnit6Code":null,
      "currencyAlphaCode":"USD",
      "ledgerName":"DEFAULT",
      "vendorInvoiceNumber":"25688",
      "multiplePurchaseOrder":"N",
      "invoicePayIndicator":"N",
      "payMethodType":"CLIENT",
      "submitDate":"2018-09-05T03:37:42.923Z",
      "requestTotal":50.00000000,
      "revisionNumber":"1",
      "processCompleteDate":null,
      "invoiceReceivedDate":null,
      "requestOrgUnit1Value":null,
      "requestOrgUnit2Value":null,
      "requestOrgUnit3Value":null,
      "requestOrgUnit4Value":null,
      "requestOrgUnit5Value":null,
      "requestOrgUnit6Value":null,
      "versionId":"4",
      "requestOrgUnit1Code":null,
      "requestOrgUnit2Code":null,
      "requestOrgUnit3Code":null,
      "requestCustom21Code":null,
      "requestCustom22Code":null,
      "requestCustom1Value":null,
      "requestCustom2Value":null,
      "requestCustom3Value":null,
      "requestCustom4Value":null,
      "requestCustom5Value":null,
      "requestCustom6Value":null,
      "requestCustom7Value":null,
      "requestCustom8Value":null,
      "requestCustom9Value":null,
      "requestCustom10Value":"Default-Change to Client",
      "requestCustom11Value":null,
      "requestCustom12Value":null,
      "requestCustom13Value":null,
      "requestCustom14Value":null,
      "requestCustom15Value":null,
      "requestCustom16Value":null,
      "requestCustom17Value":null,
      "requestCustom18Value":null,
      "requestCustom19Value":null,
      "requestCustom20Value":null,
      "requestCustom21Value":null,
      "requestCustom22Value":null,
      "requestCustom23Value":null,
      "requestCustom24Value":null,
      "amountNetInvoice":50.00000000,
      "amountShippingTotal":0E-8,
      "requestTitle":"FIS Test",
      "discountTermsDays":null,
      "requestCustom1Code":null,
      "requestCustom2Code":null,
      "requestCustom3Code":null,
      "requestCustom4Code":null,
      "requestCustom5Code":null,
      "requestCustom6Code":null,
      "requestCustom7Code":null,
      "requestCustom8Code":null,
      "requestCustom9Code":null,
      "requestCustom10Code":"Default",
      "requestCustom11Code":null,
      "requestCustom12Code":null,
      "requestCustom13Code":null,
      "requestCustom14Code":null,
      "requestCustom15Code":null,
      "requestCustom16Code":null,
      "requestCustom17Code":null,
      "requestCustom18Code":null,
      "requestCustom19Code":null,
      "requestCustom20Code":null,
      "requestCustom24Code":null,
      "netPaymentTermDays":"30",
      "requestCreationDate":"2018-09-05T03:37:00.143Z",
      "requestCustom23Code":null,
      "requestDescription":null
   },
   "ownerEmployee":{  
      "employeeCustom20Value":null,
      "employeeCustom21Value":"System",
      "employeeCustom10Code":"Default",
      "employeeOrgUnit1Code":null,
      "employeeOrgUnit2Code":null,
      "employeeOrgUnit3Code":null,
      "employeeOrgUnit4Code":null,
      "employeeOrgUnit5Code":null,
      "employeeOrgUnit6Code":null,
      "employeeOrgUnit1Value":null,
      "employeeOrgUnit2Value":null,
      "employeeOrgUnit3Value":null,
      "employeeOrgUnit4Value":null,
      "employeeOrgUnit5Value":null,
      "employeeOrgUnit6Value":null,
      "employeeCustom1Code":"ext-record-4",
      "employeeCustom2Code":null,
      "employeeCustom3Code":null,
      "employeeCustom4Code":null,
      "employeeCustom5Code":null,
      "employeeCustom6Code":null,
      "employeeCustom7Code":null,
      "employeeCustom8Code":null,
      "employeeCustom9Code":"28",
      "employeeCustom11Code":null,
      "employeeCustom13Code":null,
      "employeeCustom14Code":null,
      "employeeCustom15Code":null,
      "employeeCustom16Code":"N",
      "employeeCustom17Code":null,
      "employeeCustom18Code":null,
      "employeeCustom19Code":null,
      "employeeCustom20Code":null,
      "employeeCustom21Code":"SYS",
      "employeeCustom1Value":null,
      "employeeCustom2Value":null,
      "employeeCustom3Value":null,
      "employeeCustom4Value":null,
      "employeeCustom5Value":null,
      "employeeCustom6Value":null,
      "employeeCustom7Value":null,
      "employeeCustom8Value":null,
      "employeeCustom9Value":"522 Product",
      "employeeCustom10Value":"Default-Change to Client",
      "employeeCustom11Value":null,
      "employeeCustom12Value":null,
      "employeeCustom13Value":null,
      "employeeCustom14Value":null,
      "employeeCustom15Value":null,
      "employeeCustom16Value":null,
      "employeeCustom17Value":null,
      "employeeCustom18Value":null,
      "employeeCustom19Value":null,
      "employeeId":"12345AB",
      "employeeMI":"C",
      "employeeFirstName":"FirstName",
      "employeeLastName":"LastName",
      "employeeCustom12Code":null
   },
   "vendor":{  
      "vendorName":"Test Vendor",
      "vendorCode":"94F538F2C3224C6E871CFED9F0F8333A",
      "vendorShipFromAddressCode":null,
      "vendorRemitToAddressCode":"333",
      "vendorContactFirstName":null,
      "vendorContactLastName":null
   },
   "lineItem":[  
      {  
         "allocation":[  
            {  
               "journal":{  
                  "accountCode":"MATER",
                  "amountShipping":0,
                  "amountNet":50.00,
                  "amountGross":50.00,
                  "tax":null
               },
               "allocationAccountCode":"MATER",
               "allocationCustom6Code":null,
               "allocationCustom7Code":null,
               "allocationCustom8Code":null,
               "allocationCustom9Code":null,
               "allocationCustom10Code":null,
               "allocationCustom11Code":null,
               "allocationCustom12Code":null,
               "allocationCustom13Code":null,
               "allocationCustom14Code":null,
               "allocationCustom15Code":null,
               "allocationCustom16Code":null,
               "allocationCustom17Code":null,
               "allocationCustom18Code":null,
               "allocationCustom19Code":null,
               "allocationCustom20Code":null,
               "allocationCustom1Code":"",
               "allocationCustom2Code":"",
               "allocationCustom3Code":"",
               "allocationCustom4Code":null,
               "allocationCustom5Code":null,
               "allocationPercentage":100.00000000,
               "allocationCustom1Value":null,
               "allocationCustom2Value":null,
               "allocationCustom3Value":null,
               "allocationCustom4Value":null,
               "allocationCustom5Value":null,
               "allocationCustom6Value":null,
               "allocationCustom7Value":null,
               "allocationCustom8Value":null,
               "allocationCustom9Value":null,
               "allocationCustom10Value":null,
               "allocationCustom11Value":null,
               "allocationCustom12Value":null,
               "allocationCustom13Value":null,
               "allocationCustom14Value":null,
               "allocationCustom15Value":null,
               "allocationCustom16Value":null,
               "allocationCustom17Value":null,
               "allocationCustom18Value":null,
               "allocationCustom19Value":null,
               "allocationCustom20Value":null,
               "allocationKey":158
            }
         ],
         "receiptNumbers":[  

         ],
         "expenseTypeName":"Material",
         "poLineNumber":null,
         "externalLineItemId":null,
         "expenseTypeCode":"2000   ",
         "lineItemPurchaseOrderNumber":null,
         "lineItemCode":null,
         "lineItemDeliverySlipNumber":null,
         "lineItemUnitPrice":50.00000000,
         "lineItemSequenceOrder":1,
         "lineItemQuantity":1.00000000,
         "lineItemCustom1Value":null,
         "lineItemCustom2Value":null,
         "lineItemCustom3Value":null,
         "lineItemCustom4Value":null,
         "lineItemCustom5Value":null,
         "lineItemCustom6Value":null,
         "lineItemCustom7Value":null,
         "lineItemCustom8Value":null,
         "lineItemCustom9Value":null,
         "lineItemCustom10Value":null,
         "lineItemCustom11Value":null,
         "lineItemCustom12Value":null,
         "lineItemCustom13Value":null,
         "lineItemCustom14Value":null,
         "lineItemCustom15Value":null,
         "lineItemCustom16Value":null,
         "lineItemCustom17Value":null,
         "lineItemCustom18Value":null,
         "lineItemCustom19Value":null,
         "lineItemCustom20Value":null,
         "lineItemCustom1Code":null,
         "lineItemCustom2Code":null,
         "lineItemCustom3Code":null,
         "lineItemCustom4Code":null,
         "lineItemCustom5Code":null,
         "lineItemCustom6Code":null,
         "lineItemCustom7Code":null,
         "lineItemCustom8Code":null,
         "lineItemCustom9Code":null,
         "lineItemCustom10Code":null,
         "lineItemCustom11Code":null,
         "lineItemCustom12Code":null,
         "lineItemCustom13Code":null,
         "lineItemCustom14Code":null,
         "lineItemCustom15Code":null,
         "lineItemCustom16Code":null,
         "lineItemCustom17Code":null,
         "lineItemCustom18Code":null,
         "lineItemCustom19Code":null,
         "lineItemCustom20Code":null,
         "lineItemDescription":"Merchandise"
      }
   ]
}
 </code>
	</pre>
</div>

<h3>
	<a name="cashAdvance"></a>
	Cash Advance Sample Document 
</h3>

<div class="language-json highlighter-rouge">
	<pre class="highlight">
 <code>{
   "employeeData": {
      "employeeFirstName": "FirstName",
      "employeeLastName": "LastName",
      "employeeId": "12345ID",
      "employeeMI": null,
      "employeeOrgUnit5Code": null,
      "employeeOrgUnit6Code": null,
      "employeeOrgUnit1Value": null,
      "employeeOrgUnit2Value": null,
      "employeeOrgUnit3Value": null,
      "employeeOrgUnit4Value": null,
      "employeeOrgUnit5Value": null,
      "employeeOrgUnit6Value": null,
      "employeeCustom1Code": null,
      "employeeCustom2Code": null,
      "employeeCustom3Code": null,
      "employeeCustom4Code": "001",
      "employeeCustom5Code": "ABUFG",
      "employeeCustom6Code": "2567",
      "employeeCustom7Code": null,
      "employeeCustom8Code": null,
      "employeeCustom9Code": null,
      "employeeCustom10Code": null,
      "employeeCustom11Code": null,
      "employeeCustom13Value": null,
      "employeeCustom14Value": null,
      "employeeCustom15Value": null,
      "employeeCustom16Value": null,
      "employeeCustom17Value": null,
      "employeeCustom18Value": null,
      "employeeCustom19Value": null,
      "employeeCustom20Value": null,
      "employeeCustom21Value": "US Group",
      "employeeCustom12Code": null,
      "employeeCustom13Code": null,
      "employeeCustom14Code": null,
      "employeeCustom15Code": null,
      "employeeCustom16Code": "N",
      "employeeCustom17Code": null,
      "employeeCustom18Code": null,
      "employeeCustom19Code": null,
      "employeeCustom20Code": null,
      "employeeCustom21Code": "US Group",
      "employeeCustom1Value": null,
      "employeeCustom2Value": null,
      "employeeCustom3Value": null,
      "employeeCustom4Value": "US Inc.",
      "employeeCustom5Value": "US Publishing",
      "employeeCustom6Value": "Operations",
      "employeeCustom7Value": null,
      "employeeCustom8Value": null,
      "employeeCustom9Value": null,
      "employeeCustom10Value": null,
      "employeeCustom11Value": null,
      "employeeCustom12Value": null,
      "employeeOrgUnit1Code": null,
      "employeeOrgUnit2Code": null,
      "employeeOrgUnit3Code": null,
      "employeeOrgUnit4Code": null
   },
   "cashAdvanceData": {
      "locationName": null,
      "exchangeRate": 1,
      "countryCode": null,
      "currencyAlphaCode": "USD",
      "cashAdvanceId": "FE884EE31617CF4CABE36C7FC44512A1",
      "clearingAccountCode": null,
      "purpose": null,
      "paymentMethod": 0,
      "requestAmount": 150,
      "requestDate": "2018-03-03T02:16:51.363Z",
      "issuedDate": "2018-03-06T03:54:36.993Z",
      "isTest": "N",
      "countrySubCode": null,
      "requestedDisbursementDate": null,
      "travelStartDate": null,
      "travelEndDate": null,
      "currencyNumCode": "840",
      "expensePayIndicator": "N",
      "employeeCurrencyAlphaCode": "USD",
      "cardAccountID": null,
      "cardTransactionID": null,
      "cardTransactionAmount": null,
      "cardTransactionCurrency": null,
      "cardTransactionPostedAmount": null,
      "cardTransactionPostedCurrency": null,
      "transactionType": 1,
      "name": "Cash Advance Testing 3"
   },
   "journalData": [
      {
         "accountCode": "12345",
         "amount": 150,
         "payee": "EMPL",
         "debitOrCredit": "DR",
         "payer": "COMP",
         "paymentCode": "Cash"
      }
   ]
}</code>
	</pre>
</div>

