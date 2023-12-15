type Time = {
    hours: number,
    minutes: number,
    seconds: number,
}

type TimeZone = {
    zoneName: string,
    gmtOffset: number,
    gmtOffsetName: string,
    abbreviation: string,
    tzName: string,
}

type StoreState = {
    time: Time,
    timeFormatted: boolean,
    isDigital: boolean,
    countryTimezones: TimeZone[],
    selectedTimeZone: TimeZone,
}

type StoreAction = {
    updateTime: (setTime: Time) => void,
    updateTimeFormatted: (setTimeFormatted: StoreState['timeFormatted']) => void,
    updateIsDigital: (setIsDigital: StoreState['isDigital']) => void,
    updateCountryTimezones: (setCountryTimezones: StoreState['countryTimezones']) => void,
    updateSelectedTimeZone: (setSelectedTimeZone: StoreState['selectedTimeZone']) => void,
}