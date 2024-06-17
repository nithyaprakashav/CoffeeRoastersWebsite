import { PRODUCT_CATEGORIES } from "../../config/index";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: "name"
    },
    access: {

    },
    fields: [
        {
            name: "name",
            label: "Product Name",
            type: "text",
            required: true
        },
        {
            name: "description",
            label: "Product details",
            type: "textarea",
        },
        {
            name: "price",
            label: "Price is INR",
            min: 0,
            max: 10000,
            type: "number",
            required: true
        },
        {
            name: "category",
            label: "Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({label,value}) => ({label,value})),
            required: true,
        },
        {
            name: "approvedForSale",
            label: "Product Status",
            type: "select",
            defaultValue: "pending",
            access: {
                create: ({req}) => req.user.role === 'admin',
                read: ({req}) => req.user.role === 'admin',
                update: ({req}) => req.user.role === 'admin',
            },
            options: [
                {
                    label: "Verification pending",
                    value: "pending"
                },
                {
                    label: "Approved",
                    value: "approved"
                },
                {
                    label: "Denied",
                    value: "denied"
                }
            ]
        },
        {
            name: "priceId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: "text",
            admin: {
                hidden: true
            },
        },
        {
            name: "stripeId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: "text",
            admin: {
                hidden: true
            },
        },
        {
            name: "images",
            type: "array",
            label: "Product images",
            minRows: 1,
            maxRows: 6,
            required: true,
            labels: {
                singular: "Image",
                plural: "Images"
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                }
            ]
        }
    ]
}