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
    clockLoading: boolean,
    time: Time,
    timeFormatted: boolean,
    isDigital: boolean,
    countryTimezones: TimeZone[],
    selectedTimeZone: TimeZone,
}

type StoreAction = {
    toggleClockLoading: () => void,
    updateTime: (setTime: Time) => void,
    toggleTimeFormatted: () => void,
    toggleIsDigital: () => void,
    updateCountryTimezones: (setCountryTimezones: StoreState['countryTimezones']) => void,
    updateSelectedTimeZone: (setSelectedTimeZone: StoreState['selectedTimeZone']) => void,
}