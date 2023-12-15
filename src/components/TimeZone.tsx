import { useEffect } from 'react'
import { useClockStore, getCountryTime } from '../db/store'
import { EMPTY_SEPARATOR, EMPTY_STRING, UNDERSCORE_SEPARATOR, ZONE_FIRST, ZONE_SECOND } from '../constant/constant'
import { RadioGroup } from '@headlessui/react'

const myStyle = {
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.5)'
}

function TimeZone() {
    const countryTimezones = useClockStore(state => state.countryTimezones)
    const selectedTimeZone = useClockStore(state => state.selectedTimeZone)
    const updateSelectedTimeZone = useClockStore(state => state.updateSelectedTimeZone)
    const toggleClockLoading = useClockStore(state => state.toggleClockLoading)

    function zoneNameFormatter(zoneName: string, type: string) {
        let formattedName: string = '';
        const firstRegex = /^([^\/]+)/;
        const secondRegex = /\/([^\/_]+)_?([^\/]*)$/;

        if (type === ZONE_FIRST) {
            const matchResult = zoneName?.match(firstRegex);
            formattedName = matchResult ? matchResult[1] : '';
        }
        if (type === ZONE_SECOND) {
            const matchResult = zoneName?.match(secondRegex);
            formattedName = matchResult?.[1]?.replace(UNDERSCORE_SEPARATOR, EMPTY_SEPARATOR) + EMPTY_SEPARATOR + (matchResult?.[2] || EMPTY_STRING);
        }

        return formattedName;
    }

    function toggleTimeZone(timeZone: TimeZone) {
        toggleClockLoading()
        setTimeout(() => {
            updateSelectedTimeZone(timeZone)
            toggleClockLoading()
        }, 100);
    }

    useEffect(() => {
        if (countryTimezones?.length > 0) {
            updateSelectedTimeZone(countryTimezones[0])
        }
    }, [countryTimezones, updateSelectedTimeZone])

    return (
        <div className={`w-full h-full px-0 py-0 border-0 flex ${countryTimezones?.length > 8 ? 'items-start justify-start' : 'items-center justify-center'}`}>
            <RadioGroup value={selectedTimeZone} onChange={(timeZone) => toggleTimeZone(timeZone)}>
                <RadioGroup.Label className="sr-only">Country TimeZones</RadioGroup.Label>
                <div className='h-full sm:space-y-2 sm:space-x-0 space-x-2 border-0 flex items-start sm:flex-col flex-row '>
                    {
                        countryTimezones.map((timeZone: TimeZone) => (
                            <RadioGroup.Option
                                key={timeZone?.zoneName}
                                value={timeZone}
                                style={myStyle}
                                title={timeZone?.tzName}
                                onClick={() => getCountryTime(timeZone)}
                                className={({ active, checked }) => `${active ? '' : ''} ${checked ? 'bg-white' : 'bg-[#ffffff1a]'} max-w-[7rem] min-w-[7rem] h-full relative flex cursor-pointer rounded-lg px-2 py-2 shadow-md focus:outline-none snap-center`}>
                                {({ checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between truncate">
                                            <div className="flex items-center">
                                                <div className="text-xs">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        title={zoneNameFormatter(timeZone?.zoneName, ZONE_FIRST)}
                                                        className={`font-small text-md ${checked ? 'text-gray-500' : 'text-gray-400'}`}>
                                                        {zoneNameFormatter(timeZone?.zoneName, ZONE_FIRST)}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        title={zoneNameFormatter(timeZone?.zoneName, ZONE_SECOND)}
                                                        className={`inline text-xs  ${checked ? 'text-gray-900' : 'text-gray-100'}`}>
                                                        <span>
                                                            {zoneNameFormatter(timeZone?.zoneName, ZONE_SECOND)}
                                                        </span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))
                    }
                </div>
            </RadioGroup>
        </div>
    )
}

export default TimeZone