import { Component } from '@angular/core'

@Component({
  selector: 'app-analog-welcome',
  template: `<main class="min-h-screen bg-(--muted) flex flex-col p-8 md:p-32">
    <section class="max-w-4xl mx-auto text-center space-y-6">
      <img
        class="h-12 w-12 mx-auto"
        src="https://analogjs.org/img/logos/analog-logo.svg"
        alt="AnalogJs logo"
      />

      <a
        href="https://twitter.com/analogjs"
        target="_blank"
        class="inline-block px-4 py-1.5 text-sm font-medium bg-(--secondary) text-(--secondary-foreground) rounded-full hover:opacity-80 transition-opacity"
      >
        Follow along on Twitter
      </a>

      <h1 class="text-4xl md:text-7xl font-bold tracking-tight">
        <span class="text-analog-red">Analog.</span> The fullstack Angular
        meta-framework
      </h1>

      <p class="text-lg md:text-xl text-(--muted-foreground) max-w-2xl mx-auto">
        Analog is for building applications and websites with Angular. Powered
        by Vite.
      </p>

      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <a
          href="https://analogjs.org"
          class="px-8 py-3 text-sm font-medium bg-(--primary) text-(--primary-foreground) rounded-lg hover:opacity-90 transition-opacity"
        >
          Read the docs
        </a>
        <a
          href="https://github.com/analogjs/analog"
          target="_blank"
          class="px-8 py-3 text-sm font-medium bg-(--background) text-(--foreground) border border-(--border) rounded-lg hover:bg-(--muted) transition-colors"
        >
          Star on GitHub
        </a>
      </div>
    </section>

    <section class="max-w-xl mx-auto text-center mt-24 space-y-4">
      <h2 class="text-2xl font-semibold text-analog-red">Counter</h2>
      <p class="text-(--muted-foreground)">
        Simple interactive counter powered by Angular.
      </p>
      <button
        (click)="increment()"
        class="px-8 py-3 text-sm font-medium bg-(--background) text-(--foreground) border border-(--border) rounded-lg hover:bg-[var(--muted)] transition-colors"
      >
        Count: <span class="font-mono ml-1">{{ count }}</span>
      </button>
    </section>
  </main> `,
})
export class AnalogWelcome {
  count = 0
  increment() {
    this.count++
  }
}
