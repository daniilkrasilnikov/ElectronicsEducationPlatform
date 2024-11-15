import {useAppDispatch} from "../hooks/hooks.ts";
import {generateEnergySource} from "../services/componentsController.ts";
import {addComponent} from "../stores/SchemaSlice.ts";

export const SchemaControls = () => {
    const dispatch = useAppDispatch();

    const handleEnergySourceAdd = () => {
        const energySource = generateEnergySource();
        dispatch(addComponent(energySource));
    }

    return (
        <>
            <button onClick={handleEnergySourceAdd}>Add energy source</button>
        </>
    )
}

//TODO: WRITE IN OOP EVERY ELECTRONIC COMPONENT
