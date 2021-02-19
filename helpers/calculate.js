//Return distance in KM
const calculateDistance = (lon1, lat1, lon2, lat2) => {
    let R = 6371; // km

    let x1 = lat2 - lat1;
    let dLat = toRad(x1);
    let x2 = lon2 - lon1;
    let dLon = toRad(x2);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
    return distance;
};

const toRad = x => {
    return (x * Math.PI) / 180;
}

const calculatelesserId = (distances) => {
    let menor = distances[0].distance;
    let menorId = 0;
    for (let i = 0; i < distances.length; i++) {
        if(distances[i].distance < menor){
            menor = distances[i].distance;
            menorId = distances[i].id;
        }
    }
    return menorId;
}

module.exports = {calculateDistance,calculatelesserId};