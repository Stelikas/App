createListingsMap({
  mapId: 'categorySideMap',
  jsonFile: '/js/rooms-geojson.json',
  mapPopupType: 'rental',
  useTextIcon: true
  // tileLayer: tileLayers[5]  - uncomment for a different map styling
})

const snapSlider = document.getElementById('slider-snap')

noUiSlider.create(snapSlider, {
  start: [40, 110],
  snap: false,
  connect: true,
  step: 1,
  range: {
    min: 40,
    max: 110
  }
})
const snapValues = [
  document.getElementById('slider-snap-value-from'),
  document.getElementById('slider-snap-value-to')
]
const inputValues = [
  document.getElementById('slider-snap-input-from'),
  document.getElementById('slider-snap-input-to')
]
snapSlider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].innerHTML = values[handle]
  inputValues[handle].value = values[handle]
})
