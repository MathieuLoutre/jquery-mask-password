do ($) ->
	$.fn.maskPassword = (delay = 1000) ->
		$(@).on 'keyup', (e) ->
			if e.keyCode not in [13, 91, 18, 16, 17, 93]
				clearTimeout($(@).data('show'))
				$(@).attr('type': 'text')

				$(@).data 'show', setTimeout =>
					$(@).attr('type': 'password')
					console.log("whoo")
				, delay