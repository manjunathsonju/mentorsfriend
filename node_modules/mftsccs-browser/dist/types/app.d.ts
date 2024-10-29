export { init, updateAccessToken };
export { SearchLinkMultipleApi } from './Api/Search/SearchLinkMultipleApi';
export { SplitStrings } from './Services/SplitStrings';
export { GetCompositionList, GetCompositionListWithId } from './Services/GetCompositionList';
export { GetCompositionListLocal, GetCompositionListLocalWithId } from './Services/Local/GetCompositionListLocal';
export { GetAllConnectionsOfComposition } from './Api/GetAllConnectionsOfComposition';
export { GetComposition, GetCompositionWithId, recursiveFetch, GetCompositionWithAllIds } from './Services/GetComposition';
export { GetCompositionLocal, GetCompositionLocalWithId } from './Services/Local/GetCompositionLocal';
export { default as CreateComposition } from './Services/CreateTheComposition';
export { CreateTheCompositionLocal } from './Services/Local/CreateTheCompositionLocal';
export { CreateConnectionBetweenTwoConcepts, CreateConnectionBetweenTwoConceptsGeneral } from './Services/CreateConnectionBetweenTwoConcepts';
export { default as GetTheConcept } from './Services/GetTheConcept';
export { default as MakeTheInstanceConcept } from './Services/MakeTheInstanceConcept';
export { MakeTheInstanceConceptLocal } from './Services/Local/MakeTheInstanceConceptLocal';
export { storeToDatabase, getFromDatabaseWithType, getObjectsFromIndexDb } from './Database/NoIndexDb';
export { createTheConnection as CreateTheConnection } from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink, GetLinkRaw } from './Services/GetLink';
export { CreateDefaultConcept } from './Services/CreateDefaultConcept';
export { MakeTheTypeConceptLocal } from './Services/Local/MakeTheTypeLocal';
export { MakeTheTypeConcept } from './Services/MakeTheTypeConcept';
export { MakeTheTypeConceptApi } from './Api/MakeTheTypeConceptApi';
export { GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts } from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById } from './Services/DeleteConnection';
export { TrashTheConcept } from './Api/Delete/DeleteConceptInBackend';
export { GetConnectionById } from './Services/GetConnections';
export { MakeTheTimestamp } from './Services/MakeTheTimestamp';
export { RecursiveSearchApi, RecursiveSearchApiRaw, RecursiveSearchApiRawFullLinker, RecursiveSearchApiNewRawFullLinker } from './Api/RecursiveSearch';
export { GetCompositionBulkWithDataId, GetCompositionBulk, GetCompositionFromConnectionsWithDataId } from './Services/GetCompositionBulk';
export { GetConceptBulk } from './Api/GetConceptBulk';
export { GetConnectionBulk } from './Api/GetConnectionBulk';
export { GetAllConnectionsOfCompositionBulk } from './Api/GetAllConnectionsOfCompositionBulk';
export { LoginToBackend } from './Api/Login';
export { GetConnectionOfTheConcept } from './Api/GetConnectionOfTheConcept';
export { default as Signup } from './Api/Signup';
export { default as Signin } from './Api/Signin';
export { default as UpdateComposition } from './Services/UpdateComposition';
export { SearchAllConcepts } from './Api/Search/Search';
export { SearchWithLinker } from './Api/Search/SearchWithLinker';
export { GetCompositionWithCache, GetCompositionWithDataIdWithCache, GetCompositionWithDataIdBulk } from './Services/Composition/CompositionCache';
export { CreateSession } from './Api/Session/CreateSession';
export { CreateSessionVisit } from './Api/Session/CreateSessionVisit';
export {} from './Api/GetConceptByCharacterAndType';
export { GetRelation, GetRelationRaw } from './Services/GetRelation';
export { recursiveFetchNew } from './Services/Composition/BuildComposition';
export { CreateTheCompositionWithCache } from './Services/Composition/CreateCompositionCache';
export { CreateDefaultLConcept } from './Services/Local/CreateDefaultLConcept';
export { CreateTheConnectionGeneral } from './Services/CreateTheConnectionGeneral';
export { CreateTheConnectionLocal } from './Services/Local/CreateTheConnectionLocal';
export { GetCompositionListAll, GetCompositionListAllWithId, GetCompositionListWithIdUpdated } from './Services/GetCompositionList';
export { GetUserGhostId, AddGhostConcept } from './Services/User/UserTranslation';
export { SearchLinkMultipleAll, FormatFromConnections } from './Services/Search/SearchLinkMultiple';
export { GetTheConceptLocal } from './Services/Local/GetTheConceptLocal';
export { UpdateCompositionLocal } from './Services/Local/UpdateCompositionLocal';
export { GetCompositionFromConnectionsWithDataIdInObject, GetCompositionFromConnectionsWithIndex, GetCompositionFromConnectionsWithDataIdIndex } from './Services/GetCompositionBulk';
export { GetRelationLocal } from './Services/Local/GetRelationLocal';
export { GetConceptByCharacterAndCategoryLocal } from './Services/Local/GetConceptByCharacterLocal';
export { ViewInternalData } from './Services/View/ViewInternalData';
export { ViewInternalDataApi } from './Api/View/ViewInternalDataApi';
export { convertFromLConceptToConcept, convertFromConceptToLConcept } from './Services/Conversion/ConvertConcepts';
export { SearchLinkInternal } from './Services/Search/SearchLinkInternal';
export { CreateConnectionBetweenTwoConceptsLocal } from './Services/Local/CreateConnectionBetweenTwoConceptsLocal';
export { DeleteConceptLocal } from './Services/Local/DeleteConceptLocal';
export { GetConnectionBetweenTwoConceptsLinker } from './Services/GetConnectionBetweenTwoConceptsLinker';
export { DelayFunctionExecution } from './Services/Common/DelayFunction';
export { GetCompositionWithIdAndDateFromMemory } from './Services/GetComposition';
export { GetConceptByCharacterAndType } from './Api/GetConceptByCharacterAndType';
export { GetConnectionDataPrefetch } from './Services/GetCompositionBulk';
export { FormatFromConnectionsAltered } from './Services/Search/SearchLinkMultiple';
export { NORMAL, JUSTDATA, DATAID, DATAIDDATE, RAW } from './Constants/FormatConstants';
export { PRIVATE, PUBLIC, ADMIN } from './Constants/AccessConstants';
export { SearchWithTypeAndLinkerApi } from './Api/Search/SearchWithTypeAndLinker';
export { DependencyObserver } from './WrapperFunctions/DepenedencyObserver';
export { SearchLinkMultipleAllObservable, searchLinkMultipleListener } from './WrapperFunctions/SearchLinkMultipleAllObservable';
export { GetCompositionListener } from './WrapperFunctions/GetCompositionObservable';
export { GetCompositionListListener } from './WrapperFunctions/GetCompositionListObservable';
export { SearchWithTypeAndLinker } from './Services/Search/SearchWithTypeAndLinker';
export { GetLinkListener } from './WrapperFunctions/GetLinkObservable';
export { RecursiveSearchListener } from './WrapperFunctions/RecursiveSearchObservable';
export { SyncData } from './DataStructures/SyncData';
export { Concept } from './DataStructures/Concept';
export { LConcept } from './DataStructures/Local/LConcept';
export { LConnection } from './DataStructures/Local/LConnection';
export { Connection } from './DataStructures/Connection';
export { ConceptsData } from './DataStructures/ConceptData';
export { ConnectionData } from './DataStructures/ConnectionData';
export { BinaryTree } from './DataStructures/BinaryTree';
export { SearchQuery } from './DataStructures/SearchQuery';
export { SignupModel } from './DataStructures/SignupModel';
export { SigninModel } from './DataStructures/SigninModel';
export { FreeschemaResponse } from './DataStructures/Responses/StandardResponses';
export { PatcherStructure } from './DataStructures/PatcherStructure';
export { SessionData } from './DataStructures/Session/SessionData';
export { Composition } from './DataStructures/Composition/Composition';
export { CompositionBinaryTree } from './DataStructures/Composition/CompositionBinaryTree';
export { CompositionNode } from './DataStructures/Composition/CompositionNode';
export { LocalSyncData } from './DataStructures/Local/LocalSyncData';
export { UserBinaryTree } from './DataStructures/User/UserBinaryTree';
export { FilterSearch } from './DataStructures/FilterSearch';
export { SearchStructure } from './DataStructures/Search/SearchStructure';
export { LocalConceptsData } from './DataStructures/Local/LocalConceptData';
export { BaseUrl } from './DataStructures/BaseUrl';
/**
 * This function lets you update the access token that the package uses. If this is not passed you cannot create, update, view or delete
 * Your concepts using this package.
 * @param accessToken access token got from the sign in process
 */
declare function updateAccessToken(accessToken?: string): void;
/**
 *
 * @param url This is the url for the backend c# system or our main data fabric server
 * @param aiurl This is the AI url that pulls in the data using our AI system . If you do not enter this then also disable the enableAi flag.
 * @param accessToken This is the JWT token that needs to be passed (But since you have just initilized the system). There is no way we can get access token
 * So this access token can be empty string. You can set it afterwards with another function UpdateAccessToken();
 * @param nodeUrl This is the url for the node server. This is another server in the data fabric that is used as server for business logic and security features.
 * @param enableAi This flag is used to enable or disable the AI feature that preloads data in the indexdb.
 * @param applicationName This is an unique name that is given to a program. Use this to discern one indexdb from another.
 */
declare function init(url?: string, aiurl?: string, accessToken?: string, nodeUrl?: string, enableAi?: boolean, applicationName?: string, isTest?: boolean): Promise<true | undefined>;
