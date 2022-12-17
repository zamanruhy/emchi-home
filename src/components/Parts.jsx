import CalendarIcon from '../icons/calendar.svg?component'
import UserPlusIcon from '../icons/user-plus.svg?component'
import CommentIcon from '../icons/comment.svg?component'

const parts = [
  { Icon: CalendarIcon, name: 'Записаться <br />на прием к врачу' },
  { Icon: UserPlusIcon, name: 'Войти <br />в личный кабинет' },
  { Icon: CommentIcon, name: 'Обратная <br />связь' }
]

export default function Parts() {
  return (
    <section className="parts mb-[60px] bg-[#fafafa] py-[50px] shadow md:mb-[100px] md:py-[72px]">
      <div className="container">
        <div className="flex flex-col gap-y-[40px] gap-x-[30px] lg:flex-row lg:items-center">
          <div className="grow">
            <h2 className="mb-[20px] font-display text-[32px] font-bold leading-tightest -tracking-tighter">
              Запись к врачу online
            </h2>
            <p className="max-w-[46ch] font-light">
              Воспользуйтесь online сервисами для Записи на прием к врачу, входа
              в Личный кабинет, либо получите ответы на интересующие вопросы
              через Обратную связь
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-5 sm:gap-[25px]">
            {parts.map(({ Icon, name }) => (
              <a
                href="#"
                className="flex w-[168px] shrink-0 grow flex-col items-center rounded-lg bg-primary-500 py-[30px] px-[16px] text-center text-white transition hover:bg-primary-400 sm:grow-0"
              >
                <Icon className="mb-[20px] w-[50px] fill-current" />
                <p className="" innerHTML={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
