import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGFudGgyMzA4IiwiYSI6ImNsaG45NXppbjFkcHkzcm94ZzA4YTcyaHEifQ.fsXhCELfT7dnyxghnDS4Kg';

const Map = (props) => {
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/nishanth2308/clr9gkz5d001801pf5hm077gt',
      center: [80.237617,13.067439],
      zoom: 10,
    });

    if (props.pickup && props.dropoff) {
      // Add pickup and dropoff markers
      addToMap(map, props.pickup, '#808080'); // Green color for pickup
      addToMap(map, props.dropoff, '#808080'); // Red color for dropoff

      // Fetch route data from the Directions API and draw the route
      getDirections(map, props.pickup, props.dropoff);
    }

    if (props.pickup && props.dropoff) {
      map.fitBounds([props.pickup, props.dropoff], {
        padding: 60
      });
    }

  }, [props.pickup, props.dropoff]);

  const addToMap = (map, coordinates, color) => {
    const marker = new mapboxgl.Marker({
      color: color || "#ffffff" // Default to white if no color specified
    }).setLngLat(coordinates).addTo(map);
  }

  const getDirections = async (map, pickup, dropoff) => {
    const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/cycling/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Extract coordinates from the API response
      console.log(data);
      const routeCoordinates = data.routes[0].geometry.coordinates;
      props.setdistance(data.routes[0].distance/1000)
      console.log(data.routes[0].distance);

      // Add a GeoJSON source with a LineString geometry
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': routeCoordinates
          }
        }
      });

      // Add a line layer
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': ' #f2f2f2',
          'line-width': 8
        }
      });

    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  }

  return (
    // h-1/2
    <div className='flex-1  ' id='map'></div>
  )
}

export default Map;
