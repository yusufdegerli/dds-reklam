import { Studio } from 'sanity'
import config from '../../sanity.config'

const StudioPage = () => {
  return (
    <div className="h-screen w-full relative z-[9999]">
      <Studio config={config} />
    </div>
  )
}

export default StudioPage
