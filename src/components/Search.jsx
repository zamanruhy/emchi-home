import MagIcon from '../icons/mag.svg?component'
import './Search.css'

export default function Search() {
  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск по сайту"
        required
      />
      <button className="search__button" aria-label="Искать">
        <MagIcon />
      </button>
    </form>
  )
}
