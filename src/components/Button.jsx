import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import './Button.css'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'as',
    'variant',
    'size',
    'disabled',
    'children',
    'onclick'
  ])

  return props.as === 'button' ? (
    <button
      class="button"
      classList={{
        [`button_${props.variant}`]: Boolean(props.variant),
        [`button_${props.size}`]: Boolean(props.size),
        [props.class]: Boolean(props.class)
      }}
      disabled={props.disabled}
      attr:onclick={props.onclick}
      {...rest}
    >
      {props.children}
    </button>
  ) : (
    <a
      class="button"
      classList={{
        [`button_${props.variant}`]: Boolean(props.variant),
        [`button_${props.size}`]: Boolean(props.size),
        [props.class]: Boolean(props.class)
      }}
      disabled={props.disabled}
      attr:onclick={props.onclick}
      {...rest}
    >
      {props.children}
    </a>
  )
}

// return (
//   <Dynamic
//     component={props.as}
//     class="button"
//     classList={{
//       [`button_${props.variant}`]: Boolean(props.variant),
//       [`button_${props.size}`]: Boolean(props.size),
//       [props.class]: Boolean(props.class)
//     }}
//     href={props.href}
//     disabled={props.disabled}
//     attr:onclick={props.onclick}
//     {...rest}
//   >
//     {props.children}
//   </Dynamic>
// )
