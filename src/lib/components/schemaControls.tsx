import {useAppDispatch} from "../hooks/hooks.ts";
import {generateDiode, generateEnergySource} from "../services/componentsController.ts";
import {addComponent} from "../stores/SchemaSlice.ts";

export const SchemaControls = () => {
    const dispatch = useAppDispatch();

    const handleEnergySourceAdd = () => {
        const energySource = generateEnergySource();
        dispatch(addComponent(energySource));
    }

    const handleDiodeAdd = () => {
        const diode = generateDiode();
        dispatch(addComponent(diode));
    }

    return (
        <>
            <button onClick={handleEnergySourceAdd}>Add Energy Source</button>
            <button onClick={handleDiodeAdd}>Add Diode</button>
        </>
    )
}

//TODO: WRITE IN OOP EVERY ELECTRONIC COMPONENT
