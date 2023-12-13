import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ZONE_FIRST, ZONE_SECOND } from '../constant/constant'

const myStyle = {
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.5)'
}

export default function TimeZone({ countryTimeZone }: countryTimeZone) {
    const [selected, setSelected] = useState(countryTimeZone[0])

    function zoneNameFormatter(zoneName: string, type: string) {
        let formattedName: string = '';

        const firstRegex = /^([^\/]+)/;
        const secondRegex = /\/([^\/_]+)_?([^\/]*)$/;

        if (type === ZONE_FIRST) {
            const matchResult = zoneName.match(firstRegex);
            formattedName = matchResult ? matchResult[1] : '';
        }
        if (type === ZONE_SECOND) {
            const matchResult = zoneName.match(secondRegex);
            formattedName = matchResult?.[1]?.replace('_', ' ') + ' ' + (matchResult?.[2] || '');
        }

        return formattedName;
    }


    return (
        <div className="w-full px-1 py-2 border-0">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Country TimeZones</RadioGroup.Label>
                    <div className="space-y-2 border-0">
                        {
                            countryTimeZone.map((timeZone: TimeZone) => (
                                <RadioGroup.Option
                                    key={timeZone?.zoneName}
                                    value={timeZone}
                                    style={myStyle}
                                    className={({ active, checked }) => `${active ? '' : ''} ${checked ? 'bg-white' : 'bg-[#ffffff1a]'} max-w-[7rem] min-w-[7rem] relative flex cursor-pointer rounded-lg px-2 py-2 shadow-md focus:outline-none snap-center`}>
                                    {({ active, checked }) => (
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
        </div>
    )
}