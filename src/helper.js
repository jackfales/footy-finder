export const createDate = (date, time) => {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    return new Date(year, month - 1, day, hour, minute);
};
