                
import { useState } from 'react'

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here"
            onChange={(e) => setSearchTerm(e.target.value)} />

            <input type="submit" />

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
