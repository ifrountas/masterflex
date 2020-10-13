<?php

	add_theme_support( 'custom-logo' );
	add_theme_support( 'post-thumbnails' );

	function myfirsttheme_logo_setup() {

		$defaults = array(
		'height'      => 100,
		'width'       => 400,
		'flex-height' => true,
		'flex-width'  => true,
		'header-text' => array( 'site-title', 'site-description' ),
		);

		add_theme_support( 'custom-logo', $defaults );
	}

	add_action( 'after_setup_theme', 'myfirsttheme_logo_setup' );



	function myfirsttheme_display_site_title() {

		$site_title = "";
		$site_url   = get_bloginfo( 'url' );
		$site_name  = get_bloginfo( 'name' );
		$site_desc  = get_bloginfo( 'description' );
		$site_desc_html = $site_desc ? '<p class="site__title-desc">'.esc_html($site_desc).'</p>' : '';

		if ( function_exists( 'the_custom_logo' ) && get_custom_logo() ) {
	 		$site_title = get_custom_logo();
		}else {
			$site_title = '<h1 class="site__title-text">
							<a class="color__white font__weight-900" href="'.esc_url($site_url).'" title="'.esc_attr($site_name).'">'.esc_html($site_name).'</a>
						</h1>'
						.$site_desc_html;
		}

		return $site_title;
	}

