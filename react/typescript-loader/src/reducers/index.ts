import { combineReducers } from 'redux';
import { RepositoryEntity } from '../model';
import { repositoriesReducer } from './repositories'

export interface State {
  repositories: RepositoryEntity[]
}

export const state = combineReducers<State>({
  repositories: repositoriesReducer
})
