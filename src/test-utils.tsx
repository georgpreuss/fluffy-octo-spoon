import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
// import { ThemeProvider } from 'my-ui-lib'
// import { TranslationProvider } from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

const AllTheProviders: FC = ({ children }) => {
    return (
        <>
            {/* <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}> */}
            {children}
            {/* </TranslationProvider>
    </ThemeProvider> */}
        </>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
