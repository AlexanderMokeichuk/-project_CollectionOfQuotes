export interface Quote {
  author: string,
  category: string,
  text: string,
}

export interface PostQuote extends Quote {
  createdAt: string,
}
export interface Quotes extends PostQuote {
  id: string,
}

export interface GetPost {
  [id: string]: PostQuote,
}