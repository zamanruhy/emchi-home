import Contacts from '@/components/Contacts'
import Intro from '@/components/Intro'
import NewsFeed from '@/components/NewsFeed'
import Parts from '@/components/Parts'
import Request from '@/components/Request'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Useful from '@/components/Useful'

export default function Home() {
  return (
    <>
      <Intro />
      <Parts />
      <div class="container">
        <Services />
        <NewsFeed />
        <Testimonials />
        <Request />
        <Useful />
        <Contacts />
      </div>
    </>
  )
}
