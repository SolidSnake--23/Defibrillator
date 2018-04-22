/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

module.exports = function (readline, print) {
    const asFloat = float => parseFloat(float.replace(',', '.'));
    const LON = asFloat(readline());
    const LAT = asFloat(readline());
    const N = parseInt(readline());
    const locations = [];
    const squareRoot = Math.sqrt;
    const square = x => Math.pow(x, 2);

    const x = (a, b, c, d) => (b - a) * Math.cos((c + d) / 2);
    const y = (a, b) => (b - a);

    const computeDistance = (longitudeA, latitudeA, longitudeB, latitudeB) =>
        squareRoot(square(y(latitudeB, latitudeA)) + square(x(longitudeB, longitudeA, latitudeB, latitudeA))) * 6371;

    for (let i = 0; i < N; i++) {
        const DEFIB = readline().split(';');

        let location = {
            name: DEFIB[1],
            distance: computeDistance(LON, LAT, asFloat(DEFIB[4]), asFloat(DEFIB[5]))
        };

        locations.push(location);
    }

    locations.sort((a, b) => a.distance - b.distance);

    print(locations[0].name)
};
