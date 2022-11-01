# ngx-logo

Preloading a web page that shows your logo that smoothly transitions to the location you set it to.

![1](https://user-images.githubusercontent.com/43887554/199244504-86bd465f-83a4-4e58-9ba5-360ef541bc59.gif)
![2](https://user-images.githubusercontent.com/43887554/199244528-8fe44f8c-5055-4b55-bb65-569c4bc47110.gif)
![3](https://user-images.githubusercontent.com/43887554/199244543-f26bab50-6bb8-4116-ae10-be5e8134ed3c.gif)
![4](https://user-images.githubusercontent.com/43887554/199244566-aefedf5a-cd1f-4a84-af0a-665614b2ccd8.gif)
![5](https://user-images.githubusercontent.com/43887554/199244576-ddc6fc68-059c-403a-b395-8748da7229db.gif)


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
