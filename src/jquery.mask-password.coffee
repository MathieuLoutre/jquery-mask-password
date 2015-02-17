do ($) ->
	$.fn.maskPassword = (delay = 1000) ->
		$(@).on 'keyup', (e) ->
			if e.keyCode not in [13, 91, 18, 16, 17, 93]
				clearTimeout($(@).data('show'))

				if $(@).attr('type') is 'password'
					$(@).attr('type': 'text')
					len = $(@).val().length
					@setSelectionRange(len, len)

				$(@).data 'show', setTimeout =>
					$(@).attr('type': 'password')
					len = $(@).val().length
					@setSelectionRange(len, len)
				, delay

	$.fn.destroyMaskPassword = -> clearTimeout($(@).data('show'))