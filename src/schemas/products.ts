import { defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

const TITLE = "Product";

export default defineField({
	name: "product",
	title: TITLE,
	type: "document",
	icon: TagIcon,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "name",
				maxLength: 200,
			},
		}),
		defineField({
			name: "category",
			type: "reference",
			title: "Category",
			to: [{ type: "category" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
		}),
		defineField({
			name: "price",
			type: "number",
			title: "Price",
			validation: (Rule) => Rule.positive().required(),
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Images",
			of: [{ type: "image" }],
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "name",
			imageUrl: "images.0.asset.url",
		},
		prepare({ title, imageUrl }) {
			return {
				title,
				imageUrl,
			};
		},
	},
});
