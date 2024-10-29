import { Connection } from "../DataStructures/Connection";
export declare function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId: number, toConcept: number, mainKey: number): Promise<Connection[]>;
