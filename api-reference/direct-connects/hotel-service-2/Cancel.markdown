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
| *CancelType* | Y | String	| **to be removed** |
| UniqueID | Y | ComplexType	| Element to hold the Type and the ID of the reservation which should be cancelled. |

**UniqueID**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Type* | Y | String | UniqueID with Type=”14” identifies the reservation to cancel. |
| *ID* | Y | Int | An ID |


---


## Response

**OTA_CancelRS**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Status* | Y | String	| Set to "Cancelled" or "Unsuccessful" |
| UniqueID | Y | String	| See Unique ID above. Concur expects two UniqueIDs to be returned in the response.  The first with an Type of "14" containing the original reservation number and the second type of "15" containing a confirmation number.  Both elements are mandatory. |
