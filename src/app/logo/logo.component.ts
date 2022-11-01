import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core'

import { example } from './example'

@Component({
  selector: 'vg-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() alt: string = 'logotype'
  @Input() src: string = example
  @Input() time: number = 400
  @Input() draggable: boolean = false

  private drag: any = {
    start: {
      x: 0,
      y: 0
    },
    active: false,
    animate: false
  }

  constructor(
    private host: ElementRef
  ) { }

  async delay(ms: number): Promise<void> {
    return new Promise(res => {
      setTimeout(() => {
        res()
      }, ms)
    })
  }

  @HostListener('window:load') onLoad(): void {
    this.hide()
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(e: any): void {
    if (!this.draggable) return
    this.moveInteraction(e)
  }

  @HostListener('window:touchmove', ['$event']) onTouchMove(e: any): void {
    if (!this.draggable) return
    this.moveInteraction(e)
  }

  @HostListener('window:mouseup', ['$event']) onMouseUp(e: any): void {
    this.endInteraction(e)
  }

  @HostListener('window:touchend', ['$event']) onTouchEnd(e: any): void {
    this.endInteraction(e)
  }

  async hide(): Promise<void> {
    let logo = this.host.nativeElement.querySelector(':scope > .logo')
    let logoRect = logo.getBoundingClientRect()

    let back = this.host.nativeElement.querySelector(':scope > .back')
    let backStyle = getComputedStyle(back)

    let preload = this.host.nativeElement.querySelector(':scope > .preload')

    let rbgBack: any = backStyle.backgroundColor.match(/[0-9]{1,3}, ?[0-9]{1,3}, ?[0-9]{1,3}/g)[0].split(',')
    rbgBack = rbgBack.map(n => parseInt(n))

    this.drag.active = false
    preload.style.transform = 'translateX(-50%) translateY(-50%)'

    back.style.backgroundColor = `rgba(${rbgBack[0]}, ${rbgBack[1]}, ${rbgBack[2]}, 0)`
    preload.style.width = `${logoRect.width}px`
    preload.style.height = `${logoRect.height}px`
    preload.style.left = `${logo.x+logo.width/2}px`
    preload.style.top = `${logo.y+logo.height/2}px`

    await this.delay(this.time)

    back.style.display = 'none'
    preload.style.display = 'none'
    logo.style.opacity = '1'

    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'

    return new Promise(res => res())
  }

  startInteraction(e: any): void {
    let [x, y] = [0, 0]
    if (e.touches && e.touches[0]) {
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    } else {
      x = e.clientX
      y = e.clientY
    }

    this.drag.start.x = x
    this.drag.start.y = y

    this.drag.active = true
  }

  moveInteraction(e: any): void {
    if (!this.drag.active) return

    let k = 0.3

    let [x, y] = [0, 0]
    if (e.touches && e.touches[0]) {
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    } else {
      x = e.clientX
      y = e.clientY
    }

    let preload = this.host.nativeElement.querySelector(':scope > .preload')
    let preloadRect = preload.getBoundingClientRect()

    preload.style.transform = `translateX(${(x-this.drag.start.x)*k-preloadRect.width/2}px) translateY(${(y-this.drag.start.y)*k-preloadRect.height/2}px)`
  }

  async endInteraction(e: any): Promise<void> {
    let preload = this.host.nativeElement.querySelector(':scope > .preload')

    this.drag.active = false
    this.drag.animate = true

    preload.style.transform = 'translateX(-50%) translateY(-50%)'

    await this.delay(200)

    this.drag.animate = false

    return new Promise(res => res())
  }


  ngOnInit() {
    const scrollbarWidth = window.innerWidth-document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

}
