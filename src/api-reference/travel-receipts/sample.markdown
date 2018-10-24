---
title: Example Response
layout: reference
---

{% include prerelease.html %}

# Example Response

Below is a sample of receipt requests to show the response format a partner would receive from the API. The `items` are the receipt requests and the `next` links to the next page of results.


### Receipt Request Response

#### Receipt Requests (Page 1)
```json
Resp: {
    "items": [
    {
        "requestId": "905be7a3-882e-4bdf-8184-206908142aed",
        "vendor": "ZE",
        "confirmationNumber": "324186883",
        "firstName": "THOMAS",
        "lastName": "METGER",
        "segmentStartDate": "2018-01-30T14:40:00Z",
        "segmentEndDate": "2018-02-01T21:55:00Z",
        "requestDate": "2018-01-23T18:49:57.915931237Z"
    },
    {
        "requestId": "89eaff84-1cbe-4a2f-9048-5884117bd17e",
        "vendor": "ZE",
        "confirmationNumber": "335512084",
        "firstName": "CLYDE",
        "lastName": "DUNCAN",
        "segmentStartDate": "2018-01-23T15:30:00Z",
        "segmentEndDate": "2018-01-27T18:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915933229Z"
    },
    {
        "requestId": "df1b2194-97b7-4c97-9c8a-fe5e42a6326b",
        "vendor": "ZE",
        "confirmationNumber": "443502429",
        "firstName": "SAM",
        "lastName": "SELIMAN",
        "segmentStartDate": "2018-03-16T18:15:00Z",
        "segmentEndDate": "2018-03-20T01:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915935026Z"
    },
    {
        "requestId": "b338497d-6443-4c19-ab1d-105bf6acf01c",
        "vendor": "ZE",
        "confirmationNumber": "4652321537",
        "firstName": "WALTER",
        "lastName": "RICHARD",
        "segmentStartDate": "2018-01-22T14:00:00Z",
        "segmentEndDate": "2018-01-25T17:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915936721Z"
    },
    {
        "requestId": "29a8925f-56a1-4a37-b3dc-fab2d1f85a1d",
        "vendor": "ZE",
        "confirmationNumber": "212291436",
        "firstName": "VAN",
        "lastName": "CLYDE",
        "segmentStartDate": "2018-01-22T16:00:00Z",
        "segmentEndDate": "2018-01-25T23:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915938106Z"
    },
    {
        "requestId": "8b803a73-8dd2-43bf-8f35-8aa6d24f82c1",
        "vendor": "ZE",
        "confirmationNumber": "934514835",
        "firstName": "LYNN",
        "lastName": "CAREY",
        "segmentStartDate": "2018-01-23T18:45:00Z",
        "segmentEndDate": "2018-01-26T03:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915939879Z"
    },
    {
        "requestId": "36653406-08f5-425f-b186-653c53fcf3b1",
        "vendor": "ZE",
        "confirmationNumber": "244689456",
        "firstName": "GEORGE",
        "lastName": "STOLLEY",
        "segmentStartDate": "2018-01-24T13:30:00Z",
        "segmentEndDate": "2018-01-25T13:30:00Z",
        "requestDate": "2018-01-23T18:49:57.915941244Z"
    },
    {
        "requestId": "44c2267e-8630-4ea7-a958-a598d2000611",
        "vendor": "ZE",
        "confirmationNumber": "530203526",
        "firstName": "CHRIS",
        "lastName": "GALLAGHER",
        "segmentStartDate": "2018-01-30T20:35:00Z",
        "segmentEndDate": "2018-02-03T13:15:00Z",
        "requestDate": "2018-01-23T18:49:57.915942604Z"
    },
    {
        "requestId": "7d6bbb2f-2862-44aa-9764-c779fae94fe9",
        "vendor": "ZE",
        "confirmationNumber": "455319127",
        "firstName": "STEVE",
        "lastName": "LOCK",
        "segmentStartDate": "2018-01-23T23:30:00Z",
        "segmentEndDate": "2018-01-26T23:30:00Z",
        "requestDate": "2018-01-23T18:49:57.915943946Z"
    },
    {
        "requestId": "ade1df9d-629f-4a99-86a2-2c6cc87221fb",
        "vendor": "ZE",
        "confirmationNumber": "163724658",
        "firstName": "TRACEY",
        "lastName": "CAMPBELL",
        "segmentStartDate": "2018-01-25T00:05:00Z",
        "segmentEndDate": "2018-01-26T18:40:00Z",
        "requestDate": "2018-01-23T18:49:57.915949116Z"
    },
    {
        "requestId": "787bd2ba-aaaf-4e04-ae85-1f05a3679101",
        "vendor": "ZE",
        "confirmationNumber": "245527331",
        "firstName": "SAMMY",
        "lastName": "STEVENS",
        "segmentStartDate": "2018-01-25T04:15:00Z",
        "segmentEndDate": "2018-01-26T02:25:00Z",
        "requestDate": "2018-01-23T18:49:57.915950543Z"
    },
    {
        "requestId": "ee74ace2-67bf-4af5-b64e-6695f7ea971d",
        "vendor": "ZE",
        "confirmationNumber": "132759455",
        "firstName": "DAVE",
        "lastName": "SCHULTZ",
        "segmentStartDate": "2018-02-03T02:07:00Z",
        "segmentEndDate": "2018-02-08T16:50:00Z",
        "requestDate": "2018-01-23T18:49:57.915951902Z"
    },
    {
        "requestId": "9d783dfc-6bcd-4391-b659-53b673c7eb23",
        "vendor": "ZE",
        "confirmationNumber": "537355772",
        "firstName": "GARY",
        "lastName": "BOTTIS",
        "segmentStartDate": "2018-01-23T02:25:00Z",
        "segmentEndDate": "2018-01-26T16:35:00Z",
        "requestDate": "2018-01-23T18:49:57.915953271Z"
    },
    {
        "requestId": "6cb48fad-0468-4f6a-8e68-6bc2dfbdda5f",
        "vendor": "ZE",
        "confirmationNumber": "553257291",
        "firstName": "NICOLE",
        "lastName": "ELKIDGE",
        "segmentStartDate": "2018-01-22T04:30:00Z",
        "segmentEndDate": "2018-01-26T21:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915954617Z"
    },
    {
        "requestId": "539039fc-11ad-46d9-83f8-45260391caa9",
        "vendor": "ZE",
        "confirmationNumber": "304450523",
        "firstName": "NADIA",
        "lastName": "KHAN",
        "segmentStartDate": "2018-01-22T04:00:00Z",
        "segmentEndDate": "2018-01-26T16:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915955955Z"
    },
    {
        "requestId": "c5198cd7-e87e-4f07-86fa-a712dcd49bbf",
        "vendor": "ZE",
        "confirmationNumber": "248124345",
        "firstName": "JAMIE",
        "lastName": "COTTIGAN",
        "segmentStartDate": "2018-01-29T23:00:00Z",
        "segmentEndDate": "2018-01-31T21:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915957285Z"
    },
    {
        "requestId": "d567bfed-b6ca-40c0-a1ae-f5c5339e9258",
        "vendor": "ZE",
        "confirmationNumber": "322723456",
        "firstName": "SARAH",
        "lastName": "STANLEY",
        "segmentStartDate": "2018-06-06T19:14:00Z",
        "segmentEndDate": "2018-06-09T16:40:00Z",
        "requestDate": "2018-01-23T18:49:57.915958625Z"
    },
    {
        "requestId": "f9ae54c7-eb19-494b-a46c-bb5d76f17973",
        "vendor": "ZE",
        "confirmationNumber": "312876745",
        "firstName": "MELISSA",
        "lastName": "NIAYE",
        "segmentStartDate": "2018-01-26T22:50:00Z",
        "segmentEndDate": "2018-02-09T20:45:00Z",
        "requestDate": "2018-01-23T18:49:57.915961987Z"
    },
    {
        "requestId": "6378174d-d38b-4f9a-af85-8c3033efc491",
        "vendor": "ZE",
        "confirmationNumber": "313324743",
        "firstName": "SCOTTY",
        "lastName": "THOMPSON",
        "segmentStartDate": "2018-01-22T21:24:00Z",
        "segmentEndDate": "2018-01-26T13:15:00Z",
        "requestDate": "2018-01-23T18:49:57.915963318Z"
    },
    {
        "requestId": "aab3ea49-a899-4ecf-90b0-ed474408447e",
        "vendor": "ZE",
        "confirmationNumber": "313853757",
        "firstName": "MICHAEL",
        "lastName": "CARSON",
        "segmentStartDate": "2018-02-01T20:05:00Z",
        "segmentEndDate": "2018-02-02T23:25:00Z",
        "requestDate": "2018-01-23T18:49:57.915964654Z"
    },
    {
        "requestId": "99268619-f42a-4abd-ae44-698a37791a4e",
        "vendor": "ZE",
        "confirmationNumber": "4332095991",
        "firstName": "CECIL",
        "lastName": "LEE",
        "segmentStartDate": "2018-01-29T16:02:00Z",
        "segmentEndDate": "2018-02-01T16:40:00Z",
        "requestDate": "2018-01-23T18:49:57.915966004Z"
    },
    {
        "requestId": "18b124b8-7fa3-438b-85c6-57e16e5b3258",
        "vendor": "ZE",
        "confirmationNumber": "346384323",
        "firstName": "JOHN",
        "lastName": "FRANK",
        "segmentStartDate": "2018-04-25T16:00:00Z",
        "segmentEndDate": "2018-04-29T23:30:00Z",
        "requestDate": "2018-01-23T18:49:57.915967343Z"
    },
    {
        "requestId": "f80ee9ba-2d04-416e-9a96-ac7b282b38a9",
        "vendor": "ZE",
        "confirmationNumber": "407480677",
        "firstName": "STACEY",
        "lastName": "SCOTT",
        "segmentStartDate": "2018-02-05T18:00:00Z",
        "segmentEndDate": "2018-02-09T10:30:00Z",
        "requestDate": "2018-01-23T18:49:57.915968682Z"
    },
    {
        "requestId": "bb8da2e0-c7c2-454b-84bf-c3a2f9ed37fb",
        "vendor": "ZE",
        "confirmationNumber": "553338341",
        "firstName": "GEORGE",
        "lastName": "TESSER",
        "segmentStartDate": "2018-01-26T20:00:00Z",
        "segmentEndDate": "2018-01-28T20:00:00Z",
        "requestDate": "2018-01-23T18:49:57.9159701Z"
    },
    {
        "requestId": "a2903477-f4a8-4159-bf9a-4f42cea47ce1",
        "vendor": "ZE",
        "confirmationNumber": "530244855",
        "firstName": "ERICA",
        "lastName": "VANASSEY",
        "segmentStartDate": "2018-01-22T13:00:00Z",
        "segmentEndDate": "2018-01-23T00:00:00Z",
        "requestDate": "2018-01-23T18:49:57.915971485Z"
    }
    ],
    "next": "/v1/receiptrequests/1516561200/6443f257-03fe-5881-ac46-2e4865d944d3"
}
```

#### Receipt Requests (Page 2)
```json
Resp: {
    "items": [
    {
        "requestId": "9ecf0b1c-d000-422a-907a-fd8370e5ca54",
        "vendor": "ZE",
        "confirmationNumber": "531758043",
        "firstName": "JENNIFER",
        "lastName": "SALINGER",
        "segmentStartDate": "2018-01-25T22:33:00Z",
        "segmentEndDate": "2018-01-26T23:30:00Z",
        "requestDate": "2018-01-23T18:49:58.194561445Z"
    },
    {
        "requestId": "f455b342-a3cd-4b4c-83fa-7413d169c0ed",
        "vendor": "ZE",
        "confirmationNumber": "53158372",
        "firstName": "CAROL",
        "lastName": "CHAN",
        "segmentStartDate": "2018-02-01T02:34:00Z",
        "segmentEndDate": "2018-02-02T02:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194564178Z"
    },
    {
        "requestId": "b05c5b1d-abd4-49f5-9d5b-844845fbe82f",
        "vendor": "ZE",
        "confirmationNumber": "320572345",
        "firstName": "THOME",
        "lastName": "MOORE",
        "segmentStartDate": "2018-01-23T14:00:00Z",
        "segmentEndDate": "2018-01-26T22:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194565985Z"
    },
    {
        "requestId": "42e17778-2a4d-4846-8cad-a3905ce19bed",
        "vendor": "ZE",
        "confirmationNumber": "533244823",
        "firstName": "KARIKA",
        "lastName": "BHONDA",
        "segmentStartDate": "2018-01-30T18:15:00Z",
        "segmentEndDate": "2018-02-02T14:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194568541Z"
    },
    {
        "requestId": "7f9ec889-8870-4b55-a38c-f4a70a5023d3",
        "vendor": "ZE",
        "confirmationNumber": "530066134",
        "firstName": "BRUCE",
        "lastName": "ALLEN",
        "segmentStartDate": "2018-02-04T21:49:00Z",
        "segmentEndDate": "2018-02-10T01:09:00Z",
        "requestDate": "2018-01-23T18:49:58.19456995Z"
    },
    {
        "requestId": "33f23e5a-cce8-4cb5-9d3c-38b1b739a7a1",
        "vendor": "ZE",
        "confirmationNumber": "553489629",
        "firstName": "MICHAEL",
        "lastName": "GEORGE",
        "segmentStartDate": "2018-01-28T04:34:00Z",
        "segmentEndDate": "2018-02-04T18:45:00Z",
        "requestDate": "2018-01-23T18:49:58.194572246Z"
    },
    {
        "requestId": "042c5743-a628-4a8a-9875-c56f07239fc7",
        "vendor": "ZE",
        "confirmationNumber": "570148920",
        "firstName": "VINCENT",
        "lastName": "LEE",
        "segmentStartDate": "2018-01-21T23:00:00Z",
        "segmentEndDate": "2018-01-25T17:55:00Z",
        "requestDate": "2018-01-23T18:49:58.194573652Z"
    },
    {
        "requestId": "553fd318-4cce-4249-bf78-2cf2654251a7",
        "vendor": "ZE",
        "confirmationNumber": "531491044",
        "firstName": "STACY",
        "lastName": "BRITLEY",
        "segmentStartDate": "2018-02-05T04:16:00Z",
        "segmentEndDate": "2018-02-09T23:25:00Z",
        "requestDate": "2018-01-23T18:49:58.194575044Z"
    },
    {
        "requestId": "492e4253-0e82-45f5-9cc6-0d67ae5557c7",
        "vendor": "ZE",
        "confirmationNumber": "323508328",
        "firstName": "DAVID F",
        "lastName": "SETTER",
        "segmentStartDate": "2018-01-22T23:00:00Z",
        "segmentEndDate": "2018-01-26T02:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194576479Z"
    },
    {
        "requestId": "48ea6ec0-e9ab-45b0-847f-e2b0b67cb594",
        "vendor": "ZE",
        "confirmationNumber": "323311322",
        "firstName": "KENT",
        "lastName": "CLARKE",
        "segmentStartDate": "2018-01-22T17:00:00Z",
        "segmentEndDate": "2018-01-26T11:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194578761Z"
    },
    {
        "requestId": "c56f954a-855a-4260-a6ff-21b14cca1f8f",
        "vendor": "ZE",
        "confirmationNumber": "530520555",
        "firstName": "WILLIAM K",
        "lastName": "MASS",
        "segmentStartDate": "2018-02-22T14:00:00Z",
        "segmentEndDate": "2018-02-25T23:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194580174Z"
    },
    {
        "requestId": "162dcae7-ee6d-483e-bd04-af59008d437d",
        "vendor": "ZE",
        "confirmationNumber": "5332461523",
        "firstName": "KUMAR",
        "lastName": "QUASBY",
        "segmentStartDate": "2018-01-30T20:03:00Z",
        "segmentEndDate": "2018-02-09T14:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194581545Z"
    },
    {
        "requestId": "b502e51a-ef74-4fdd-96d1-bac9ac35bccb",
        "vendor": "ZE",
        "confirmationNumber": "532550992",
        "firstName": "JOSEPH",
        "lastName": "STICK",
        "segmentStartDate": "2018-03-30T03:45:00Z",
        "segmentEndDate": "2018-04-01T20:30:00Z",
        "requestDate": "2018-01-23T18:49:58.194582899Z"
    },
    {
        "requestId": "624ffcfa-dc88-4fe0-b7bb-efdbecd9c5bb",
        "vendor": "ZE",
        "confirmationNumber": "483591442",
        "firstName": "BETH ANN",
        "lastName": "MCFADDEN",
        "segmentStartDate": "2018-01-23T21:15:00Z",
        "segmentEndDate": "2018-01-25T21:15:00Z",
        "requestDate": "2018-01-23T18:49:58.194584223Z"
    },
    {
        "requestId": "f3306920-9229-4402-86a8-15fbee176fcf",
        "vendor": "ZE",
        "confirmationNumber": "533179846",
        "firstName": "KIMBERLY J",
        "lastName": "YAMASAKI",
        "segmentStartDate": "2018-01-21T22:00:00Z",
        "segmentEndDate": "2018-01-25T20:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194585553Z"
    },
    {
        "requestId": "668fb7a9-3c6f-4750-acc1-e45235c2cd98",
        "vendor": "ZE",
        "confirmationNumber": "416150344",
        "firstName": "STEPHEN",
        "lastName": "BUCK",
        "segmentStartDate": "2018-01-22T18:00:00Z",
        "segmentEndDate": "2018-02-26T18:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194586873Z"
    },
    {
        "requestId": "d5f8f682-395c-4ac5-afd9-ddd33f331f38",
        "vendor": "ZE",
        "confirmationNumber": "3290203462",
        "firstName": "SASHA",
        "lastName": "MALONE",
        "segmentStartDate": "2018-01-23T17:00:00Z",
        "segmentEndDate": "2018-01-26T17:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194588192Z"
    },
    {
        "requestId": "c92a58c1-1008-4b67-afa9-5db14ce37a7d",
        "vendor": "ZE",
        "confirmationNumber": "353272082",
        "firstName": "ERIC",
        "lastName": "ZELMET",
        "segmentStartDate": "2018-01-22T04:00:00Z",
        "segmentEndDate": "2018-01-23T04:00:00Z",
        "requestDate": "2018-01-23T18:49:58.19459122Z"
    },
    {
        "requestId": "5372a3ed-f0d0-423a-80a6-121c7c4b40d1",
        "vendor": "ZE",
        "confirmationNumber": "533211431",
        "firstName": "YUNG",
        "lastName": "LIU",
        "segmentStartDate": "2018-03-07T18:12:00Z",
        "segmentEndDate": "2018-03-11T05:09:00Z",
        "requestDate": "2018-01-23T18:49:58.194592576Z"
    },
    {
        "requestId": "a8659cc9-2cea-42b2-95a0-60ce9c3d3ff7",
        "vendor": "ZE",
        "confirmationNumber": "530001832",
        "firstName": "SHANE",
        "lastName": "VANDIGRAFF",
        "segmentStartDate": "2018-01-29T18:23:00Z",
        "segmentEndDate": "2018-02-02T21:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194593904Z"
    },
    {
        "requestId": "5a30d47f-d0bd-491c-a624-5d8f6c7ec3fb",
        "vendor": "ZE",
        "confirmationNumber": "532808260",
        "firstName": "SEAN F",
        "lastName": "SMITH",
        "segmentStartDate": "2018-01-22T17:00:00Z",
        "segmentEndDate": "2018-01-29T17:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194595236Z"
    },
    {
        "requestId": "b8704c41-abc5-4f12-9d6f-f0820741f558",
        "vendor": "ZE",
        "confirmationNumber": "532593796",
        "firstName": "TROY P",
        "lastName": "DENOIT",
        "segmentStartDate": "2018-02-12T14:49:00Z",
        "segmentEndDate": "2018-02-16T20:40:00Z",
        "requestDate": "2018-01-23T18:49:58.194596581Z"
    },
    {
        "requestId": "1d593afb-e486-4b15-9188-60f9e6228c62",
        "vendor": "ZE",
        "confirmationNumber": "531745217",
        "firstName": "ROSS M",
        "lastName": "CLYDE",
        "segmentStartDate": "2018-02-05T13:45:00Z",
        "segmentEndDate": "2018-02-07T22:40:00Z",
        "requestDate": "2018-01-23T18:49:58.194597916Z"
    },
    {
        "requestId": "42183276-8691-4ee2-b243-3a87f0035cfc",
        "vendor": "ZE",
        "confirmationNumber": "319920342",
        "firstName": "KEVIN",
        "lastName": "HERNANDEZ",
        "segmentStartDate": "2018-01-22T03:02:00Z",
        "segmentEndDate": "2018-01-26T00:00:00Z",
        "requestDate": "2018-01-23T18:49:58.194599228Z"
    },
    {
        "requestId": "fb05fe58-ebe7-4f32-a844-a6a468bbcff0",
        "vendor": "ZE",
        "confirmationNumber": "322384229",
        "firstName": "WILLIAM",
        "lastName": "BOYESE",
        "segmentStartDate": "2018-01-22T15:45:00Z",
        "segmentEndDate": "2018-01-22T18:30:00Z",
        "requestDate": "2018-01-23T18:49:58.1946006Z"
    }
    ],
    "next": ""
}
 ```
