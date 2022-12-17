import UserPlusIcon from '../icons/user-plus.svg?component'

export default function Testimonial({ src, name, position, text }) {
  return (
    <article className="testimonial w-full overflow-hidden rounded-lg bg-[#fafafa]">
      <div className="flex">
        <div className="relative aspect-square w-[100px] shrink-0 bg-[#d9d9d9]">
          {src ? (
            <img
              src={src}
              alt="#"
              loading="lazy"
              decoding="async"
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          ) : (
            <UserPlusIcon className="absolute top-1/2 left-1/2 w-[50px] -translate-x-1/2 -translate-y-1/2 fill-white" />
          )}
        </div>
        <div className="flex grow flex-col break-words">
          <div className=" flex min-h-1/2 items-center border-b border-primary-500/10 py-2 px-4 sm:px-5">
            {name}
          </div>
          <div className="flex min-h-1/2 items-center border-b border-primary-500/10 py-2 px-4 font-light sm:px-5">
            {position}
          </div>
        </div>
      </div>
      <div className="p-5 font-light">
        <p>{text}</p>
      </div>
    </article>
  )
}
