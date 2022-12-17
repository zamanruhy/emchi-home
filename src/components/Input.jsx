import { mergeProps, splitProps } from 'solid-js'
import './Input.css'

export default function Input(props) {
  props = mergeProps({ as: 'button', type: 'text' }, props)
  const [, rest] = splitProps(props, ['class', 'variant', 'type'])

  return (
    <div
      className="input"
      classList={{
        [props.class]: Boolean(props.class),
        [`input_${props.variant}`]: Boolean(props.variant)
      }}
    >
      <input class="input__input" type={props.type} {...rest} />
    </div>
  )
}
