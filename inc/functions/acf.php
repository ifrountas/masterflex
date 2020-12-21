<?php


	if( function_exists('acf_add_options_page') ) {
	
		acf_add_options_page(array(
			'page_title' 	=> 'Theme Settings',
			'menu_title'	=> 'Theme Settings',
			'menu_slug' 	=> 'general-theme-settings',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));

		acf_add_options_sub_page(array(
			'page_title' 	=> 'Ad Settings',
			'menu_title'	=> 'Ad Settings',
			'parent_slug'	=> 'general-theme-settings',
		));
			
	}


?>