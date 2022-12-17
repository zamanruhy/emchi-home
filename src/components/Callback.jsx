import { onMount } from 'solid-js'
import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'

function script() {
  const els = Array.from(document.querySelectorAll('dialog'))
  if (!els.length) return

  els.forEach((el) => {
    function outsideClick(e) {
      if (el.open && !el.contains(e.target)) {
        el.close()
      }
    }

    window.addEventListener('click', outsideClick, { capture: true })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Callback() {
  onMount(script)
  return (
    <dialog
      id="callbackModal"
      className="callback max-h-[calc(100%-20px)] w-[calc(100%-20px)] max-w-[1000px]
        rounded-lg bg-[#fafafa] p-[30px] text-primary-500 shadow
        backdrop:pointer-events-none backdrop:bg-black/60 sm:p-[50px] md:p-[70px]"
    >
      <h3 className="mb-5 font-display text-[32px] font-bold leading-tightest -tracking-tighter md:text-[32px]">
        Заказать обратный звонок
      </h3>
      <p className="mb-[40px] max-w-[46ch] font-light md:mb-[50px]">
        Заполните форму обратной связи и наш специалист свяжется с вами в
        ближайшее время и ответит на все интересующие вопросы
      </p>
      <form action="" className="">
        <div className="mb-[10px] grid gap-x-[24px] gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-x-[36px]">
          <Input name="name" placeholder="ФИО" required variant="primary" />
          <Input
            type="tel"
            name="phone"
            placeholder="+ 7 (___) __-__-__"
            required
            variant="primary"
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            class="md:w-[150px] lg:w-[194px]"
          >
            Отправить
          </Button>
        </div>
        <Checkbox
          name="allow"
          required
          label="Я согласен на обработку своих персональных данных"
          variant="primary"
        />
      </form>
    </dialog>
  )
}
