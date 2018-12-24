export type Routes = Route[];

export interface Route {
    readonly id: number;
    readonly fromPort: string;
    readonly toPort : string;
    readonly duration: number;
    readonly points: Array<RoutePoint>;
}

export interface RoutePoint {
    readonly longtitude: number;
    readonly latitude: number;
    readonly timestamp : number;
    readonly speed: number;
}