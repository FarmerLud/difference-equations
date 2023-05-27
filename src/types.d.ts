export interface Equation {
  variable: string
  coefficients: string
  firstSubIndex: string
}

type Sign = '+' | '-'

export interface Term {
  first: boolean
  sign: Sign
  number: number
  variable: string
  subIndex: string
}
