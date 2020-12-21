<?php

function ilnews_get_header_ad() {

	// Initialize vars.
	$bg_color       = "";
	$header_ad      = "";
	$html_header_ad = "";

	// Make ACF Fields vars.
	$header_ad_type = get_field('header_ad_type', 'option');
	$header_ad_code = get_field('header_single_ad_code', 'option');
	$header_adsense = get_field('header_adsense_code', 'option');
	$header_color   = get_field('header_ad_color', 'option');

	// Create vars for the AdSanity Ads.
	$header_adsanity_ad = adsanity_show_ad(array( 'align' => 'aligncenter', 'post_id' => $header_ad_code, 'return' => true));
	$header_adsanity_group = adsanity_show_ad_group(array( 'align' => 'aligncenter', 'num_ads' => 1, 'num_columns' => 1, 'group_ids' => array(47), 'return' => true));

	// Check which type of AD is selected.
	if( 'single_ad' == $header_ad_type ) {
		$header_ad = $header_adsanity_ad;
	}elseif( 'ad_group' == $header_ad_type ) {
		$header_ad = $header_adsanity_group;
	}elseif( 'ad_sense' == $header_ad_type ) {
 		$header_ad = $header_adsense;
 	}elseif( 'disable' == $header_ad_type ) {
 		$header_ad = false;
 	}

 	// Check if the user has selected any color.
 	if ( true == get_field('header_ad_color', 'option') ){
 		$bg_color = 'style="background-color:'.$header_color.'"';
 	}else{
 		$bg_color = "";
 	}

 	// If AD is not disabled return the html.
 	if ( true == $header_ad ) {
	 	$html_header_ad =
	 	'<!-- BAKEMYWP HEADER AD -->
	 	<div class="header_ad" '.$bg_color.'>
			<div class="container">
				<div class="row brd-bt is-rel">
					<div class="col-sm-12">'.$header_ad.'</div>
				</div>
			</div>
	  	</div>';
	}else{
		$html_header_ad = "";
	}

 	return $html_header_ad;
}

