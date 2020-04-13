export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicnVzaGlsLWRoaW5vamEiLCJhIjoiY2s4dTd1cHM2MDhhajNucGFvdXpoMjkxMiJ9.GnLqy_Er_tIjAG7S16syAw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rushil-dhinoja/ck8u8awy00gmx1imvz3zbwufy',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Add Marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
