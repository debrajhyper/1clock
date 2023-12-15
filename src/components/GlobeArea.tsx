import { useRef, useEffect, useState } from "react";
import { useClockStore } from "../db/store";
import Globe, { GlobeMethods } from 'react-globe.gl';
import { WINDOW_RESIZE } from "../constant/constant";
import geoData from '../utils/customGeo.json'
import CountryData from '../utils/countries.json'

type CountryPolygon = {
    properties?: {
        postal?: string,
        iso_a2?: string,
    }
}

const dynamicWidth = window.innerWidth >= 1024 ? 600 : window.innerWidth >= 750 ? 350 : 420;

function GlobeArea() {
    const updateCountryTimezones = useClockStore(state => state.updateCountryTimezones)
    const globeEl = useRef<GlobeMethods>();
    const [hoverD, setHoverD] = useState<object | null>(null);
    const [pov, setPov] = useState({
        lat: 23.245830643149887,
        lng: 75.22307145789054,
        altitude: 0.008856788776235192
    })
    const [globeDimensions, setGlobeDimensions] = useState({
        width: dynamicWidth,
        height: dynamicWidth,
    });

    function onCountryClick(polygon: CountryPolygon, event: MouseEvent, { lat, lng, altitude }: { lat: number; lng: number; altitude: number; }) {
        const country = CountryData.find(c => c.iso2 === polygon?.properties?.iso_a2 ? c : null)
        const countryTimezones = country?.timezones
        if (countryTimezones) {
            updateCountryTimezones(countryTimezones);
        }
        setPov({
            lat: lat,
            lng: lng,
            altitude: altitude
        })
    }

    useEffect(() => {
        let timeOutId: string | number | NodeJS.Timeout | undefined;
        (function check() {
            if (globeEl?.current) {
                globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.7;
                globeEl.current.pointOfView(pov, 800);
                globeEl.current.controls().maxDistance = 500
                globeEl.current.controls().minDistance = 280;
                globeEl.current.controls().enablePointerInteraction = true;
            } else {
                timeOutId = setTimeout(check, 1000);
            }
        })();

        return () => {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
        };
    }, [pov]);

    useEffect(() => {
        function handleResize() {
            setGlobeDimensions({
                width: dynamicWidth,
                height: dynamicWidth,
            });
        }
        window.addEventListener(WINDOW_RESIZE, handleResize);

        return () => window.removeEventListener(WINDOW_RESIZE, handleResize);
    }, []);

    return (
        <div className="globe_area border-0 flex justify-start items-center">
            <Globe
                ref={globeEl}
                globeImageUrl={"../images/io5.jpg"}
                lineHoverPrecision={0}
                width={globeDimensions.width}
                height={globeDimensions.height}
                backgroundColor='#ffffff00'
                showAtmosphere={true}
                onPolygonClick={onCountryClick}
                polygonsData={geoData?.features}
                polygonCapColor={d => d === hoverD ? '#3e8beb' : '#3b82f680'}
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
                polygonStrokeColor={() => '#3e8beb'}
                polygonLabel={({ properties: c }: any) => `<b class='polygon_label'>${c.name} (${c.postal})</b>`}
                onPolygonHover={setHoverD}
                polygonsTransitionDuration={300}
            />
        </div>
    )
}

export default GlobeArea