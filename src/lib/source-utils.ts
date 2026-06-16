type SourceType = 'soz' | 'lema' | 'mektup' | 'sua' | 'diger';

const TYPE_ORDER: Record<SourceType, number> = {
	soz: 0, lema: 1, mektup: 2, sua: 3, diger: 4,
};

export const TYPE_LABELS: Record<SourceType, string> = {
	soz: 'Sözler', lema: 'Lemalar', mektup: 'Mektuplar', sua: 'Şualar', diger: 'Diğer',
};

export const TYPE_IDS: Record<SourceType, string> = {
	soz: 'sozler', lema: 'lemalar', mektup: 'mektuplar', sua: 'sualar', diger: 'diger',
};

function parseSourceLabel(label: string): { type: SourceType; number: number } {
	const match = label.match(/^(\d+)\.\s*(Söz|Lema|Mektup|Şua)/);
	if (!match) return { type: 'diger', number: 999 };
	const number = parseInt(match[1], 10);
	const typeMap: Record<string, SourceType> = {
		'Söz': 'soz', 'Lema': 'lema', 'Mektup': 'mektup', 'Şua': 'sua',
	};
	return { type: typeMap[match[2]] ?? 'diger', number };
}

export interface SourceGroup {
	label: string;
	number: number;
	posts: any[];
}

export interface TypeGroup {
	type: SourceType;
	typeLabel: string;
	anchorId: string;
	sources: SourceGroup[];
}

export function groupPostsBySource(posts: any[]): TypeGroup[] {
	const byType = new Map<SourceType, Map<string, SourceGroup>>();

	for (const post of posts) {
		const label: string = post.data.source ?? 'Diğer';
		const { type, number } = label === 'Diğer'
			? { type: 'diger' as SourceType, number: 999 }
			: parseSourceLabel(label);

		if (!byType.has(type)) byType.set(type, new Map());
		const typeMap = byType.get(type)!;
		if (!typeMap.has(label)) typeMap.set(label, { label, number, posts: [] });
		typeMap.get(label)!.posts.push(post);
	}

	return [...byType.entries()]
		.sort(([a], [b]) => TYPE_ORDER[a] - TYPE_ORDER[b])
		.map(([type, sourceMap]) => ({
			type,
			typeLabel: TYPE_LABELS[type],
			anchorId: TYPE_IDS[type],
			sources: [...sourceMap.values()]
				.sort((a, b) => a.number - b.number)
				.map(s => ({
					...s,
					posts: [...s.posts].sort(
						(a, b) => (b.data.pubDate?.valueOf() ?? 0) - (a.data.pubDate?.valueOf() ?? 0)
					),
				})),
		}));
}
