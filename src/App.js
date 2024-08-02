
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'

import { useGlobalContext } from './context'

const App = () => {

  const data = useGlobalContext;

  return (
    <>
    <div>
        welcome to anish website {data}
    </div>

    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App
