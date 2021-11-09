export default function convertUnixDate(date, timezone) {

    let time = new Date((date + timezone) * 1000)
        .toISOString()
        .match(/(\d{2}:\d{2})/)[0];

    return time.startsWith("0") ? time.substring(1) : time;
}
