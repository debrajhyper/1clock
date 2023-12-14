import { create } from 'zustand'

type State = {
    time: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    day: string,
    timeFormatted: boolean,
    isDigital: boolean,
    countryTimezones: TimeZone[],
    selectedTimeZone: TimeZone,
}

type Action = {
    updateTime: (setTime: Time) => void,
    updateDay: (setDay: number) => void,
    updateTimeFormatted: (setTimeFormatted: boolean) => void,
    updateIsDigital: (setIsDigital: boolean) => void,
    updateCountryTimezones: (setCountryTimezones: State['countryTimezones']) => void,
    updateSelectedTimeZone: (setSelectedTimeZone: State['selectedTimeZone']) => void,
}

function dayFormatter(dayNumber: number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNumber]
}

export const useClockStore = create<State & Action>((set) => ({
    time: {
        hours: 60,
        minutes: 60,
        seconds: 60,
    },
    day: '',
    timeFormatted: false,
    isDigital: false,
    countryTimezones: [],
    selectedTimeZone: {
        zoneName: '',
        gmtOffset: 0,
        gmtOffsetName: '',
        abbreviation: '',
        tzName: '',
    },
    updateTime: (setTime: Time) => set(() => ({ time: setTime })),
    updateDay: (setDay: number) => set(() => ({ day: dayFormatter(setDay) })),
    updateTimeFormatted: (setTimeFormatted: boolean) => set(() => ({ timeFormatted: setTimeFormatted })),
    updateIsDigital: (setIsDigital: boolean) => set(() => ({ isDigital: setIsDigital })),
    updateCountryTimezones: (setCountryTimezones: State['countryTimezones']) => set(() => ({ countryTimezones: setCountryTimezones })),
    updateSelectedTimeZone: (setSelectedTimeZone: State['selectedTimeZone']) => set(() => ({ selectedTimeZone: setSelectedTimeZone })),
}))