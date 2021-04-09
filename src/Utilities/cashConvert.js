const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const toCashString = (pennies) => {
    return formatter.format(pennies);
};
