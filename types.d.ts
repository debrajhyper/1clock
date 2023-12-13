type Clock = {
    time: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    timeFormatted?: boolean,
    day?: string
}

// type Clock = {
//     time: String
// }

type SwitchPeriod = {
    timeFormatted: boolean,
    setTimeFormatted: ChangeEvent<HTMLInputElement>
}

type SwitchType = {
    isDigital: boolean,
    setIsDigital: ChangeEvent<HTMLInputElement>
}

type TimeZone = {
    zoneName: string,
    gmtOffset: number,
    gmtOffsetName: string,
    abbreviation: string,
    tzName: string,
}

type countryTimeZone = {
    countryTimeZone: TimeZone[];
}