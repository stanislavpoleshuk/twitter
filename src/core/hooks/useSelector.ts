import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../store/rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
