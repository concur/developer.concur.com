---
title: SAP Concur Developer Center - Shared Platform API Release Notes, October 2018
layout: reference
---

## Contents

* [New MapUrl Field Added to Receipts v4 API](#v4receipts)

## <a name="v4receipts"></a>New MapUrl Field Added to Receipts v4 API

A new field, MapUrl, has been added to the Ground Transportation Receipt schema of the [Receipts v4](/api-reference/receipts/v4.get-started.html) API. This field contains a link to an image on Google Maps of the trip, if provided by the ground transportation supplier.

### What the User Sees

If the ground transportation provider sends the MapUrl to SAP Concur, the user will see a map image of the trip in the e-receipt window in Concur Expense. 

![Sample e-receipt with map of trip in lower right corner.](/src/tools-support/release-notes/api/map-example.png)

### Business Purpose / Client Benefit

The new MapUrl field provides additional information about the ground transportation trip.
