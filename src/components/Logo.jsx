import logoImg from '../images/logo.jpg?jpg'
import Image from './Image'

import './Logo.css'

export default function Logo(props) {
  return (
    <a
      href="."
      className="logo"
      classList={{
        [props.className]: Boolean(props.className),
        logo_header: props.header
      }}
    >
      <Image class="logo__img" src={logoImg} alt="" />
      <div>
        <b className="logo__title">ЭМЧИ</b>
        <span
          className="logo__lead"
          classList={{ 'max-sm:hidden': props.header }}
        >
          медицинский профилактический центр
        </span>
      </div>
    </a>
  )
}
