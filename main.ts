import {
	MarkdownPostProcessorContext,
	Plugin,
} from "obsidian";
import {CustomBlockRenderer} from "./CustomBlockRenderer";

export default class CustomBlocksPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor(
			"block",
			this.processMarkdown.bind(this)
		);
	}

	async processMarkdown(
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext
	): Promise<any> {
		ctx.addChild(new CustomBlockRenderer(el, source, ctx));
	}

	onunload() {}
}
