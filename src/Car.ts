export interface Location {
    x: number
    y: number
}

export interface Orientation {
    radians: number
}

export interface Car {
    location: Location
    orientation: Orientation
    wheelsOrientation: Orientation
    interaxelDistance: number
    speed: number
}

function sin(n: number): number {
    return Math.sin(n)
}

function cos(n: number): number {
    return Math.cos(n)
}

export function updateCarPosition(car: Car, deltaTime: number) {
    function l(o: any) {
        const firstKey = Object.keys(o).find(() => true)
        if (firstKey) {
            console.log(firstKey, o[firstKey])
        }
    }
    const turningRadius = car.interaxelDistance / Math.tan(car.wheelsOrientation.radians)
    l({turningRadius})

    const distanceTraveled = deltaTime * car.speed
    l({distanceTraveled})

    const angleOfRotation = distanceTraveled / turningRadius
    l({angleOfRotation})

    const newOrientation = car.orientation.radians + angleOfRotation
    l({newOrientation})
    const newX = car.location.x + turningRadius * (sin(newOrientation) - sin(car.orientation.radians))
    l({newX})
    const newY = car.location.y - turningRadius * (cos(newOrientation) - cos(car.orientation.radians))
    l({newY})

    car.orientation.radians = newOrientation
    car.location.x = newX
    car.location.y = newY
}