---
title: Sample Receipts
layout: reference
---

# Receipts

## Sample Receipts

Below we have sample receipt data and the corresponding receipt image for the Air, [Car Rental](#car-rental), General, Ground Transport, Hotel and Rail receipt types. 

### Car Rental 

#### Receipt Data

```
{
    "taxInvoice": true,
    "reference": "ABCD1234",
    "dateTime": "2016-09-29T15:05:00-0800",
    "total": "112.71",
    "taxesTotal": "8.27",
    "subtotal": "104.44",
    "currencyCode": "USD",
    "seller": {
        "name": "ACME Corporation",
        "description": "",
        "taxId": "123-21213",
        "location": {
            "name": "SNA Airport",
            "number": "SNA34393",
            "latitude": 47.616667,
            "longitude": -122.333333,
            "internetAddress": "https://www.acmecorporation.com",
            "emailAddress": "sna_airport@acmecorporation.com",
            "telephoneNumber": "123-456-7890",
            "faxNumber": "",
            "address": {
                "streetAddress": "1 Airport Way",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US",
                "postalCode": "90001"
            }
        }
    },
    "taxes": [
        {
            "authority": {
                "addressCountry": "US",
                "addressRegion": "WA"
            },
            "name": "Local Sales Tax",
            "rate": 8.80,
            "amount": "8.27"
        }
    ],
    "payments": [
        {
            "amount": "112.71",
            "cardDetail": {
                "cardType": "American Express",
                "creditCardId": "1009",
                "authorizationCode": "AB987654321"
            }
        }
    ],
    "startDateTime": "2014-11-05T15:05:00-0800",
    "endDateTime": "2014-11-07T15:05:00-0800",
    "rentalDays": 2,
    "discounts": [{
        "discountCode": "NO-IRS",
        "discountName": "The Family of the King shall pay less",
        "discountRate": "Per Mile"
    }
    ],
    "rentalAgreementNumber": "570344843",
    "confirmationNumber": "",
    "vehicle": {
        "registrationNumber": "",
        "description": "KIA SORENTO 2WD",
        "classReservedCode": "IDAR",
        "classRentedCode": "IDAR",
        "classChargedCode": "IDAR",
        "engineSize": "2000",
        "fuelType": "Petrol"
    },
    "distance": {
        "totalDistance": 345.6,
        "unit": "mi"
    },
    "odometerReadingOut": 31548,
    "odometerReadingIn": 31893,
    "additionalDriver": false,
    "pickupLocation": {
        "name": "House of Stark",
        "address": {
            "streetAddress": "1 Wolf Road",
            "addressLocality": "Winterfell",
            "addressCountry": "GB"
        }
    },
    "dropoffLocation": {
        "name": "The Iron Throne",
        "address": {
            "streetAddress": "42 Shadowblack Lane",
            "addressLocality": "King's Landing",
            "addressCountry": "GB"
        }
    },
    "lineItems": [
        {
            "sequenceNumber": 1,
            "reference": "",
            "description": "2 DY@ 47.00",
            "additionalDescription": "",
            "semanticsCode": "DAYS",
            "quantity": 1,
            "total": "94.00",
            "taxes": [
                {
                    "authority": {
                        "addressCountry": "US",
                        "addressRegion": "CA"
                    },
                    "name": "Local Sales Tax",
                    "rate": 8.80,
                    "amount": "8.27"
                }
            ]
        },
        {
            "sequenceNumber": 2,
            "reference": "",
            "description": "11.11% FEE",
            "additionalDescription": "",
            "semanticsCode": "AIRPORTFEE",
            "quantity": 1,
            "total": "10.44"
        }
    ]
}
```
    
#### Generated Receipt Image

![Car Rental Receipt Image](https://github.com/concur/developer.concur.com/blob/preview/api-preview/receipts/car-rental.png?raw=true)

### Hotel

#### Receipt Data

```
{
    "taxInvoice": true,
    "reference": "6343430",
    "dateTime": "2016-09-29T15:05:00-0800",
    "total": "749.95",
    "subtotal": "652.67",
    "taxesTotal": "97.28",
    "currencyCode": "CAD",
    "seller": {
        "name": "ACME Corporation",
        "description": "",
        "taxId": "123-21213",
        "location": {
          "name": "ACME Hotels",
          "number": "ACME34393",
          "latitude": 47.616667,
          "longitude": -122.333333,
          "internetAddress": "https://www.acmecorporation.com",
          "emailAddress": "sna_hotel@acmecorporation.com",
          "telephoneNumber": "123-456-7890",
          "faxNumber": "",
          "address": {
              "streetAddress": "1 Hotel Way",
              "addressLocality": "Seattle",
              "addressRegion": "WA",
              "addressCountry": "US",
              "postalCode": "90001"
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
        "name": "Grand Hotel",
        "number": "",
        "latitude": 49.280011,
        "longitude": -123.117024,
        "internetAddress": "",
        "emailAddress": "",
        "telephoneNumber": "123-456-1999",
        "faxNumber": "123-456-2502",
        "address": {
            "streetAddress": "433 Hotel Street",
            "addressLocality": "Vancouver",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "v6b 6l9"
        }
    },
    "checkInDateTime": "2016-08-25T21:11:00-0700",
    "checkOutDateTime": "2016-08-27T11:09:00-0700",
    "guests": [
        {
            "guestNameRecord": "ACME-Axxxxxxx1899",
            "firstName": "Jon",
            "lastName": "Snow",
            "address": {
                "streetAddress": "111 Black Castle",
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

#### Generated Receipt Image

![Hotel Receipt Image](https://github.com/concur/developer.concur.com/blob/preview/api-preview/receipts/hotel.png?raw=true)


