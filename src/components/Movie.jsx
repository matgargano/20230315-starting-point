// props = {
//     movie: {
//         title: 'fasdf',
//         director: '',
//     }
// }

import { Td, Tr } from "@chakra-ui/react";

const Movie = ( { movie: { title, director, year, length, country } } ) => {
    return <Tr><Td>{title}</Td><Td>{director}</Td><Td>{year}</Td><Td>{length}</Td><Td>{country}</Td></Tr>
}

export default Movie;