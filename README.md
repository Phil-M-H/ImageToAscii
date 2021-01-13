# ImageToAscii
## Plan
### A web server that will authenticate users using jwt, and then accept http requests containing images, covert those images to ASCII, and then send it back as text.

## Current Status
### 1/13/2020
#### I conveniently found a small Java program online that converts reads an image file then writes out an ASCII file (Img2Ascii.java).
#### I've also created a small node.js module that will create a child process and launch Img2Ascii within it, while redirecting stdin/stdout. For testing purposes, the node.js program is currently reading an image file, then passing that data to the program.
