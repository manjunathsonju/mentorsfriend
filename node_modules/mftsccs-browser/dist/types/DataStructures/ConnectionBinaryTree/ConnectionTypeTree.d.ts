import { Connection } from "../../DataStructures/Connection";
import { ConnectionNode } from "./ConnectionNode";
export declare class ConnectionTypeTree {
    static connectionTypeRoot: ConnectionNode | null;
    static addNodeToTree(node: ConnectionNode): Promise<ConnectionNode | null>;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addConnectionToTree(connection: Connection): void;
    static removeTypeConcept(typeId: number, id: number): void;
    static getNodeFromTree(id: number): ConnectionNode | null;
    static getTypeVariantsFromTree(typeId: number): Promise<Connection[] | undefined>;
    static getTypeVariantsFromTreeWithUserId(typeId: number, userId: number): Promise<Connection[]>;
}
