import { onMount } from 'solid-js'

import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

import Swiper, { Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'

function script() {
  const el = document.querySelector('.useful')
  if (!el) return

  const sliderEl = el.querySelector('[data-slider]')
  const prevEl = el.querySelector('[data-prev]')
  const nextEl = el.querySelector('[data-next]')

  new Swiper(sliderEl, {
    modules: [Navigation, A11y],
    slidesPerView: 'auto',
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl
    }
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Useful() {
  onMount(script)
  return (
    <section className="useful mb-[60px] md:mb-[100px]">
      <h2 className="title mb-[40px] md:mb-[50px]">Полезные ссылки</h2>
      <div className="relative flex items-center">
        <button
          className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white disabled:opacity-50
          xl:absolute xl:top-1/2 xl:-translate-y-1/2"
          classList={{ '-ml-4 xl:ml-0 xl:right-full': true }}
          data-prev
        >
          <PrevIcon className="h-3 fill-current" />
        </button>
        <button
          className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white disabled:opacity-50
          xl:absolute xl:top-1/2 xl:-translate-y-1/2"
          classList={{ 'order-last -mr-4 xl:mr-0 xl:left-full': true }}
          data-next
        >
          <NextIcon className="h-3 fill-current" />
        </button>
        <div className="swiper -mx-3 grow overflow-x-hidden" data-slider>
          <div className="swiper-wrapper flex">
            {Array.from({ length: 8 }).map((_) => (
              <div className="swiper-slide flex h-auto w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                <a
                  href="#"
                  className="flex w-full flex-col items-center gap-4 rounded-lg bg-[#fafafa] p-5 text-center hover:underline sm:flex-row sm:text-left"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Ministry_of_Health_of_Russia.svg/929px-Emblem_of_Ministry_of_Health_of_Russia.svg.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-[66px] w-[60px] shrink-0 object-contain"
                  />
                  <p className="max-w-[40ch] font-light sm:max-w-none">
                    Министерство здравоохранения Российской Федерации
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
