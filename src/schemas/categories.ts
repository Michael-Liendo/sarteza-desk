import { defineField } from "sanity";
import { DatabaseIcon } from "@sanity/icons";

const TITLE = "Category";

export default defineField({
	name: "category",
	title: TITLE,
	type: "document",
	icon: DatabaseIcon,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			description: "A brief description of the category.",
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Image",
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});
