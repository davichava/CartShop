export interface Shipping {
    id: number,
    type: string,
    price: number;
}

export const shipping = [
    {
        id: 1,
        type: "Overnight",
        price: 25.99
    },
    {
        id: 2,
        type: "2-Day",
        price: 9.99
    },
    {
        id: 3,
        typr: "Postal",
        price: 2.99
    }
]