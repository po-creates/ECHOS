import OpenAI from 'openai';

import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';

export const openai = new OpenAI({
	apiKey: PUBLIC_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true
});
