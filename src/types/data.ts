interface Data {
  meta: Meta;
  data: any[][];
}

interface Meta {
  view: View;
}

export interface View {
  id: string;
  name: string;
  assetType: string;
  attribution: string;
  averageRating: number;
  category: string;
  createdAt: number;
  description: string;
  displayType: string;
  downloadCount: number;
  hideFromCatalog: boolean;
  hideFromDataJson: boolean;
  licenseId: string;
  newBackend: boolean;
  numberOfComments: number;
  oid: number;
  provenance: string;
  publicationAppendEnabled: boolean;
  publicationDate: number;
  publicationGroup: number;
  publicationStage: string;
  rowsUpdatedAt: number;
  rowsUpdatedBy: string;
  tableId: number;
  totalTimesRated: number;
  viewCount: number;
  viewLastModified: number;
  viewType: string;
  approvals: Approval[];
  clientContext: ClientContext;
  columns: Column[];
  grants: Grant[];
  license: License;
  metadata: Metadata;
  owner: Owner;
  query: Query;
  rights: string[];
  tableAuthor: TableAuthor;
  tags: string[];
  flags: string[];
}

interface Approval {
  reviewedAt: number;
  reviewedAutomatically: boolean;
  state: string;
  submissionId: number;
  submissionObject: string;
  submissionOutcome: string;
  submittedAt: number;
  workflowId: number;
  submissionDetails: SubmissionDetails;
  submissionOutcomeApplication: SubmissionOutcomeApplication;
  submitter: Submitter;
}

interface SubmissionDetails {
  permissionType: string;
}

interface SubmissionOutcomeApplication {
  endedAt: number;
  failureCount: number;
  startedAt: number;
  status: string;
}

interface Submitter {
  id: string;
  displayName: string;
}

interface ClientContext {
  clientContextVariables: any[];
  inheritedVariables: InheritedVariables;
}

interface InheritedVariables {}

export interface Column {
  id: number;
  name: string;
  dataTypeName: string;
  fieldName: string;
  position: number;
  renderTypeName: string;
  format: Format;
  flags?: string[];
  description?: string;
  tableColumnId?: number;
  cachedContents?: CachedContents;
}

interface Format {
  precision?: string;
}

export interface CachedContents {
  non_null: string;
  largest: string;
  null: string;
  top: Top[];
  smallest: string;
  count: string;
  cardinality: string;
}

interface Top {
  item: string;
  count: string;
}

interface Grant {
  inherited: boolean;
  type: string;
  flags: string[];
}

interface License {
  name: string;
  termsLink: string;
}

export interface Metadata {
  custom_fields: CustomFields;
  rowLabel: string;
  availableDisplayTypes: string[];
}

export interface CustomFields {
  "Data Quality": DataQuality;
  "Common Core": CommonCore;
}

export interface DataQuality {
  "Suggested Citation": string;
}

export interface CommonCore {
  "Contact Email": string;
  Homepage: string;
  "Contact Name": string;
  Issued: string;
  "Update Frequency": string;
  "Temporal Applicability": string;
  "Program Code": string;
  "Geographic Coverage": string;
  Publisher: string;
  "Bureau Code": string;
  "Public Access Level": string;
}

export interface Owner {
  id: string;
  displayName: string;
  profileImageUrlLarge: string;
  profileImageUrlMedium: string;
  profileImageUrlSmall: string;
  screenName: string;
  type: string;
  flags: string[];
}

export interface Query {}

export interface TableAuthor {
  id: string;
  displayName: string;
  profileImageUrlLarge: string;
  profileImageUrlMedium: string;
  profileImageUrlSmall: string;
  screenName: string;
  type: string;
  flags: string[];
}
