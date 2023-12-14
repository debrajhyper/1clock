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
        <div className="fixed top-[50%] right-0 -translate-y-2/4 h-5/6 my-2 border-0 flex justify-center items-center overflow-y-scroll">
            <TimeZone />
        </div>
    )
}

export default TimeZoneList