import logoImg from '../images/logo.jpg?jpg'
import Image from './Image'

import PinIcon from '../icons/pin.svg?component'
import PhoneIcon from '../icons/phone.svg?component'
import MailIcon from '../icons/mail.svg?component'
import Social from './Social'

export default function Contacts() {
  return (
    <section id="contacts" className="contacts flex flex-col gap-6 md:flex-row">
      <div className="flex shrink-0 flex-col md:w-[34%] md:min-w-[300px]">
        <h2 className="title mb-[40px] md:mb-[50px]">Контакты</h2>
        <div className="grow bg-[#fafafa] p-5">
          <div className="mb-7 flex items-center">
            <Image
              class="mr-4 w-[60px] shrink-0 rounded-full"
              src={logoImg}
              loading="lazy"
              decoding="async"
              alt=""
            />
            <div>
              <b className="block font-display text-lg font-bold leading-none md:text-2xl">
                ЭМЧИ
              </b>
              <span className="mt-0.5 block text-xs font-light">
                медицинский профилактический центр
              </span>
            </div>
          </div>
          <address className="mb-[30px] grid gap-5 not-italic">
            <div className="flex items-center gap-[10px]">
              <PinIcon className="w-5 fill-current" />
              <span className="">г. Улан-Удэ, ул. Свердлова, 1</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <PhoneIcon className="w-5 fill-current" />
              <a
                href="tel:+7(3012)37-99-20"
                className="transition hover:opacity-70"
              >
                +7 (3012) 37-99-20
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <MailIcon className="w-5 fill-current" />
              <a
                href="mailto:hippocrat-info@mail.ru"
                className="transition hover:opacity-70"
              >
                hippocrat-info@mail.ru
              </a>
            </div>
          </address>
          <Social light />
        </div>
      </div>
      <div className="grow">
        <iframe
          src="https://yandex.com/map-widget/v1/-/CCUnNUam9C"
          widthw="560"
          heightw="400"
          frameborder="1"
          allowfullscreen="true"
          loading="lazy"
          className="h-[300px] w-full md:h-[400px]"
        ></iframe>
      </div>
    </section>
  )
}
