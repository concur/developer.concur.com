---
title: Examples
layout: reference
---

# Request examples

- [Examples](#examples)
  - [Create expense](#create-expense_examples)

<a name="examples">
### Examples
   <a name="create-expense_examples">
   #### Create expense

curl -X POST --H 'Content-Type: application/json' --H 'Accept: application/json' --header "Authorization: Bearer {YOUR ACCESS TOKEN}" -d {YOUR EXPENSE JSON HERE} https://us.api.concursolutions.com/travelrequest/v4/requests/9DDC9963D1C09B48AC8F13193D607225/expenses

*Body*
```json
{
  "businessPurpose": "Test Expense creation",
  "expenseType": {
    "id": "AIRFR"
  },
  "transactionAmount": {
    "value": 100,
    "currency": "EUR"
  },
  "transactionDate": "2017-07-01T09:30:00.000Z"
}
```

*Response*
```json
{
  "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/38DB3AAE426A354EA424C0DAE7568AB2",
  "id": "38DB3AAE426A354EA424C0DAE7568AB2",
  "allocations": [
    {
      "allocationAmount": {
        "value": 64.00000000,
        "currency": "EUR"
      },
      "approvedAmount": {
        "value": 76.69600000,
        "currency": "USD"
      },
      "allocationId": "01DCE1DBC02442F08971C501CB9B8C79",
      "postedAmount": {
        "value": 76.69600000,
        "currency": "USD"
      },
      "custom1": {
        "code": "DEV",
        "listItemId": "B3F3BB730E9AC847AE6C732730CB3F7E"
      },
      "custom3": {
        "value": "Test Allocations"
      },
      "expenseId": "38DB3AAE426A354EA424C0DAE7568AB2",
      "percentage": 80,
      "percentEdited": false,
      "systemAllocation": false
    },
    {
      "allocationAmount": {
        "value": 16.00000000,
        "currency": "EUR"
      },
      "approvedAmount": {
        "value": 19.17400000,
        "currency": "USD"
      },
      "allocationId": "3910141DDD5840948E2FEF4410089511",
      "postedAmount": {
        "value": 19.17400000,
        "currency": "USD"
      },
      "custom1": {
        "code": "DEV",
        "listItemId": "B3F3BB730E9AC847AE6C732730CB3F7E"
      },
      "custom2": {
        "code": "Item 1.1",
        "listItemId": "CB17AFCA33BAF2438F281D6F92383613"
      },
      "custom3": {
        "value": "1234"
      },
      "expenseId": "38DB3AAE426A354EA424C0DAE7568AB2",
      "percentage": 20,
      "percentEdited": false,
      "systemAllocation": false
    }
  ],
  "businessPurpose": "Test Expense creation",
  "exchangeRate": {
    "value": 1.19837845659595,
    "operation": "MULTIPLY"
  },
  "expenseType": {
    "id": "AIRFR",
    "name": "Air fare",
    "href": "https://us.api.concursolutions.com/expenseconfig/v4/users/e05da31d-11a3-4e30-a41a-c8d277dd10b8/context/TRAVELER/expensetypes/AIRFR"
  },
  "transactionAmount": {
    "value": 80,
    "currency": "EUR"
  },
  "transactionDate": "2017-07-01T09:30:00.000Z",
  "tripData": {
      "segmentType": {
        "category": "REQ_SEG_AIRFR",
        "code": "AIRFR"
      },
      "legs": [
        {
          "startDate": "2017-09-05",
          "startTime": "08:00",
          "startLocation": {
            "id": "8794290E776F468F87F5A6CD69FCA006",
            "countryCode": "US",
            "city": "New York",
            "iataCode": "NYC"
          },
          "endLocation": {
            "id": "2C09DB70F92C4ADF89AE8F30FE6A711A",
            "countryCode": "US",
            "city": "Boston",
            "iataCode": "BOS"
          },
          "comment": "Trip to MIT",
          "vendorName": "Delta Airlines"
        },
        {
          "startDate": "2017-09-05",
          "startTime": "08:00",
          "startLocation": {
            "id": "2C09DB70F92C4ADF89AE8F30FE6A711A",
            "countryCode": "US",
            "city": "Boston",
            "iataCode": "BOS"
          },
          "endLocation": {
            "id": "8794290E776F468F87F5A6CD69FCA006",
            "countryCode": "US",
            "city": "New York",
            "iataCode": "NYC"
          }
        },
        "returnLeg": true
      ],
      "agencyBooked": true,
      "selfBooked": false,
      "tripType": "ROUND_TRIP"
    }
}
```
