# At Break

**At Break** is a breakpoint SASS mixin nice, natural language and compatible with [Bootstrap](http://getbootstrap.com/) to include in your project!

## Requirements

Requires Sass 3.2

## Install

Include `at-break.scss` in your project using [`@import 'at-break.scss'`](https://github.com/manumorante/sass.at-break/blob/master/source/sass/lib/at-break.scss).

## Usage

**At Break** uses the mobile first way.

### Sizes

**A Break** use the [Twitter Bootstrap breakpint sizes](http://getbootstrap.com/css/#grid).

xsmall | small | medium | large
---    | ---   | ---    | ---
480px  | 768px | 992px  | 1200px

### Mixins

```scss
@include at-xsmall {}
@include at-small  {}
@include at-medium {}
@include at-large  {}
```

### Usage example

SASS

```scss
.col {
  width: 100%;
  @include at-small  { width: 50%; }
  @include at-medium { width: 33%; }
  @include at-large  { width: 25%; }
}
```

CSS

```css
.col { width: 100%; }

@media (min-width: 768px) {
  .col { width: 50%; }
}

@media (min-width: 992px) {
  .col { width: 33%; }
}

@media (min-width: 1200px) {
  .col { width: 25%; }
}
```

## License

Copyright (c) 2014 Manu Morante

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
