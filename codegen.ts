import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    'client/src/types/graphql/': {
      plugins: ['typescript'],
      preset: 'client-preset',
      overwrite: true
    },
    'server/src/types/graphql/models.ts': {
      plugins: ['typescript'],
      overwrite: true
    }
  }
}

export default config
