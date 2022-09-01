const marked = require('marked');
const { emojify } = require('node-emoji');

const renderer = new marked.Renderer();

renderer.text = emojify;

module.exports = {
	marked_options: { renderer },
};