$(document).ready(function(){

	$("#man1").click(function(){
										$("#man2").show();
										});
									  $("#man2").click(function(){
											$("#man3").show();
											});
										  $("#man3").click(function(){
													$("#man4").show();
													});
                                                   
											  $("#man1").click(function(){
													$("#man1").hide();
													});
												  $("#man2").click(function(){
														$("#man2").hide();
														});
													  $("#man3").click(function(){
															$("#man3").hide();
															});
                                                            $("#man4").click(function(){
                                                                $("#man5").show();
                                                                });
														})
