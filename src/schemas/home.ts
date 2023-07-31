import { defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

const TITLE = "Home";

export default defineField({
	name: "home",
	title: TITLE,
	type: "document",
	icon: HomeIcon,
	groups: [{ default: true, name: "editorial", title: "Editorial" }],
	fields: [
		defineField({
			name: "hero",
			type: "array",
			group: "editorial",
			of: [
				{
					type: "object",
					name: "Hero Image",
					fields: [
						{ name: "src", type: "image", title: "Image" },
						{ name: "title", type: "string", title: "Title" },
						{
							type: "object",
							name: "button",
							fields: [
								{ name: "name", type: "string" },
								{
									name: "url",
									type: "string",
									description:
										"Dirección donde irá al hacer click, ejemplo /compra-ya/esto",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "notification",
			type: "array",
			group: "editorial",
			of: [{ type: "string" }],
		}),
		defineField({
			type: "object",
			name: "call_to_action",
			title: "Call to Action",
			group: "editorial",
			fields: [
				{ name: "src", type: "url", title: "Image" },
				{ name: "title", type: "string", title: "Title" },
				{ name: "small", type: "string", title: "Small" },
				{ name: "button", type: "string", title: "Button" },
			],
		}),
		defineField({
			name: "picks_collections",
			type: "array",
			title: "Collections",
			group: "editorial",
			of: [{ type: "reference", to: [{ type: "collection" }] }],
		}),
		defineField({
			name: "featured_products",
			type: "array",
			title: "Featured Products",
			group: "editorial",
			of: [{ type: "reference", to: [{ type: "product" }] }],
		}),
	],
	preview: {
		prepare() {
			return {
				media: HomeIcon,
				subtitle: "Index",
				title: TITLE,
			};
		},
	},
});
