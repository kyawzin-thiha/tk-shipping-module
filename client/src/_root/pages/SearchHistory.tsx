import LeftMenu from '@/components/shared/LeftMenu'
import SearchHistoryTable from '@/components/shared/SearchHistoryTable'
import SearchHistoryForm from '@/components/shared/SearchHistoryForm'



const SearchHistory = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <SearchHistoryForm />
        <SearchHistoryTable />
      </div>
    </div>
  )
}

export default SearchHistory
