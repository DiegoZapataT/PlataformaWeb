export default {
    name: 'mangas',
    title: 'Mangas',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type:'image' }],
            options: { 
                        hotspot: true 
                     }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'editorial',
            title: 'Editorial',
            type: 'string'
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLenght: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}