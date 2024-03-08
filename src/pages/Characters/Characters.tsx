import './Characters.css';
import React, { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import PaginationComp from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';

import FilterBox from '../../components/FilterBox/FilterBox';
import CharacterList from '../../components/Character/CharacterList/CharacterList';
import NotFoundCharacter from '../../components/Character/NotFoundCharacter/NotFoundCharacter';

interface Character {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    status: string;
    type: string;
    url: string;
}

const Characters: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    const [status, setStatus] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [characters, setCharacters] = useState<Character[]>([])

    const { data, error, loading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/character?name=${search}&status=${status}&species=${species}&gender=${gender}&page=${currentPage}`);


    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    useEffect(() => {
        if (data) {
            setTotalPages(data.info.pages);
            setCharacters(data.results);
        }
    }, [data, search])


    if (loading) {
        return <Loading />
    }

    return <div className='cp-container'>
        <h1>Characters</h1>

        <SearchBar onSearch={setSearch} />

        <section>
            <div className='filter-content'>

                <FilterBox
                    setStatus={setStatus}
                    setCurrentPage={setCurrentPage}
                    setGender={setGender}
                    setSpecies={setSpecies}
                />

            </div>

            <div className='character-content'>
                {
                    error ? <NotFoundCharacter /> :
                        <CharacterList characters={characters} />
                }
            </div>
        </section>

        <div className='absolute-pagination'>
            <PaginationComp
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    </div>
};

export default Characters;
