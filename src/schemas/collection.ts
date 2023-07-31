import { defineField } from "sanity";
import { DatabaseIcon } from "@sanity/icons";

const TITLE = "Collections";

export default defineField({
	name: "collection",
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
			description: "A brief description of the Collection.",
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
