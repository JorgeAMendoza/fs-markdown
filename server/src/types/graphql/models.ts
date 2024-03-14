export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Markdown = {
  __typename?: 'Markdown'
  id: Scalars['String']['output']
  markdown: Scalars['String']['output']
  title: Scalars['String']['output']
  userId: Scalars['String']['output']
}

export type MarkdownItem = {
  __typename?: 'MarkdownItem'
  date: Scalars['String']['output']
  id: Scalars['String']['output']
  title: Scalars['String']['output']
  userId: Scalars['String']['output']
}

export type MarkdownList = {
  __typename?: 'MarkdownList'
  list: Array<MarkdownItem>
}

export type Mutation = {
  __typename?: 'Mutation'
  deleteMarkdown: Markdown
  login: Token
  signUp: Token
  updateMarkdownText: Markdown
  updateMarkdownTitle: Markdown
}

export type MutationDeleteMarkdownArgs = {
  markdownId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type MutationLoginArgs = {
  email: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type MutationSignUpArgs = {
  email: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type MutationUpdateMarkdownTextArgs = {
  markdownId: Scalars['String']['input']
  text: Scalars['String']['input']
}

export type MutationUpdateMarkdownTitleArgs = {
  markdownId: Scalars['String']['input']
  newTitle: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  getList: MarkdownList
  getMarkdown: Markdown
  token?: Maybe<Token>
  user?: Maybe<User>
}

export type QueryGetListArgs = {
  page: Scalars['Int']['input']
  userId: Scalars['String']['input']
}

export type QueryGetMarkdownArgs = {
  markdownId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type Token = {
  __typename?: 'Token'
  token: Scalars['String']['output']
}

export type User = {
  __typename?: 'User'
  accessToken?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  name: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}
