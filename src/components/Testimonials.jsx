import { onMount } from 'solid-js'
import Testimonial from './Testimonial'

import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

import Swiper, { Navigation, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

function script() {
  const el = document.querySelector('.testimonials')
  if (!el) return

  const sliderEl = el.querySelector('[data-slider]')
  const prevEl = el.querySelector('[data-prev]')
  const nextEl = el.querySelector('[data-next]')
  const scrollbarEl = el.querySelector('[data-scrollbar]')

  new Swiper(sliderEl, {
    modules: [Navigation, Scrollbar, A11y],
    slidesPerView: 'auto',
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl
    },
    scrollbar: {
      el: scrollbarEl,
      draggable: true
    }
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

const items = [
  {
    src: 'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=100&h=100&q=80',
    name: 'Иванов И.И.',
    position: 'Врач: Петров В.В.',
    text: `Имеется спорная точка зрения, гласящая примерно следующее: сделанные на базе интернет-аналитики выводы, инициированные исключительно синтетически, описаны максимально подробно. Прежде всего, повышение уровня гражданского сознания не оставляет шанса для позиций, занимаемых участниками в отношении поставленных задач.`
  },
  {
    src: '',
    name: 'Бадмацыренова А.Б.',
    position: 'Врач: Базардоржиев К.О.',
    text: `Имеется спорная точка зрения, гласящая примерно следующее: сделанные на базе интернет-аналитики выводы, инициированные исключительно синтетически, описаны максимально подробно. `
  },
  {
    src: 'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=100&h=100&q=80',
    name: 'Сидорова А.Б.',
    position: 'Врач: Петров В.В.',
    text: `Имеется спорная точка зрения, гласящая примерно следующее`
  }
]

export default function Testimonials() {
  onMount(script)
  return (
    <section className="testimonials mb-[60px] md:mb-[100px]">
      <h2 className="title mb-[40px] md:mb-[50px]">Отзывы</h2>
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
            {Array.from({ length: 3 }).map((_) => (
              <>
                {items.map((item) => (
                  <div className="swiper-slide flex h-auto w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                    <Testimonial {...item} />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mx-6 mt-[40px] h-px bg-primary-500 md:mt-[50px] xl:mx-0 [&>*]:top-[-2px] [&>*]:h-[5px] [&>*]:bg-primary-500"
        data-scrollbar
      />
    </section>
  )
}
