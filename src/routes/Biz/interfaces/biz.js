/* @flow */

export type BizObject = {
  id: number,
  value: string
}

export type BizStateObject = {
  current: ?number,
  fetching: boolean,
  saved: Array<number>,
  bizs: Array<BizObject>
}

