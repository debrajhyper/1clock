import { useRef, useEffect, useState } from "react";
import Globe, { GlobeMethods } from 'react-globe.gl';
import geoData from '../utils/customGeo.json'
import CountryData from '../utils/countries.json'

interface CountryPolygon {
    properties?: {
        postal?: string;
        iso_a2?: string;
    };
}

const dynamicWidth = window.innerWidth >= 1024 ? 600 : window.innerWidth >= 750 ? 350 : 420;

function GlobeArea() {
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


    function getCountryTime(timeZone: any) {
        // Default to local time if no options provided
        if (!timeZone) {
            return new Date().toLocaleString();
        }

        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timeZone,
                // timeZoneName: options.gmtName,
                timeStyle: 'long',
            });

            // Use GMT offset if provided
            // if (options.gmtOffset !== undefined) {
            //     const gmtOffsetInMinutes = options.gmtOffset * 60;
            //     return new Date(Date.now() + gmtOffsetInMinutes * 60000).toLocaleString();
            // }

            return formatter.format(new Date());

        } catch (error: any) {
            console.error('Error:', error?.message);
            return 'Invalid options';
        }
    }


    function onCountryClick(polygon: CountryPolygon, event: MouseEvent, { lat, lng, altitude }: { lat: number; lng: number; altitude: number; }) {
        // console.log(polygon, event, { lat, lng, altitude })
        // console.log(polygon?.properties?.postal);

        const co1 = CountryData.find(c => c.iso2 === polygon?.properties?.iso_a2 ? c : null)
        const timezones = co1?.timezones
        const timezoneLength = timezones ? timezones.length : 0;
        console.log('country time Zone -> ', timezoneLength, timezones);

        for (let i = 0; i < timezoneLength; i++) {
            console.log(`Time Zone ${i} -> `, getCountryTime(timezones?.[i]?.zoneName))
        }


        setPov({
            lat: lat,
            lng: lng,
            altitude: altitude
        })
    }


    useEffect(() => {
        console.log('Inside Globe Area')
        let to: string | number | NodeJS.Timeout | undefined;
        (function check() {
            if (globeEl?.current) {
                // globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.7;
                globeEl.current.pointOfView(pov, 800);
                globeEl.current.controls().maxDistance = 500
                globeEl.current.controls().minDistance = 280;
                globeEl.current.controls().enablePointerInteraction = true;
            } else {
                to = setTimeout(check, 1000);
            }
        })();

        return () => {
            if (to) {
                clearTimeout(to);
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
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="globe_area border-0 flex justify-start items-center">
            <Globe
                ref={globeEl}
                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                globeImageUrl={"../images/io5.jpg"}
                lineHoverPrecision={0}
                backgroundColor='#ffffff00'
                // width={w + shiftAmmount}
                // width={600}
                // height={600}
                width={globeDimensions.width}
                height={globeDimensions.height}
                // showGlobe={false}
                //   showAtmosphere={false}
                showAtmosphere={true}
                // onGlobeClick={({ lat, lng }, event) => console.log(lat, lng, event)}
                onPolygonClick={onCountryClick}

                polygonsData={geoData?.features}
                // polygonAltitude={d => d === hoverD ? 0.02 : 0.009 }
                // polygonCapColor={d => d === hoverD ? 'steelblue' : colorScale(getVal(d))}
                polygonCapColor={d => d === hoverD ? '#3e8beb' : '#3b82f680'}
                // polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
                polygonStrokeColor={() => '#3e8beb'}
                polygonLabel={({ properties: c }: any) => `<b class='polygon_label'>${c.name} (${c.postal})</b>`}
                onPolygonHover={setHoverD}
                polygonsTransitionDuration={300}
            />
        </div>
    )
}

// function GlobeArea1() {
//     const globeEl = useRef<GlobeMethods>();

//     const N = 20;
//     const arcsData = Array.from({ length: N },() => ({
//         startLat: (Math.random() - 0.5) * 180,
//         startLng: (Math.random() - 0.5) * 360,
//         endLat: (Math.random() - 0.5) * 180,
//         endLng: (Math.random() - 0.5) * 360,
//         color: [
//             ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
//             ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
//         ],
//     }));

//     const globeMaterial = new THREE.MeshPhongMaterial();
//     globeMaterial.color = new Color(0x3a228a);
//     globeMaterial.emissive = new Color(0x220038);
//     globeMaterial.emissiveIntensity = 0.1;
//     globeMaterial.shininess = 0.7;

//     useEffect(() => {
//         if (globeEl.current !== undefined && globeEl.current.controls) {
//             globeEl.current.controls().enableZoom = false;
//             globeEl.current.controls().autoRotate = true;
//             globeEl.current.controls().autoRotateSpeed = 0.7;
//         }
//     }, []);

//     return (
//         // other elements
//         <Globe
//             arcsData={arcsData}
//             arcColor={"color"}
//             arcDashLength={() => Math.random()}
//             arcDashGap={() => Math.random()}
//             arcDashAnimateTime={() => Math.random() * 10000 + 500}
//             arcAltitude={0.33}
//             hexPolygonsData={countriesData.features}
//             hexPolygonResolution={3}
//             hexPolygonMargin={0.7}
//             showAtmosphere={true}
//             atmosphereAltitude={0.25}
//             height={700}
//             width={600}
//             atmosphereColor="#483685"
//             backgroundColor="rgba(0, 0, 0, 0)"
//             globeMaterial={globeMaterial}
//             ref={globeEl}
//         />
//         // other elements
//     );
// }

export default GlobeArea