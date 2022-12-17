import Search from './Search'
import './Nav.css'
import { onMount } from 'solid-js'

export const links = [
  { name: 'О нас', href: '#' },
  { name: 'Услуги', href: '#services' },
  { name: 'Новости', href: '#news' },
  { name: 'Вопрос-ответ', href: '#' },
  { name: 'Документы', href: '#' },
  { name: 'Контакты', href: '#contacts' }
]

function script() {
  const el = document.querySelector('.nav')
  if (!el) return

  const linkEls = Array.from(el.querySelectorAll('.nav__link'))

  window.addEventListener('toggle-nav', (e) => {
    el.classList.toggle('nav_open', e.detail)
  })

  linkEls.forEach((linkEl) => {
    linkEl.addEventListener('click', (e) => {
      window.dispatchEvent(new CustomEvent('toggle-nav', { detail: false }))
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Nav() {
  onMount(script)
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <Search />
          <ul className="nav__list">
            {links.map(({ name, href }) => (
              <li>
                <a className="nav__link" href={href}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
