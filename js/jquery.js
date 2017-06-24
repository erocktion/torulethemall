$(document).ready(function() {
	$("body").addClass("animate fadeInLeft");

	$(".clicker").mouseup(function() 
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/click.png") no-repeat center'});
	});

	$(".clicker").mouseout(function() 
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/click.png") no-repeat center'});
	});

	$(".clicker").mousedown(function()
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/click.png") no-repeat center', "background-size":"50%"});
	});
	
	jQuery('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings('div').hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});

	var modal = localStorage.getItem('modal');
$(document).ready(function() {
	if (modal != 'yes') {
		$('[data-remodal-id=modal]').remodal().open();
	};
});

$(document).ready(function() {
	gameSave = JSON.stringify(gameData)
	$('.save').click(function(){
		$('[data-remodal-id=modalSave]').remodal().open();
		$(document).on('confirmation', '.remodal', function () {
			localStorage.setItem('gameSave', JSON.stringify(gameData));
		});
	});
	
	$('.load').click(function(){
		$('[data-remodal-id=modalLoad]').remodal().open();
		$(document).on('confirmation', '.remodal', function () {
			gameData = JSON.parse(localStorage.getItem('gameSave'));
			for (var propt in gameData.buildings) {
					document.getElementById(propt+".cost").innerHTML = gameData.buildings[propt].cost;
			}
		});
	});
	
	$('.reset').click(function(){
		$('[data-remodal-id=modalReset]').remodal().open();
		$(document).on('confirmation', '.remodal', function () {
			delete localStorage['gameSave'];
			location.reload(true);
		});
	});
});

$(document).ready(function() {
	$('.save').qtip({ // Grab some elements to apply the tooltip to
		content: {
			text: 'Saves your current progress.'
		},
		position: {
			target: 'mouse',
			adjust: {
				x: 10,
				y: 10,
			}
		},
		style: {
			classes: 'qtip-dark qtip-shadow qtip-rounded'
		}
	});
});

$(document).ready(function() {
	$('.load').qtip({ // Grab some elements to apply the tooltip to
		content: {
			text: 'Loads progress from save.'
		},
		position: {
			target: 'mouse',
			adjust: {
				x: 10,
				y: 10,
			}
		},
		style: {
			classes: 'qtip-dark qtip-shadow qtip-rounded'
		}
	});
});

$(document).ready(function() {
	$('.reset').qtip({ // Grab some elements to apply the tooltip to
		content: {
			text: 'Resets game progress.'
		},
		position: {
			target: 'mouse',
			adjust: {
				x: 10,
				y: 10,
			}
		},
		style: {
			classes: 'qtip-dark qtip-shadow qtip-rounded'
		}
	});
});

$(document).ready(function() {
	for (var propt in gameData.jobs) {
		$('#'+propt+'2').qtip({ // Grab some elements to apply the tooltip to
			content: {
				text: 'Adds '+gameData.jobs[propt].payPerTick+' $/per second'
			},
			position: {
				target: 'mouse',
				adjust: {
					x: 10,
					y: 10,
				}
			},
			style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded'
			}
		});
	};
});

$(document).ready(function() {
	for (var propt in gameData.upgrades) {
		$('#'+propt+'2').qtip({ // Grab some elements to apply the tooltip to
			content: {
				text: 'Adds '+gameData.upgrades[propt].payPerTick+' $/per second'
			},
			position: {
				target: 'mouse',
				adjust: {
					x: 10,
					y: 10,
				}
			},
			style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded'
			}
		});
	};
});

$(document).ready(function() {
	for (var propt in gameData.buildings) {
		$('#'+propt+'2').qtip({ // Grab some elements to apply the tooltip to
			content: {
				text: 'Adds '+gameData.buildings[propt].payPerTick+' $/per second<br/>Quantity: '+gameData.buildings[propt].count
			},
			position: {
				target: 'mouse',
				adjust: {
					x: 10,
					y: 10,
				}
			},
			style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded'
			}
		});
	};
});

// Copyright (c) 2015 Ilya Makarov

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.