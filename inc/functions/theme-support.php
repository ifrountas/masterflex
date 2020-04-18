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

		if ( function_exists( 'the_custom_logo' ) && get_custom_logo() ) {
	 		$site_title = get_custom_logo();
		}else {
			$site_title ='<h1 class="site__title-text">
							<a class="base__font color__orange font__weight-900" href="'.$site_url.'" title="'.$site_name.'">'.$site_name.'</a>
						  </h1>';
		}

		return $site_title;
	}


	function twentytwelve_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	
		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial(
				'blogname', array(
					'selector'            => '.site-title > a',
					'container_inclusive' => false,
					'render_callback'     => 'twentytwelve_customize_partial_blogname',
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'blogdescription', array(
					'selector'            => '.site-description',
					'container_inclusive' => false,
					'render_callback'     => 'twentytwelve_customize_partial_blogdescription',
				)
			);
		}
	}
	add_action( 'customize_register', 'twentytwelve_customize_register' );


	/**
	 * Render the site title for the selective refresh partial.
	 *
	 * @since Twenty Twelve 2.0
	 * @see twentytwelve_customize_register()
	 *
	 * @return void
	 */
	function twentytwelve_customize_partial_blogname() {
		bloginfo( 'name' );
	}

	/**
	 * Render the site tagline for the selective refresh partial.
	 *
	 * @since Twenty Twelve 2.0
	 * @see twentytwelve_customize_register()
	 *
	 * @return void
	 */
	function twentytwelve_customize_partial_blogdescription() {
		bloginfo( 'description' );
	}

	

	/**
	* Set our Customizer default options
	*/
	if ( ! function_exists( 'skyrocket_generate_defaults' ) ) {
		function skyrocket_generate_defaults() {
			$customizer_defaults = array(
				'social_newtab' => 0,
				'social_urls' => '',
				'social_alignment' => 'alignright',
				'social_rss' => 0,
				'social_url_icons' => '',
				'contact_phone' => '',
				'search_menu_icon' => 0,
				'woocommerce_shop_sidebar' => 1,
				'woocommerce_product_sidebar' => 0,
				'sample_toggle_switch' => 0,
				'sample_slider_control' => 48,
				'sample_slider_control_small_step' => 2,
				'sample_sortable_repeater_control' => '',
				'sample_image_radio_button' => 'sidebarright',
				'sample_text_radio_button' => 'right',
				'sample_image_checkbox' => 'stylebold,styleallcaps',
				'sample_single_accordion' => '',
				'sample_alpha_color' => 'rgba(209,0,55,0.7)',
				'sample_wpcolorpicker_alpha_color' => 'rgba(55,55,55,0.5)',
				'sample_wpcolorpicker_alpha_color2' => 'rgba(33,33,33,0.8)',
				'sample_pill_checkbox' => 'tiger,elephant,hippo',
				'sample_pill_checkbox2' => 'captainmarvel,msmarvel,squirrelgirl',
				'sample_pill_checkbox3' => 'author,categories,comments',
				'sample_simple_notice' => '',
				'sample_dropdown_select2_control_single' => 'vic',
				'sample_dropdown_select2_control_multi' => 'Antarctica/McMurdo,Australia/Melbourne,Australia/Broken_Hill',
				'sample_dropdown_select2_control_multi2' => 'Atlantic/Stanley,Australia/Darwin',
				'sample_dropdown_posts_control' => '',
				'sample_tinymce_editor' => '',
				'sample_google_font_select' => json_encode(
					array(
						'font' => 'Open Sans',
						'regularweight' => 'regular',
						'italicweight' => 'italic',
						'boldweight' => '700',
						'category' => 'sans-serif'
					)
				),
				'sample_default_text' => '',
				'sample_email_text' => '',
				'sample_url_text' => '',
				'sample_number_text' => '',
				'sample_hidden_text' => '',
				'sample_date_text' => '',
				'sample_default_checkbox' => 0,
				'sample_default_select' => 'jet-fuel',
				'sample_default_radio' => 'spider-man',
				'sample_default_dropdownpages' => '1548',
				'sample_default_textarea' => '',
				'sample_default_color' => '#333',
				'sample_default_media' => '',
				'sample_default_image' => '',
				'sample_default_cropped_image' => '',
				'sample_date_only' => '2017-08-28',
				'sample_date_time' => '2017-08-28 16:30:00',
				'sample_date_time_no_past_date' => date( 'Y-m-d' ),
				'sample_body_text_font' => json_encode(
					array(
						'font' => 'Open Sans',
						'regularweight' => 'regular',
						'italicweight' => 'italic',
						'boldweight' => '700',
						'category' => 'sans-serif'
					)
				),
				'sample_heading_font' => json_encode(
					array(
						'font' => 'Muli',
						'regularweight' => 'regular',
						'italicweight' => 'italic',
						'boldweight' => '700',
						'category' => 'sans-serif'
					)
				),
				'sample_h1_heading_style' => 'normal',
				'sample_h1_heading_weight' => 'bold',
				'sample_h1_heading_text_transform' => 'capitalize',
				'sample_h1_heading_line_height' => 1.5,
				'sample_h1_heading_letter_spacing' => 0,
				'sample_h1_heading_color_normal' => '#333',
				'sample_h1_heading_color_link' => '#234634',
				'sample_h1_heading_color_hover' => '#763562',
				'sample_h1_heading_color_visited' => '#567890',
			);

			return apply_filters( 'skyrocket_customizer_defaults', $customizer_defaults );
		}
	}


	/**
	 * Check if WooCommerce is active
	 * Use in the active_callback when adding the WooCommerce Section to test if WooCommerce is activated
	 *
	 * @return boolean
	 */
	function skyrocket_is_woocommerce_active() {
		if ( class_exists( 'woocommerce' ) ) {
			return true;
		}
		return false;
	}


	/**
	 * Set our Social Icons URLs.
	 * Only needed for our sample customizer preview refresh
	 *
	 * @return array Multidimensional array containing social media data
	 */
	if ( ! function_exists( 'skyrocket_generate_social_urls' ) ) {
		function skyrocket_generate_social_urls() {
			$social_icons = array(
				array( 'url' => 'behance.net', 'icon' => 'icofont-behance', 'title' => esc_html__( 'Follow me on Behance', 'skyrocket' ), 'class' => 'behance' ),
				// array( 'url' => 'bitbucket.org', 'icon' => 'fab fa-bitbucket', 'title' => esc_html__( 'Fork me on Bitbucket', 'skyrocket' ), 'class' => 'bitbucket' ),
				// array( 'url' => 'codepen.io', 'icon' => 'fab fa-codepen', 'title' => esc_html__( 'Follow me on CodePen', 'skyrocket' ), 'class' => 'codepen' ),
				array( 'url' => 'deviantart.com', 'icon' => 'icofont-deviantart', 'title' => esc_html__( 'Watch me on DeviantArt', 'skyrocket' ), 'class' => 'deviantart' ),
				// array( 'url' => 'discord.gg', 'icon' => 'fab fa-discord', 'title' => esc_html__( 'Join me on Discord', 'skyrocket' ), 'class' => 'discord' ),
				array( 'url' => 'dribbble.com', 'icon' => 'icofont-dribbble', 'title' => esc_html__( 'Follow me on Dribbble', 'skyrocket' ), 'class' => 'dribbble' ),
				array( 'url' => 'etsy.com', 'icon' => 'icofont-brand-etsy', 'title' => esc_html__( 'favorite me on Etsy', 'skyrocket' ), 'class' => 'etsy' ),
				array( 'url' => 'facebook.com', 'icon' => 'icofont-facebook', 'title' => esc_html__( 'Like me on Facebook', 'skyrocket' ), 'class' => 'facebook' ),
				array( 'url' => 'flickr.com', 'icon' => 'icofont-brand-flickr', 'title' => esc_html__( 'Connect with me on Flickr', 'skyrocket' ), 'class' => 'flickr' ),
				array( 'url' => 'foursquare.com', 'icon' => 'icofont-brand-foursquare', 'title' => esc_html__( 'Follow me on Foursquare', 'skyrocket' ), 'class' => 'foursquare' ),
				array( 'url' => 'github.com', 'icon' => 'icofont-github', 'title' => esc_html__( 'Fork me on GitHub', 'skyrocket' ), 'class' => 'github' ),
				array( 'url' => 'instagram.com', 'icon' => 'icofont-instagram', 'title' => esc_html__( 'Follow me on Instagram', 'skyrocket' ), 'class' => 'instagram' ),
				// array( 'url' => 'kickstarter.com', 'icon' => 'fab fa-kickstarter-k', 'title' => esc_html__( 'Back me on Kickstarter', 'skyrocket' ), 'class' => 'kickstarter' ),
				array( 'url' => 'last.fm', 'icon' => 'icofont-brand-lastfm', 'title' => esc_html__( 'Follow me on Last.fm', 'skyrocket' ), 'class' => 'lastfm' ),
				array( 'url' => 'linkedin.com', 'icon' => 'icofont-linkedin', 'title' => esc_html__( 'Connect with me on LinkedIn', 'skyrocket' ), 'class' => 'linkedin' ),
				// array( 'url' => 'medium.com', 'icon' => 'fab fa-medium-m', 'title' => esc_html__( 'Follow me on Medium', 'skyrocket' ), 'class' => 'medium' ),
				// array( 'url' => 'patreon.com', 'icon' => 'fab fa-patreon', 'title' => esc_html__( 'Support me on Patreon', 'skyrocket' ), 'class' => 'patreon' ),
				array( 'url' => 'pinterest.com', 'icon' => 'icofont-pinterest', 'title' => esc_html__( 'Follow me on Pinterest', 'skyrocket' ), 'class' => 'pinterest' ),
				array( 'url' => 'reddit.com', 'icon' => 'icofont-reddit', 'title' => esc_html__( 'Join me on Reddit', 'skyrocket' ), 'class' => 'reddit' ),
				array( 'url' => 'slack.com', 'icon' => 'icofont-slack', 'title' => esc_html__( 'Join me on Slack', 'skyrocket' ), 'class' => 'slack.' ),
				// array( 'url' => 'slideshare.net', 'icon' => 'fab fa-slideshare', 'title' => esc_html__( 'Follow me on SlideShare', 'skyrocket' ), 'class' => 'slideshare' ),
				// array( 'url' => 'snapchat.com', 'icon' => 'fab fa-snapchat-ghost', 'title' => esc_html__( 'Add me on Snapchat', 'skyrocket' ), 'class' => 'snapchat' ),
				// array( 'url' => 'soundcloud.com', 'icon' => 'fab fa-soundcloud', 'title' => esc_html__( 'Follow me on SoundCloud', 'skyrocket' ), 'class' => 'soundcloud' ),
				array( 'url' => 'spotify.com', 'icon' => 'icofont-spotify', 'title' => esc_html__( 'Follow me on Spotify', 'skyrocket' ), 'class' => 'spotify' ),
				array( 'url' => 'stackoverflow.com', 'icon' => 'icofont-stack-overflow', 'title' => esc_html__( 'Join me on Stack Overflow', 'skyrocket' ), 'class' => 'stackoverflow' ),
				// array( 'url' => 'tumblr.com', 'icon' => 'fab fa-tumblr', 'title' => esc_html__( 'Follow me on Tumblr', 'skyrocket' ), 'class' => 'tumblr' ),
				array( 'url' => 'twitch.tv', 'icon' => 'icofont-twitch', 'title' => esc_html__( 'Follow me on Twitch', 'skyrocket' ), 'class' => 'twitch' ),
				array( 'url' => 'twitter.com', 'icon' => 'icofont-twitter', 'title' => esc_html__( 'Follow me on Twitter', 'skyrocket' ), 'class' => 'twitter' ),
				array( 'url' => 'vimeo.com', 'icon' => 'icofont-vimeo', 'title' => esc_html__( 'Follow me on Vimeo', 'skyrocket' ), 'class' => 'vimeo' ),
				// array( 'url' => 'weibo.com', 'icon' => 'fab fa-weibo', 'title' => esc_html__( 'Follow me on weibo', 'skyrocket' ), 'class' => 'weibo' ),
				array( 'url' => 'youtube.com', 'icon' => 'icofont-youtube-play', 'title' => esc_html__( 'Subscribe to me on YouTube', 'skyrocket' ), 'class' => 'youtube' ),
			);

			return apply_filters( 'skyrocket_social_icons', $social_icons );
		}
	}


	/**
	 * Return an unordered list of linked social media icons, based on the urls provided in the Customizer Sortable Repeater
	 * This is a sample function to display some social icons on your site.
	 * This sample function is also used to show how you can call a PHP function to refresh the customizer preview.
	 * Add the following code to header.php if you want to see the sample social icons displayed in the customizer preview and your theme.
	 * Before any social icons display, you'll also need to add the relevent URL's to the Header Navigation > Social Icons section in the Customizer.
	 * <div class="social">
	 *	 <?php echo skyrocket_get_social_media(); ?>
	* </div>
	*
	* @return string Unordered list of linked social media icons
	*/
	if ( ! function_exists( 'skyrocket_get_social_media' ) ) {
		function skyrocket_get_social_media() {
			$defaults = skyrocket_generate_defaults();
			$output = array();
			$social_icons = skyrocket_generate_social_urls();
			$social_urls = explode( ',', get_theme_mod( 'social_urls', $defaults['social_urls'] ) );
			$social_newtab = get_theme_mod( 'social_newtab', $defaults['social_newtab'] );
			$social_alignment = get_theme_mod( 'social_alignment', $defaults['social_alignment'] );
			$contact_phone = get_theme_mod( 'contact_phone', $defaults['contact_phone'] );

			if( !empty( $contact_phone ) ) {
				$output[] = sprintf( '<li class="%1$s"><i class="%2$s"></i>%3$s</li>',
					'phone',
					'fas fa-phone fa-flip-horizontal',
					$contact_phone
				);
			}

			foreach( $social_urls as $key => $value ) {
				if ( !empty( $value ) ) {
					$domain = str_ireplace( 'www.', '', parse_url( $value, PHP_URL_HOST ) );
					$index = array_search( strtolower( $domain ), array_column( $social_icons, 'url' ) );
					if( false !== $index ) {
						$output[] = sprintf( '<li class="%1$s"><a href="%2$s" title="%3$s"%4$s><i class="%5$s"></i></a></li>',
							$social_icons[$index]['class'],
							esc_url( $value ),
							$social_icons[$index]['title'],
							( !$social_newtab ? '' : ' target="_blank"' ),
							$social_icons[$index]['icon']
						);
					}
					else {
						$output[] = sprintf( '<li class="nosocial"><a href="%2$s"%3$s><i class="%4$s"></i></a></li>',
							$social_icons[$index]['class'],
							esc_url( $value ),
							( !$social_newtab ? '' : ' target="_blank"' ),
							'fas fa-globe'
						);
					}
				}
			}

			if( get_theme_mod( 'social_rss', $defaults['social_rss'] ) ) {
				$output[] = sprintf( '<li class="%1$s"><a href="%2$s" title="%3$s"%4$s><i class="%5$s"></i></a></li>',
					'rss',
					home_url( '/feed' ),
					'Subscribe to my RSS feed',
					( !$social_newtab ? '' : ' target="_blank"' ),
					'fas fa-rss'
				);
			}

			if ( !empty( $output ) ) {
				$output = apply_filters( 'skyrocket_social_icons_list', $output );
				array_unshift( $output, '<ul class="social-icons ' . $social_alignment . '">' );
				$output[] = '</ul>';
			}

			return implode( '', $output );
		}
	}


