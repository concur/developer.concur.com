---
title: Examples
layout: reference
---

# Request examples

Below we have sample request data and the corresponding request answers:

* [expense-resource](#expense-resource)
* [request-resource](#request-resource)
* [travel-agency-resource](#travel-agency-resource)
* [workflow-resource](#workflow-resource)


<a name="expense-resource"></a>
### expense-resource
<i>Manage expected expense entries attached to a Request document</i><br />

#### DELETE /v4/expenses/{expenseUuid}
<code>curl -X DELETE --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy84OWRkN2M5MC02ZWY0LTQxZDEtOWFlOC0zMDNiYWQyNTg3NGQiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiODlkZDdjOTAtNmVmNC00MWQxLTlhZTgtMzAzYmFkMjU4NzRkIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyODU1NjM3LCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI4NTIwMzcsImlhdCI6MTUyMjg1MjAzNywiY29uY3VyLmNvbXBhbnkiOiIwNWIzYjc4Zi04OTMwLTRmMWUtOTY4MS03NDMxYzkzMmM0MDIifQ.P1OHS4QYgFMSCGIojLox3bxezRyg1MYWwwwbZ7Q9EWYx9XhKNrR7QUyOMyn1o-iW78SliSYrIFtpXnWOKbLYrhkZojlgyEIEM8ENX3suSii876W9DAmvJtM9q98UglUCN4mBa96WjE1-VXWghP4yW0WG9tLc5IZg0WLCOIxBrUY4qmAVu4dUijAvWpkg-YUiP0nn2o4rx-cfWZvxql0OIQyPMLtue7Tyb96pER8u5MJfgpWSnuZOsDUU3youJa4RzB8xILAO4Q9IFVFfPrq43S80oo4YwmSquFVTTTngZL82d08d9HhjheXu2t_Cude-YOUABNYeAb7yJVyu9JMx8g' 'https://rqa3-raas.concurasp.com/v4/expenses/B4D37C35E16E904F90C182D5751D3440'</code>
```json
true
```
Response code : **200**

#### GET /v4/expenses/{expenseUuid}
<code>curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy84OWRkN2M5MC02ZWY0LTQxZDEtOWFlOC0zMDNiYWQyNTg3NGQiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiODlkZDdjOTAtNmVmNC00MWQxLTlhZTgtMzAzYmFkMjU4NzRkIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyODUwMjMzLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI4NDY2MzMsImlhdCI6MTUyMjg0NjYzMywiY29uY3VyLmNvbXBhbnkiOiIwNWIzYjc4Zi04OTMwLTRmMWUtOTY4MS03NDMxYzkzMmM0MDIifQ.S9trem03nqas3tJmWeI13q7Dcim_IWeWTW-S8YiQ7TkErtU1CLOgwr-XckVTz4trkteiz5XGMFc1pkNjTCGyHRYSVyWEs7GzcEoygo6Ub7cQo3S1Sk9tr0aW3eV7rHQFdUVobGs1OIbQWiHfUjrl8jEQm8aZOEMJcACJUPMPIbmxrlKr8gkNnEmLZkcBZuC96iYLkRh7y5_8NTpWe0uM8j18MCPnBwG5Kjka1aaD0tg0UAu9bFnf74EEa8OE9dRa2Y5AXZmNHQ5n0fvvoWoREL2lGLUtCFYu9NgxZpd5hHGxj4EyPzbdSg4bXEapZCgK87xclj2n1jydyXaHmxjkLA' 'https://rqa3-raas.concurasp.com/v4/expenses/B4D37C35E16E904F90C182D5751D3440'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/expenses/B4D37C35E16E904F90C182D5751D3440",
  "id": "B4D37C35E16E904F90C182D5751D3440",
  "allocations": [
    {
      "allocationAmount": {
        "value": 100,
        "currency": "USD"
      },
      "approvedAmount": {
        "value": 100,
        "currency": "USD"
      },
      "allocationId": "C82B90376930AC4DB12AFD7F346C4147",
      "postedAmount": {
        "value": 100,
        "currency": "USD"
      },
      "expenseId": "B4D37C35E16E904F90C182D5751D3440",
      "percentEdited": false,
      "systemAllocation": true,
      "percentage": 100
    }
  ],
  "approvedAmount": {
    "value": 100,
    "currency": "USD"
  },
  "exchangeRate": {
    "value": 1,
    "operation": "MULTIPLY"
  },
  "expenseType": {
    "id": "LODGE",
    "name": "Lodging",
    "href": "https://rqa3.api.concurasp.com/expenseconfig/v4/users/89dd7c90-6ef4-41d1-9ae8-303bad25874d/context/TRAVELER/expensetypes/LODGE"
  },
  "postedAmount": {
    "value": 100,
    "currency": "USD"
  },
  "remainingAmount": {
    "value": 100,
    "currency": "USD"
  },
  "transactionAmount": {
    "value": 100,
    "currency": "USD"
  },
  "transactionDate": "2018-04-26T00:00:00Z",
  "tripData": {
    "agencyBooked": true,
    "selfBooked": false,
    "tripType": "ONE_WAY",
    "legs": [
      {
        "endDate": "2018-04-27",
        "endLocation": {
          "id": "3E114E21BFF94BF2BCEC785C088434D3",
          "countryCode": "FR",
          "countrySubDivisionCode": "FR-75",
          "city": "Paris",
          "name": "Paris",
          "lnKey": 9715
        },
        "endLocationDetail": "essi",
        "id": "D176347809DD1A4C8806F6DFC5ACDF67",
        "returnLeg": false,
        "startDate": "2018-04-26"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_HOTEL",
      "code": "HOTEL"
    }
  }
}
```
Response code : **200**

#### PUT /v4/expenses/{expenseUuid}
<code>curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy9lOTAxNjdhMi0xMmY5LTQ0NTAtYTc1Zi0wOTkwZTNjZTgyMzIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiZTkwMTY3YTItMTJmOS00NDUwLWE3NWYtMDk5MGUzY2U4MjMyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTQwNjcxLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5MzcwNzEsImlhdCI6MTUyMjkzNzA3MSwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.HH3vB882V2h9evT1cLjrFdb9CXpLoffLq4aFX0vJdz2rVyPbl3eXklG7rA44nKjM__x68Z5bHcu0Lq6sTqOyCNmZQGhf5aiW2xDLFxbO2CLBIeCAqJVdtnSN2JVoUCl4Q9UZqJZ_NHaws-Lt_Fgfx8G4i91p8H_Ec1GXq0RrFb-o0Cwjvocy3YKROn9JswXXEuRbdSdfH2p2aeBzrbsyFnM1mVetyLieecUGVFzEB116h4FyBEyPEPYFZ_tVU-9r5pYJBo7KtAYGSrOVJNnkwhw7JUoDHN9gC_P4e7N_Dy-k6pyFFw_fMaUALQaz1IMedAcnp7sW53YCmVEgdfn-zA' -d '{
        "id": "67CFD6E5808CA8489B7BC6F8B5A5A2BB",
        "allocations": [
          {
            "allocationAmount": {
              "value": 50,
              "currency": "USD"
            },
            "approvedAmount": {
              "value": 50,
              "currency": "USD"
            },
            "allocationId": "2C4AB6D4DC002947B476191118897486",
            "postedAmount": {
              "value": 50,
              "currency": "USD"
            },
            "expenseId": "67CFD6E5808CA8489B7BC6F8B5A5A2BB",
            "percentEdited": false,
            "systemAllocation": true,
            "percentage": 100
          }
        ],
        "approvedAmount": {
          "value": 50,
          "currency": "USD"
        },
        "exchangeRate": {
          "value": 1,
          "operation": "MULTIPLY"
        },
        "expenseType": {
          "id": "LODGE",
          "name": "Lodging",
          "href": "https://rqa3.api.concurasp.com/expenseconfig/v4/users/e90167a2-12f9-4450-a75f-0990e3ce8232/context/TRAVELER/expensetypes/LODGE"
        },
        "postedAmount": {
          "value": 50,
          "currency": "USD"
        },
        "remainingAmount": {
          "value": 50,
          "currency": "USD"
        },
        "transactionAmount": {
          "value": 50,
          "currency": "USD"
        },
        "transactionDate": "2018-04-20T00:00:00Z",
        "tripData": {
          "agencyBooked": true,
          "selfBooked": false,
          "tripType": "ONE_WAY",
          "legs": [
            {
              "endDate": "2018-04-25",
              "endLocation": {
                "id": "D30619B7DFF6420FA7AA437DDC7F6ED6",
                "countryCode": "FR",
                "countrySubDivisionCode": "FR-06",
                "city": "Nice",
                "name": "Nice",
                "lnKey": 9630
              },
              "endLocationDetail": "dd",
              "endTime": "12:00",
              "id": "A9C1026EC0BA824E98EE5873137E5BD6",
              "returnLeg": false,
              "startDate": "2018-04-20",
              "startTime": "21:00"
            }
          ],
          "segmentType": {
            "category": "REQ_SEG_HOTEL",
            "code": "HOTEL"
          }
        }
      }' 'https://rqa3-raas.concurasp.com/v4/expenses/67CFD6E5808CA8489B7BC6F8B5A5A2BB'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/expenses/67CFD6E5808CA8489B7BC6F8B5A5A2BB",
  "id": "67CFD6E5808CA8489B7BC6F8B5A5A2BB",
  "allocations": [
    {
      "allocationAmount": {
        "value": 50,
        "currency": "USD"
      },
      "approvedAmount": {
        "value": 50,
        "currency": "USD"
      },
      "allocationId": "2C4AB6D4DC002947B476191118897486",
      "postedAmount": {
        "value": 50,
        "currency": "USD"
      },
      "expenseId": "67CFD6E5808CA8489B7BC6F8B5A5A2BB",
      "percentEdited": false,
      "systemAllocation": true,
      "percentage": 100
    }
  ],
  "approvedAmount": {
    "value": 50,
    "currency": "USD"
  },
  "exchangeRate": {
    "value": 1,
    "operation": "MULTIPLY"
  },
  "expenseType": {
    "id": "LODGE",
    "name": "Lodging",
    "href": "https://rqa3.api.concurasp.com/expenseconfig/v4/users/e90167a2-12f9-4450-a75f-0990e3ce8232/context/TRAVELER/expensetypes/LODGE"
  },
  "postedAmount": {
    "value": 50,
    "currency": "USD"
  },
  "remainingAmount": {
    "value": 50,
    "currency": "USD"
  },
  "transactionAmount": {
    "value": 50,
    "currency": "USD"
  },
  "transactionDate": "2018-04-20T00:00:00Z",
  "tripData": {
    "agencyBooked": true,
    "selfBooked": false,
    "tripType": "ONE_WAY",
    "legs": [
      {
        "endDate": "2018-04-25",
        "endLocation": {
          "id": "D30619B7DFF6420FA7AA437DDC7F6ED6",
          "countryCode": "FR",
          "countrySubDivisionCode": "FR-06",
          "city": "Nice",
          "name": "Nice",
          "lnKey": 9630
        },
        "endLocationDetail": "dd",
        "endTime": "12:00",
        "id": "A9C1026EC0BA824E98EE5873137E5BD6",
        "returnLeg": false,
        "startDate": "2018-04-20",
        "startTime": "21:00"
      }
    ],
    "segmentType": {
      "category": "REQ_SEG_HOTEL",
      "code": "HOTEL"
    }
  }
}
```
Response code : **200**

#### GET /v4/requests/{requestUuid}/expenses
<code>curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy84OWRkN2M5MC02ZWY0LTQxZDEtOWFlOC0zMDNiYWQyNTg3NGQiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiODlkZDdjOTAtNmVmNC00MWQxLTlhZTgtMzAzYmFkMjU4NzRkIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyODUwMjMzLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI4NDY2MzMsImlhdCI6MTUyMjg0NjYzMywiY29uY3VyLmNvbXBhbnkiOiIwNWIzYjc4Zi04OTMwLTRmMWUtOTY4MS03NDMxYzkzMmM0MDIifQ.S9trem03nqas3tJmWeI13q7Dcim_IWeWTW-S8YiQ7TkErtU1CLOgwr-XckVTz4trkteiz5XGMFc1pkNjTCGyHRYSVyWEs7GzcEoygo6Ub7cQo3S1Sk9tr0aW3eV7rHQFdUVobGs1OIbQWiHfUjrl8jEQm8aZOEMJcACJUPMPIbmxrlKr8gkNnEmLZkcBZuC96iYLkRh7y5_8NTpWe0uM8j18MCPnBwG5Kjka1aaD0tg0UAu9bFnf74EEa8OE9dRa2Y5AXZmNHQ5n0fvvoWoREL2lGLUtCFYu9NgxZpd5hHGxj4EyPzbdSg4bXEapZCgK87xclj2n1jydyXaHmxjkLA' 'https://rqa3-raas.concurasp.com/v4/requests/D5C57CBC397E2A4693DDA66337D86798/expenses'</code>
```json
[
  {
    "href": "https://rqa3-raas.concurasp.com/v4/expenses/B4D37C35E16E904F90C182D5751D3440",
    "id": "B4D37C35E16E904F90C182D5751D3440",
    "allocations": [
      {
        "allocationAmount": {
          "value": 100,
          "currency": "USD"
        },
        "approvedAmount": {
          "value": 100,
          "currency": "USD"
        },
        "allocationId": "C82B90376930AC4DB12AFD7F346C4147",
        "postedAmount": {
          "value": 100,
          "currency": "USD"
        },
        "expenseId": "B4D37C35E16E904F90C182D5751D3440",
        "percentEdited": false,
        "systemAllocation": true,
        "percentage": 100
      }
    ],
    "approvedAmount": {
      "value": 100,
      "currency": "USD"
    },
    "exchangeRate": {
      "value": 1,
      "operation": "MULTIPLY"
    },
    "expenseType": {
      "id": "LODGE",
      "name": "Lodging",
      "href": "https://rqa3.api.concurasp.com/expenseconfig/v4/users/89dd7c90-6ef4-41d1-9ae8-303bad25874d/context/TRAVELER/expensetypes/LODGE"
    },
    "postedAmount": {
      "value": 100,
      "currency": "USD"
    },
    "remainingAmount": {
      "value": 100,
      "currency": "USD"
    },
    "transactionAmount": {
      "value": 100,
      "currency": "USD"
    },
    "transactionDate": "2018-04-26T00:00:00Z",
    "tripData": {
      "agencyBooked": true,
      "selfBooked": false,
      "tripType": "ONE_WAY",
      "legs": [
        {
          "endDate": "2018-04-27",
          "endLocation": {
            "id": "3E114E21BFF94BF2BCEC785C088434D3",
            "countryCode": "FR",
            "countrySubDivisionCode": "FR-75",
            "city": "Paris",
            "name": "Paris",
            "lnKey": 9715
          },
          "endLocationDetail": "essi",
          "id": "D176347809DD1A4C8806F6DFC5ACDF67",
          "returnLeg": false,
          "startDate": "2018-04-26"
        }
      ],
      "segmentType": {
        "category": "REQ_SEG_HOTEL",
        "code": "HOTEL"
      }
    }
  }
]
```
Response code : **200**


#### POST /v4/requests/{requestUuid}/expenses
<code>curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy84OWRkN2M5MC02ZWY0LTQxZDEtOWFlOC0zMDNiYWQyNTg3NGQiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiODlkZDdjOTAtNmVmNC00MWQxLTlhZTgtMzAzYmFkMjU4NzRkIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyODU1NjM3LCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI4NTIwMzcsImlhdCI6MTUyMjg1MjAzNywiY29uY3VyLmNvbXBhbnkiOiIwNWIzYjc4Zi04OTMwLTRmMWUtOTY4MS03NDMxYzkzMmM0MDIifQ.P1OHS4QYgFMSCGIojLox3bxezRyg1MYWwwwbZ7Q9EWYx9XhKNrR7QUyOMyn1o-iW78SliSYrIFtpXnWOKbLYrhkZojlgyEIEM8ENX3suSii876W9DAmvJtM9q98UglUCN4mBa96WjE1-VXWghP4yW0WG9tLc5IZg0WLCOIxBrUY4qmAVu4dUijAvWpkg-YUiP0nn2o4rx-cfWZvxql0OIQyPMLtue7Tyb96pER8u5MJfgpWSnuZOsDUU3youJa4RzB8xILAO4Q9IFVFfPrq43S80oo4YwmSquFVTTTngZL82d08d9HhjheXu2t_Cude-YOUABNYeAb7yJVyu9JMx8g' -d '{
      }' 'https://rqa3-raas.concurasp.com/v4/requests/D5C57CBC397E2A4693DDA66337D86798/expenses'</code>
```json
TODO
```
Response code : **200**


<a name="request-resource"></a>
### request-resource
<i>Manage documents used for pre-spend authorizations within Concur Request</i><br />


#### GET /v4/requests
<code>curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy84OWRkN2M5MC02ZWY0LTQxZDEtOWFlOC0zMDNiYWQyNTg3NGQiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiODlkZDdjOTAtNmVmNC00MWQxLTlhZTgtMzAzYmFkMjU4NzRkIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyODUwMjMzLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI4NDY2MzMsImlhdCI6MTUyMjg0NjYzMywiY29uY3VyLmNvbXBhbnkiOiIwNWIzYjc4Zi04OTMwLTRmMWUtOTY4MS03NDMxYzkzMmM0MDIifQ.S9trem03nqas3tJmWeI13q7Dcim_IWeWTW-S8YiQ7TkErtU1CLOgwr-XckVTz4trkteiz5XGMFc1pkNjTCGyHRYSVyWEs7GzcEoygo6Ub7cQo3S1Sk9tr0aW3eV7rHQFdUVobGs1OIbQWiHfUjrl8jEQm8aZOEMJcACJUPMPIbmxrlKr8gkNnEmLZkcBZuC96iYLkRh7y5_8NTpWe0uM8j18MCPnBwG5Kjka1aaD0tg0UAu9bFnf74EEa8OE9dRa2Y5AXZmNHQ5n0fvvoWoREL2lGLUtCFYu9NgxZpd5hHGxj4EyPzbdSg4bXEapZCgK87xclj2n1jydyXaHmxjkLA' 'https://rqa3-raas.concurasp.com/v4/requests'</code>
```json
{
  "data": [
    {
      "href": "https://rqa3-raas.concurasp.com/v4/requests/D5C57CBC397E2A4693DDA66337D86798",
      "id": "D5C57CBC397E2A4693DDA66337D86798",
      "approvalStatus": {
        "code": "NOT_SUBMITTED",
        "name": "Not Submitted"
      },
      "approved": false,
      "businessPurpose": "essai",
      "canceledPostApproval": false,
      "closed": false,
      "creationDate": "2018-04-04T13:05:41Z",
      "everSentBack": false,
      "expenses": [],
      "name": "test expected expense",
      "pendingApproval": false,
      "requestId": "3334",
      "totalApprovedAmount": {
        "value": 100,
        "currency": "USD"
      },
      "totalPostedAmount": {
        "value": 100,
        "currency": "USD"
      },
      "totalRemainingAmount": {
        "value": 100,
        "currency": "USD"
      }
    }
  ],
  "operations": []
}
```
Response code : **200**

#### POST /v4/requests
<code>curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy8wZTE0ODg2ZC02YWJiLTQ0ZDgtYmQzOC1jNGU4MTBiN2JkMDIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiMGUxNDg4NmQtNmFiYi00NGQ4LWJkMzgtYzRlODEwYjdiZDAyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTMzNTU5LCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5Mjk5NTksImlhdCI6MTUyMjkyOTk1OSwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.Z6F5eF5iBZYKQZOd8AuAJFKUEpXIOGSl3rYyu0yuJMtubaGIce63omWouLNAaXk7k3QOIEBlRyDeeIGM_-Qvc9w7tD_q7mQ7BhvRWKK7iS7ip5sOKJD5ZMT1702kcDj4MCZ9mmOokbk11RIXbOQy_ucSTIHNMa648lkZOu6yssw8FtinwynIEKbKDIyZ_GHeBZJikYFZwi4gyMD_WjNmW5NCIHtQrDRqNwuhost63_ouCd0iZ91V3uwKZ7Zc4TsQSbvJ_Lp_NvF9DFtaf8p1V4NMSwBdigajF6m0l7hVyWAQrzIoN0OpyGUknLxyGfFYsAsc4xoaFjsF9XkBQrIBXw' -d '{
             "businessPurpose": "essai2",
            "expenses": [],
            "name": "test request 2"
          }
        ],
        "operations": []
      }' 'https://rqa3-raas.concurasp.com/v4/requests'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/requests/636DDB60C45E1F429FFCB1655371CD45",
  "id": "636DDB60C45E1F429FFCB1655371CD45",
  "approvalStatus": {
    "code": "NOT_SUBMITTED",
    "name": "Not Submitted"
  },
  "approved": false,
  "businessPurpose": "essai2",
  "canceledPostApproval": false,
  "closed": false,
  "creationDate": "2018-04-05T12:11:52Z",
  "everSentBack": false,
  "expenses": [],
  "lastModified": "2018-04-05T12:11:52Z",
  "name": "test request 2",
  "owner": {
    "href": "https://rqa3.api.concurasp.com/profile/v1/users/0e14886d-6abb-44d8-bd38-c4e810b7bd02",
    "id": "0e14886d-6abb-44d8-bd38-c4e810b7bd02",
    "template": "https://rqa3.api.concurasp.com/profile/v1/users/{id}"
  },
  "pendingApproval": false,
  "policy": {
    "id": "F4C8BD31CA9D4D6292795BE687EB9B2A"
  },
  "requestId": "3336",
  "totalApprovedAmount": {
    "value": 0,
    "currency": "USD"
  },
  "totalPostedAmount": {
    "value": 0,
    "currency": "USD"
  },
  "totalRemainingAmount": {
    "value": 0,
    "currency": "USD"
  },
  "operations": [
    {
      "rel": "submit",
      "href": "https://rqa3-raas.concurasp.com/v4/requests/636DDB60C45E1F429FFCB1655371CD45/submit"
    }
  ]
}
```
Response code : **200**

#### DELETE /v4/requests/{requestUuid}
<code>curl -X DELETE --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy9lOTAxNjdhMi0xMmY5LTQ0NTAtYTc1Zi0wOTkwZTNjZTgyMzIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiZTkwMTY3YTItMTJmOS00NDUwLWE3NWYtMDk5MGUzY2U4MjMyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTM2MDIwLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5MzI0MjAsImlhdCI6MTUyMjkzMjQyMCwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.YhFKmHoslr0YjsNFJpy8KHigCxYxJRZAjJerOBkKOLIqmrocCHBD7IxFf7oMZVjSn_COQA5lFT9PuTL_XHma4GudKBOHHywuTSbMBeO7DiG-wrPjC4SGsjvGM--JdJdpBbpRys2qscn-VfTby3kVx9m1iqlr7WlMRwmpx9JgN5X5AeJLg-cNnQy7PJSG47EwLbOLgsm2bZwb3Cbjwea_-xFMPS1mREdLA0ZLSBc8PDvQnv4QWkxzZ0tdhYoHqxa1YdGWWh1u1V3KdcHlHZ2Y0gcnXaeD_EzaE3SNMEg8bBINrQ0IMiBQlYHcm5wSuyy1kCpSi3pJ-KVGDua3z2tMdA' 'https://rqa3-raas.concurasp.com/v4/requests/DCD010D83598C346AF9079F8E9555B37'</code>
```json
true
```
Response code : **200**

#### GET /v4/requests/{requestUuid}
<code>curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy8wZTE0ODg2ZC02YWJiLTQ0ZDgtYmQzOC1jNGU4MTBiN2JkMDIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiMGUxNDg4NmQtNmFiYi00NGQ4LWJkMzgtYzRlODEwYjdiZDAyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTMzNTU5LCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5Mjk5NTksImlhdCI6MTUyMjkyOTk1OSwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.Z6F5eF5iBZYKQZOd8AuAJFKUEpXIOGSl3rYyu0yuJMtubaGIce63omWouLNAaXk7k3QOIEBlRyDeeIGM_-Qvc9w7tD_q7mQ7BhvRWKK7iS7ip5sOKJD5ZMT1702kcDj4MCZ9mmOokbk11RIXbOQy_ucSTIHNMa648lkZOu6yssw8FtinwynIEKbKDIyZ_GHeBZJikYFZwi4gyMD_WjNmW5NCIHtQrDRqNwuhost63_ouCd0iZ91V3uwKZ7Zc4TsQSbvJ_Lp_NvF9DFtaf8p1V4NMSwBdigajF6m0l7hVyWAQrzIoN0OpyGUknLxyGfFYsAsc4xoaFjsF9XkBQrIBXw' 'https://rqa3-raas.concurasp.com/v4/requests/0A611A545EA456409EB6DC48CBFC2539'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/requests/0A611A545EA456409EB6DC48CBFC2539",
  "id": "0A611A545EA456409EB6DC48CBFC2539",
  "approvalStatus": {
    "code": "NOT_SUBMITTED",
    "name": "Not Submitted"
  },
  "approved": false,
  "businessPurpose": "essai",
  "canceledPostApproval": false,
  "closed": false,
  "creationDate": "2018-04-05T12:07:09Z",
  "everSentBack": false,
  "expenses": [
    {
      "href": "https://rqa3-raas.concurasp.com/v4/expenses/E5783FF07CE905479BC799B75911649A",
      "id": "E5783FF07CE905479BC799B75911649A",
      "template": "https://rqa3-raas.concurasp.com/v4/expenses/{id}"
    }
  ],
  "lastModified": "2018-04-05T12:07:35Z",
  "name": "test request 1",
  "owner": {
    "href": "https://rqa3.api.concurasp.com/profile/v1/users/0e14886d-6abb-44d8-bd38-c4e810b7bd02",
    "id": "0e14886d-6abb-44d8-bd38-c4e810b7bd02",
    "template": "https://rqa3.api.concurasp.com/profile/v1/users/{id}"
  },
  "pendingApproval": false,
  "policy": {
    "id": "F4C8BD31CA9D4D6292795BE687EB9B2A"
  },
  "requestId": "3334",
  "totalApprovedAmount": {
    "value": 150,
    "currency": "USD"
  },
  "totalPostedAmount": {
    "value": 150,
    "currency": "USD"
  },
  "totalRemainingAmount": {
    "value": 150,
    "currency": "USD"
  },
  "operations": [
    {
      "rel": "submit",
      "href": "https://rqa3-raas.concurasp.com/v4/requests/0A611A545EA456409EB6DC48CBFC2539/submit"
    }
  ]
}
```
Response code : **200**

#### PUT /v4/requests/{requestUuid}
<code>curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy8wZTE0ODg2ZC02YWJiLTQ0ZDgtYmQzOC1jNGU4MTBiN2JkMDIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiMGUxNDg4NmQtNmFiYi00NGQ4LWJkMzgtYzRlODEwYjdiZDAyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTMzNTU5LCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5Mjk5NTksImlhdCI6MTUyMjkyOTk1OSwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.Z6F5eF5iBZYKQZOd8AuAJFKUEpXIOGSl3rYyu0yuJMtubaGIce63omWouLNAaXk7k3QOIEBlRyDeeIGM_-Qvc9w7tD_q7mQ7BhvRWKK7iS7ip5sOKJD5ZMT1702kcDj4MCZ9mmOokbk11RIXbOQy_ucSTIHNMa648lkZOu6yssw8FtinwynIEKbKDIyZ_GHeBZJikYFZwi4gyMD_WjNmW5NCIHtQrDRqNwuhost63_ouCd0iZ91V3uwKZ7Zc4TsQSbvJ_Lp_NvF9DFtaf8p1V4NMSwBdigajF6m0l7hVyWAQrzIoN0OpyGUknLxyGfFYsAsc4xoaFjsF9XkBQrIBXw' -d '{
      requestId:"3334",
        "businessPurpose": "essai2",
        "name": "test request 1 update",
      "policy": {
          "id": "F4C8BD31CA9D4D6292795BE687EB9B2A"
        },
      Amount: {
      currency: "USD",
      value: 100
      }

      }' 'https://rqa3-raas.concurasp.com/v4/requests/0A611A545EA456409EB6DC48CBFC2539'</code>
```json
TODO
```
Response code : **200**

#### POST /v4/requests/{requestUuid}/reports
<code>curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy9lOTAxNjdhMi0xMmY5LTQ0NTAtYTc1Zi0wOTkwZTNjZTgyMzIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiZTkwMTY3YTItMTJmOS00NDUwLWE3NWYtMDk5MGUzY2U4MjMyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTM2MDIwLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5MzI0MjAsImlhdCI6MTUyMjkzMjQyMCwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.YhFKmHoslr0YjsNFJpy8KHigCxYxJRZAjJerOBkKOLIqmrocCHBD7IxFf7oMZVjSn_COQA5lFT9PuTL_XHma4GudKBOHHywuTSbMBeO7DiG-wrPjC4SGsjvGM--JdJdpBbpRys2qscn-VfTby3kVx9m1iqlr7WlMRwmpx9JgN5X5AeJLg-cNnQy7PJSG47EwLbOLgsm2bZwb3Cbjwea_-xFMPS1mREdLA0ZLSBc8PDvQnv4QWkxzZ0tdhYoHqxa1YdGWWh1u1V3KdcHlHZ2Y0gcnXaeD_EzaE3SNMEg8bBINrQ0IMiBQlYHcm5wSuyy1kCpSi3pJ-KVGDua3z2tMdA' 'https://rqa3-raas.concurasp.com/v4/requests/19148EE9411DF9459F6AEBBCA53BD646/reports'</code>
```json
{
  "href": "https://rqa3.api.concurasp.com/expensereports/v4/users/e90167a2-12f9-4450-a75f-0990e3ce8232/context/TRAVELER/reports/08B7B58B045641509EFE",
  "id": "08B7B58B045641509EFE",
  "template": "https://rqa3.api.concurasp.com/expensereports/v4/users/e90167a2-12f9-4450-a75f-0990e3ce8232/context/TRAVELER/reports/{id}"
}
```
Response code : **200**


<a name="travel-agency-resource"></a>
### travel-agency-resource
<i>Manage the configuration for travel agencies integrated with Concur Request</i><br />

#### GET /v4/travelagencies/{agencyUuid}
<code>curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy9lOTAxNjdhMi0xMmY5LTQ0NTAtYTc1Zi0wOTkwZTNjZTgyMzIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiZTkwMTY3YTItMTJmOS00NDUwLWE3NWYtMDk5MGUzY2U4MjMyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTM2MDIwLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5MzI0MjAsImlhdCI6MTUyMjkzMjQyMCwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.YhFKmHoslr0YjsNFJpy8KHigCxYxJRZAjJerOBkKOLIqmrocCHBD7IxFf7oMZVjSn_COQA5lFT9PuTL_XHma4GudKBOHHywuTSbMBeO7DiG-wrPjC4SGsjvGM--JdJdpBbpRys2qscn-VfTby3kVx9m1iqlr7WlMRwmpx9JgN5X5AeJLg-cNnQy7PJSG47EwLbOLgsm2bZwb3Cbjwea_-xFMPS1mREdLA0ZLSBc8PDvQnv4QWkxzZ0tdhYoHqxa1YdGWWh1u1V3KdcHlHZ2Y0gcnXaeD_EzaE3SNMEg8bBINrQ0IMiBQlYHcm5wSuyy1kCpSi3pJ-KVGDua3z2tMdA' 'https://rqa3-raas.concurasp.com/v4/travelagencies/86B720AF168F1C4CA52E37AC710E897B'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/travelagencies/86B720AF168F1C4CA52E37AC710E897B",
  "id": "86B720AF168F1C4CA52E37AC710E897B",
  "emailAddress": "dd@ff.com",
  "name": "myAgency"
}
```
Response code : **200**



<a name="workflow-resource"></a>
### workflow-resource
<i>Manage workflow transitions for a Request document</i><br />

#### POST /v4/requests/{requestUuid}/{action}
<code>curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbInRyYXZlbHJlcXVlc3Qud3JpdGUiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tL3Byb2ZpbGUvdjEvcHJpbmNpcGFscy9lOTAxNjdhMi0xMmY5LTQ0NTAtYTc1Zi0wOTkwZTNjZTgyMzIiLCJjb25jdXIudmVyc2lvbiI6MywiY29uY3VyLnR5cGUiOiJ1c2VyIiwiY29uY3VyLmFwcCI6Imh0dHBzOi8vcnFhMy5hcGkuY29uY3VyYXNwLmNvbS9wcm9maWxlL3YxL2FwcHMvNzhjMzg4MWMtM2I2NS00YjgxLWE0YzAtNjI0ZDQxZDBjZmNlIiwic3ViIjoiZTkwMTY3YTItMTJmOS00NDUwLWE3NWYtMDk5MGUzY2U4MjMyIiwiaXNzIjoiaHR0cHM6Ly9ycWEzLmFwaS5jb25jdXJhc3AuY29tIiwiZXhwIjoxNTIyOTM2MDIwLCJjb25jdXIuYXBwSWQiOiI3OGMzODgxYy0zYjY1LTRiODEtYTRjMC02MjRkNDFkMGNmY2UiLCJuYmYiOjE1MjI5MzI0MjAsImlhdCI6MTUyMjkzMjQyMCwiY29uY3VyLmNvbXBhbnkiOiIyN2RkY2NiMC05YTY3LTQ2NDktYTQzNS04YWIwYWExY2VmNjUifQ.YhFKmHoslr0YjsNFJpy8KHigCxYxJRZAjJerOBkKOLIqmrocCHBD7IxFf7oMZVjSn_COQA5lFT9PuTL_XHma4GudKBOHHywuTSbMBeO7DiG-wrPjC4SGsjvGM--JdJdpBbpRys2qscn-VfTby3kVx9m1iqlr7WlMRwmpx9JgN5X5AeJLg-cNnQy7PJSG47EwLbOLgsm2bZwb3Cbjwea_-xFMPS1mREdLA0ZLSBc8PDvQnv4QWkxzZ0tdhYoHqxa1YdGWWh1u1V3KdcHlHZ2Y0gcnXaeD_EzaE3SNMEg8bBINrQ0IMiBQlYHcm5wSuyy1kCpSi3pJ-KVGDua3z2tMdA' 'https://rqa3-raas.concurasp.com/v4/requests/B9A2A99BAA4FC441A2D61DB637BAF0ED/submit'</code>
```json
{
  "href": "https://rqa3-raas.concurasp.com/v4/requests/B9A2A99BAA4FC441A2D61DB637BAF0ED",
  "id": "B9A2A99BAA4FC441A2D61DB637BAF0ED",
  "approvalStatus": {
    "code": "SUBMITTED",
    "name": "Submitted & Pending Approval"
  },
  "approved": false,
  "businessPurpose": "ddd",
  "canceledPostApproval": false,
  "closed": false,
  "creationDate": "2018-04-05T13:03:52Z",
  "everSentBack": false,
  "expenses": [
    {
      "href": "https://rqa3-raas.concurasp.com/v4/expenses/FA7F74D09D1BEB4BAE387A1F83EFF3AA",
      "id": "FA7F74D09D1BEB4BAE387A1F83EFF3AA",
      "template": "https://rqa3-raas.concurasp.com/v4/expenses/{id}"
    }
  ],
  "lastModified": "2018-04-05T13:12:36Z",
  "name": "test agence",
  "owner": {
    "href": "https://rqa3.api.concurasp.com/profile/v1/users/e90167a2-12f9-4450-a75f-0990e3ce8232",
    "id": "e90167a2-12f9-4450-a75f-0990e3ce8232",
    "template": "https://rqa3.api.concurasp.com/profile/v1/users/{id}"
  },
  "pendingApproval": true,
  "policy": {
    "id": "F4C8BD31CA9D4D6292795BE687EB9B2A"
  },
  "requestId": "333C",
  "submitDate": "2018-04-05T13:12:35Z",
  "totalApprovedAmount": {
    "value": 100,
    "currency": "USD"
  },
  "totalPostedAmount": {
    "value": 100,
    "currency": "USD"
  },
  "totalRemainingAmount": {
    "value": 100,
    "currency": "USD"
  },
  "travelAgency": {
    "href": "https://rqa3-raas.concurasp.com/v4/travelagencies/86B720AF168F1C4CA52E37AC710E897B",
    "id": "86B720AF168F1C4CA52E37AC710E897B",
    "template": "https://rqa3-raas.concurasp.com/v4/travelagencies/{id}"
  }
}
```
Response code : **200**
