# mdModal

The mdModal library provides a modal functionality that utilizes Markdown to display content.

## Acknowledgments

Special thanks to [Zerodevx](https://github.com/zerodevx) for creating the repository that inspired this project. The original repository, [Zero-md](https://github.com/zerodevx/zero-md), served as a valuable resource in the development of this modal.

## How to Use


Add the CDN to Your Website :
```
https://cdn.statically.io/gh/itshnawy/mdModal/main/dist/mdModal.min.js
```


To utilize mdModal, follow these simple steps:

1. Obtain the Markdown file you wish to display, for example, a file named `ReadMe.md`.
2. Incorporate the Markdown file into the function as shown below, specifying the language direction if necessary:

```javascript
mdModal('ReadMe.md')
```

### Customization

Customization features on the modal

#### Dirction

To change the dirction of the modal, you need to add dir parameter, like this:

> default: LTR

```javascript
mdModal(src = 'ReadMe.md', dir = 'LTR')
```

#### Header 

If you want to add a header to the modal, include the 'header' parameter in the function:

> default: NONE

```javascript
mdModal(src = 'ReadMe.md', dir = 'LTR', header ='The Title')
```

#### Background 

If you want to add a header to the modal, include the 'bg' parameter in the function:

> default: White Color

```javascript
mdModal(src = 'ReadMe.md', dir = 'LTR', header ='The Title', bg = '#fff')
```

#### Font 

If you want to customize markdown font on the modal , include the 'fontSrc' parameter in the function to set the font link and include the 'fontName' parameter in the function to set the font name, example: 

> default: The Default Font Is Tajawal

```javascript
mdModal(src = 'ReadMe.md', dir = 'LTR', header ='The Title', bg = '#fff', fontSrc = '{FONT-LINK}', fontName = '{FONT-NAME}')
```
