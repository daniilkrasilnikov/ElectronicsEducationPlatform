import { v4 as uuidv4 } from 'uuid';

export const generateEnergySource = () => {
    const uuid = uuidv4();

    return {
        id: uuid,
        position: { x: 0, y: 0 },
        data: { label: 'Energy source' },
        type: 'input',
        draggable: true,
    }
}


export const generateDiode = () => {
    const uuid = uuidv4();

    return {
        id: uuid,
        position: { x: 0, y: 0 },
        data: { label: 'Diode' },
        draggable: true,
    }
}
