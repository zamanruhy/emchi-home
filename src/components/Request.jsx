import Button from './Button'
import Checkbox from './Checkbox'
import Input from './Input'

export default function Request() {
  return (
    <section className="request mb-[60px] rounded-lg bg-primary-500 px-[30px] pt-[30px] pb-[40px] text-white sm:p-[50px] md:mb-[100px] lg:py-[74px] lg:px-[96px]">
      <div className="mb-[40px] flex flex-col gap-x-[24px] gap-y-2 md:mb-[50px] md:flex-row lg:gap-x-[36px]">
        <h2 className="shrink-0 font-display text-[32px] font-bold leading-tightest -tracking-tighter md:w-[40%]">
          Остались вопросы?
        </h2>
        <p className="mt-2 grow font-light">
          Заполните форму обратной связи и наш специалист свяжется с вами в
          ближайшее время и ответит на все интересующие вопросы
        </p>
      </div>
      <form action="" className="">
        <div className="mb-[10px] grid gap-x-[24px] gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-x-[36px]">
          <Input name="name" placeholder="ФИО" required variant="secondary" />
          <Input
            type="tel"
            name="phone"
            placeholder="+ 7 (___) __-__-__"
            required
            variant="secondary"
          />
          <Button
            type="submit"
            variant="tertiary"
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
          variant="secondary"
        />
      </form>
    </section>
  )
}
