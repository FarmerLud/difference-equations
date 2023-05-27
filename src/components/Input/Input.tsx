import { useState } from 'react'
import { EquationCard } from '../EquationCard/EquationCard'
import styles from './Input.module.css'
import { type Equation } from '../../types'

const initialEquation: Equation = {
  variable: 'x',
  coefficients: '1,-2,4',
  firstSubIndex: 'n+2'
}

export const Input = () => {
  const [equation, setEquation] = useState(initialEquation)
  const { variable, coefficients, firstSubIndex } = equation

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    console.log({ name, value })

    setEquation({ ...equation, [name]: value })
  }

  return (
    <>
      <section className={styles.section}>
        <label htmlFor="input_variable">Variable:</label>
        <input
          id="input_variable"
          name="variable"
          value={variable}
          type="text"
          placeholder="x"
          maxLength={1}
          onChange={handleChange}
        />
        <label htmlFor="input_coefficients">Coeficientes:</label>
        <input
          id="input_coefficients"
          name="coefficients"
          value={coefficients}
          type="text"
          placeholder="1,-2,4"
          onChange={handleChange}
        />
        <label htmlFor="input_sub_index">Primer sub-indice:</label>
        <input
          name="firstSubIndex"
          value={firstSubIndex}
          id="input_sub_index"
          type="text"
          placeholder="n+2"
          onChange={handleChange}
        />
      </section>
      <EquationCard equation={equation} />
    </>
  )
}
