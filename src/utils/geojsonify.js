const geojsonify = (data, limit, offset) => ({
  type: "FeatureCollection",
  features: data.businesses.map((item) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [item.coordinates.longitude, item.coordinates.latitude],
    },
    properties: {
      ...item,
    },
  })),
  region: data.region,
  total: data.total,
  limit,
  offset,
});

export { geojsonify };
