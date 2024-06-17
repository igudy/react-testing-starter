import { http, HttpResponse } from 'msw';

export const handlers = [
    // get categories endpoint
    http.get('/categories', () => {
        return HttpResponse.json([
            { id: 1, name: "Electronics" },
            { id: 2, name: "Beauty" },
            { id: 3, name: "Gardening"}
        ])
    }),

    // get products endpoint
    http.get('/products', () => {
        return HttpResponse.json([
            { id: 1, name: "Product 1" },
            { id: 2, name: "Product 2" },
            { id: 3, name: "Product 3" }
        ])
    })
]