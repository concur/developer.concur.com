---
title: Read Itinerary
layout: reference
---

# Read Itinerary

Returns detailed information about a hotel reservation. Used in a process of booking a hotel to write information to Itinerary. Not invoked by user, but by automatic Concur process. Hotel Supplier should reply with HotelRes RS message in the same format, as for HotelResRQ. 

|  SOAPAction |	OTA name | Message structure | 
|----------|-----------|---------------------|
| Read Itinerary | HotelRes | OTA_ReadRQ |

---

## Request

**OTA_ReadRQ**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| UniqueID | Y | ComplexType	| something |


**UniqueID**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Type* | Y | StringLength1to32	| Must be set to 14 | 
| *ID* | Y | StringLength1to32	| UniqueID from HotelResRS is used as reservation ID |

---

## Response

The response to the Read Itinerary message is the same the response to the Reservation Request, which can be found under Reservation.
