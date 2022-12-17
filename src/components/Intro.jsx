import introImg from '../images/intro.jpg?jpg'
import Button from './Button'
import Callback from './Callback'
import Image from './Image'

export default function Intro() {
  return (
    <section className="intro relative isolate bg-[#1d93c1] text-white">
      <Image
        src={introImg}
        alt=""
        fetchpriority="high"
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
      />
      <div className="container">
        <div className="flex flex-col justify-center py-[60px] sm:py-[70px] md:py-[85px] lg:py-[100px]">
          <p className="mb-4 font-display text-[22px] leading-tightest -tracking-tighter sm:mb-[10px] sm:text-[25px] lg:text-[28px]">
            Медицинский профилактический центр
          </p>
          <h1 className="font-display text-[60px] font-bold leading-none -tracking-tighter sm:text-[80px] md:text-[100px] lg:text-[128px]">
            «ЭМЧИ»
          </h1>
          <div className="mt-[48px] flex flex-col gap-x-[30px] gap-y-4 sm:flex-row">
            <Button
              as="a"
              href="#"
              variant="tertiary"
              size="md"
              class="min-w-[194px]"
            >
              Записаться на прием
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="md"
              class="min-w-[194px]"
              onclick="callbackModal.showModal()"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
      <Callback />
    </section>
  )
}
