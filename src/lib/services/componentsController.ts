import {v4 as uuidv4} from 'uuid';

interface IComponentData {
    label: string;
}

interface IComponentConfig {
    data: IComponentData;
    type: string;
}

const generateComponent = ({data, type}: IComponentConfig) => {
    const id = uuidv4();

    return {
        id,
        data,
        position: {x: 0, y: 0},
        type,
    }
}
export const generateEnergySource = () => {
    const componentConfig: IComponentConfig = {
        data: {label: 'Energy source'},
        type: 'input'
    }

    return generateComponent(componentConfig);
}


export const generateDiode = () => {
    const componentConfig: IComponentConfig = {
        data: {label: 'Diode'},
        type: 'default'
    }

    return generateComponent(componentConfig);
}
