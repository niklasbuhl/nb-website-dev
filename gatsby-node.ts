import type { GatsbyNode } from "gatsby"

const path = require("path")

interface INode {
	id: string
	frontmatter: {
		title: string
		slug: string
		type: string
	}
	internal: {
		contentFilePath: string
	}
}

// interface IData {
// 	data: {
// 		allMdx: {
// 			nodes: [INode]
// 		}
// 	}
// }

export const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
	reporter,
}) => {
	// exports.createPages = async ({ graphql, actions, reporter }) => {
	// Destructure the createPage function from the actions object
	const { createPage } = actions

	// TODO Typescript this
	const result: any = await graphql(`
		query ContentQuery {
			allMdx {
				nodes {
					id
					frontmatter {
						slug
						type
					}
					internal {
						contentFilePath
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}
	// Create blog post pages.
	const contents = result.data.allMdx.nodes
	// you'll call `createPage` for each result
	// console.log("Projects")
	console.log(contents)

	const projectPageLayoutPath = path.resolve(
		`./src/layouts/projectPageLayout.component.tsx`
	)

	const subProjectPageLayoutPath = path.resolve(
		`./src/layouts/subProjectPageLayout.component.tsx`
	)

	const writingPageLayoutPath = path.resolve(
		`./src/layouts/writingPageLayout.component.tsx`
	)

	contents.forEach((node: INode) => {
		// Articles
		if (node.frontmatter.type === "article") {
			createPage({
				path: `/articles/${node.frontmatter.slug}`,
				component: `${writingPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		}

		// Article (Guide)
		if (node.frontmatter.type === "guide") {
			createPage({
				path: `/guides/${node.frontmatter.slug}`,
				component: `${writingPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		}

		// Article (Tutorials)
		if (node.frontmatter.type === "tutorial") {
			createPage({
				path: `/tutorials/${node.frontmatter.slug}`,
				component: `${writingPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		}

		// Sub Articles

		// Blog Posts

		// Projects
		if (node.frontmatter.type === "project") {
			createPage({
				path: `/projects/${node.frontmatter.slug}`,
				component: `${projectPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		}

		// Sub Projects
		if (node.frontmatter.type === "sub-project") {
			createPage({
				path: `/projects/${node.frontmatter.slug}`,
				component: `${subProjectPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		}
	})
}
