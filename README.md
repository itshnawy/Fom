# mdModal

The mdModal library provides a modal functionality that utilizes Markdown to display content.

## Acknowledgments

Special thanks to [Zerodevx](https://github.com/zerodevx) for creating the repository that inspired this project. The original repository, [Zero-md](https://github.com/zerodevx/zero-md), served as a valuable resource in the development of this modal.

## How to Use

To utilize mdModal, follow these simple steps:

1. Obtain the Markdown file you wish to display, for example, a file named `ReadMe.md`.
2. Incorporate the Markdown file into the function as shown below, specifying the language direction if necessary:

For LTR (left-to-right) languages (default direction):

```javascript
mdModal('ReadMe.md')
```

For RTL (right-to-left) languages:

```html
mdModal('ReadMe.md','rtl')
```

3. You can attach the modal functionality to any element within your HTML document. For instance:

```html
<button class="btn" onclick="mdModal('ReadMe.md')">Example</button>
```

That's all there is to it! With mdModal, displaying Markdown content in a modal has never been easier.