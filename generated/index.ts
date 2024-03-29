import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://api-ap-southeast-2.graphcms.com/v2/ckwwvc5mz82wk01z1bsq3f9ko/master", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  assetsProject: Array<Project>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  tileImageProject: Array<Project>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAssetsProjectArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetTileImageProjectArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  assetsProject?: Maybe<ProjectCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  tileImageProject?: Maybe<ProjectCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  assetsProject_every?: Maybe<ProjectWhereInput>;
  assetsProject_none?: Maybe<ProjectWhereInput>;
  assetsProject_some?: Maybe<ProjectWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  tileImageProject_every?: Maybe<ProjectWhereInput>;
  tileImageProject_none?: Maybe<ProjectWhereInput>;
  tileImageProject_some?: Maybe<ProjectWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  assetsProject?: Maybe<ProjectUpdateManyInlineInput>;
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  tileImageProject?: Maybe<ProjectUpdateManyInlineInput>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  assetsProject_every?: Maybe<ProjectWhereInput>;
  assetsProject_none?: Maybe<ProjectWhereInput>;
  assetsProject_some?: Maybe<ProjectWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  tileImageProject_every?: Maybe<ProjectWhereInput>;
  tileImageProject_none?: Maybe<ProjectWhereInput>;
  tileImageProject_some?: Maybe<ProjectWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export type Contact = Node & {
  __typename?: 'Contact';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Contact>;
  getInTouch?: Maybe<RichText>;
  /** List of Contact versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContactCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContactDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ContactHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ContactPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContactScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ContactUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactConnection = {
  __typename?: 'ContactConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  getInTouch?: Maybe<Scalars['RichTextAST']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactCreateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: Maybe<Array<ContactWhereUniqueInput>>;
  /** Create and connect multiple existing Contact documents */
  create?: Maybe<Array<ContactCreateInput>>;
};

export type ContactCreateOneInlineInput = {
  /** Connect one existing Contact document */
  connect?: Maybe<ContactWhereUniqueInput>;
  /** Create and connect one Contact document */
  create?: Maybe<ContactCreateInput>;
};

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Contact;
};

/** Identifies documents */
export type ContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ContactOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ContactUpdateInput = {
  getInTouch?: Maybe<Scalars['RichTextAST']>;
};

export type ContactUpdateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: Maybe<Array<ContactConnectInput>>;
  /** Create and connect multiple Contact documents */
  create?: Maybe<Array<ContactCreateInput>>;
  /** Delete multiple Contact documents */
  delete?: Maybe<Array<ContactWhereUniqueInput>>;
  /** Disconnect multiple Contact documents */
  disconnect?: Maybe<Array<ContactWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Contact documents */
  set?: Maybe<Array<ContactWhereUniqueInput>>;
  /** Update multiple Contact documents */
  update?: Maybe<Array<ContactUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Contact documents */
  upsert?: Maybe<Array<ContactUpsertWithNestedWhereUniqueInput>>;
};

export type ContactUpdateManyInput = {
  getInTouch?: Maybe<Scalars['RichTextAST']>;
};

export type ContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactUpdateManyInput;
  /** Document search */
  where: ContactWhereInput;
};

export type ContactUpdateOneInlineInput = {
  /** Connect existing Contact document */
  connect?: Maybe<ContactWhereUniqueInput>;
  /** Create and connect one Contact document */
  create?: Maybe<ContactCreateInput>;
  /** Delete currently connected Contact document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Contact document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Contact document */
  update?: Maybe<ContactUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Contact document */
  upsert?: Maybe<ContactUpsertWithNestedWhereUniqueInput>;
};

export type ContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactUpdateInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

export type ContactUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCreateInput;
  /** Update document if it exists */
  update: ContactUpdateInput;
};

export type ContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactUpsertInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

/** Identifies documents */
export type ContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Contact record uniquely */
export type ContactWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Footer = Node & {
  __typename?: 'Footer';
  copy?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Footer>;
  /** List of Footer versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  links: Array<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FooterCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FooterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FooterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type FooterPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FooterScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type FooterUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FooterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterConnection = {
  __typename?: 'FooterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FooterCreateInput = {
  copy?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Array<Scalars['RichTextAST']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterCreateManyInlineInput = {
  /** Connect multiple existing Footer documents */
  connect?: Maybe<Array<FooterWhereUniqueInput>>;
  /** Create and connect multiple existing Footer documents */
  create?: Maybe<Array<FooterCreateInput>>;
};

export type FooterCreateOneInlineInput = {
  /** Connect one existing Footer document */
  connect?: Maybe<FooterWhereUniqueInput>;
  /** Create and connect one Footer document */
  create?: Maybe<FooterCreateInput>;
};

/** An edge in a connection. */
export type FooterEdge = {
  __typename?: 'FooterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Footer;
};

/** Identifies documents */
export type FooterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  copy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  copy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  copy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  copy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  copy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  copy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  copy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  copy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  copy_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum FooterOrderByInput {
  CopyAsc = 'copy_ASC',
  CopyDesc = 'copy_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FooterUpdateInput = {
  copy?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Scalars['RichTextAST']>>;
};

export type FooterUpdateManyInlineInput = {
  /** Connect multiple existing Footer documents */
  connect?: Maybe<Array<FooterConnectInput>>;
  /** Create and connect multiple Footer documents */
  create?: Maybe<Array<FooterCreateInput>>;
  /** Delete multiple Footer documents */
  delete?: Maybe<Array<FooterWhereUniqueInput>>;
  /** Disconnect multiple Footer documents */
  disconnect?: Maybe<Array<FooterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Footer documents */
  set?: Maybe<Array<FooterWhereUniqueInput>>;
  /** Update multiple Footer documents */
  update?: Maybe<Array<FooterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Footer documents */
  upsert?: Maybe<Array<FooterUpsertWithNestedWhereUniqueInput>>;
};

export type FooterUpdateManyInput = {
  copy?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Scalars['RichTextAST']>>;
};

export type FooterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterUpdateManyInput;
  /** Document search */
  where: FooterWhereInput;
};

export type FooterUpdateOneInlineInput = {
  /** Connect existing Footer document */
  connect?: Maybe<FooterWhereUniqueInput>;
  /** Create and connect one Footer document */
  create?: Maybe<FooterCreateInput>;
  /** Delete currently connected Footer document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Footer document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Footer document */
  update?: Maybe<FooterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Footer document */
  upsert?: Maybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterUpdateInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

export type FooterUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterCreateInput;
  /** Update document if it exists */
  update: FooterUpdateInput;
};

export type FooterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterUpsertInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

/** Identifies documents */
export type FooterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  copy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  copy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  copy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  copy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  copy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  copy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  copy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  copy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  copy_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Home = Node & {
  __typename?: 'Home';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Home>;
  heroText?: Maybe<RichText>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  /** List of Home versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  largeText?: Maybe<RichText>;
  mediumText?: Maybe<RichText>;
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  smallText?: Maybe<RichText>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  xLargeText?: Maybe<RichText>;
};


export type HomeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HomeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HomeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type HomeProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type HomePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HomeScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type HomeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type HomeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomeWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomeConnection = {
  __typename?: 'HomeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  heroText?: Maybe<Scalars['RichTextAST']>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  largeText?: Maybe<Scalars['RichTextAST']>;
  mediumText?: Maybe<Scalars['RichTextAST']>;
  projects?: Maybe<ProjectCreateManyInlineInput>;
  smallText?: Maybe<Scalars['RichTextAST']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  xLargeText?: Maybe<Scalars['RichTextAST']>;
};

export type HomeCreateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Create and connect multiple existing Home documents */
  create?: Maybe<Array<HomeCreateInput>>;
};

export type HomeCreateOneInlineInput = {
  /** Connect one existing Home document */
  connect?: Maybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: Maybe<HomeCreateInput>;
};

/** An edge in a connection. */
export type HomeEdge = {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home;
};

/** Identifies documents */
export type HomeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroVideoUrl_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroVideoUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroVideoUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heroVideoUrl_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroVideoUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroVideoUrl_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroVideoUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heroVideoUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroVideoUrl_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum HomeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeroVideoUrlAsc = 'heroVideoUrl_ASC',
  HeroVideoUrlDesc = 'heroVideoUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HomeUpdateInput = {
  heroText?: Maybe<Scalars['RichTextAST']>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  largeText?: Maybe<Scalars['RichTextAST']>;
  mediumText?: Maybe<Scalars['RichTextAST']>;
  projects?: Maybe<ProjectUpdateManyInlineInput>;
  smallText?: Maybe<Scalars['RichTextAST']>;
  xLargeText?: Maybe<Scalars['RichTextAST']>;
};

export type HomeUpdateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: Maybe<Array<HomeConnectInput>>;
  /** Create and connect multiple Home documents */
  create?: Maybe<Array<HomeCreateInput>>;
  /** Delete multiple Home documents */
  delete?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Disconnect multiple Home documents */
  disconnect?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Home documents */
  set?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Update multiple Home documents */
  update?: Maybe<Array<HomeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Home documents */
  upsert?: Maybe<Array<HomeUpsertWithNestedWhereUniqueInput>>;
};

export type HomeUpdateManyInput = {
  heroText?: Maybe<Scalars['RichTextAST']>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  largeText?: Maybe<Scalars['RichTextAST']>;
  mediumText?: Maybe<Scalars['RichTextAST']>;
  smallText?: Maybe<Scalars['RichTextAST']>;
  xLargeText?: Maybe<Scalars['RichTextAST']>;
};

export type HomeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomeUpdateManyInput;
  /** Document search */
  where: HomeWhereInput;
};

export type HomeUpdateOneInlineInput = {
  /** Connect existing Home document */
  connect?: Maybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: Maybe<HomeCreateInput>;
  /** Delete currently connected Home document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Home document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Home document */
  update?: Maybe<HomeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Home document */
  upsert?: Maybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type HomeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomeUpdateInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

export type HomeUpsertInput = {
  /** Create document if it didn't exist */
  create: HomeCreateInput;
  /** Update document if it exists */
  update: HomeUpdateInput;
};

export type HomeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomeUpsertInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

/** Identifies documents */
export type HomeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  heroVideoUrl?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroVideoUrl_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroVideoUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroVideoUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heroVideoUrl_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroVideoUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroVideoUrl_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroVideoUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heroVideoUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroVideoUrl_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  projects_every?: Maybe<ProjectWhereInput>;
  projects_none?: Maybe<ProjectWhereInput>;
  projects_some?: Maybe<ProjectWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Home record uniquely */
export type HomeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one contact */
  createContact?: Maybe<Contact>;
  /** Create one footer */
  createFooter?: Maybe<Footer>;
  /** Create one home */
  createHome?: Maybe<Home>;
  /** Create one package */
  createPackage?: Maybe<Package>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one contact from _all_ existing stages. Returns deleted document. */
  deleteContact?: Maybe<Contact>;
  /** Delete one footer from _all_ existing stages. Returns deleted document. */
  deleteFooter?: Maybe<Footer>;
  /** Delete one home from _all_ existing stages. Returns deleted document. */
  deleteHome?: Maybe<Home>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Contact documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactsConnection)
   */
  deleteManyContacts: BatchPayload;
  /** Delete many Contact documents, return deleted documents */
  deleteManyContactsConnection: ContactConnection;
  /**
   * Delete many Footer documents
   * @deprecated Please use the new paginated many mutation (deleteManyFootersConnection)
   */
  deleteManyFooters: BatchPayload;
  /** Delete many Footer documents, return deleted documents */
  deleteManyFootersConnection: FooterConnection;
  /**
   * Delete many Home documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomesConnection)
   */
  deleteManyHomes: BatchPayload;
  /** Delete many Home documents, return deleted documents */
  deleteManyHomesConnection: HomeConnection;
  /**
   * Delete many Package documents
   * @deprecated Please use the new paginated many mutation (deleteManyPackagesConnection)
   */
  deleteManyPackages: BatchPayload;
  /** Delete many Package documents, return deleted documents */
  deleteManyPackagesConnection: PackageConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Delete one package from _all_ existing stages. Returns deleted document. */
  deletePackage?: Maybe<Package>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one contact */
  publishContact?: Maybe<Contact>;
  /** Publish one footer */
  publishFooter?: Maybe<Footer>;
  /** Publish one home */
  publishHome?: Maybe<Home>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Contact documents
   * @deprecated Please use the new paginated many mutation (publishManyContactsConnection)
   */
  publishManyContacts: BatchPayload;
  /** Publish many Contact documents */
  publishManyContactsConnection: ContactConnection;
  /**
   * Publish many Footer documents
   * @deprecated Please use the new paginated many mutation (publishManyFootersConnection)
   */
  publishManyFooters: BatchPayload;
  /** Publish many Footer documents */
  publishManyFootersConnection: FooterConnection;
  /**
   * Publish many Home documents
   * @deprecated Please use the new paginated many mutation (publishManyHomesConnection)
   */
  publishManyHomes: BatchPayload;
  /** Publish many Home documents */
  publishManyHomesConnection: HomeConnection;
  /**
   * Publish many Package documents
   * @deprecated Please use the new paginated many mutation (publishManyPackagesConnection)
   */
  publishManyPackages: BatchPayload;
  /** Publish many Package documents */
  publishManyPackagesConnection: PackageConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Publish one package */
  publishPackage?: Maybe<Package>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one contact */
  schedulePublishContact?: Maybe<Contact>;
  /** Schedule to publish one footer */
  schedulePublishFooter?: Maybe<Footer>;
  /** Schedule to publish one home */
  schedulePublishHome?: Maybe<Home>;
  /** Schedule to publish one package */
  schedulePublishPackage?: Maybe<Package>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContact?: Maybe<Contact>;
  /** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFooter?: Maybe<Footer>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHome?: Maybe<Home>;
  /** Unpublish one package from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPackage?: Maybe<Package>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContact?: Maybe<Contact>;
  /** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFooter?: Maybe<Footer>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHome?: Maybe<Home>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Contact documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactsConnection)
   */
  unpublishManyContacts: BatchPayload;
  /** Find many Contact documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactsConnection: ContactConnection;
  /**
   * Unpublish many Footer documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFootersConnection)
   */
  unpublishManyFooters: BatchPayload;
  /** Find many Footer documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFootersConnection: FooterConnection;
  /**
   * Unpublish many Home documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomesConnection)
   */
  unpublishManyHomes: BatchPayload;
  /** Find many Home documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomesConnection: HomeConnection;
  /**
   * Unpublish many Package documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPackagesConnection)
   */
  unpublishManyPackages: BatchPayload;
  /** Find many Package documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPackagesConnection: PackageConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /** Unpublish one package from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPackage?: Maybe<Package>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one contact */
  updateContact?: Maybe<Contact>;
  /** Update one footer */
  updateFooter?: Maybe<Footer>;
  /** Update one home */
  updateHome?: Maybe<Home>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many contacts
   * @deprecated Please use the new paginated many mutation (updateManyContactsConnection)
   */
  updateManyContacts: BatchPayload;
  /** Update many Contact documents */
  updateManyContactsConnection: ContactConnection;
  /**
   * Update many footers
   * @deprecated Please use the new paginated many mutation (updateManyFootersConnection)
   */
  updateManyFooters: BatchPayload;
  /** Update many Footer documents */
  updateManyFootersConnection: FooterConnection;
  /**
   * Update many homes
   * @deprecated Please use the new paginated many mutation (updateManyHomesConnection)
   */
  updateManyHomes: BatchPayload;
  /** Update many Home documents */
  updateManyHomesConnection: HomeConnection;
  /**
   * Update many packages
   * @deprecated Please use the new paginated many mutation (updateManyPackagesConnection)
   */
  updateManyPackages: BatchPayload;
  /** Update many Package documents */
  updateManyPackagesConnection: PackageConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Update one package */
  updatePackage?: Maybe<Package>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one contact */
  upsertContact?: Maybe<Contact>;
  /** Upsert one footer */
  upsertFooter?: Maybe<Footer>;
  /** Upsert one home */
  upsertHome?: Maybe<Home>;
  /** Upsert one package */
  upsertPackage?: Maybe<Package>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateContactArgs = {
  data: ContactCreateInput;
};


export type MutationCreateFooterArgs = {
  data: FooterCreateInput;
};


export type MutationCreateHomeArgs = {
  data: HomeCreateInput;
};


export type MutationCreatePackageArgs = {
  data: PackageCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationDeleteFooterArgs = {
  where: FooterWhereUniqueInput;
};


export type MutationDeleteHomeArgs = {
  where: HomeWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyContactsArgs = {
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationDeleteManyContactsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationDeleteManyFootersArgs = {
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationDeleteManyFootersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationDeleteManyHomesArgs = {
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationDeleteManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationDeleteManyPackagesArgs = {
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationDeleteManyPackagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationDeletePackageArgs = {
  where: PackageWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishContactArgs = {
  to?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationPublishFooterArgs = {
  to?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationPublishHomeArgs = {
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyContactsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationPublishManyContactsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationPublishManyFootersArgs = {
  to?: Array<Stage>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationPublishManyFootersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationPublishManyHomesArgs = {
  to?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationPublishManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationPublishManyPackagesArgs = {
  to?: Array<Stage>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationPublishManyPackagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishPackageArgs = {
  to?: Array<Stage>;
  where: PackageWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishContactArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationSchedulePublishFooterArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationSchedulePublishHomeArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
};


export type MutationSchedulePublishPackageArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PackageWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishContactArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ContactWhereUniqueInput;
};


export type MutationScheduleUnpublishFooterArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: FooterWhereUniqueInput;
};


export type MutationScheduleUnpublishHomeArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: HomeWhereUniqueInput;
};


export type MutationScheduleUnpublishPackageArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PackageWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishContactArgs = {
  from?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationUnpublishFooterArgs = {
  from?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationUnpublishHomeArgs = {
  from?: Array<Stage>;
  where: HomeWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyContactsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationUnpublishManyContactsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationUnpublishManyFootersArgs = {
  from?: Array<Stage>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationUnpublishManyFootersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationUnpublishManyHomesArgs = {
  from?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUnpublishManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUnpublishManyPackagesArgs = {
  from?: Array<Stage>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationUnpublishManyPackagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUnpublishPackageArgs = {
  from?: Array<Stage>;
  where: PackageWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpdateFooterArgs = {
  data: FooterUpdateInput;
  where: FooterWhereUniqueInput;
};


export type MutationUpdateHomeArgs = {
  data: HomeUpdateInput;
  where: HomeWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyContactsArgs = {
  data: ContactUpdateManyInput;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationUpdateManyContactsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ContactUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactManyWhereInput>;
};


export type MutationUpdateManyFootersArgs = {
  data: FooterUpdateManyInput;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationUpdateManyFootersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: FooterUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FooterManyWhereInput>;
};


export type MutationUpdateManyHomesArgs = {
  data: HomeUpdateManyInput;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUpdateManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: HomeUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUpdateManyPackagesArgs = {
  data: PackageUpdateManyInput;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationUpdateManyPackagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PackageUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PackageManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ProjectUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUpdatePackageArgs = {
  data: PackageUpdateInput;
  where: PackageWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertContactArgs = {
  upsert: ContactUpsertInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpsertFooterArgs = {
  upsert: FooterUpsertInput;
  where: FooterWhereUniqueInput;
};


export type MutationUpsertHomeArgs = {
  upsert: HomeUpsertInput;
  where: HomeWhereUniqueInput;
};


export type MutationUpsertPackageArgs = {
  upsert: PackageUpsertInput;
  where: PackageWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Package = Node & {
  __typename?: 'Package';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Package>;
  hecId?: Maybe<Scalars['Int']>;
  /** List of Package versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PackageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PackageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PackageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PackagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PackageScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PackageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PackageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PackageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PackageConnection = {
  __typename?: 'PackageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PackageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PackageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  hecId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PackageCreateManyInlineInput = {
  /** Connect multiple existing Package documents */
  connect?: Maybe<Array<PackageWhereUniqueInput>>;
  /** Create and connect multiple existing Package documents */
  create?: Maybe<Array<PackageCreateInput>>;
};

export type PackageCreateOneInlineInput = {
  /** Connect one existing Package document */
  connect?: Maybe<PackageWhereUniqueInput>;
  /** Create and connect one Package document */
  create?: Maybe<PackageCreateInput>;
};

/** An edge in a connection. */
export type PackageEdge = {
  __typename?: 'PackageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Package;
};

/** Identifies documents */
export type PackageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PackageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PackageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PackageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  hecId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  hecId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  hecId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  hecId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  hecId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  hecId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  hecId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  hecId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PackageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HecIdAsc = 'hecId_ASC',
  HecIdDesc = 'hecId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PackageUpdateInput = {
  hecId?: Maybe<Scalars['Int']>;
};

export type PackageUpdateManyInlineInput = {
  /** Connect multiple existing Package documents */
  connect?: Maybe<Array<PackageConnectInput>>;
  /** Create and connect multiple Package documents */
  create?: Maybe<Array<PackageCreateInput>>;
  /** Delete multiple Package documents */
  delete?: Maybe<Array<PackageWhereUniqueInput>>;
  /** Disconnect multiple Package documents */
  disconnect?: Maybe<Array<PackageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Package documents */
  set?: Maybe<Array<PackageWhereUniqueInput>>;
  /** Update multiple Package documents */
  update?: Maybe<Array<PackageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Package documents */
  upsert?: Maybe<Array<PackageUpsertWithNestedWhereUniqueInput>>;
};

export type PackageUpdateManyInput = {
  hecId?: Maybe<Scalars['Int']>;
};

export type PackageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PackageUpdateManyInput;
  /** Document search */
  where: PackageWhereInput;
};

export type PackageUpdateOneInlineInput = {
  /** Connect existing Package document */
  connect?: Maybe<PackageWhereUniqueInput>;
  /** Create and connect one Package document */
  create?: Maybe<PackageCreateInput>;
  /** Delete currently connected Package document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Package document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Package document */
  update?: Maybe<PackageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Package document */
  upsert?: Maybe<PackageUpsertWithNestedWhereUniqueInput>;
};

export type PackageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PackageUpdateInput;
  /** Unique document search */
  where: PackageWhereUniqueInput;
};

export type PackageUpsertInput = {
  /** Create document if it didn't exist */
  create: PackageCreateInput;
  /** Update document if it exists */
  update: PackageUpdateInput;
};

export type PackageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PackageUpsertInput;
  /** Unique document search */
  where: PackageWhereUniqueInput;
};

/** Identifies documents */
export type PackageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PackageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PackageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PackageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  hecId?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  hecId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  hecId_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  hecId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  hecId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  hecId_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  hecId_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  hecId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Package record uniquely */
export type PackageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = Node & {
  __typename?: 'Project';
  assets: Array<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  headline?: Maybe<Scalars['String']>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  projectType?: Maybe<ProjectType>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** 712x475 */
  tileImage?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videos: Array<Scalars['String']>;
};


export type ProjectAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type ProjectCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ProjectPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ProjectTileImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  assets?: Maybe<AssetCreateManyInlineInput>;
  ckwwvpj8k7x9z01yycl7u8zqw?: Maybe<HomeCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
  tileImage?: Maybe<AssetCreateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  videos?: Maybe<Array<Scalars['String']>>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  assets_every?: Maybe<AssetWhereInput>;
  assets_none?: Maybe<AssetWhereInput>;
  assets_some?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  projectType?: Maybe<ProjectType>;
  /** All values that are contained in given list. */
  projectType_in?: Maybe<Array<Maybe<ProjectType>>>;
  /** All values that are not equal to given value. */
  projectType_not?: Maybe<ProjectType>;
  /** All values that are not contained in given list. */
  projectType_not_in?: Maybe<Array<Maybe<ProjectType>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  tileImage?: Maybe<AssetWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  videos?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  videos_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  videos_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  videos_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  videos_not?: Maybe<Array<Scalars['String']>>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProjectTypeAsc = 'projectType_ASC',
  ProjectTypeDesc = 'projectType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideosAsc = 'videos_ASC',
  VideosDesc = 'videos_DESC'
}

export enum ProjectType {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  Xlarge = 'xlarge'
}

export type ProjectUpdateInput = {
  assets?: Maybe<AssetUpdateManyInlineInput>;
  ckwwvpj8k7x9z01yycl7u8zqw?: Maybe<HomeUpdateManyInlineInput>;
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
  tileImage?: Maybe<AssetUpdateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Scalars['String']>>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
  title?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Scalars['String']>>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  assets_every?: Maybe<AssetWhereInput>;
  assets_none?: Maybe<AssetWhereInput>;
  assets_some?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  projectType?: Maybe<ProjectType>;
  /** All values that are contained in given list. */
  projectType_in?: Maybe<Array<Maybe<ProjectType>>>;
  /** All values that are not equal to given value. */
  projectType_not?: Maybe<ProjectType>;
  /** All values that are not contained in given list. */
  projectType_not_in?: Maybe<Array<Maybe<ProjectType>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  tileImage?: Maybe<AssetWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  videos?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  videos_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  videos_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  videos_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  videos_not?: Maybe<Array<Scalars['String']>>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single contact */
  contact?: Maybe<Contact>;
  /** Retrieve document version */
  contactVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contacts */
  contacts: Array<Contact>;
  /** Retrieve multiple contacts using the Relay connection interface */
  contactsConnection: ContactConnection;
  /** Retrieve a single footer */
  footer?: Maybe<Footer>;
  /** Retrieve document version */
  footerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple footers */
  footers: Array<Footer>;
  /** Retrieve multiple footers using the Relay connection interface */
  footersConnection: FooterConnection;
  /** Retrieve a single home */
  home?: Maybe<Home>;
  /** Retrieve document version */
  homeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homes */
  homes: Array<Home>;
  /** Retrieve multiple homes using the Relay connection interface */
  homesConnection: HomeConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single package */
  package?: Maybe<Package>;
  /** Retrieve document version */
  packageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple packages */
  packages: Array<Package>;
  /** Retrieve multiple packages using the Relay connection interface */
  packagesConnection: PackageConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryContactArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContactWhereUniqueInput;
};


export type QueryContactVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContactsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ContactWhereInput>;
};


export type QueryContactsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ContactWhereInput>;
};


export type QueryFooterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FooterWhereUniqueInput;
};


export type QueryFooterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFootersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<FooterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<FooterWhereInput>;
};


export type QueryFootersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<FooterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<FooterWhereInput>;
};


export type QueryHomeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomeWhereUniqueInput;
};


export type QueryHomeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HomeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HomeWhereInput>;
};


export type QueryHomesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HomeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HomeWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPackageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PackageWhereUniqueInput;
};


export type QueryPackageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPackagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PackageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PackageWhereInput>;
};


export type QueryPackagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PackageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PackageWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Contact | Footer | Home | Package | Project;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<UserKind>>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<UserKind>>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentQuery = { __typename?: 'Query', home?: { __typename?: 'Home', heroVideoUrl?: string | null | undefined, heroText?: { __typename?: 'RichText', html: string } | null | undefined, smallText?: { __typename?: 'RichText', html: string } | null | undefined, mediumText?: { __typename?: 'RichText', html: string } | null | undefined, largeText?: { __typename?: 'RichText', html: string } | null | undefined, xLargeText?: { __typename?: 'RichText', html: string } | null | undefined, projects: Array<{ __typename?: 'Project', id: string, projectType?: ProjectType | null | undefined, title?: string | null | undefined, headline?: string | null | undefined, description?: string | null | undefined, videos: Array<string>, tileImage?: { __typename?: 'Asset', id: string, fileName: string, url: string } | null | undefined, assets: Array<{ __typename?: 'Asset', id: string, fileName: string, url: string }> }> } | null | undefined, contact?: { __typename?: 'Contact', id: string, getInTouch?: { __typename?: 'RichText', html: string } | null | undefined } | null | undefined };


export const GetContentDocument = `
    query GetContent {
  home(where: {id: "ckwwvtah41ajn0b879604sx4k"}) {
    heroText {
      html
    }
    heroVideoUrl
    smallText {
      html
    }
    mediumText {
      html
    }
    largeText {
      html
    }
    xLargeText {
      html
    }
    projects {
      id
      projectType
      title
      headline
      description
      tileImage {
        id
        fileName
        url
      }
      assets {
        id
        fileName
        url
      }
      videos
    }
  }
  contact(where: {id: "ckwzn69b40kev0d829unc461i"}) {
    id
    getInTouch {
      html
    }
  }
}
    `;
export const useGetContentQuery = <
      TData = GetContentQuery,
      TError = unknown
    >(
      variables?: GetContentQueryVariables,
      options?: UseQueryOptions<GetContentQuery, TError, TData>
    ) =>
    useQuery<GetContentQuery, TError, TData>(
      variables === undefined ? ['GetContent'] : ['GetContent', variables],
      fetcher<GetContentQuery, GetContentQueryVariables>(GetContentDocument, variables),
      options
    );