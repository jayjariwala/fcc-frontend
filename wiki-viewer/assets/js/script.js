let pageOffset = 0;

function renderResult(topics)
{
	(pageOffset < 10) ? $('.js-prev').attr({'disabled':''}) : $('.js-prev').removeAttr("disabled");
	if(topics.length === 0 )
	{
		$('.js-result').html("<li><h2>No Result found</h2></li>");
		$('.js-next, .js-prev').hide();
	}
	else
	{	
		let formattedOutput = topics.map((topic) => `<a href='https://en.wikipedia.org/wiki/${topic.title}' target="__blank"><li><h3 class="title">${topic.title}</h3><p class="description">${topic.snippet}</p></li></a>`);
		$('.js-result').html(formattedOutput.join(""));
	}
}

function apiRequest(word)
{
	$.ajax({
		type: "GET",
		url: "https://en.wikipedia.org/w/api.php?action=query&format=json&uselang=user&prop=&list=search&iwurl=1&continue=-%7C%7C&titles="+word+"&redirects=1&srsearch="+word+"&sroffset="+pageOffset+"&srinfo=&srprop=snippet",
		dataType: "jsonp",
		success: function(jsonData){
			(jsonData.continue === undefined ) ? $('.js-next').attr({'disabled':''}) : $('.js-next').removeAttr("disabled");
			renderResult(jsonData.query.search);
		}
	});
}

function keypressed()
{
	if(!this.value) {
		$('.js-result').html("");
		$('.js-next, .js-prev').hide();
		return;
	} 
	apiRequest(this.value);
	$('.js-next, .js-prev').show();
}

function loadNextPage(event)
{
	event.preventDefault();
	pageOffset +=10;
	apiRequest($('.js-search').val());
}

function loadPrevPage(event)
{
	event.preventDefault();
	if( pageOffset === 0 ) return;
	pageOffset -=10;
	apiRequest($('.js-search').val());
}

$('.js-search').keyup(keypressed);
$('.js-next, .js-prev').hide();
$('.js-next').click(loadNextPage);
$('.js-prev').click(loadPrevPage);
