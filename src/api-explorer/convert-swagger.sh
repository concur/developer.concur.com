#!/bin/bash

# 3.0 APIs
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Allocations.swagger.json | jq '.' > ./v3.0/Allocations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Attendees.swagger.json | jq '.' > ./v3.0/Attendees.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/AttendeeTypes.swagger.json | jq '.' > ./v3.0/AttendeeTypes.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/ConnectionRequests.swagger.json | jq '.' > ./v3.0/ConnectionRequests.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/DigitalTaxInvoices.swagger.json | jq '.' > ./v3.0/DigitalTaxInvoices.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Entries.swagger.json | jq '.' > ./v3.0/Entries.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/EntryAttendeeAssociations.swagger.json | jq '.' > ./v3.0/EntryAttendeeAssociations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/ExpenseGroupConfigurations.swagger.json | jq '.' > ./v3.0/ExpenseGroupConfigurations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Itemizations.swagger.json | jq '.' > ./v3.0/Itemizations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/LatestBookings.swagger.json | jq '.' > ./v3.0/LatestBookings.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/ListItems.swagger.json | jq '.' > ./v3.0/ListItems.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Lists.swagger.json | jq '.' > ./v3.0/Lists.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/LocalizedData.swagger.json | jq '.' > ./v3.0/LocalizedData.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Locations.swagger.json | jq '.' > ./v3.0/Locations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Opportunities.swagger.json | jq '.' > ./v3.0/Opportunities.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/PaymentRequest.swagger.json | jq '.' > ./v3.0/PaymentRequest.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/PaymentRequestDigest.swagger.json | jq '.' > ./v3.0/PaymentRequestDigest.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/PurchaseOrderReceipts.swagger.json | jq '.' > ./v3.0/PurchaseOrderReceipts.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/PurchaseOrders.swagger.json | jq '.' > ./v3.0/PurchaseOrders.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/QuickExpenses.swagger.json | jq '.' > ./v3.0/QuickExpenses.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/ReceiptImages.swagger.json | jq '.' > ./v3.0/ReceiptImages.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Receipts.swagger.json | jq '.' > ./v3.0/Receipts.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Reports.swagger.json | jq '.' > ./v3.0/Reports.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Requests.swagger.json | jq '.' > ./v3.0/Requests.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/SalesTaxValidationRequest.swagger.json | jq '.' > ./v3.0/SalesTaxValidationRequest.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Suppliers.swagger.json | jq '.' > ./v3.0/Suppliers.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Users.swagger.json | jq '.' > ./v3.0/Users.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.0/Vendors.swagger.json | jq '.' > ./v3.0/Vendors.swagger2.json

# 3.1 APIs
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.1/RequestGroupConfigurations.swagger.json | jq '.' > ./v3.1/RequestGroupConfigurations.swagger2.json
LOGGER_LEVEL=info node ../build/swagger-converter/ ./v3.1/Requests.swagger.json | jq '.' > ./v3.1/Requests.swagger2.json
