import React, { createContext, useContext, useState, FC, useEffect } from 'react'
import { automobileContext, values, optionSelect } from 'types'

const AutomobileContext = createContext<automobileContext>({
  values: {},
  handleChange: () => {},
})

const useAutomobileContext = () => useContext(AutomobileContext)

const AutomobileContextProvider: FC<any> = ({ children }) => {
  const [values, setValues] = useState<values>({
    automobile: 'carros',
    brand: '',
    model: '',
    year: '',
  })

  const handleChange = (value: any, name: string) => {
    switch (name) {
      case 'brand':
        setValues({
          ...values,
          [name]: value,
          model: '',
          year: '',
        })
        break
      case 'model':
        setValues({
          ...values,
          [name]: value,
          year: '',
        })
        break
      default:
        setValues({ ...values, [name]: value })
        break
    }
  }

  return (
    <AutomobileContext.Provider
      value={{
        values,
        handleChange,
      }}
    >
      {children}
    </AutomobileContext.Provider>
  )
}

export { AutomobileContextProvider, AutomobileContext, useAutomobileContext }
