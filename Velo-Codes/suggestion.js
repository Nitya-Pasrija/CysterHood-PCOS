import wixData from 'wix-data';
function getData() {
	let query=wixData.query('Suggestions');
	return query.limit(500).find().then(results =>{
		console.log('getData',results);
		return results.items;
	});
}
$w.onReady( ()=> {
	$w("#suggestionswrite").onAfterSave( ()=> {
		getData()
	});
});