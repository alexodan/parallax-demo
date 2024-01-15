# Challenge - Parallax

This repo aims to recreate some cool animations ranging to basic parallax to using interjection observers, making these as ready for production as possible.

The first one uses perspective and plain CSS, no JavaScript involved.

## Run the project

Simply do `yarn install` and `yarn dev` at the root, it should start at `localhost:5173`, unless you are using that port already (check in terminal).

## Struggles

### First challenge

- Perspective (and `transform-origin`): Why the heck translateZ was messing with my elements positioning? Well, the aswer is intuitive (at least when you know about it). I was missing the fact objects look smaller/bigger depending on how further/closer from user's POV they are (basically Z axis). It also depends on where the object is located in terms of the X/Y axis and the point of origin for the main axis translation, since when centered the object won't translate (move) in that axis.

## Learnings

### First challenge

- Perspective (and `transform-origin`): Related with the struggle, it started to make some sense when taking into account the [vanishing point](https://www.artistic.photo/blog/the-vanishing-point) and how it impacted on the elements positioning and translations (Thanks Sandrina).

## References

- Perspective https://imjignesh.com/how-css-perspective-works/
- Parallax guide https://imjignesh.com/css-only-parallax/
