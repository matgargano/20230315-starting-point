import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, sortByLength, sortByYear } from "../features/movies/moviesSlice";
import { IconButton, Spinner, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import Movie from './Movie';
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";


const Movies = () => {

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies.data);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch, fetchMovies])
    
    if(!!error){
        return <pre>{JSON.stringify(error,0,1)}</pre>
    }
    if(!!loading){
        return <Spinner />;
    }

    // return <pre>{JSON.stringify(movies,0,1)}</pre>
    return <Table variant={'striped'} colorScheme={'red'}>
        <Thead>
            <Tr>
                <Th>Title</Th>
                <Th>Director</Th>
                <Th>Year 
                    <IconButton 
                        aria-label="Sort by Year Ascending" 
                        onClick={() => dispatch(sortByYear('asc'))}
                        icon={<ArrowUpIcon />}    
                    />
                    <IconButton 
                        aria-label="Sort by Year Descending" 
                        onClick={() => dispatch(sortByYear('desc'))}
                        icon={<ArrowDownIcon />}    
                    />
                </Th>
                <Th>Length
                <IconButton 
                        aria-label="Sort by Length Ascending" 
                        onClick={() => dispatch(sortByLength('asc'))}
                        icon={<ArrowUpIcon />}    
                    />
                    <IconButton 
                        aria-label="Sort by Length Descending" 
                        onClick={() => dispatch(sortByLength('desc'))}
                        icon={<ArrowDownIcon />}    
                    />

                </Th>
                <Th>Country</Th>
            </Tr>
        </Thead>
        <Tbody>
            {movies.map(movie => <Movie key={movie.title} movie={movie} />)}
        </Tbody>
    </Table>


}


export default Movies;