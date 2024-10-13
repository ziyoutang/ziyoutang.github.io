$(document).ready(function(){

	$("#man1").click(function(){
										$("#man2").show();
										});
									  $("#man2").click(function(){
											$("#man1").show();
											});
												   
											  $("#man1").click(function(){
													$("#man2").hide();
													});
												  $("#man2").click(function(){
														$("#man1").hide();
														});
													})