import TimeZone from "./TimeZone"

function TimeZoneList() {
    return (
        <div className="TimeZoneList z-[100] sm:fixed relative sm:top-[50%] sm:right-0 sm:-translate-y-2/4 sm:h-5/6 sm:w-min w-[96vw] sm:my-2 sm:pb-0 pb-1 sm:pr-1 border-0 overflow-y-auto overflow-x-auto">
            <TimeZone />
        </div>
    )
}

export default TimeZoneList