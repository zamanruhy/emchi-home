import Service from './Service'
import NextIcon from '../icons/next.svg?component'

export default function Services() {
  return (
    <section id="services" className="services mb-[60px] md:mb-[100px]">
      <div className="mb-[50px] grid items-start gap-[30px] md:grid-cols-[43%_minmax(0,1fr)]">
        <div className="">
          <h2 className="title mb-5">Услуги</h2>
          <p className="max-w-[45ch] font-light">
            Повседневная практика показывает, что современная методология
            разработки, в своём классическом представлении, допускает внедрение
            анализа существующих паттернов поведения
          </p>
        </div>
        <div className="bg-[#fafafa] px-5 pb-5 pt-6">
          <h3 className="mb-[26px] font-display text-[23px] font-bold leading-tightest -tracking-tighter">
            График работы
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="">
              Понедельник-пятница: <b className="font-black">09:00-16:00</b>
            </div>
            <div className="">
              Перерыв: <b className="font-black">12:00-12:30</b>
            </div>
            <div className="">
              Суббота-Воскресение: <b className="font-black">Выходной</b>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[25px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <Service index={i} />
        ))}
      </div>
      <div className="mt-[30px] flex justify-end">
        <a
          href="#"
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          Смотреть все{' '}
          <NextIcon className="mt-[3px] h-3 shrink-0 fill-current" />
        </a>
      </div>
    </section>
  )
}
