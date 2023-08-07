function convertTime(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate - startDate;

    const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(
        (timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
    );

    if (years) {
        return `${years} Year${years !== 1 ? 's' : ''} ${months} Month${months !== 1 ? 's' : ''}`;
    }
    return `${months} Month${months !== 1 ? 's' : ''}`;
}

export default convertTime;
