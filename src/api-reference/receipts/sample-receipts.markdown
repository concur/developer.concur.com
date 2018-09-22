---
title: Sample Receipts
layout: reference
---

# Receipts

## Sample Receipts

Below we have sample receipt data and the corresponding receipt images for the following receipt types:

* [Air (Multiple Tickets)](#air-multiple-tickets)
* [Car Rental](#car-rental)
* [Ground Transport](#ground-transport)
* [Hotel](#hotel)
* [Rail (Multiple Tickets)](#rail-multiple-tickets)

### Air (Multiple Tickets)

#### Receipt Data

```json
{
    "taxInvoice": true,
    "reference": "ABCD1234",
    "dateTime": "2099-11-10T16:04:49-0700",
    "total": "1400.40",
    "taxesTotal": "123.38",
    "subtotal": "1277.02",
    "currencyCode": "USD",
    "broker": {
        "name": "ACME Corporation",
        "description": "",
        "taxId": "123-21213",
        "location": {
            "name": "Headquarters",
            "number": "",
            "latitude": 41.8819,
            "longitude": -87.6278,
            "internetAddress": "http://www.acmecorporation.com",
            "emailAddress": "info@acmecorporation.com",
            "telephoneNumber": "1-877-555-5555",
            "faxNumber": "",
            "address": {
                "streetAddress": "333 108th Ave NE",
                "addressLocality": "Bellevue",
                "addressRegion": "WA",
                "addressCountry": "US",
                "postalCode": "98004"
            }
        }
    },
    "seller": {
        "name": "ACME Airlines",
        "description": "",
        "taxId": "867-53090",
        "location": {
            "name": "Headquarters",
            "number": "",
            "latitude": 37.2714,
            "longitude": -85.3262,
            "internetAddress": "http://www.acmeairlines.com",
            "emailAddress": "contact@acmeairlines.com",
            "telephoneNumber": "1-888-555-5555",
            "faxNumber": "",
            "address": {
                "streetAddress": "1 Ground Transport Way",
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
            "name": "Transportation Tax",
            "rate": 7.50,
            "amount": "91.38"
        },
        {
            "authority": {
                "addressCountry": "US"
            },
            "name": "United States - Flight Segment Tax",
            "rate": 10.0,
            "amount": "32.00"
        }
    ],
    "payments": [
        {
            "amount": "1400.40",
            "cardDetail": {
                "cardType": "Visa",
                "creditCardId": "7423",
                "authorizationCode": "AB123654789"
            }
        }
    ],
    "itineraryLocator": "1122337694093",
    "tickets": [
        {
            "number": "0062698215636",
            "recordLocator": "CU9GEF",
            "issueDateTime": "2015-11-29T19:15:55-0700",
            "pseudoCityCode": "SEA",
            "IATAAgencyNumber": "87654321",
            "agencyName": "ACME Airlines",
            "passengerName": "Jimmy Dean",
            "fare": "609.31",
            "coupons": [
                {
                    "originationAirportIATACode": "SEA",
                    "originationDateTime": "2015-12-25T09:00:00-0700",
                    "destinationAirportIATACode": "MSP",
                    "destinationDateTime": "2015-12-25T14:14:00-0500",
                    "flightNumber": "DL 1768",
                    "couponNumber": "D167693",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768",
                    "operatingCarrier": "DL1768",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YHRT15",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "152.33",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "11.42"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.80"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.50"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "MSP",
                    "originationDateTime": "2015-12-25T15:25:00-0500",
                    "destinationAirportIATACode": "GFK",
                    "destinationDateTime": "2015-12-25T16:50:00-0500",
                    "flightNumber": "OO 4656",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768Z",
                    "operatingCarrier": "OO4656B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "121.86",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "9.14"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.24"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "3.60"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "GFK",
                    "originationDateTime": "2015-12-30T17:19:00-0500",
                    "destinationAirportIATACode": "MSP",
                    "destinationDateTime": "2015-12-30T18:34:00-0500",
                    "flightNumber": "OO 4656",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768Z",
                    "operatingCarrier": "OO4656B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "140.14",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "10.51"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.58"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.14"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "MSP",
                    "originationDateTime": "2015-12-30T19:25:00-0500",
                    "destinationAirportIATACode": "SEA",
                    "destinationDateTime": "2015-12-30T21:15:00-0700",
                    "flightNumber": "DL 2536",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL2536Z",
                    "operatingCarrier": "DL2536B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "194.98",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "14.62"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "3.58"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "5.76"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                }
            ]
        },
        {
            "number": "0062698215637",
            "recordLocator": "CU9GEF",
            "issueDateTime": "2015-11-29T19:15:55-0700",
            "pseudoCityCode": "SEA",
            "IATAAgencyNumber": "87654321",
            "agencyName": "ACME Airlines",
            "passengerName": "John Smith",
            "fare": "609.31",
            "coupons": [
                {
                    "originationAirportIATACode": "SEA",
                    "originationDateTime": "2015-12-25T09:00:00-0700",
                    "destinationAirportIATACode": "MSP",
                    "destinationDateTime": "2015-12-25T14:14:00-0500",
                    "flightNumber": "DL 1768",
                    "couponNumber": "D167693",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768",
                    "operatingCarrier": "DL1768",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YHRT15",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "152.33",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "11.42"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.80"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.50"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "MSP",
                    "originationDateTime": "2015-12-25T15:25:00-0500",
                    "destinationAirportIATACode": "GFK",
                    "destinationDateTime": "2015-12-25T16:50:00-0500",
                    "flightNumber": "OO 4656",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768Z",
                    "operatingCarrier": "OO4656B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "121.86",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "9.14"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.24"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "3.60"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "GFK",
                    "originationDateTime": "2015-12-30T17:19:00-0500",
                    "destinationAirportIATACode": "MSP",
                    "destinationDateTime": "2015-12-30T18:34:00-0500",
                    "flightNumber": "OO 4656",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL1768Z",
                    "operatingCarrier": "OO4656B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "140.14",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "10.51"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "2.58"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.14"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                },
                {
                    "originationAirportIATACode": "MSP",
                    "originationDateTime": "2015-12-30T19:25:00-0500",
                    "destinationAirportIATACode": "SEA",
                    "destinationDateTime": "2015-12-30T21:15:00-0700",
                    "flightNumber": "DL 2536",
                    "couponNumber": "D187322",
                    "operatingAirlineCode": "DL",
                    "marketingCarrier": "DL2536Z",
                    "operatingCarrier": "DL2536B",
                    "classOfServiceCode": "T",
                    "fareBasisCode": "YAD1234",
                    "ticketDesignatorCode": "FSG*SFR",
                    "fare": "194.98",
                    "taxes": [
                        {
                            "authority": {
                                "addressCountry": "US"
                            },
                            "name": "Transportation Tax",
                            "rate": 7.50,
                            "amount": "14.62"
                        }
                    ],
                    "lineItems": [
                        {
                            "sequenceNumber": 1,
                            "description": "United States - September 11th Security Fee",
                            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
                            "semanticsCode": "OTHER",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "3.58"
                        },
                        {
                            "sequenceNumber": 2,
                            "description": "United States - Passenger Facility Charge",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_FEE",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "5.76"
                        },
                        {
                            "sequenceNumber": 3,
                            "description": "United States - Flight Segment Tax",
                            "additionalDescription": "",
                            "semanticsCode": "SEGFEE_AS_TAX",
                            "dateTime": "2015-11-29T19:15:55-0700",
                            "total": "4.00"
                        }
                    ]
                }
            ]
        }
    ],
    "lineItems": [
        {
            "sequenceNumber": 1,
            "description": "United States - September 11th Security Fee",
            "additionalDescription": "Passenger Civil Aviation Security Service Fee",
            "semanticsCode": "OTHER",
            "dateTime": "2015-11-29T19:15:55-0700",
            "total": "22.40"
        },
        {
            "sequenceNumber": 2,
            "description": "United States - Passenger Facility Charge",
            "additionalDescription": "",
            "semanticsCode": "SEGFEE_AS_FEE",
            "dateTime": "2015-11-29T19:15:55-0700",
            "total": "36.00"
        }
    ]
}
```

#### Generated Receipt Image

![A Receipt Image](/api-reference/receipts/air-multiple-tickets.png)

### Car Rental

#### Receipt Data

```json
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

![Car Rental Receipt Image](/api-reference/receipts/car-rental.png)

### Hotel

#### Receipt Data

```json
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

![Hotel Receipt Image](/api-reference/receipts/hotel.png)

### Ground Transport

#### Receipt Data

```json
{
    "taxInvoice": true,
    "reference": "ADBXTF25",
    "dateTime": "2016-09-29T15:39:46-0700",
    "total": "65.00",
    "taxesTotal": "5.69",
    "subtotal": "59.87",
    "currencyCode": "USD",
    "broker": {
        "name": "ACME Corporation",
        "taxId": "123-21213",
        "location": {
            "name": "Seattle Downtown",
            "number": "C3404",
            "latitude": 47.6097,
            "longitude": -122.3331,
            "internetAddress": "http://www.acmecorporation.com/",
            "emailAddress": "groundtransport@acmecorporation.com",
            "telephoneNumber": "206-000-0000",
            "faxNumber": "",
            "address": {
                "streetAddress": "1 Ground Transport Way",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US",
                "postalCode": "90001"
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
    "classOfService": "BLACK",
    "startDateTime": "2014-11-10T15:08:24-0500",
    "endDateTime": "2014-11-10T15:39:46-0500",
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

#### Generated Receipt Image

![Ground Transport Receipt Image](/api-reference/receipts/ground_transport.png)

### Rail (Multiple Tickets)

#### Receipt Data

```json
{
    "taxInvoice": true,
    "reference": "VDFG4567",
    "dateTime": "2099-11-10T16:04:49-0700",
    "total": "394.00",
    "subtotal": "394.00",
    "taxesTotal": "0.00",
    "currencyCode": "GBP",
    "itineraryLocator": "DSFJKLT4967",
    "seller": {
        "name": "ACME Corporation",
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

#### Generated Receipt Image

![Rail Receipt Image](/api-reference/receipts/rail-multiple-tickets.png)
