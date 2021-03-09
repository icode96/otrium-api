// eslint-disable-next-line no-shadow
declare type TErrorCode =
  | 'ER.G.001' // Internal server error
  | 'ER.P.001' // Invalid brandId
  | 'ER.P.002' // Invalid productId
  | 'ER.P.003' // Invalid productId or slug

export const throwError = (errorCode: TErrorCode = 'ER.G.001', error?: any, response = false) => {
  if (process.env.NODE_ENV === 'development' && typeof error !== 'undefined') {
    // Unknown error thrown some a service unexpectedly
    if (errorCode === 'ER.G.001' && response === true) {
      console.info('Unexpected Error:', error)
    }

    // Know error with code - thown by a handler
    if (response === false) {
      console.info('Known Error:', errorCode, error)
    }
  }

  if (response) {
    return { errorCode }
  }

  throw { errorCode }
}

export const throwErrorQL = (gqlCode: TErrorCode = 'ER.G.001', error?: any, server = false) => {
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
