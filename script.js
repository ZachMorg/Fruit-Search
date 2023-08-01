const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsDiv = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(e,isClicked) {
	console.log(e);
	showSuggestions(
		fruit.filter(function(value){
			if(isClicked===true){
				return;
			}
			else{
				return value.toLowerCase().indexOf(input.value.toLowerCase()) === 0;
			}
		})
	,fruit.filter(function(value){
		if(isClicked===true){
			return;
		}
		else{
			return (value.toLowerCase().indexOf(input.value.toLowerCase()) !== -1 && value.toLowerCase().indexOf(input.value.toLowerCase()) !== 0);
		}
	}));
}

function showSuggestions(results1, results2) {
	suggestions.innerHTML = '';

	for(let fruit of results1){
		let newSuggestion = document.createElement('li');
		newSuggestion.innerText = fruit;
		suggestions.append(newSuggestion);
	}
	for(let fruit of results2){
		let newSuggestion = document.createElement('li');
		newSuggestion.innerText = fruit;
		suggestions.append(newSuggestion);
	}
	if(suggestions.innerText === ''){
		suggestionsDiv.style.display = 'none';
	}
	else{
		suggestionsDiv.style.display = 'block';
	}
}

function useSuggestion(e) {
	input.value = e.srcElement.innerText;
	search(input.value,true);
}

input.addEventListener('keyup', search);
suggestions.addEventListener('click', useSuggestion);