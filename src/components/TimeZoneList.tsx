import TimeZone from "./TimeZone"

const countryTimeZone = [
    {
        "zoneName": "America/Bahia_Bander",
        "gmtOffset": -21600,
        "gmtOffsetName": "UTC-06:00",
        "abbreviation": "CST",
        "tzName": "Central Standard Time (North America"
    },
    {
        "zoneName": "America/Cancun",
        "gmtOffset": -18000,
        "gmtOffsetName": "UTC-05:00",
        "abbreviation": "EST",
        "tzName": "Eastern Standard Time (North America"
    },
    {
        "zoneName": "America/Chihuahua",
        "gmtOffset": -25200,
        "gmtOffsetName": "UTC-07:00",
        "abbreviation": "MST",
        "tzName": "Mountain Standard Time (North America"
    },
    {
        "zoneName": "America/Hermosillo",
        "gmtOffset": -25200,
        "gmtOffsetName": "UTC-07:00",
        "abbreviation": "MST",
        "tzName": "Mountain Standard Time (North America"
    },
    {
        "zoneName": "America/Matamoros",
        "gmtOffset": -21600,
        "gmtOffsetName": "UTC-06:00",
        "abbreviation": "CST",
        "tzName": "Central Standard Time (North America"
    },
    // {
    //     "zoneName": "America/Mazatlan",
    //     "gmtOffset": -25200,
    //     "gmtOffsetName": "UTC-07:00",
    //     "abbreviation": "MST",
    //     "tzName": "Mountain Standard Time (North America"
    // },
    // {
    //     "zoneName": "America/Merida",
    //     "gmtOffset": -21600,
    //     "gmtOffsetName": "UTC-06:00",
    //     "abbreviation": "CST",
    //     "tzName": "Central Standard Time (North America"
    // },
    // {
    //     "zoneName": "America/Mexico_City",
    //     "gmtOffset": -21600,
    //     "gmtOffsetName": "UTC-06:00",
    //     "abbreviation": "CST",
    //     "tzName": "Central Standard Time (North America"
    // },
    // {
    //     "zoneName": "America/Monterrey",
    //     "gmtOffset": -21600,
    //     "gmtOffsetName": "UTC-06:00",
    //     "abbreviation": "CST",
    //     "tzName": "Central Standard Time (North America"
    // },
    // {
    //     "zoneName": "America/Ojinaga",
    //     "gmtOffset": -25200,
    //     "gmtOffsetName": "UTC-07:00",
    //     "abbreviation": "MST",
    //     "tzName": "Mountain Standard Time (North America"
    // },
    // {
    //     "zoneName": "America/Tijuana",
    //     "gmtOffset": -28800,
    //     "gmtOffsetName": "UTC-08:00",
    //     "abbreviation": "PST",
    //     "tzName": "Pacific Standard Time (North America"
    // }
]
function TimeZoneList() {
    return (
        <div className="TimeZoneList z-[100] sm:fixed relative sm:top-[50%] sm:right-0 sm:-translate-y-2/4 sm:h-5/6 sm:w-min w-[96vw] sm:my-2 sm:pb-0 pb-1 sm:pr-1 border-0 overflow-y-auto overflow-x-auto">
            <TimeZone />
        </div>
    )
}

export default TimeZoneList