import './Locations.css';
import React, { useEffect, useState } from 'react';

import LocationList from '../../components/Location/LocationList/LocationList';
import useFetch from '../../hooks/useFetch';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import PaginationComp from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

const Locations: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [locations, setLocations] = useState<Location[]>([])

    const { data, error, loading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/location?name=${search}&page=${currentPage}`);


    useEffect(() => {
        if (data) {
            setTotalPages(data.info.pages);
            setLocations(data.results);
        }
    }, [data])


    if (loading) {
        return <Loading />
    }

    return <div className='lp-container'>
        <h1>Locations</h1>

        <SearchBar onSearch={setSearch} />
        {
            error ? <ErrorPage error={error} /> : locations ?
                <LocationList locations={locations} />
                : null
        }

        <div className='absolute-pagination'>

            <PaginationComp
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    </div>
};

export default Locations;
