export interface IData {
    id: number | string;
    name: string;
    last: string;
    highestBid: string;
    percentChange: string;
}

export interface IColumn {
    name: string;
    cell: string;
    width?: string | undefined;
}

export interface IError {
    name: string;
    message: string;
    stack: string;
}

export interface IState {
    data: IData[];
    error: boolean;
    login: string;
    subLogin: string;
    password: string;
}
