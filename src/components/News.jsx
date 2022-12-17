import NextIcon from '../icons/next.svg?component'

export default function News() {
  return (
    <article className="news flex min-h-[180px] flex-col overflow-hidden rounded-lg bg-[#fafafa] sm:flex-row lg:[&:nth-child(3n+1)]:row-span-2 lg:[&:nth-child(3n+1)]:flex-col">
      <img
        src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        alt="#"
        loading="lazy"
        decoding="async"
        className="aspect-[2.23] w-full object-cover sm:aspect-auto sm:w-[35%] lg:[.news:nth-child(3n+1)_&]:aspect-[2.23] lg:[.news:nth-child(3n+1)_&]:w-full"
      />
      <div className="flex grow flex-col p-5">
        <h3 className="mb-5 font-display text-[20px] leading-tightest -tracking-tighter">
          Лечение алкогольной зависимости
        </h3>
        <p className="mb-6 font-light">
          Повседневная практика показывает, что современная методология
          разработки, в своём классическом...
        </p>
        <div className="mt-auto flex flex-wrap justify-between gap-x-5 gap-y-3">
          <time className="font-light">24.10.2022</time>
          <a
            href="#"
            className="flex items-center gap-2 transition hover:opacity-80"
          >
            Подробнее{' '}
            <NextIcon className="mt-[2px] h-3 shrink-0 fill-current" />
          </a>
        </div>
      </div>
    </article>
  )
}
