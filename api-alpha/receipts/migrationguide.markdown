---
title: v3 to v4 Migration Guide
layout: reference
---

## Receipts v3 to v4 - what is new and different?
- Requires use of new Authentication API.
- No matching facts. Client posts receipt for a specific user.
- Allows client to provide rich data.
  - We realize that a receipt provided by a hotel is different from a car rental receipt. 
  - To allow different vendors to provide data that makes sense to them and our customers, we have designed receipt schemas.
  - A schema is defined for specific receipt types (Air, Car, Hotel, Taxi, Train, Japan Public Transport, General).
  - Open schema format allows for new receipt types to be easily added.
- Allows client to easily supply Value Added Tax information.
- If a client has specified a schema type when posting receipt data, a receipt image is automatically generated that can be 
  used by our customers when creating their expense report. 
- Generated receipt image will have brand logo if the partner has provided us with one.
- Receipt image will be generated in the customers preferred language. 
- For our early release, clients can post receipt data only. Very soon we will allow posting of receipt data and image.

## Receipts v3 to v4 - how do the field mappings change?


## FAQs
- Why do I have to use a new Authentication API?
- Why are matching facts no longer required when creating a receipt?
- How does rich data improve customer experience?
- How is a receipt image generated?



