'use client'

import { useEffect, useRef } from 'react'

const LAT = 43.6525
const LNG = -79.4354
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

const PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44">
  <path d="M16 0C7.163 0 0 7.163 0 16c0 10.667 16 28 16 28S32 26.667 32 16C32 7.163 24.837 0 16 0z" fill="#E3242B"/>
  <circle cx="16" cy="16" r="6" fill="#ffffff"/>
</svg>
`

export default function StudioMap() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const scriptId = 'google-maps-script'
    const init = () => {
      const map = new window.google.maps.Map(ref.current!, {
        center: { lat: LAT, lng: LNG },
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
        ],
      })

      const icon = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(PIN_SVG),
        scaledSize: new window.google.maps.Size(32, 44),
        anchor: new window.google.maps.Point(16, 44),
      }

      new window.google.maps.Marker({
        position: { lat: LAT, lng: LNG },
        map,
        icon,
        title: 'Calvin Thomas Studio',
      })
    }

    if (window.google?.maps) {
      init()
      return
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY ?? ''}`
      script.async = true
      script.onload = init
      document.head.appendChild(script)
    } else {
      document.getElementById(scriptId)!.addEventListener('load', init)
    }
  }, [])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}
