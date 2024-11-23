import { PayloadAction } from '@reduxjs/toolkit';
import { ICounter, ICounters } from '../../utils/interfaces/counter-interface';
export declare const fetсhGetCounters: import("@reduxjs/toolkit").AsyncThunk<ICounter[], void, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetсhGetCounter: import("@reduxjs/toolkit").AsyncThunk<ICounter, string, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetсhSetCount: import("@reduxjs/toolkit").AsyncThunk<ICounter, ICounter, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetсhAddNewCounter: import("@reduxjs/toolkit").AsyncThunk<ICounter[], ICounter, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetсhDeleteCounter: import("@reduxjs/toolkit").AsyncThunk<ICounter[], ICounter, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const counterSlice: import("@reduxjs/toolkit").Slice<ICounters, {
    incrementCountAction: (state: import("immer").WritableDraft<ICounters>) => void;
    decrementCountAction: (state: import("immer").WritableDraft<ICounters>) => void;
    setCountAction: (state: import("immer").WritableDraft<ICounters>, action: PayloadAction<number>) => void;
}, "counters", "counters", {
    allApiCountersSelector: (state: ICounters) => ICounter[];
    apiCounterSelector: (state: ICounters) => ICounter | null;
    localCounterSelector: (state: ICounters) => number;
    isLoadingSelector: (state: ICounters) => boolean;
    isChangedSelector: (state: ICounters) => boolean;
    errorSelector: (state: ICounters) => string | undefined;
}>;
export declare const counterActions: import("@reduxjs/toolkit").CaseReducerActions<{
    incrementCountAction: (state: import("immer").WritableDraft<ICounters>) => void;
    decrementCountAction: (state: import("immer").WritableDraft<ICounters>) => void;
    setCountAction: (state: import("immer").WritableDraft<ICounters>, action: PayloadAction<number>) => void;
}, "counters">;
export declare const counterSelectors: {
    allApiCountersSelector: import("reselect").Selector<{
        counters: ICounters;
    }, ICounter[], []> & {
        unwrapped: (state: ICounters) => ICounter[];
    };
    apiCounterSelector: import("reselect").Selector<{
        counters: ICounters;
    }, ICounter | null, []> & {
        unwrapped: (state: ICounters) => ICounter | null;
    };
    localCounterSelector: import("reselect").Selector<{
        counters: ICounters;
    }, number, []> & {
        unwrapped: (state: ICounters) => number;
    };
    isLoadingSelector: import("reselect").Selector<{
        counters: ICounters;
    }, boolean, []> & {
        unwrapped: (state: ICounters) => boolean;
    };
    isChangedSelector: import("reselect").Selector<{
        counters: ICounters;
    }, boolean, []> & {
        unwrapped: (state: ICounters) => boolean;
    };
    errorSelector: import("reselect").Selector<{
        counters: ICounters;
    }, string | undefined, []> & {
        unwrapped: (state: ICounters) => string | undefined;
    };
};
//# sourceMappingURL=counter-slice.d.ts.map