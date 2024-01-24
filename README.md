# image-resizer
A lightweight desktop application to resize images for all operating systems.

## Table of contents
- [image-resizer](#image-resizer)
  - [Table of contents](#table-of-contents)
  - [Technologies used](#technologies-used)
  - [Features](#features)
  - [Installation for development](#installation-for-development)
  - [Installation for production](#installation-for-production)
    - [Windows](#windows)
    - [Linux](#linux)
    - [Mac](#mac)


## Technologies used
- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/en/)
- [resize-img](https://www.npmjs.com/package/resize-img)
- [electron-packager](https://www.npmjs.com/package/electron-packager)
- [toastify-js](https://www.npmjs.com/package/toastify-js) 


## Features
- Resize images to a custom size.
- Resize images to a predefined size.
- Supports bmp, jpg and png formats.

## Installation for development

1. Clone the repository ```git clone https://github.com/Justtejas/image-resizer.git```
2. Install the dependencies ```npm install```
3. Change the following code in ```main.js``` file.
   1. Uncomment line number 7 and line number 26 to 28.
   2. Change the width on line number 15 to "width: isDev ? 1000 : 500"
4. Run the application ```npm start```


## Installation for production

### Windows
1. Clone the repository ```git clone https://github.com/Justtejas/image-resizer.git```
2. run ```npm run package-win``` to create a executable file in the ```release-builds``` folder.
3. Open the release-builds folder and run the executable file.
![img-readme](https://github.com/Justtejas/image-resizer/assets/109242688/44581a92-432f-4cff-bf27-27211df7a5c9)

### Linux
1. Clone the repository ```git clone https://github.com/Justtejas/image-resizer.git```
2. run ```npm run package-linux``` to create a executable file in the ```release-builds``` folder.
3. Open the release-builds folder and run the executable file.

### Mac
1. Clone the repository ```git clone https://github.com/Justtejas/image-resizer.git```
2. run ```npm run package-mac``` to create a executable file in the ```release-builds``` folder.
3. Open the release-builds folder and run the executable file.