[Source](https://developer.concur.com/itinerary-triplink-suppliers/booking-object-elements-triplink "Permalink to Booking Object Elements (TripLink) | Developer Portal")

# Booking Object Elements (TripLink) | Developer Portal

> TripLink - Open Booking Suppliers have access to the following elements for the different booking types. Elements are marked as required if they must be supplied for a new booking. Some fields may not appear or may display generic data if the supplier does not own the booking (refer to the field descriptions below for details).
>
> A supplier can always see the full details of their own reservations from any itinerary or booking source.
>
> <Air> <Car> <Hotel> <Rail>
>
> ##  Air Booking Elements
>
>
| ----- |
|  Required Elements |
|  Element |  Description |
|  Vendor |  The two letter GDS vendor code. Use $$ if the code is not available. Will not appear in the response if the request is from an Open Booking Air supplier that does not own the booking. |
|  FlightNumber |  The flight number for the booking.Will not appear in the response if the request is from an Open Booking Air supplier that does not own the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |
>
> The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
>
> **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.
>
>  |
|  EndCityCode |  The [IATA airport code][1] for the end city of the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
>
> **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.
>
>  |
|  Optional Elements |   |
|  Element |  Description |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss
>
> **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.
>
>  |
|  StartGate |  The departure gate for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
|  StartTerminal |  The departure terminal for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss
>
> **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.
>
>  |
|  EndGate |  The arriving gate for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
|  EndTerminal |  The arriving terminal for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
>
> ##  Car Booking Elements
>
>
| ----- |
|  Required Elements |
|  Element |  Description |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Optional Elements |   |
|  Element |  Description |
|  EndCity |  The ending address for the booking. |
|  EndCountry |  The ending address for the booking. |
|  EndState |  The ending address for the booking. |
|  StartCity |  The starting address for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartCountry |  The starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartState |  The starting address for the booking. |
|  EndCityCode |  The [IATA airport code][1] for the ending address for the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
>
> ##  Hotel Booking Elements
>
>
| ----- |
|  Required Elements |
|  Element |  Description |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Status |  The GDS based booking status for the segment. Format: HK, HL, BK, etc. |
|  Optional Elements |   |
|  Element |  Description |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartCity |  The starting address for the booking. |
|  StartCountry |  The starting address for the booking. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
>
> ##  Rail Booking Elements
>
>
| ----- |
|  Required Elements |
|  Element |  Description |
|  TrainNumber |  The number for the booked train. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartDateLocal |  The starting date for this segment, in the local time of the starting point. Format: YYYY-MM-DDThh:mm:ss |
|  StartRailStation |  The code of the departing station of the booking. |
|  Optional Elements |   |
|  Element |  Description |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartRailStationName |  The name of the departing station of the booking. |
|  EndCityCode |  The [IATA airport code][1] for the end city of the trip. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndRailStation |  The code for the arriving station of the booking. |
|  EndRailStationName |  The name of the arriving station of the booking. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
>
> ###  Time Zone Formats
>
>
| ----- |
|  Olson Time Zones |
|  Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC |
>
>  
>
>  |
>
>  
>
>  |
>
>  
>
>  |
|  Windows Time Zones |   | | |
|  Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC |
>
>  
>
>  |
>
>  
>
>  |
>
>  
>
>  |

Last Modified: 12/17/2013 11:49 AM PDT

[1]: http://www.iata.org/publications/Pages/code-search.aspx
