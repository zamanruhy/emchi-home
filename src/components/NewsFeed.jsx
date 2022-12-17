import News from './News'
import NextIcon from '../icons/next.svg?component'

export default function NewsFeed() {
  return (
    <section id="news" className="news-feed mb-[70px] md:mb-[118px]">
      <h2 className="title mb-[40px] md:mb-[50px]">Новости</h2>
      <div className="grid auto-rows-fr gap-6 lg:grid-cols-2">
        {Array.from({ length: 6 }).map((_) => (
          <News />
        ))}
      </div>
      <div className="mt-[30px] flex justify-end">
        <a
          href="#"
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          Смотреть все{' '}
          <NextIcon className="mt-[3px] h-3 shrink-0 fill-current" />
        </a>
      </div>
    </section>
  )
}
