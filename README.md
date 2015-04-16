# At Break (Breakpoint SASS Mixin)

At Break is a nice, natural language way to use breakpoints!

## Requirements

Requires Sass 3.2, which was just recently released.

## Install

Include `at-break.scss` in your proyect using [`@import 'at-break.scss'`](https://github.com/manumorante/sass.at-break/blob/master/source/sass/lib/at-break.scss).

## Usage

At-break use the mobile first way and the Twitter Bootstrap breakpint sizes.

### Sizes

*Widths*
480px, 768px, 992px, 1200px

*Heights*
300px, 480px, 620px, 750px

### Mixins

```scss
@include at-xsmall {}
@include at-small  {}
@include at-medium {}
@include at-large  {}
```

### @include at-small()

The `@include at-small()` mixin ...

## Usage Example

```scss
.foo {
  @include at-small {
    content: 'Samall';
  }
}

.bar {
  @include at-medium {
    content: 'Smedium';
  }
}

.baz {
  @include at-large {
    content: 'Slarge';
  }
}
```

```css
@media (min-width: 768px) {
  .foo {
    content: 'Samall';
  }
}

@media (min-width: 992px) {
  .bar {
    content: 'Smedium';
  }
}

@media (min-width: 1200px) {
  .baz {
    content: 'Slarge';
  }
}
```

## Options

A few default options that you can change.

* `$breakpoint-default-media` - Defaults to 'all'. If you...

## License

Copyright (c) 2014 Manu Morante

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
