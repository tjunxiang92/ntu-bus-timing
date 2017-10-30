const data = {
	'NIE, Opp. LWN Library': '378225',
	'Opp. Hall 3 & 16': '382999',
	'Opp. Hall 14 & 15': '378203',
	'Opp Nanyang Crescent Hall': '383048',
	'Opp. Hall 10 & 11': '378222',
	'Nanyang Heights, Opp. Hall 8': '383003',
	'Hall 6, Opp. Hall 2': '378234',
	'Opp. Hall 4': '383004',
	'Opp. Innovation Centre': '383006',
	'Opp. SPMS': '383009',
	'Opp. WKWSCI': '383010',
	'Opp. CEE': '378226',
	'LWN Library, Opp. NIE': '378224',
	'SBS': '382995',
	'WKWSCI': '378227',
	'Hall 7': '378228',
	'Innovation Centre ': '378229',
	'Hall 4': '378230',
	'Hall 1 (Blk 18)': '378233',
	'Food court 2': '378237',
	'Hall 8 & 9': '382998',
	'Opp. Hall 11': '383049',
	'Grad Hall 1 & 2': '378202',
	'Opp. Hall 22 – Saraca Hall': '383050',
	'Hall 12 & 13': '378204',
	'Pioneer MRT Station at Blk 649A': '377906',
	'Hall 1 (Blk 18)': '378233',
	'Food court 2': '378237',
	'Student Service Centre': '383011',
	'TCT LT, Opp. Admin Bldg': '383013',
	'Opposite Food court 2': '383014',
	'Pioneer MRT Station at Blk 649A': '377906',
	'Hall 1 (Blk 18)': '378233',
	'Food court 2': '378237',
	'Student Service Centre': '383011',
	'TCT LT, Opp. Admin Bldg': '383013',
	'ADM, Hall 8': '378207',
	'LWN Library, Opp. NIE': '378224',
	'Opp. CEE': '383015',
	'SBS': '382995',
	'WKWSCI': '378227',
	'Hall 7': '378228',
	'Innovation Centre': '378229',
	'Hall 4': '378230',
	'Hall 5': '383018',
}

export default function(item) {
	return fetch(`https://baseride.com/routes/api/platformbusarrival/${data[item]}/?format=json`)
      .then((response) => response.text())
      .then((response) => {
      	response = JSON.parse(response);
      	let arrivalTime = {};

      	response.forecast.map(forecast => {
			  	if (!arrivalTime[forecast.route.short_name]) {
			  		arrivalTime[forecast.route.short_name] = [forecast.forecast_seconds];
			  	} else {
			  		arrivalTime[forecast.route.short_name].push(forecast.forecast_seconds);
			  	}
			  });

      	return arrivalTime;
      })
}