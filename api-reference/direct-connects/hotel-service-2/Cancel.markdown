---
title: Cancel
layout: reference
---

# Cancel

Message used to indicate to the hotel supplier that a given reservation should be cancelled.

|  SOAPAction |	OTA name | Message structure | 
|----------|-----------|---------------------|
| cancel | Cancel | OTA_CancelRQ |

---

## Request

**OTA_CancelRQ**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *CancelType* | Y | String	| something |
| UniqueID | Y | ComplexType	| UniqueID with Type=”14” identifies the reservation to cancel. |

**UniqueID**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Type* | Y | String | Type |
| *ID* | Y | Int | An ID |


---


## Response

**OTA_CancelRS**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Status* | Y | String	| Set to "Cancelled" or "Unsuccessful" |
| UniqueID | Y | String	| See Unique ID above. |
