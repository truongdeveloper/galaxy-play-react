import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobleStyles';
import { useState } from 'react';
import styled from 'styled-components';
import ListsApi from '../../Api/ListApi';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import  './SearchPage.scss'

SearchPage.propTypes = {
    
};

const Input = styled.input`
    min-width: 300px;
    width: 30%;
    background-color: white;
    border-radius: 4px;
    color: black;
    outline: none;
    border: none;
    line-height: 2rem;
    font-size: 18px;

`

function SearchPage(props) {

    const [keyword, setKeyword] = useState('');
    console.log(keyword);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await ListsApi.getQuery(1,keyword);
                setData(newData);
                console.log(newData)
                setLoading(false);
                // console.log(newData);
            } catch(error) {
                console.log(error)
            }
        }
        axiosPoster();
    },[keyword])

    return (
        <Container>

            <h1 className='title-movie-list'>

                <Input
                    type={'text'}
                    placeholder={'Search....'}
                    onChange={(e) => {
                        setTimeout(() => {
                            setKeyword(e.target.value)
                        }, 2000);
                    }}
                
                />
                <div className='search-result'>
                    
                    {keyword && data?.map((arr, idx) => {
                    return(
                        <div key={arr.id}>
                            <Link to={`/movie?id=${arr.id}`} className={'search-link'}>
                                {arr.name}
                            </Link>
                        </div>
                    )
                    })
                    }
                </div>

            </h1>
            
            
        </Container>
    );
}

export default SearchPage;