export default function windDirection(d) {
    const direction = ['Северное', 'Северо-восточное', 'Восточное', 'Юго-восточное', 'Южное', 'Юго-западное', 'Западное', 'Северо-западное']

    d += 22.5;

    if (d < 0)
        d = 360 - Math.abs(d) % 360;
    else
        d = d % 360;

    let w = parseInt(d / 45);
    return direction[w];
}
