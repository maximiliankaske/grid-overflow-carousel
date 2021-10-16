# Grid Carousel Template

### Changing the ratio of margin:width

> Always make sure that the width (`w-60` from the div) equals its innerWith (`w-52 mx-4` from the button) 60 = 52 + (4 \* 2)

```html
<div id="gallery" class="...">
  <div id="gallery-wrapper" class="flex w-60 mx-auto">
    <div class="snap-item w-60">
      <button class="h-96 w-52 mx-4"></button>
    </div>
    <div class="snap-item w-60">
      <button id="item-0" class="h-96 w-52 mx-4"></button>
    </div>
  </div>
</div>
```
