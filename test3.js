// let arrVehicles = [
//     {
//         'id': 0,
//         'type': 'car',
//         'price': 5,
//         'minWidth': 2
//     },
//     {
//         'id': 1,
//         'type': 'bike',
//         'price': 5,
//         'minWidth': 0.8
//     }
// ]

let arrParkingTimeInfo = [
    {
        'id': 0,
        'space': 'a',
        'timeIn': new Date('5/1/2021'),
        'timeOut': '',
        'vehicleType': 0,
        'width': 2.2
    },
    {
        'id': 0,
        'space': 'b',
        'timeIn': new Date('12/12/2020'),
        'timeOut': '',
        'vehicleType': 1,
        'width': 0.6
    },
    {
        'id': 2,
        'space': 'b',
        'timeIn': new Date('5/1/2020'),
        'timeOut': '',
        'vehicleType': 1,
        'width': 0.8
    },
]
function calculateParkingFee(parkingTimeInfo) {
    try {
        let timeOut = new Date()
        let timeIn = new Date(parkingTimeInfo?.timeIn) // 
        // Parking price for all vehicles is $5/day
        let parkingPrice = 5
        console.log(timeIn)
        if (isNaN(timeIn.getTime())) {
            throw new Error('Error format');
        }
        let totalDays =  Math.ceil(((timeOut-timeIn < 1) ? 1 : timeOut-timeIn) / (1000 * 60 * 60 * 24))
        return parkingPrice * totalDays
    }
    catch (e) {
        return e.message
    }
}

console.log('Parking fee 0: ', calculateParkingFee(arrParkingTimeInfo[0]))
console.log('Parking fee 1: ', calculateParkingFee(arrParkingTimeInfo[1]))
console.log('Parking fee 2: ', calculateParkingFee(arrParkingTimeInfo[2]))
console.log('Parking fee 2: ', calculateParkingFee(2324))

module.exports = {
    calculateParkingFee
}