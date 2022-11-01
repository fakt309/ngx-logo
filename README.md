# ngx-logo

Preloading a web page that shows your logo that smoothly transitions to the location you set it to.

[DEMO & DOCS](https://fakt309.github.io/ngx-logo/)

[/vgaidadei](https://twitter.com/vgaidadei) - my twitter (you can contact with me if you want to)

# Advantage this lib:

* Hides the ugly loading of your site
* Very simple
* Supports all devices
* Smooth animations
* Distract the user by dragging the logo

# How it use

### 1

```
npm i @vgaidadei/ngx-logo
```

### 2

app.module.ts

```
...

import { NgxLogoModule } from '@vgaidadei/ngx-logo'

...

  imports: [
    ... ,
    NgxLogoModule
  ]

...

```

### 3

any place where you want insert your logo component html file

```

...

  <ngx-logo [alt]="'logotion company'" [src]="'assets/logo.png'"></ngx-logo>

...

```
