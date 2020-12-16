import { Optional } from './util';

/**
 * type defs
 */
export type Callback<T, T2 = undefined> = (
  err: Error | null | undefined,
  ret?: T,
  ret2?: T2,
) => any;

export type HttpMethods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS';

export type HttpRequest = {
  url: string;
  method: HttpMethods;
  headers?: { [name: string]: string };
  body?: string | null;
};

export type HttpRequestOptions = {
  httpProxy?: string;
  timeout?: number;
  followRedirect?: boolean | ((redirectUrl: string) => HttpRequest | null);
};

export type HttpResponse = {
  statusCode: number;
  headers: { [name: string]: string };
  body: string;
};

export type Record = {
  [field: string]: any;
  Id?: string;
  attributes?: { type: string; [prop: string]: any };
};

export type SavedRecord = Record & { Id: string };

export type SaveError = {
  errorCode: string;
  message: string;
  fields?: string[];
};

export type SaveResult =
  | {
      success: true;
      id: string;
      errors?: SaveError[];
    }
  | {
      success: false;
      id?: string;
      errors: SaveError[];
    };

export type RetrieveOptions = {
  allOrNone?: boolean;
  fields?: string[];
  headers?: { [name: string]: string };
};

export type DmlOptions = {
  allOrNone?: boolean;
  allowRecursive?: boolean;
  headers?: { [name: string]: string };
};

export type SignedRequestObject = {
  client: {
    oauthToken: string;
  };
};

export type Field = {
  aggregatable: boolean;
  autoNumber: boolean;
  byteLength: number;
  calculated: boolean;
  calculatedFormula: Optional<string>;
  cascadeDelete: boolean;
  caseSensitive: boolean;
  compoundFieldName: Optional<string>;
  controllerName: Optional<string>;
  createable: boolean;
  custom: boolean;
  defaultValue: Optional<string>;
  defaultValueFormula: Optional<string>;
  defaultedOnCreate: boolean;
  dependentPicklist: boolean;
  deprecatedAndHidden: boolean;
  digits: number;
  displayLocationInDecimal: boolean;
  encrypted: boolean;
  externalId: boolean;
  extraTypeInfo: Optional<string>;
  filterable: boolean;
  filteredLookupInfo: object;
  groupable: boolean;
  highScaleNumber: boolean;
  htmlFormatted: boolean;
  idLookup: boolean;
  inlineHelpText: Optional<string>;
  label: string;
  length: number;
  mask: Optional<string>;
  maskType: Optional<string>;
  name: string;
  nameField: boolean;
  namePointing: boolean;
  nillable: boolean;
  permissionable: boolean;
  picklistValues: Optional<any[]>;
  precision: number;
  queryByDistance: boolean;
  referenceTargetField: object;
  referenceTo: Optional<string[]>;
  relationshipName: Optional<string>;
  relationshipOrder: Optional<number>;
  restrictedDelete: boolean;
  restrictedPicklist: boolean;
  scale: number;
  soapType: string;
  sortable: boolean;
  type: string;
  unique: boolean;
  updateable: boolean;
  writeRequiresMasterRead: boolean;
};

type ActionOverride = {
  formFactor: string;
  isAvailableInTouch: boolean;
  name: string;
  pageId: string;
  url: Optional<string>;
};

type ChildRelationship = {
  cascadeDelete: boolean;
  childSObject: string;
  deprecatedAndHidden: boolean;
  field: string;
  junctionIdListNames: string[];
  junctionReferenceTo: string[];
  relationshipName: Optional<string>;
  restrictedDelete: boolean;
};

type NamedLayoutInfo = {
  name: string;
  urls: { [key: string]: string };
};

type RecordTypeInfo = {
  available: boolean;
  defaultRecordTypeMapping: boolean;
  master: boolean;
  name: string;
  recordTypeId: string;
  urls: { [key: string]: string };
};

type ScopeInfo = {
  label: string;
  name: string;
};

type DescribeGlobalSObjectResult = {
  activateable: boolean;
  createable: boolean;
  custom: boolean;
  customSetting: boolean;
  deepCloneable: boolean;
  deletable: boolean;
  deprecatedAndHidden: boolean;
  feedEnabled: boolean;
  hasSubtypes: boolean;
  isInterface: boolean;
  isSubtype: boolean;
  keyPrefix: Optional<string>;
  label: string;
  labelPlural: string;
  layoutable: boolean;
  mergeable: boolean;
  mruEnabled: boolean;
  name: string;
  queryable: boolean;
  replicateable: boolean;
  retrieveable: boolean;
  searchable: boolean;
  triggerable: boolean;
  undeletable: boolean;
  updateable: boolean;
  urls: { [key: string]: string };
};

export type DescribeSObjectResult = DescribeGlobalSObjectResult & {
  actionOverrides: ActionOverride[];
  childRelationships: ChildRelationship[];
  compactLayoutable: boolean;
  fields: Field[];
  listviewable: boolean;
  lookupLayoutable: boolean;
  namedLayoutInfos: NamedLayoutInfo[];
  networkScopeFieldName: Optional<string>;
  recordTypeInfos: RecordTypeInfo[];
  searchLayoutable: boolean;
  supportedScopes: Optional<ScopeInfo[]>;
};

export type DescribeGlobalResult = {
  encoding: string;
  maxBatchSize: number;
  sobjects: DescribeGlobalSObjectResult[];
};

type DescribeColor = {
  color: string;
  context: string;
  theme: string;
};

type DescribeIcon = {
  contentType: string;
  height: Optional<number>;
  theme: string;
  url: string;
  width: Optional<number>;
};

type WebLinkPosition = 'fullScreen' | 'none' | 'topLeft';

type WebLinkType = 'javascript' | 'page' | 'sControl' | 'url';

type WebLinkWindowType =
  | 'newWindow'
  | 'noSidebar'
  | 'onClickJavaScript'
  | 'replace'
  | 'sidebar';

type DescribeLayoutButton = {
  behavior: Optional<WebLinkWindowType>;
  colors: Optional<DescribeColor[]>;
  content: Optional<string>;
  contentSource: Optional<WebLinkType>;
  custom: boolean;
  encoding: Optional<string>;
  height: Optional<number>;
  icons: Optional<DescribeIcon[]>;
  label: string;
  menubar: boolean;
  name: string;
  overridden: boolean;
  resizeable: boolean;
  scrollbars: boolean;
  showsLocation: boolean;
  showsStatus: boolean;
  toolbar: boolean;
  url: Optional<string>;
  width: Optional<number>;
  windowPosition: Optional<WebLinkPosition>;
};

type DescribeLayoutButtonSection = {
  detailButtons: DescribeLayoutButton[];
};

type LayoutComponentType =
  | 'AnalyticsCloud'
  | 'Canvas'
  | 'CustomLink'
  | 'EmptySpace'
  | 'ExpandedLookup'
  | 'Field'
  | 'ReportChart'
  | 'SControl'
  | 'Separator'
  | 'VisualforcePage';

type DescribeLayoutComponent = {
  details?: any;
  displayLines: number;
  tabOrder: number;
  type: LayoutComponentType;
  value: Optional<string>;
};

type DescribeLayoutItem = {
  editableForNew: boolean;
  editableForUpdate: boolean;
  label: string;
  layoutComponents: DescribeLayoutComponent[];
  placeholder: boolean;
  required: boolean;
};

type DescribeLayoutRow = {
  layoutItems: DescribeLayoutItem[];
  numItems: number;
};

type DescribeLayoutSection = {
  columns: number;
  heading: string;
  layoutRows: DescribeLayoutRow[];
  parentLayoutId: string;
  rows: number;
  tabOrder: 'LeftToRight' | 'TopToBottom';
  useCollapsibleSection: boolean;
  useHeading: boolean;
};

type DescribeQuickActionListItemResult = {
  colors: Optional<DescribeColor[]>;
  iconUrl: Optional<string>;
  icons: Optional<DescribeIcon[]>;
  label: string;
  miniIconUrl: Optional<string>;
  quickActionName: string;
  targetSobjectType: Optional<string>;
  type: 'Create' | 'VisualforcePage';
};

type DescribeQuickActionListResult = {
  quickActionListItems: DescribeQuickActionListItemResult[];
};

type DescribeRelatedContentItem = {
  describeLayoutItem: DescribeLayoutItem;
};

type RelatedContent = {
  relatedContentItems: DescribeRelatedContentItem[];
};

type RelatedListColumn = {
  field: Optional<string>;
  fieldApiName: string;
  format: Optional<string>;
  label: string;
  lookupId: Optional<string>;
  name: string;
  sortable: boolean;
};

type RelatedListSort = {
  column: string;
  ascending: boolean;
};

type RelatedList = {
  accessLevelRequiredForCreate: Optional<string>;
  buttons: DescribeLayoutButton[];
  columns: RelatedListColumn[];
  custom: boolean;
  field: Optional<string>;
  label: string;
  limitRows: number;
  name: string;
  sobject: Optional<string>;
  sort: RelatedListSort[];
};

type DescribeLayoutSaveOption = {
  defaultValue: boolean;
  isDisplayed: boolean;
  label: string;
  name: string;
  restHeaderName: string;
  soapHeaderName: string;
};

type DescribeLayout = {
  buttonLayoutSection: Optional<DescribeLayoutButtonSection>;
  detailLayoutSections: DescribeLayoutSection[];
  editLayoutSections: DescribeLayoutSection[];
  feedView: Optional<DescribeLayoutFeedView>;
  highlightsPanelLayoutSection: Optional<DescribeLayoutSection>;
  multirowEditLayoutSections: DescribeLayoutSection[];
  id: string;
  quickActionList: DescribeQuickActionListResult;
  relatedContent: RelatedContent;
  relatedLists: RelatedList[];
  saveOptions: DescribeLayoutSaveOption[];
};

type DescribeLayoutFeedFilter = {
  label: string;
  name: string;
  type: 'AllUpdates' | 'FeedItemType';
};

type DescribeLayoutFeedView = {
  feedFilters: DescribeLayoutFeedFilter[];
};

type RecordTypeMapping = any; // TODO

export type DescribeLayoutResult = {
  layouts: DescribeLayout[];
  recordTypeMappings: RecordTypeMapping[];
  recordTypeSelectorRequired: boolean[];
};

export type DescribeCompactLayout = {
  actions: DescribeLayoutButton[];
  fieldItems: DescribeLayoutItem[];
  id: Optional<string>;
  imageItems: DescribeLayoutItem[];
  label: string;
  name: string;
  objectType: string;
};

type RecordTypeCompactLayoutMapping = {
  available: boolean;
  compactLayoutId: Optional<string>;
  compactLayoutName: string;
  recordTypeId: string;
  recordTypeName: string;
};

export type DescribeCompactLayoutsResult = {
  compactLayouts: DescribeCompactLayout[];
  defaultCompactLayoutId: Optional<string>;
  recordTypeCompactLayoutMappings: RecordTypeCompactLayoutMapping[];
};

type DescribeApprovalLayout = {
  id: string;
  label: string;
  layoutItems: DescribeLayoutItem[];
  name: string;
};

export type DescribeApprovalLayoutsResult = {
  approvalLayouts: DescribeApprovalLayout[];
};

export type DescribeTab = {
  colors: DescribeColor[];
  custom: boolean;
  iconUrl: string;
  icons: DescribeIcon[];
  label: string;
  miniIconUrl: string;
  name: string;
  sobjectName: Optional<string>;
  url: string;
};

export type DescribeTheme = {
  themeItems: Array<{
    colors: Optional<DescribeColor[]>;
    icons: Optional<DescribeIcon[]>;
    name: string;
  }>;
};

export type DescribeQuickActionResult = {
  actionEnumOrId: string;
  label: string;
  name: string;
  type: string;
  urls: { [key: string]: string };
};

type DescribeQuickActionDefaultValue = any; // TODO

export type DescribeQuickActionDetailResult = DescribeQuickActionResult & {
  canvasApplicationId: Optional<string>;
  canvasApplicationName: Optional<string>;
  colors: Optional<DescribeColor[]>;
  defaultValues: Optional<DescribeQuickActionDefaultValue[]>;
  height: Optional<number>;
  iconName: Optional<string>;
  iconUrl: Optional<string>;
  icons: Optional<DescribeIcon[]>;
};

export type DeletedResult = {
  deletedRecords: Array<{
    id: string;
    deletedDate: string;
  }>;
  earliestDateAvailable: string;
  latestDateCovered: string;
};

export type UpdatedResult = {
  ids: string[];
  latestDateCovered: string;
};

export type OrganizationLimitsInfo = {
  [key: string]: {
    Max: number;
    Remaining: number;
  };
};
