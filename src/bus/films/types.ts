// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    planets: Array<string>;
}

export type Films = Film[];

export type FilmsState = {
    results: Films | null;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<FilmsState, PayloadAction<T>>
