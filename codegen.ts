import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    'client/src/types/graphql/': {
      plugins: ['typescript'],
      preset: 'client-preset'
    },
    'server/src/types/graphql/': {
      plugins: ['typescript']
    }
  }
}

export default config
