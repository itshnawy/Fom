# mdModal

The mdModal library provides a modal functionality that utilizes Markdown to display content.

## Acknowledgments

Special thanks to [Zerodevx](https://github.com/zerodevx) for creating the repository that inspired this project. The original repository, [Zero-md](https://github.com/zerodevx/zero-md), served as a valuable resource in the development of this modal.

## How to Use
To use mdModal in your project, you can include it via a CDN or install it using npm:

### CDN

```
<script src="https://cdn.jsdelivr.net/npm/mdModal/mdModal.js"></script>

```

### NPM

```
npm i mdmodal
```


To utilize mdModal, follow these simple steps:

1. Obtain the Markdown file you wish to display, for example, a file named `ReadMe.md`.
2. Incorporate the Markdown file into the function as shown below, specifying the language direction if necessary:

```javascript
mdModal.new('ReadMe.md')
```

## Customization

Customization features on the modal

### language

if you want to change the language direction

> default: ar

```javascript
mdModal.currentLanguage = "en" // dir = ltr
```

### Background 

if you want to change The background of the Modal

> default: #fff

```javascript
mdModal.currentColor = "#000" // background will be black and it'll use dark mode theme
```

### Modal Style 

if you want to change The Style of the Modal


> default: mdModal Style file

```javascript
mdModal.style = "/css/style.css" // will replace the design of md modal
```

### Header 

If you want to add a header to the modal, include the 'header' parameter in the function:

> default: NONE

```javascript
mdModal.new('ReadMe.md').header("The Header")
```
### Footer 

If you want to add a footer to the modal, include the 'footer' function like this:

> default: NONE

```javascript
mdModal.new('ReadMe.md').footer("the footer")
```

