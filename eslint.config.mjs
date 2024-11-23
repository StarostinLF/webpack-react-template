import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reacthooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	{ ignores: ['node_modules', 'public', 'build', 'dist', 'package*.json'] },
	{
		plugins: { reacthooks },
		rules: {
			'no-useless-escape': 'off',
			'no-undef': 'off',
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'reacthooks/rules-of-hooks': 'error',
			'reacthooks/exhaustive-deps': 'error',
		},
	}
)
