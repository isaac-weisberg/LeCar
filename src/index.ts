import {Car, updateCarPosition} from './Car'

const car: Car = {
    location: {
        x: 0,
        y: 0
    },
    orientation: {
        radians: 0
    },
    wheelsOrientation: {
        radians: Math.PI / 6
    },
    interaxelDistance: 1,
    speed: 1
}

console.dir(car)

updateCarPosition(car, 1)

console.dir(car)