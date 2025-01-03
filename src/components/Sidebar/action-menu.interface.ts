export enum ActionType {
    NAVIGATE = 'NAVIGATE',
    MODAL = 'MODAL'
}

export interface ActionMenu {
    type: ActionType;
    payload: string;
}