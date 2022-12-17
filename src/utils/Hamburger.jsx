import { splitProps } from 'solid-js'

export default function Hamburger(props) {
  const [, rest] = splitProps(props, [
    'active',
    'class',
    'classList',
    'onclick'
  ])

  return (
    <button
      class="hamburger box-content flex h-[20px] w-[24px] shrink-0 flex-col justify-between rounded py-2.5 px-2"
      classList={{ [props.class]: Boolean(props.class), ...props.classList }}
      type="button"
      aria-label="Toggle menu"
      attr:onclick={props.onclick}
      {...rest}
    >
      <span class="h-[2px] w-[24px] bg-current [.active>&]:translate-y-[9px] [.active>&]:rotate-45 [.active>&]:scale-x-110" />
      <span class="h-[2px] w-[24px] bg-current [.active>&]:opacity-0" />
      <span class="h-[2px] w-[24px] bg-current [.active>&]:-translate-y-[9px] [.active>&]:-rotate-45 [.active>&]:scale-x-110" />
    </button>
  )
}
