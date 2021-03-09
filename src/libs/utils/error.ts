// eslint-disable-next-line no-shadow
declare type TErrorCode =
  | 'ER.G.001' // Internal server error

  // @/handlers/user
  | 'ER.U.001' // User already exists
  | 'ER.U.002' // Input data validation failed

export const throwError = (gqlCode: TErrorCode = 'ER.G.001', error?: any, server = false) => {
  if (process.env.NODE_ENV === 'development' && typeof error !== 'undefined') {
    // Unknown error thrown some a service unexpectedly
    if (gqlCode === 'ER.G.001' && server === true) {
      console.info('Unexpected Error:', error)
    }

    // Know error with code - thown by a handler
    if (server === false) {
      console.info('Known Error:', gqlCode, error)
    }
  }

  throw server ? Error(gqlCode) : { gqlCode }
}
