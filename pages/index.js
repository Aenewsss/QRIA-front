import { ContactComponent } from '../components/ContactComponent'
import { Design } from '../components/Design'
import { Divider } from '../components/Divider'
import { PorfolioMain } from '../components/PorfolioMain'
import { Team } from '../components/Team'
import { Top } from '../components/Top'
import { Transform } from '../components/Transform'

export default function Home() {
  return (
    <>

      <Top />
      <Design />
      <Transform />
      <Team />
      <PorfolioMain />
      {/* <BlogMain /> */}
      <ContactComponent />
      <Divider />
    </>
  )
}
