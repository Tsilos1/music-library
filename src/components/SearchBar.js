import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}



        export default SearchBar


//to have searchbar search without the submit button and instead with each letter
// import { useState } from 'react'

// function SearchBar(props){
//     // We can comment out our searchTerm state variable as we are not using it!
//     // let [searchTerm, setSearchTerm] = useState('')

//     return (
//             <form>
//                 <input type="text" placeholder="Search Here"
//                     onChange={
//                         (e) => props.handleSearch(e, e.target.value)
//                     } />
//                 <input type="submit" />
//             </form>
//     )
// }

// export default SearchBar
