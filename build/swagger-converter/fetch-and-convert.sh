#!/bin/bash

echo "Cleaning up workspace"

rm -rf ./v3.0 ./v3.1 ./converted

echo "Download Legacy Swagger from QA Environment"

mkdir ./v3.0 ./v3.1

# 3.0 APIs
# https://rqa3-cb.concurtech.net/api/v3.0

curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Allocations | jq '.' > ./v3.0/Allocations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Attendees | jq '.' > ./v3.0/Attendees.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/AttendeeTypes | jq '.' > ./v3.0/AttendeeTypes.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/ConnectionRequests | jq '.' > ./v3.0/ConnectionRequests.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/DigitalTaxInvoices | jq '.' > ./v3.0/DigitalTaxInvoices.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Entries | jq '.' > ./v3.0/Entries.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/EntryAttendeeAssociations | jq '.' > ./v3.0/EntryAttendeeAssociations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/ExpenseGroupConfigurations | jq '.' > ./v3.0/ExpenseGroupConfigurations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Itemizations | jq '.' > ./v3.0/Itemizations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/LatestBookings | jq '.' > ./v3.0/LatestBookings.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/ListItems | jq '.' > ./v3.0/ListItems.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Lists | jq '.' > ./v3.0/Lists.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/LocalizedData | jq '.' > ./v3.0/LocalizedData.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Locations | jq '.' > ./v3.0/Locations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Opportunities | jq '.' > ./v3.0/Opportunities.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/PaymentRequest | jq '.' > ./v3.0/PaymentRequest.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/PaymentRequestDigest | jq '.' > ./v3.0/PaymentRequestDigest.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/PurchaseOrderReceipts | jq '.' > ./v3.0/PurchaseOrderReceipts.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/PurchaseOrders | jq '.' > ./v3.0/PurchaseOrders.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/QuickExpenses | jq '.' > ./v3.0/QuickExpenses.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/ReceiptImages | jq '.' > ./v3.0/ReceiptImages.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Receipts | jq '.' > ./v3.0/Receipts.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Reports | jq '.' > ./v3.0/Reports.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Requests | jq '.' > ./v3.0/Requests.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/SalesTaxValidationRequest | jq '.' > ./v3.0/SalesTaxValidationRequest.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Suppliers | jq '.' > ./v3.0/Suppliers.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Users | jq '.' > ./v3.0/Users.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.0/api-docs/Vendors | jq '.' > ./v3.0/Vendors.swagger.json

# 3.1 APIs
# https://rqa3-cb.concurtech.net/api/v3.1

curl https://rqa3-cb.concurtech.net/api/v3.1/api-docs/RequestGroupConfigurations | jq '.' > ./v3.1/RequestGroupConfigurations.swagger.json
curl https://rqa3-cb.concurtech.net/api/v3.1/api-docs/Requests | jq '.' > ./v3.1/Requests.swagger.json

echo "Convert Legacy Swagger to Valid Swagger 2"

mkdir -p ./converted/v3.0 ./converted/v3.1

node index.js ./v3.0/Allocations.swagger.json | jq '.' > ./converted/v3.0/Allocations.swagger2.json
node index.js ./v3.0/Attendees.swagger.json | jq '.' > ./converted/v3.0/Attendees.swagger2.json
node index.js ./v3.0/AttendeeTypes.swagger.json | jq '.' > ./converted/v3.0/AttendeeTypes.swagger2.json
node index.js ./v3.0/ConnectionRequests.swagger.json | jq '.' > ./converted/v3.0/ConnectionRequests.swagger2.json
node index.js ./v3.0/DigitalTaxInvoices.swagger.json | jq '.' > ./converted/v3.0/DigitalTaxInvoices.swagger2.json
node index.js ./v3.0/Entries.swagger.json | jq '.' > ./converted/v3.0/Entries.swagger2.json
node index.js ./v3.0/EntryAttendeeAssociations.swagger.json | jq '.' > ./converted/v3.0/EntryAttendeeAssociations.swagger2.json
node index.js ./v3.0/ExpenseGroupConfigurations.swagger.json | jq '.' > ./converted/v3.0/ExpenseGroupConfigurations.swagger2.json
node index.js ./v3.0/Itemizations.swagger.json | jq '.' > ./converted/v3.0/Itemizations.swagger2.json
node index.js ./v3.0/LatestBookings.swagger.json | jq '.' > ./converted/v3.0/LatestBookings.swagger2.json
node index.js ./v3.0/ListItems.swagger.json | jq '.' > ./converted/v3.0/ListItems.swagger2.json
node index.js ./v3.0/Lists.swagger.json | jq '.' > ./converted/v3.0/Lists.swagger2.json
node index.js ./v3.0/LocalizedData.swagger.json | jq '.' > ./converted/v3.0/LocalizedData.swagger2.json
node index.js ./v3.0/Locations.swagger.json | jq '.' > ./converted/v3.0/Locations.swagger2.json
node index.js ./v3.0/Opportunities.swagger.json | jq '.' > ./converted/v3.0/Opportunities.swagger2.json
node index.js ./v3.0/PaymentRequest.swagger.json | jq '.' > ./converted/v3.0/PaymentRequest.swagger2.json
node index.js ./v3.0/PaymentRequestDigest.swagger.json | jq '.' > ./converted/v3.0/PaymentRequestDigest.swagger2.json
node index.js ./v3.0/PurchaseOrderReceipts.swagger.json | jq '.' > ./converted/v3.0/PurchaseOrderReceipts.swagger2.json
node index.js ./v3.0/PurchaseOrders.swagger.json | jq '.' > ./converted/v3.0/PurchaseOrders.swagger2.json
node index.js ./v3.0/QuickExpenses.swagger.json | jq '.' > ./converted/v3.0/QuickExpenses.swagger2.json
node index.js ./v3.0/ReceiptImages.swagger.json | jq '.' > ./converted/v3.0/ReceiptImages.swagger2.json
node index.js ./v3.0/Receipts.swagger.json | jq '.' > ./converted/v3.0/Receipts.swagger2.json
node index.js ./v3.0/Reports.swagger.json | jq '.' > ./converted/v3.0/Reports.swagger2.json
node index.js ./v3.0/Requests.swagger.json | jq '.' > ./converted/v3.0/Requests.swagger2.json
node index.js ./v3.0/SalesTaxValidationRequest.swagger.json | jq '.' > ./converted/v3.0/SalesTaxValidationRequest.swagger2.json
node index.js ./v3.0/Suppliers.swagger.json | jq '.' > ./converted/v3.0/Suppliers.swagger2.json
node index.js ./v3.0/Users.swagger.json | jq '.' > ./converted/v3.0/Users.swagger2.json
node index.js ./v3.0/Vendors.swagger.json | jq '.' > ./converted/v3.0/Vendors.swagger2.json
node index.js ./v3.1/RequestGroupConfigurations.swagger.json | jq '.' > ./converted/v3.1/RequestGroupConfigurations.swagger2.json
node index.js ./v3.1/Requests.swagger.json | jq '.' > ./converted/v3.1/Requests.swagger2.json

echo "All done!"
