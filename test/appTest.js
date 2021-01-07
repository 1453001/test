const assert = require('chai').assert;
const app = require('../test3');

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

describe('Test 3', () => {
    it('should return 5', () => {
            let result = app.calculateParkingFee(arrParkingTimeInfo[0])
            assert.equal(result, 5);
        });
    it('should return 135', () => {
            let result = app.calculateParkingFee(arrParkingTimeInfo[1])
            assert.equal(result, 135);
        });
    it('should return error', () => {
            let result = app.calculateParkingFee(23112)
            console.log(result)
            assert.equal(result, 'Error format');
        });
});
