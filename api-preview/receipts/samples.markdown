---
title: Sample Receipts
layout: reference
---
Below we have provided samples for [Hotel](#Hotel), [Ground Transport](#GroundTransport), [Air](#Air), [Rail](#Rail) and [General](#General) receipts that can be created using the V4 API. A receipt image is automatically generated using appropriate brand logo if only receipt data is posted. As a partner, if you would like your brand logo to show up on the receipt image, email pdspe@concur.com.  

### <a name="Hotel">Hotel

####  Request URL
```
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} 
-d @hotel-receipt-example.json -H "Content-Type: application/json" 
-H "link:<http://schema.concursolutions.com/hotel-receipt.schema.json>;rel=describedBy" 
-H "Authorization: Bearer {valid JWT}"
```

#### Request body

```
{
    "user": "http://api.concursolutions.com/user/123456",
    "app": "http://api.concursolutions.com/app/receiptServiceTest",
    "taxInvoice": true,
    "reference": "6343430",
    "dateTime": "2015-04-27T11:09:00-0700",
    "total": "749.95",
    "subtotal": "652.67",
    "taxesTotal": "97.28",
    "currencyCode": "CAD",
    "seller": {
        "name": "Starwood",
        "taxId": "820986396",
        "location": {
            "name": "Starwood Hotels & Resorts Worldwide, Inc",
            "number": "",
            "latitude": 41.042297,
            "longitude": -73.531531,
            "internetAddress": "http://www.starwoodhotels.com/",
            "emailAddress": "",
            "telephoneNumber": "203-964-6000",
            "faxNumber": "",
            "address": {
                "streetAddress": "One StarPoint",
                "addressLocality": "Stamford",
                "addressRegion": "CT",
                "addressCountry": "US",
                "postalCode": "06902"
            }
        }
    },
    "taxes": [
        {
            "authority": {
                "addressCountry": "CA"
            },
            "name": "Hotel Room Tax",
            "rate": 11.00,
            "amount": "66.88"
        },
        {
            "authority": {
                "addressCountry": "CA"
            },
            "name": "GST",
            "rateType": "Standard",
            "rate": 5.00,
            "amount": "30.4"
        }
    ],
    "payments": [
        {
            "amount": "749.95",
            "cardDetail": {
                "cardType": "American Express",
                "creditCardId": "1002",
                "authorizationCode": "548283"
            }
        }
    ],
    "property": {
        "name": "Westin",
        "description": "",
        "location": {
            "name": "Westin Grand Vancouver",
            "number": "",
            "latitude": 49.280011,
            "longitude": -123.117024,
            "internetAddress": "",
            "emailAddress": "",
            "telephoneNumber": "604-602-1999",
            "faxNumber": "604-647-2502",
            "address": {
                "streetAddress": "433 Robson Street",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "addressCountry": "CA",
                "postalCode": "v6b 6l9"
            }
        }
    },
    "checkInDateTime": "2016-04-25T21:11:00-0700",
    "checkOutDateTime": "2016-04-27T11:09:00-0700",
    "guests": [
        {
            "guestNameRecord": "SPG-Axxxxxxx1899",
            "firstName": "Kevin",
            "lastName": "Craig",
            "address": {
                "streetAddress": "4120 Yonge Street",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA",
                "postalCode": "M2P 2B8"
            }
        }
    ],
    "numberInParty": 1,
    "room": {
        "roomNumber": "1601",
        "averageDailyRoomRate": "304.00"
    },
    "nightsStayed": 2,
    "lineItems": [
        {
            "sequenceNumber": 1,
            "dateTime": "2016-04-25T18:00:00-0700",
            "reference": "RT1601",
            "description": "Room Chrg Retail",
            "semanticsCode": "ROOMRATE",
            "quantity": 1,
            "total": "304.00",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "CA"
                    },
                    "name": "Hotel Room Tax",
                    "rate": 11.00,
                    "amount": "33.44"
                },
                {
                    "authority": {
                        "addressCountry": "CA"
                    },
                    "name": "GST",
                    "rateType": "Standard",
                    "rate": 5.00,
                    "amount": "15.20"
                }
            ]
        },
        {
            "sequenceNumber": 2,
            "dateTime": "2016-04-25T18:00:00-0700",
            "reference": "RT1601",
            "description": "Destination Marketing Fee",
            "semanticsCode": "FEE",
            "quantity": 1,
            "total": "4.56"
        },
        {
            "sequenceNumber": 3,
            "dateTime": "2016-04-26T18:00:00-0700",
            "reference": "4071",
            "description": "Hidden Bar and Lounge",
            "semanticsCode": "MINIBAR",
            "quantity": 1,
            "total": "31.55"
        },
        {
            "sequenceNumber": 4,
            "dateTime": "2016-04-26T18:00:00-0700",
            "reference": "RT1601",
            "description": "Room Chrg Retail",
            "semanticsCode": "ROOMRATE",
            "quantity": 1,
            "total": "304.00",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "CA"
                    },
                    "name": "Hotel Room Tax",
                    "rate": 11.00,
                    "amount": "33.44"
                },
                {
                    "authority": {
                        "addressCountry": "CA"
                    },
                    "name": "GST",
                    "rateType": "Standard",
                    "rate": 5.00,
                    "amount": "15.20"
                }
            ]
        },
        {
            "sequenceNumber": 5,
            "dateTime": "2016-04-26T18:00:00-0700",
            "reference": "RT1601",
            "description": "Destination Marketing Fee",
            "semanticsCode": "FEE",
            "quantity": 1,
            "total": "4.56"
        }
    ]
}

```

####  Receipt image generated

![Hotel Receipt Example](https://github.com/concur/developer.concur.com/blob/preview/api-preview/receipts/hotel-vat.png?raw=true)

### <a name="GroundTransport"></a>Ground Transport

####  Request URL
```
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} 
-d @groundtransport-receipt-example.json -H "Content-Type: application/json" 
-H "link:<http://schema.concursolutions.com/groundtransport-receipt.schema.json>;rel=describedBy" 
-H "Authorization: Bearer {valid JWT}"
```

#### Request body
```
{
    "user": "http://api.concursolutions.com/user/123456",
    "app": "http://api.concursolutions.com/app/receiptServiceTest",
    "taxInvoice": true,
    "reference": "ADBXTF25",
    "dateTime": "2099-11-10T15:39:46-0700",
    "total": "65.00",
    "taxesTotal": "5.69",
    "subtotal": "59.87",
    "currencyCode": "USD",
    "broker": {
        "name": "Curb",
        "description": "Curb Seattle",
        "taxId": "123-123456",
        "location": {
            "address": {
                "streetAddress": "510 4th Ave Ste 2500",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US",
                "postalCode": "98104"
            }
        }
    },
    "seller": {
        "name": "John Smith",
        "location": {
            "address": {
                "streetAddress": "225 42nd Ave S",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US",
                "postalCode": "98103"
            },
            "telephoneNumber": "206-555-5555"
        }
    },
    "taxes": [
        {
            "authority": {
                "addressCountry": "US",
                "addressRegion": "WA"
            },
            "name": "Local Sales Tax",
            "rate": 9.50,
            "amount": "5.69"
        }
    ],
    "payments": [
        {
            "amount": "65.00",
            "cardDetail": {
                "cardType": "Visa",
                "creditCardId": "4321",
                "authorizationCode": "AB123654789"
            }
        }
    ],
    "startDateTime": "2014-11-10T15:08:24-0700",
    "endDateTime": "2014-11-10T15:39:46-0700",
    "travelDuration": "PT21M22S",
    "pickupLocation": {
        "name": "Key Center Building, Bellevue, WA",
        "latitude": 47.4436655,
        "longitude": -122.2982266,
        "address": {
            "addressCountry": "US"
        }
    },
    "dropoffLocation": {
        "name": "Seattle-Tacoma International Airport, SeaTac, WA",
        "latitude": 47.4489,
        "longitude": -122.3094,
        "address": {
            "addressCountry": "US"
        }
    },
    "distance": {
        "totalDistance": 15.6,
        "unit": "mi"
    },
    "driverNumber": "DFE154-8567",
    "lineItems": [
        {
            "sequenceNumber": 1,
            "reference": "",
            "description": "Base Fare",
            "additionalDescription": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "total": "6.39",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "US",
                        "addressRegion": "WA"
                    },
                    "name": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "0.61"
                }
            ]
        },
        {
            "sequenceNumber": 2,
            "reference": "",
            "description": "Distance",
            "additionalDescription": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "total": "49.32",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "US",
                        "addressRegion": "WA"
                    },
                    "name": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "4.68"
                }
            ]
        },
        {
            "sequenceNumber": 3,
            "reference": "",
            "description": "Time",
            "additionalDescription": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "total": "4.16",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "US",
                        "addressRegion": "WA"
                    },
                    "name": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "0.40"
                }
            ]
        },
        {
            "sequenceNumber": 4,
            "reference": "",
            "description": "Rounding Down",
            "additionalDescription": "",
            "semanticsCode": "DISCOUNT",
            "quantity": 1,
            "total": "-0.56"
        }
    ]
}
```

####  Receipt image generated

![Ground Transport Receipt Example](https://github.com/concur/developer.concur.com/blob/preview/api-preview/receipts/ground-transport-curb.png?raw=true)

### <a name="Air"></a>Air

####  Request URL

#### Request body

####  Receipt image generated

### <a name="Rail"></a>Rail

####  Request URL
```
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} 
-d @rail-receipt-example.json -H "Content-Type: application/json" 
-H "link:<http://schema.concursolutions.com/rail.schema.json>;rel=describedBy" 
-H "Authorization: Bearer {valid JWT}"
```

#### Request body

```
{
    "user": "http://api.concursolutions.com/user/123456",
    "app": "http://api.concursolutions.com/app/receiptServiceTest",
    "taxInvoice": true,
    "reference": "VDFG4567",
    "dateTime": "2099-11-10T16:04:49-0700",
    "total": "394.00",
    "subtotal": "394.00",
    "taxesTotal": "0.00",
    "currencyCode": "GBP",
    "itineraryLocator": "DSFJKLT4967",
    "seller": {
        "name": "Voyages-sncf",
        "description": "",
        "taxId": "321-654321",
        "location": {
            "name": "Headquarters",
            "number": "",
            "latitude": 41.8819,
            "longitude": -87.6278,
            "internetAddress": "http://www.voyages-sncf.com",
            "emailAddress": "info@uk.voyages-sncf.com",
            "telephoneNumber": "0330 822 0333",
            "address": {
                "streetAddress": "34 Tower View",
                "addressLocality": "Kings Hill, WEST MALLING",
                "addressCountry": "GB",
                "postalCode": "ME19 4ED"
            }
        }
    },
    "payments": [
        {
            "amount": "394.00",
            "cardDetail": {
                "cardType": "American Express",
                "creditCardId": "4002"
            }
        }
    ],
    "railTickets": [
        {
            "ticketNumber": "C123456",
            "recordLocator": "AZT222XFT9",
            "issueDateTime": "2015-04-30T12:37:55-0700",
            "passengerName": "John Doe",
            "fare": "197.00",
            "segments": [
                {
                    "departureStation": "Paris Est",
                    "departureDateTime": "2015-11-25T10:00:00-0700",
                    "arrivalStation": "Frankfurt Main HBF",
                    "arrivalDateTime": "2015-11-26T12:00:00+0900",
                    "trainNumber": "9557",
                    "trainType": "TGV",
                    "classOfServiceCode": "First Class",
                    "fare": "98.50"
                },
                {
                    "departureStation": "Frankfurt Main HBF",
                    "departureDateTime": "2015-11-27T10:00:00-0700",
                    "arrivalStation": "Paris Est",
                    "arrivalDateTime": "2015-11-28T12:00:00+0900",
                    "trainNumber": "9558",
                    "trainType": "TGV",
                    "classOfServiceCode": "First Class",
                    "fare": "98.50"
                }
            ]
        },
        {
            "ticketNumber": "C123457",
            "recordLocator": "AZT222XFT9",
            "issueDateTime": "2015-04-30T12:37:55-0700",
            "passengerName": "Jane Doe",
            "fare": "197.00",
            "segments": [
                {
                    "departureStation": "Paris Est",
                    "departureDateTime": "2015-11-25T10:00:00-0700",
                    "arrivalStation": "Frankfurt Main HBF",
                    "arrivalDateTime": "2015-11-26T12:00:00+0900",
                    "trainNumber": "9557",
                    "trainType": "TGV",
                    "classOfServiceCode": "First Class",
                    "fare": "98.50"
                },
                {
                    "departureStation": "Frankfurt Main HBF",
                    "departureDateTime": "2015-11-27T10:00:00-0700",
                    "arrivalStation": "Paris Est",
                    "arrivalDateTime": "2015-11-28T12:00:00+0900",
                    "trainNumber": "9558",
                    "trainType": "TGV",
                    "classOfServiceCode": "First Class",
                    "fare": "98.50"
                }
            ]
        }
    ],
    "lineItems": [
        {
            "sequenceNumber": 1,
            "semanticsCode": "FEE",
            "description": "Credit Card Fee",
            "dateTime": "2015-11-10T16:04:49-0700",
            "subtotal": "4.92",
            "total": "4.92"
        }
    ]
}
```

####  Receipt image generated

![Rail Receipt Example](https://github.com/concur/developer.concur.com/blob/preview/api-preview/receipts/rail-multiple-tickets.png?raw=true)

### <a name="General"></a>General

####  Request URL

#### Request body

####  Receipt image generated


