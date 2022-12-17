import Button from './Button'
import Hamburger from './Hamburger'
import Logo from './Logo'
import GlassesIcon from '../icons/glasses.svg?component'
import UserIcon from '../icons/user.svg?component'

export default function Header() {
  return (
    <header class="header relative z-[1000] py-2 shadow md:py-[10px]">
      <div className="container">
        <div className="flex items-center">
          <Logo header />
          <span className="min-w-3 shrink-0 grow" />
          <a
            href="tel:+7(3012)37-99-20"
            className="mr-8 hidden transition hover:opacity-70 lg:block"
          >
            +7 (3012) 37-99-20
          </a>
          <a
            href="mailto:hippocrat-info@mail.ru"
            className="mr-8 hidden transition hover:opacity-70 lg:block"
          >
            hippocrat-info@mail.ru
          </a>
          <a
            href="#"
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded transition hover:bg-primary-50/50"
          >
            <GlassesIcon className="w-[26px] fill-current" />
          </a>
          <a
            href="#"
            className="ml-1.5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded transition hover:bg-primary-50/50 sm:ml-3 lg:hidden"
            aria-label="Личный кабинет"
          >
            <UserIcon className="w-[26px] fill-current" />
          </a>

          <Button
            as="a"
            href="#"
            variant="primary"
            size="md"
            class="ml-6 px-8 max-lg:hidden"
          >
            Личный кабинет
          </Button>
          <Hamburger />
        </div>
      </div>
    </header>
  )
}
