const filters = {
    searchText: '',
    sortBy: 'byEdited'

}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchtext === 'string') {
        filters.searchtext = updates.searchtext     
    }
    if (typeof updates.sortBy === 'string') {
        filters.sortBy = updates.sortBy
    }
} 

export { getFilters, setFilters }