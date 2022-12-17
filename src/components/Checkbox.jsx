import { splitProps } from 'solid-js'
import CheckIcon from '../icons/check.svg?component'

import './Checkbox.css'

export default function Checkbox(props) {
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'variant',
    'style',
    'label'
  ])

  return (
    <label
      class="checkbox"
      classList={{
        [props.class]: Boolean(props.class),
        [`checkbox_${props.variant}`]: Boolean(props.variant),
        ...props.classList
      }}
      style={props.style}
    >
      <input className="checkbox__input" type="checkbox" {...rest} />
      <span class="checkbox__box" aria-hidden="true">
        <CheckIcon className="checkbox__icon" />
      </span>
      {props.label && <span className="checkbox__label">{props.label}</span>}
    </label>
  )
}
