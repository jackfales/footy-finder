const createDate = (date, time) => {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    return new Date(year, month, day, hour, minute);
};

module.exports = {
    createDate
};