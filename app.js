let stations = [];

document.getElementById('addStationBtn').addEventListener('click', () => {
    const stationName = document.getElementById('stationName').value;
    const maxCapacity = parseInt(document.getElementById('maxCapacity').value);

    if (stationName && maxCapacity) {
        const newStation = {
            name: stationName,
            capacity: maxCapacity,
            currentTrains: 0
        };
        stations.push(newStation);
        renderStations();
    } else {
        alert('Please enter a valid station name and capacity.');
    }
});

function renderStations() {
    const stationList = document.getElementById('stationList');
    stationList.innerHTML = '<h2>Stations</h2>';

    stations.forEach((station, index) => {
        const stationDiv = document.createElement('div');
        stationDiv.classList.add('station');
        
        if (station.currentTrains > station.capacity) {
            stationDiv.classList.add('exceeded');
        }

        stationDiv.innerHTML = `
            <div>
                <strong>${station.name}</strong> <br>
                Capacity: ${station.currentTrains} / ${station.capacity}
            </div>
            <div>
                <button onclick="addTrain(${index})">Add Train</button>
                <button onclick="removeTrain(${index})">Remove Train</button>
            </div>
        `;
        stationList.appendChild(stationDiv);
    });
}

function addTrain(index) {
    stations[index].currentTrains++;
    renderStations();
}

function removeTrain(index) {
    if (stations[index].currentTrains > 0) {
        stations[index].currentTrains--;
    }
    renderStations();
}
