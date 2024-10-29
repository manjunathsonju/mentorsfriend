import { Concept } from "./../Concept";
import { Connection } from "../Connection";
export declare class LocalSyncData {
    static conceptsSyncArray: Concept[];
    static connectionSyncArray: Connection[];
    static ghostIdMap: Map<any, any>;
    static CheckContains(concept: Concept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: Connection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static SyncDataOnline(): Promise<Concept[]>;
    static ConvertGhostIdsInConnections(connectionArray: Connection[]): void;
    static UpdateConceptListToIncludeRelatedConcepts(connectionArray: Connection[], conceptsArray: Concept[]): Promise<void>;
    static AddConceptIfDoesNotExist(concept: Concept, conceptList?: Concept[]): void;
    static CheckIfTheConceptIdExists(id: number, conceptList?: Concept[]): Concept;
    static AddConnection(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static syncDataLocalDb(): Promise<string>;
}
