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
          model: '',
          year: '',
        })
      case 'model':
        setValues({
          ...values,
          year: '',
        })
      default:
        break
    }
    setValues({ ...values, [name]: value })
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
