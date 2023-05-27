import { type Term, type Equation } from '../../types'
import styles from './EquationCard.module.css'

interface Props {
  equation: Equation
}

export const EquationCard = ({ equation }: Props) => {
  const { variable, coefficients, firstSubIndex } = equation

  const subIndexVariable = firstSubIndex[0]
  const firstSubIndexNumber = parseInt(firstSubIndex.slice(1))

  const terms = coefficients.split(',').map((coefficient, index) => {
    const coefInt = parseInt(coefficient)
    const subIndexNumber = firstSubIndexNumber - index
    const subIndexSign = subIndexNumber > 0 ? '+' : '-'
    const subIndex =
      subIndexNumber === 0
        ? subIndexVariable
        : `${subIndexVariable}${subIndexSign}${Math.abs(subIndexNumber)}`
    const term: Term = {
      first: index === 0,
      sign: coefInt < 0 ? '-' : '+',
      number: Math.abs(coefInt),
      variable,
      subIndex
    }
    return term
  })

  const Term = (term: Term) => {
    const { first, sign, number, variable, subIndex } = term
    const sign_ = first && sign === '+' ? '' : sign
    const number_ = number === 1 ? '' : number

    return (
      <>
        <span> {sign_} </span>
        <span>{number_}</span>
        <var>{variable}</var>
        <span className={styles.subIndex}>{subIndex}</span>
      </>
    )
  }

  return (
    <div className={styles.equation}>
      {terms.map(Term)}
      <span> = 0 </span>
    </div>
  )
}
