// Adapted from: https://codepen.io/Alca/pen/JjKjXxK

canvasOptions = {
    autoCompensate: false,
    autoPushPop: true,
    canvas: true,
    centered: true,
    desynchronized: false
};

let count = 650;
const orbitSize = 200;

const randomMoveFactor = .25;
const movement = [];

const minVelocity = .8;
const maxVelocity = 1.1;
const velocities = [];

function draw(e) {
    const time = e * 0.001;

    background(hsl(0, 0, 8, 0.1));
    beginPath();

    for (let i = 0; i < count; i++) {
        const randMovement = movement[i] ?? (movement[i] = 0);
        const velocity = velocities[i] ?? (velocities[i] = getRandomArbitrary(minVelocity, maxVelocity));

        movement[i] = randMovement + getRandomArbitrary(-randomMoveFactor, randomMoveFactor);

        const a = randFract(i, 456) * PI;
        const r = abs(randFract(i, 123) * 200) + orbitSize;
        const z = randFract(i, 789) * 80;

        const v = Vector
            .fa(a, r)
            .setZ(z)
            .addXY(randMovement, randMovement)
            .rotate(time * velocity)
            .rotateYZ(15);

        v.div((v.z + 800) / 800);

        circle(v, 1);
    }

    fill(hsl(0, 0, 100));
}

function getRandomArbitrary(min, max) {
    return random() * (max - min) + min;
}

function randFract(x, y) {
    return sin(new Vector(x, y).dot(12.9898, 78.233)) * 43758.5453 % 1;
}
