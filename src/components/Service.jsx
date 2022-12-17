import Button from './Button'
import NextIcon from '../icons/next.svg?component'

export default function Service({ index }) {
  return (
    <article className="service flex flex-col rounded-lg bg-primary-500 text-white">
      <img
        src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        alt="#"
        loading="lazy"
        decoding="async"
        className="aspect-[1.45] max-h-[300px] w-full rounded-t-lg object-cover"
      />
      <div className="flex grow flex-col p-5">
        <h3 className="mb-[10px] font-display text-[20px] leading-tightest -tracking-tighter">
          {index % 2 !== 0
            ? 'Водительская справка 003-в/у'
            : 'Психиатрическое освидетельствование'}
        </h3>
        <span className="mb-5 mt-auto block font-display text-[20px] leading-tightest -tracking-tighter">
          от 2500 <span className="font-brand">₽</span>
        </span>
        <div className="flex flex-wrap items-center justify-between gap-x-[20px] gap-y-4">
          <Button as="a" href="#" variant="secondary" size="md" class="">
            Записаться на прием
          </Button>
          <a
            href="#"
            className="flex items-center gap-2 py-2 transition hover:opacity-70"
          >
            Подробнее{' '}
            <NextIcon className="mt-[3px] h-3 shrink-0 fill-current" />
          </a>
        </div>
      </div>
    </article>
  )
}
