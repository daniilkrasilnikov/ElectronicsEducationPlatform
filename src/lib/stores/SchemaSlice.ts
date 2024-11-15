import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {applyEdgeChanges, applyNodeChanges} from "@xyflow/react";

export interface SchemaState {
    components: any[],
    connections: any[],
    selectedComponent:  | any,
    isConnecting: boolean,
}

const initialState: SchemaState = {
    components: [],
    connections: [],
    selectedComponent: null,
    isConnecting: false,
}

export const schemaSlice = createSlice({
    name: 'schema',
    initialState,
    reducers: {
        addComponent: (state, action: PayloadAction<any>) => {
            state.components.push(action.payload);
        },
        removeComponent: (state, action: PayloadAction<any>) => {
            state.components = state.components.filter(
                (component) => component.id !== action.payload
            );
        },
        addConnection: (state, action: PayloadAction<any>) => {
            state.connections.push(action.payload);
        },
        removeConnection: (state, action: PayloadAction<any>) => {
            state.connections = state.connections.filter(
                (connection) => connection.id !== action.payload
            );
        },
        refreshConnections: (state, action: PayloadAction<any>) => {
            state.connections = applyEdgeChanges(action.payload, state.connections); // Assign returned value
        },
        refreshComponents: (state, action: PayloadAction<any>) => {
            state.components = applyNodeChanges(action.payload, state.components); // Assign returned value
        },
    },
});

export const {
    addComponent,
    removeComponent,
    addConnection,
    removeConnection,
    refreshConnections,
    refreshComponents,
} = schemaSlice.actions;

export default schemaSlice.reducer;
