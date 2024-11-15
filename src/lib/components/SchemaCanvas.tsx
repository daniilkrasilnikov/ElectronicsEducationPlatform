import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {Background, Controls, ReactFlow} from '@xyflow/react';
import {SchemaControls} from "./schemaControls.tsx";
import {useCallback} from "react";
import {addConnection, refreshComponents, refreshConnections} from "../stores/SchemaSlice.ts";

export const SchemaCanvas = () => {
    const dispatch = useAppDispatch();
    const nodes = useAppSelector((state) => state.schema.components);
    const edges = useAppSelector((state) => state.schema.connections);

    const onNodesChange = useCallback(
        (changes: any[]) => {
            dispatch(refreshComponents(changes));
        },
        [dispatch]
    );
    const onEdgesChange = useCallback(
        (changes: any[]) => {
            dispatch(refreshConnections(changes));
        },
        [dispatch]
    );

    const onConnect = useCallback(
        (connection: any) => {
            dispatch(addConnection(connection));
        },
        [dispatch]
    );

    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background />
                <Controls />
            </ReactFlow>
            <SchemaControls/>
        </>
    )
}
