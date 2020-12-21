<?php

	function ilnews_theme_support() {

		add_theme_support( 'custom-logo' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'html5', array( 'search-form' ) );
		add_theme_support( 'align-wide' );

		// Custom Thumbnails
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1000, 600, true );
		add_image_size( 'mvp-mid-thumb', 400, 240, true );
		add_image_size( 'mvp-post-thumb', 1000, 600, true );

		$custombg = array(
			'default-color' => 'ffffff',
		);
		add_theme_support( 'custom-background', $custombg );

		$defaults = array(
			'height'      => 100,
			'width'       => 400,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => array( 'site-title', 'site-description' ),
		);

		add_theme_support( 'custom-logo', $defaults );
	}

	add_action( 'after_setup_theme', 'ilnews_theme_support' );

	/**
	 * Returns the svg logo
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_svg_logo() {

		$logo = get_field('logo', 'option');

		return $logo;
	}

	/**
	 * Returns the site title
	 *
	 * Check if is an image logo, or an svg
	 * if we do not have any logos return the
	 * title of the site.
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_display_site_title() {

		$site_title = "";
		$site_url   = get_bloginfo( 'url' );
		$site_name  = get_bloginfo( 'name' );
		$site_desc  = get_bloginfo( 'description' );
		$site_desc_html = $site_desc ? '<p class="site__title-desc">'.esc_html($site_desc).'</p>' : '';

		if ( function_exists( 'the_custom_logo' ) && get_custom_logo() ) {
	 		$site_title = get_custom_logo();
		}elseif( function_exists( 'ilnews_get_svg_logo' ) && ilnews_get_svg_logo() ){
			$site_title = '<a class="svg__logo" href="'.esc_url($site_url).'" title="'.esc_attr($site_name.' - '.$site_desc).'">'.ilnews_get_svg_logo().'</a>';
		}else {
			$site_title = '<h1 class="site__title-text">
							<a class="color__white font__weight-900" href="'.esc_url($site_url).'" title="'.esc_attr($site_name.' - '.$site_desc).'">'.esc_html($site_name).'</a>
						</h1>'
						.$site_desc_html;
		}

		return $site_title;
	}

	/**
	 * Returns the social media
	 *
	 * Check if is an image logo, or an svg
	 * if we do not have any logos return the
	 * title of the site.
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_social_media() {

		$site_name = get_bloginfo( 'name' );
		$new_tab   = get_field('new_tab', 'option');
		$target    = ($new_tab) ? 'target="_blank"' : '';

		$fb      = get_field('fb', 'option');
		$twitter = get_field('twitter', 'option');
		$insta   = get_field('instagram', 'option');
		$youtube = get_field('youtube', 'option');

		$fb_url = '<li><a class="icofont" href="'.$fb.'" title="Ακολουθήστε το '.$site_name.' στο Facebook" '.$target.'>&#xed37;</a></li>';
		$twitter_url = '<li><a class="icofont" href="'.$twitter.'" title="Ακολουθήστε το '.$site_name.' στο Twitter" '.$target.'>&#xed7a;</a></li>';
		$insta_url = '<li><a class="icofont" href="'.$insta.'" title="Ακολουθήστε το '.$site_name.' στο Instagram" '.$target.'>&#xed46;</a></li>';
		$youtube_url = '<li><a class="icofont" href="'.$youtube.'" title="Ακολουθήστε το '.$site_name.' στο YouTube" '.$target.'>&#xecbb;</a></li>';

		if ($fb || $twitter || $insta || $youtube){
			$social_media = '<ul class="social__media">';

				if ($fb){
					$social_media .= $fb_url;
				}

				if ($twitter){
					$social_media .= $twitter_url;
				}

				if ($insta){
					$social_media .= $insta_url;
				}

				if ($youtube){
					$social_media .= $youtube_url;
				}

			$social_media .= '</ul>';
		}

		return $social_media;
	}

	/**
	 * Returns the header image
	 *
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_header_image() {

		$header_img = get_field('header_image', 'option');

		if ($header_img){
			$header_img_url = $header_img['url'];
			$header_img_alt = $header_img['alt'];
			$header_img_link = '<img src="'.$header_img_url.'" alt="'.$header_img_alt.'" width="100" height="100"/>';
			return $header_img_link;
		}else{
			$header_img_link = '';
			return $header_img_link;
		}
	}

	/**
	 * Display the most recently published  post
	 * tagged under the alert tag. The post remains 
	 * visible only for the current day.
	 *
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_the_alert_post() {

		$alert_args = array(
			'posts_per_page'   => 1,
			'post_type'        => 'post',
			'no_found_rows'    => true,
			'tag'              => 'alert',
			'year'             => date('Y'),
			'monthnum'         => date('m'),
			'day'              => date('d'),
		  	'suppress_filters' => false,
		);

		$alert = new WP_Query( $alert_args );

		if (  $alert->have_posts() ) : 

			while ( $alert->have_posts() ) : $alert->the_post(); 
			?>
			<!-- ALERT POST -->
			<section class="alert bg__orange">
				<div class="container">
					<div class="row middle-sm">
						<div class="alert__container">
							<h6><?php _e('ALERT | ', 'ilnews'); ?></h6>
							<a class="color__black title" href="<?php echo get_the_permalink(); ?>" title="<?php _e('Διάβασε το άρθρο ', 'ilnews'); ?><?php echo get_the_title(); ?>"><?php echo wp_trim_words( get_the_title(), 20, '...'); ?></a>
							<a class="btn small white" href="<?php echo get_the_permalink(); ?>" title="<?php _e('Διάβασε το άρθρο ', 'ilnews'); ?><?php echo get_the_title(); ?>">ΔΙΑΒΑΣΕ ΤΟ</a>
						</div>
					</div>
				</div>
			</section>

			<?php 
			endwhile; wp_reset_postdata();

		endif;
	}

	/**
	 * Display the search box
	 *
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_search_box() {
		?>
		<!-- SEARCH BOX -->
		<div class="modal micromodal-slide" id="modal-search" aria-hidden="true">
		    <div class="modal__overlay" tabindex="-1" data-custom-close>
		        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
		            <header class="modal__header">
		                <h2 class="modal__title" id="modal-1-title">Αναζήτηση</h2>
		                <button class="modal__close" aria-label="Close modal" data-custom-close></button>
		            </header>
		            <main class="modal__content text" id="modal-1-content">
		                <p>Αναζητήστε για οποιονδήποτε όρο σας ενδιαφέρει να ενημερωθείτε.</p>
		                <div class="search__box">
		                    <?php echo get_search_form(); ?>
		                </div>
		            </main>
		        </div>
		    </div>
		</div>

		<?php
	}

	/**
	 * Return the first category of the post
	 *
	 *
	 * @since 2.0.0
	 *
	 * @return string
	 */
	function ilnews_get_post_category() {
		$categories = get_the_category();
	 
		if ( ! empty( $categories ) ) {
		    return esc_html( $categories[0]->name );   
		}else{
			return '';
		}
	}
