import { useMediaQuery } from '../hooks/useMediaQuery';
import { GRID_CHANGE_ON_MOBILE } from '../constant/constant';
import TimeZone from "./TimeZone"

function TimeZoneList() {
    const isMobile = useMediaQuery(GRID_CHANGE_ON_MOBILE)
    return (
        <div className={`TimeZoneList z-[100] md:fixed relative md:top-[50%] md:right-0 md:-translate-y-2/4 md:h-5/6 md:w-min w-[96vw] md:my-2 md:pb-0 pb-1 md:pr-1 border-0 ${isMobile ? 'overflow-x-auto overflow-y-clip' : 'overflow-y-auto overflow-x-clip'}`}>
            <TimeZone />
        </div>
    )
}

export default TimeZoneList