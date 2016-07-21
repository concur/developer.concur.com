---
title: Sample Receipts
layout: reference
---
Below we have provided samples for [Hotel](#Hotel), [Ground Transport](#GroundTransport) and [Japan Public Transport](#JPT) receipts that can be created using the V4 API. A receipt image is automatically generated using appropriate brand logo if only receipt data is posted. As a partner, if you would like your brand logo to show up on the receipt image, email pdspe@concur.com.  

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
    "reference": "HILTON387494",
    "dateTime": "2099-11-05T15:05:00-0800",
    "total": "221.29",
    "currencyCode": "USD",
    "merchant": {
        "name": "Hyatt",
        "description": "",
        "taxId": "123-21213",
        "location": {
            "name": "Hyatt Place",
            "number": "HIL928928",
            "latitude": 47.616667,
            "longitude": -122.333333,
            "internetAddress": "http://www.hiltonirvine.com",
            "emailAddress": "irvine@hilton.com",
            "telephoneNumber": "949-262-6240",
            "faxNumber": "",
            "address": {
                "address": "1 Jamboree Center",
                "address2": "",
                "city": "Irvine",
                "countrySubdivisionCode": "CA",
                "countryCode": "US",
                "postalCode": "90273"
            }
        }
    },
    "taxes": [
        {
            "authority": "CA Hotel Tax",
            "address": {
                "countrySubdivisionCode": "CA",
                "countryCode": "US"
            },
            "type": "Local Sales Tax for Hotels",
            "rate": 10.00,
            "amount": "17.20"
        }
    ],
    "payments": [
        {
            "amount": "221.29",
            "cardDetail": {
                "cardType": "American Express",
                "maskedNumber": "XXXXXXXXXXX1009",
                "authorizationCode": "AB987654321"
            }
        }
    ],
    "property": {
        "name": "Hyatt Place",
        "description": "",
        "location": {
            "name": "Jamboree Center",
            "number": "HIL928928",
            "latitude": 47.616667,
            "longitude": -122.333333,
            "internetAddress": "http://www.hiltonirvine.com",
            "emailAddress": "irvine@hilton.com",
            "telephoneNumber": "949-262-6240",
            "faxNumber": "",
            "address": {
                "address": "1 Jamboree Center",
                "address2": "",
                "city": "Irvine",
                "countrySubdivisionCode": "CA",
                "countryCode": "US",
                "postalCode": "90273"
            }
        }
    },
    "confirmationNumber": "9372034",
    "checkInDateTime": "2014-11-05T15:05:00-0800",
    "checkOutDateTime": "2014-11-06T11:50:00-0800",
    "guests": [
        {
            "guestNameRecord": "GAB",
            "firstName": "John",
            "lastName": "Doe",
            "address": {
                "address": "601 108TH AVE NE",
                "address2": "SUITE 1000",
                "city": "Bellevue",
                "countrySubdivisionCode": "WA",
                "countryCode": "US",
                "postalCode": "98004"
            }
        }
    ],
    "numberInParty": 1,
    "room": {
        "roomNumber": "0427",
        "roomType": "King",
        "ratePlanType": "Standard",
        "averageDailyRoomRate": "172.00"
    },
    "nightsStayed": 1,
    "lineItems": [
        {
            "sequenceNumber": 1,
            "dateTime": "2014-11-05T15:05:00-0800",
            "reference": "",
            "description": "In room dining dinner food",
            "description2": "Room #0427 : Check #5875",
            "semanticsCode": "FOOD",
            "quantity": 1,
            "amount": "13.96"
        },
        {
            "sequenceNumber": 2,
            "dateTime": "2014-11-05T15:05:00-0800",
            "reference": "",
            "description": "AAA Discount Rate",
            "description2": "",
            "semanticsCode": "ROOMRATE",
            "rate": "172.00",
            "rateType": "Day",
            "quantity": 1,
            "amount": "172.00",
            "taxes": [
                {
                    "authority": "CA Hotel Tax",
                    "address": {
                        "countrySubdivisionCode": "CA",
                        "countryCode": "US"
                    },
                    "type": "Local Sales Tax for Hotels",
                    "rate": 10.00,
                    "amount": "17.20"
                }
            ]
        },
        {
            "sequenceNumber": 3,
            "dateTime": "2014-11-05T15:05:00-0800",
            "reference": "",
            "description": "CTA FEE",
            "description2": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "amount": "0.13"
        },
        {
            "sequenceNumber": 4,
            "dateTime": "2014-11-05T15:05:00-0800",
            "reference": "",
            "description": "Parking Overnight",
            "description2": "",
            "semanticsCode": "PARKING",
            "quantity": 1,
            "amount": "18.00"
        },
        {
            "sequenceNumber": 5,
            "dateTime": "2014-11-05T15:05:00-0800",
            "reference": "",
            "description": "Special Discount",
            "description2": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "amount": "-10.00"
        }
    ],
    "customData": {
        "Special Request": "Feather pillows upon arrival"
    }
}

```

####  Receipt image generated

![Hotel Receipt Example](https://github.com/concur/receipt-service/blob/master/src/test/expectedImages/hotel-negative-line-item.png)

### <a name="GroundTransport"></a>Ground Transport

####  Request URL
```
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} 
-d @hotel-receipt-example.json -H "Content-Type: application/json" 
-H "link:<http://schema.concursolutions.com/ride-receipt.schema.json>;rel=describedBy" 
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
    "currencyCode": "USD",
    "merchant": {
        "name": "Curb",
        "description": "Curb Seattle",
        "taxId": "123-123456",
        "location": {
            "name": "Seattle Downtown",
            "number": "C3404",
            "latitude": 47.6097,
            "longitude": -122.3331,
            "internetAddress": "http://www.curb.com/seattle",
            "emailAddress": "seattle@curb.com",
            "telephoneNumber": "206-000-0000",
            "faxNumber": "",
            "address": {
                "address": "678 Some Ave",
                "address2": "",
                "city": "Seattle",
                "countrySubdivisionCode": "WA",
                "countryCode": "US",
                "postalCode": "98104"
            }
        }
    },
    "taxes": [
        {
            "authority": "WA State Tax",
            "address": {
                "countrySubdivisionCode": "WA",
                "countryCode": "US"
            },
            "type": "Local Sales Tax",
            "rate": 9.50,
            "amount": "5.69"
        }
    ],
    "payments": [
        {
            "amount": "65.00",
            "cardDetail": {
                "cardType": "Visa",
                "maskedNumber": "XXXXXXXXXXXX4321",
                "authorizationCode": "AB123654789"
            }
        }
    ],
    "operator": "Curb",
    "terminalNumber": "T123456",
    "startDateTime": "2014-11-10T15:08:24-0700",
    "endDateTime": "2014-11-10T15:39:46-0700",
    "pickupLocation": {
        "name": "Key Center Building, Bellevue, WA",
        "latitude": 47.4436655,
        "longitude": -122.2982266,
        "address": {
            "countryCode": "US"
        }
    },
    "dropoffLocation": {
        "name": "Seattle-Tacoma International Airport, SeaTac, WA",
        "latitude": 47.4489,
        "longitude": -122.3094,
        "address": {
            "countryCode": "US"
        }
    },
    "driverName": "John Smith",
    "driverNumber": "DFE154-8567",
    "vehicleNumber": "AZQ987456",
    "lineItems": [
        {
            "sequenceNumber": 1,
            "reference": "",
            "description": "Base Fare",
            "description2": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "amount": "6.39",
            "taxes": [
                {
                    "authority": "WA State Tax",
                    "address": {
                        "countrySubdivisionCode": "WA",
                        "countryCode": "US"
                    },
                    "type": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "0.61"
                }
            ]
        },
        {
            "sequenceNumber": 2,
            "reference": "",
            "description": "Distance",
            "description2": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "amount": "49.32",
            "taxes": [
                {
                    "authority": "WA State Tax",
                    "address": {
                        "countrySubdivisionCode": "WA",
                        "countryCode": "US"
                    },
                    "type": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "4.68"
                }
            ]
        },
        {
            "sequenceNumber": 3,
            "reference": "",
            "description": "Time",
            "description2": "",
            "semanticsCode": "FEE",
            "quantity": 1,
            "amount": "4.16",
            "taxes": [
                {
                    "authority": "WA State Tax",
                    "address": {
                        "countrySubdivisionCode": "WA",
                        "countryCode": "US"
                    },
                    "type": "Local Sales Tax",
                    "rate": 9.50,
                    "amount": "0.40"
                }
            ]
        },
        {
            "sequenceNumber": 4,
            "reference": "",
            "description": "Rounding Down",
            "description2": "",
            "semanticsCode": "DISCOUNT",
            "quantity": 1,
            "amount": "-0.56"
        }
    ]
}
```

####  Receipt image generated

![Ground Transport Receipt Example](https://github.com/concur/receipt-service/blob/master/src/test/expectedImages/ride-curb.json.png)

### <a name="JPT"></a>Japan Public Transport

####  Request URL
```
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} 
-d @hotel-receipt-example.json -H "Content-Type: application/json" 
-H "link:<http://schema.concursolutions.com/jpt-receipt.schema.json>;rel=describedBy" 
-H "Authorization: Bearer {valid JWT}"
```

#### Request body
```
{
	  "user": "http://api.concur.com/v4/user/123456",
    "app": "http://api.concur.com/v4/app/802698dc151d421c80643d76f241c78b",
    "dateTime": "2016-05-05T00:00:00+09:00",
    "total": "270",
    "currencyCode": "JPY",
    "reference": "4e6e49c5-7aaf-4ff1-ad97-919348ed8fb3",
    "merchant": {
        "location": {
            "address": {
                "countryCode": "JP"
            },
            "name": "Japan"
        },
        "name": "NWICR"
    },
    "payments": [
        {
            "amount": "120"
        },
        {
            "amount": "150"
        }
    ],
	"icCardId":  "00X00C1093A4E892",
	"segments": [
		{
			"sequenceNumber": 1,
			"dateTime": "2016-05-05T00:00:00+09:00",
			"amount": "120",
			"fromStationCode": "02506",
			"fromStationName": "恵比寿（東京）",
			"toStationCode": "0250D",
			"toStationName": "高田馬場",
			"fromIsCommuterPass": false,
			"toIsCommuterPass": false,
			"distance": 1234
		},
		{
			"sequenceNumber": 2,
			"dateTime": "2016-05-05T00:00:00+09:00",
			"amount": "150",
			"fromStationCode": "0B50B",
			"fromStationName": "おゆみ野",
			"toStationCode": "0B501",
			"toStationName": "千葉中央",
			"fromIsCommuterPass": false,
			"toIsCommuterPass": false,
			"distance": 167
		}
	]
}

```

####  Receipt image generated

![JPT Receipt Example](https://github.com/concur/receipt-service/blob/master/src/test/expectedImages/jpt-multiple-segments.png)
