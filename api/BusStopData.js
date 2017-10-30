const data = {
	'Campus Loop - Blue (CL-B)': [
		'NIE, Opp. LWN Library',
		'Opp. Hall 3 & 16',
		'Opp. Hall 14 & 15',
		'Opp Nanyang Crescent Hall',
		'Opp. Hall 10 & 11',
		'Nanyang Heights, Opp. Hall 8',
		'Hall 6, Opp. Hall 2',
		'Opp. Hall 4',
		'Opp. Innovation Centre',
		'Opp. SPMS',
		'Opp. WKWSCI',
		'Opp. CEE',
	],
	'Campus Loop Red (CL-R)': [
		'LWN Library, Opp. NIE',
		'SBS',
		'WKWSCI',
		'Hall 7',
		'Innovation Centre',
		'Hall 4',
		'Hall 1 (Blk 18)',
		'Food court 2',
		'Hall 8 & 9',
		'Opp. Hall 11',
		'Grad Hall 1 & 2',
		'Opp. Hall 22 – Saraca Hall',
		'Hall 12 & 13'
	],
	'Campus Rider Green': [
		'Pioneer MRT Station at Blk 649A',
		'Hall 1 (Blk 18)',
		'Food court 2',
		'Student Service Centre',
		'TCT LT, Opp. Admin Bldg',
		'Opposite Food court 2',
	],
	'Campus WeekEnd Rider Brown': [
		'Pioneer MRT Station at Blk 649A',
		'Hall 1 (Blk 18)',
		'Food court 2',
		'Student Service Centre',
		'TCT LT, Opp. Admin Bldg',
		'ADM, Hall 8',
		'LWN Library, Opp. NIE',
		'Opp. CEE',
		'SBS',
		'WKWSCI',
		'Hall 7',
		'Innovation Centre',
		'Hall 4',
		'Hall 5',
	]
}

export default function(bus) {
	return data[bus];
}