import Button from './Button'
import Logo from './Logo'
import { links } from './Nav'
import Social from './Social'

export default function Footer() {
  return (
    <footer class="footer mt-[100px] bg-primary-500 py-10 text-white">
      <div class="container">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="-mt-5 mr-12 self-start md:w-[34%] md:min-w-[280px] lg:mr-14">
            <Logo />
            <div className="mt-3 text-xs">
              © АНО «МПЦ «ЭМЧИ». Все права защищены 2022.
            </div>
          </div>
          <div className="mt-9 md:-mt-1 md:grow">
            <ul className="flex flex-wrap gap-x-[30px] gap-y-2">
              {links.map(({ name, href }) => (
                <li>
                  <a
                    className="block py-1 underline-offset-4 hover:underline"
                    href={href}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-6 md:mt-9">
              <a
                href="tel:+7(3012)37-99-20"
                className="transition hover:opacity-70"
              >
                +7 (3012) 37-99-20
              </a>
              <a
                href="mailto:hippocrat-info@mail.ru"
                className="transition hover:opacity-70"
                classList={{ 'mr-4': true }}
              >
                hippocrat-info@mail.ru
              </a>
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
          <Social className="mt-8 shrink-0 max-md:flex-row md:ml-12 md:mt-0 " />
        </div>
      </div>
    </footer>
  )
}
