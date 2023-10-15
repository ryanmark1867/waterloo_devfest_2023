// Get the state dropdown and map elements.
const stateDropdown = document.querySelector('#state');
const map = document.querySelector('#map');

// Create a Simplemaps map.
const usmap = new Simplemaps_USMap({
  element: map,
});

// Add a listener to the state dropdown to update the map when a state is selected.
stateDropdown.addEventListener('change', () => {
  const state = stateDropdown.value;

  // Zoom in to the selected state.
  usmap.zoomToState(state);

  // Select the state on the map.
  usmap.selectState(state);
});

// Zoom in to the continental United States by default.
usmap.zoomToContinents();
