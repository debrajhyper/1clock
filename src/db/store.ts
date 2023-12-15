import { create } from 'zustand'
import { ASIA_CALCUTTA, EN_US, COLON_SEPARATOR, NO_OF_DIGITS } from '../constant/constant';

export const useClockStore = create<StoreState & StoreAction>((set) => ({
    time: {
        hours: 60,
        minutes: 60,
        seconds: 60,
    },
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
    updateTimeFormatted: (setTimeFormatted: StoreState['timeFormatted']) => set(() => ({ timeFormatted: setTimeFormatted })),
    updateIsDigital: (setIsDigital: StoreState['isDigital']) => set(() => ({ isDigital: setIsDigital })),
    updateCountryTimezones: (setCountryTimezones: StoreState['countryTimezones']) => set(() => ({ countryTimezones: setCountryTimezones })),
    updateSelectedTimeZone: (setSelectedTimeZone: StoreState['selectedTimeZone']) => set(() => ({ selectedTimeZone: setSelectedTimeZone })),
}))

export function getCountryTime(timeZone: TimeZone) {
    const { zoneName, gmtOffset } = timeZone;
    const options: Intl.DateTimeFormatOptions = {
        hour12: false,
        hour: NO_OF_DIGITS,
        minute: NO_OF_DIGITS,
        second: NO_OF_DIGITS,
        timeZone: zoneName,
    };
    let setTime = {
        hours: 60,
        minutes: 60,
        seconds: 60,
    }

    // Check if the user's browser timezone matches the provided timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimeZone === zoneName || userTimeZone === ASIA_CALCUTTA) {
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString(EN_US, options);
        const [hours, minutes, seconds] = currentTime.split(COLON_SEPARATOR);

        setTime = {
            hours: parseInt(hours, 10),
            minutes: parseInt(minutes, 10),
            seconds: parseInt(seconds, 10),
        }
        return setTime
    }

    // Calculate the current time in the target timezone
    const currentDate = new Date();
    const utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
    const countryTime = new Date(utc + gmtOffset * 60000);

    const formattedTime = countryTime.toLocaleTimeString(EN_US, options);
    const [hours, minutes, seconds] = formattedTime.split(COLON_SEPARATOR);

    setTime = {
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10),
    };
    return setTime
}