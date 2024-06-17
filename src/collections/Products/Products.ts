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
        }
    ]
}