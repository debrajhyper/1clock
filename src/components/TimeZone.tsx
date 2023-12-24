import { Key, useEffect } from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useClockStore, getCountryTime } from '../db/store'
import { EMPTY_SEPARATOR, EMPTY_STRING, GRID_CHANGE_ON_MOBILE, UNDERSCORE_SEPARATOR, ZONE_FIRST, ZONE_SECOND } from '../constant/constant'
import { RadioGroup } from '@headlessui/react'

const myStyle = {
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.5)'
}
function TimeZone() {
    const countryTimezones = useClockStore(state => state.countryTimezones)
    const selectedTimeZone = useClockStore(state => state.selectedTimeZone)
    const updateSelectedTimeZone = useClockStore(state => state.updateSelectedTimeZone)
    const isMobile = useMediaQuery(GRID_CHANGE_ON_MOBILE)

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
        updateSelectedTimeZone(timeZone);
    }

    useEffect(() => {
        if (countryTimezones?.length > 0) updateSelectedTimeZone(countryTimezones[0])
    }, [countryTimezones, updateSelectedTimeZone])

    return (
        <div className={`w-full h-full px-0 md:py-0 py-1 border-0 flex ${isMobile ? countryTimezones?.length > 4 ? 'items-start justify-start' : 'items-center justify-center' : countryTimezones?.length > 8 ? 'items-start justify-start' : 'items-center justify-center'}`}>
            <RadioGroup value={selectedTimeZone} onChange={(timeZone) => toggleTimeZone(timeZone)}>
                <RadioGroup.Label className="sr-only">Country TimeZones</RadioGroup.Label>
                <motion.div
                    transition={{ staggerChildren: 0.4 }}
                    className='h-full md:space-y-2 md:space-x-0 space-x-2 border-0 flex items-start md:flex-col flex-row '>
                    {
                        countryTimezones.map((timeZone: TimeZone, index: Key | undefined | null) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: isMobile ? 0 : 40, x: isMobile ? 40 : 0 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 24
                                }}
                            >
                                <RadioGroup.Option
                                    value={timeZone}
                                    style={myStyle}
                                    title={timeZone?.tzName}
                                    onClick={() => getCountryTime(timeZone)}
                                    className={({ active, checked }) => `${active ? '' : ''} ${checked ? 'bg-white' : 'bg-[#ffffff1a]'} max-w-[7rem] min-w-[7rem] h-full relative flex cursor-pointer rounded-lg px-2 py-2 shadow-md focus:outline-none snap-center`}>
                                    {({ checked }) => (
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
                                    )}
                                </RadioGroup.Option>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </RadioGroup>
        </div>
    )
}

export default TimeZone