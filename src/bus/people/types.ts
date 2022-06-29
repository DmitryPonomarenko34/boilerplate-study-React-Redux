// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
type Man = {
    name: string;
    birth_year: string;
    created: string,
    edited: string,
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    skin_color: string,
    species: string,
    starships: Array<string>,
    url: string,
    vehicles: Array<string>,
}

export type People = Man[];

export type PeopleState = {
    name: string;
    results: People | null;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<PeopleState, PayloadAction<T>>
