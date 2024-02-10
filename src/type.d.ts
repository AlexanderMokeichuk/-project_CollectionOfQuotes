export interface Quote {
  author: string,
  category: string,
  text: string,
}

export interface PostQuote extends Quote {
  createdAt: string,
}