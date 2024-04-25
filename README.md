<div style="text-align:center;">
<h1>mdModal</h1> 
<img alt="NPM Version" src="https://img.shields.io/npm/v/mdmodal?style=flat&logo=NPM"> 
  
<img alt="NPM Downloads" src="https://img.shields.io/npm/dy/mdmodal?style=flat&logo=npm">
</div>

mdModal is a library that provides modal functionality using Markdown to display content.

## Acknowledgments

Special thanks to [Zerodevx](https://github.com/zerodevx) for inspiring this project with their repository. The original repository, [Zero-md](https://github.com/zerodevx/zero-md), was a valuable resource during the development of this modal.

## How to Use

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/mdModal/mdModal.js"></script>
```

### Using NPM

```bash
npm install mdmodal
```

To use mdModal:

1. Obtain the Markdown file you wish to display (e.g., `ReadMe.md`).
2. Use the following code snippet, specifying the language direction if necessary:

```javascript
mdModal.new('ReadMe.md')
```

## Customization

Customize mdModal using the following features:

### Language

Change the language direction.

- Default: "ar" (right-to-left)

```javascript
mdModal.currentLanguage = "en"; // Direction: ltr
```

### Background Color

Change the background color of the modal.

- Default: #fff

```javascript
mdModal.currentColor = "#000"; // Background: black (dark mode theme)
```

### Modal Style

Change the style of the modal.

- Default: mdModal Style file

```javascript
mdModal.style = "/css/style.css"; // Replace mdModal design
```

### Header

Add a header to the modal.

- Parameter: Text of the Header

```javascript
mdModal.new('ReadMe.md').header("The Header");
```

### Footer

Add a footer to the modal.

- Parameter: Text of the Footer

```javascript
mdModal.new('ReadMe.md').footer("The Footer");
```
