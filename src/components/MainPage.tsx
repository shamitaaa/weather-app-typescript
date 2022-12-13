import React, { FormEvent, useState, } from 'react';
import { useNavigate } from 'react-router-dom';


export const Home: React.FC = () => {
    const [countryName, setCountryName] = useState('');
    const navigate = useNavigate();

    const getCountryName = async (e: FormEvent) => {
        e.preventDefault();
        navigate(`/details/${countryName}`);
    };

    return (
        <div>
            Weather App
        </div>
    );

};

