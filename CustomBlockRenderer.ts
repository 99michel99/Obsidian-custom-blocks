import {MarkdownPostProcessorContext, MarkdownRenderChild, MarkdownRenderer} from "obsidian";

export class CustomBlockRenderer extends MarkdownRenderChild {
	statblockEl: HTMLDivElement;

	constructor(containerEl: HTMLElement, source: string, ctx: MarkdownPostProcessorContext) {
		super(containerEl);

		let match = source.match(/#class="(.*)"/);
		source = source.replace(/#class="(.*)"/, '');

		let classes = '';
		if (match) {
			classes = match[1];
		}

		this.statblockEl = this.containerEl.createDiv({cls: classes});

		MarkdownRenderer.renderMarkdown(source, this.statblockEl, ctx.sourcePath, this)
	}
}
